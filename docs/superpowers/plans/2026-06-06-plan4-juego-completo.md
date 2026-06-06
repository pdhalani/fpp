# FPP — Plan 4: Juego Completo

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar GameScene (partido completo) y PenaltyScene. Al terminar, el juego es completamente jugable: partido de 5v5, dos partes, HUD, pausa, IA zombie, y modo penalties con muerte súbita.

**Prerequisito:** Plan 3 completado. El flujo de menús funciona hasta PlaceholderGameScene.

**Architecture:** GameScene gestiona el estado del partido (parte, tiempo, marcador, turno de saque) y orquesta los equipos (arrays de Player + Goalkeeper). PenaltyScene es independiente y gestiona su propia secuencia de tandas. Ambas escenas leen de `GameState` y escriben el resultado antes de pasar a SummaryScene.

**Tech Stack:** Phaser 3, JavaScript, variables globales.

---

## Mapa de ficheros

| Fichero | Acción | Responsabilidad |
|---|---|---|
| `js/scenes/GameScene.js` | Crear | Partido completo: equipos, física, HUD, pausa, goles, IA |
| `js/scenes/PenaltyScene.js` | Crear | Modo penalties: tandas, mira libre, portero CPU, muerte súbita |
| `js/scenes/PlaceholderGameScene.js` | Eliminar | Reemplazado por GameScene y PenaltyScene |
| `index.html` | Modificar | Añadir GameScene y PenaltyScene, quitar Placeholder |

---

### Tarea 1: GameScene — campo y equipos

**Ficheros:**
- Crear: `js/scenes/GameScene.js`

- [ ] **Paso 1: Crear `js/scenes/GameScene.js` — estructura base y dibujo del campo**

```js
class GameScene extends Phaser.Scene {
  constructor() { super({ key: 'GameScene' }); }

  create() {
    const S  = FIELD_CONFIG.escala;
    this._S  = S;
    this._W  = FIELD_CONFIG.largo * S;
    this._H  = FIELD_CONFIG.ancho * S;

    // Estado del partido
    this._parte       = 1;
    this._tiempoMs    = GameState.duracionParte * 60 * 1000;
    this._marcador    = { local: 0, visitante: 0 };
    this._pausado     = false;
    this._contando    = false; // cuenta atrás 3-2-1
    this._goleadores  = { local: [], visitante: [] };

    this._dibujarCampo();
    this._crearEquipos();
    this._crearHUD();
    this._crearPausa();
    this._crearTeclado();
    this._iniciarParte(true);
  }

  _dibujarCampo() {
    const S = this._S, W = this._W, H = this._H;
    const g = this.add.graphics();
    g.fillStyle(0x2d7a2d); g.fillRect(0, 0, W, H);
    g.lineStyle(2, 0xffffff, 1);
    g.strokeRect(0, 0, W, H);
    g.beginPath(); g.moveTo(W/2, 0); g.lineTo(W/2, H); g.strokePath();
    g.strokeCircle(W/2, H/2, 3*S);
    g.fillStyle(0xffffff); g.fillCircle(W/2, H/2, 4);
    const py = (FIELD_CONFIG.ancho/2 - FIELD_CONFIG.porteria.ancho/2)*S;
    const ph = FIELD_CONFIG.porteria.ancho*S;
    const pw = FIELD_CONFIG.porteria.alto*S;
    g.lineStyle(3, 0xffffff, 1);
    g.strokeRect(-pw, py, pw, ph);
    g.strokeRect(W, py, pw, ph);
    const aL = FIELD_CONFIG.area.largo*S;
    const aW = FIELD_CONFIG.area.ancho*S;
    const aY = (FIELD_CONFIG.ancho/2 - FIELD_CONFIG.area.ancho/2)*S;
    g.lineStyle(2, 0xffffff, 1);
    g.strokeRect(0, aY, aL, aW);
    g.strokeRect(W-aL, aY, aL, aW);
    g.fillStyle(0xffffff);
    g.fillCircle(FIELD_CONFIG.penalty_dist*S, H/2, 4);
    g.fillCircle(W-FIELD_CONFIG.penalty_dist*S, H/2, 4);
  }

  // Posiciones iniciales formación 3-1-1 + portero. Espejo para visitante.
  _posicionesIniciales(equipo) {
    const S = this._S, W = this._W, H = this._H;
    const cx = W / 2, cy = H / 2;
    if (equipo === 'local') {
      return [
        { x: 1.5*S,    y: cy },          // portero (índice 0)
        { x: 8*S,      y: cy - 4.5*S },  // defensa
        { x: 8*S,      y: cy },           // defensa
        { x: 8*S,      y: cy + 4.5*S },  // defensa
        { x: 16*S,     y: cy },           // centrocampista
        { x: 22*S,     y: cy },           // delantero
      ];
    } else {
      return [
        { x: W - 1.5*S, y: cy },
        { x: W - 8*S,   y: cy - 4.5*S },
        { x: W - 8*S,   y: cy },
        { x: W - 8*S,   y: cy + 4.5*S },
        { x: W - 16*S,  y: cy },
        { x: W - 22*S,  y: cy },
      ];
    }
  }

  _crearEquipos() {
    const eqL = GameState.equipoLocal.equipacion;
    const eqV = GameState.equipoVisitante.equipacion;
    const posL = this._posicionesIniciales('local');
    const posV = this._posicionesIniciales('visitante');

    this._porteroLocal      = new Goalkeeper(this, posL[0].x, posL[0].y, eqL, 'local');
    this._porteroVisitante  = new Goalkeeper(this, posV[0].x, posV[0].y, eqV, 'visitante');

    this._jugadoresLocal      = [];
    this._jugadoresVisitante  = [];

    for (let i = 1; i <= 5; i++) {
      const p = GameState.equipoLocal.pokemons[i-1];
      const j = new Player(this, posL[i].x, posL[i].y, eqL, i, i > 1);
      j.equipo = 'local';
      j._pokemon = p;
      this._jugadoresLocal.push(j);
    }
    for (let i = 1; i <= 5; i++) {
      const p = GameState.equipoVisitante.pokemons[i-1];
      const esCPU = GameState.modo === '1p' || i > 1;
      const j = new Player(this, posV[i].x, posV[i].y, eqV, i, esCPU);
      j.equipo = 'visitante';
      j._pokemon = p;
      this._jugadoresVisitante.push(j);
    }

    // Jugador activo inicial: delantero del equipo que saca (se ajusta en _iniciarParte)
    this._activoLocal      = this._jugadoresLocal[4];
    this._activoVisitante  = this._jugadoresVisitante[4];
    this._activoLocal.esActivo     = true;
    this._activoVisitante.esActivo = true;

    this._ball = new Ball(this);
  }

  _crearHUD() {
    const W = this._W;
    this._hudMarcador = this.add.text(W/2, 8, '0 — 0', {
      fontSize: '18px', fill: '#ffffff', fontStyle: 'bold'
    }).setOrigin(0.5, 0);

    this._hudTiempo = this.add.text(W/2, 28, '', {
      fontSize: '13px', fill: '#cccccc'
    }).setOrigin(0.5, 0);

    this._hudParte = this.add.text(8, 8, '', {
      fontSize: '12px', fill: '#aaaaaa'
    });

    this._hudActivo = this.add.text(8, 22, '', {
      fontSize: '11px', fill: '#ffcc00'
    });

    this._txtCentro = this.add.text(W/2, this._H/2, '', {
      fontSize: '32px', fill: '#ffffff', fontStyle: 'bold'
    }).setOrigin(0.5).setAlpha(0);
  }

  _mostrarMensajeCentro(texto, duracion) {
    this._txtCentro.setText(texto).setAlpha(1);
    this.time.delayedCall(duracion, () => {
      this.tweens.add({ targets: this._txtCentro, alpha: 0, duration: 300 });
    });
  }

  _crearPausa() {
    const W = this._W, H = this._H;
    this._panelPausa = this.add.container(W/2, H/2).setVisible(false);
    const bg = this.add.rectangle(0, 0, 260, 120, 0x000000, 0.85);
    const txt = this.add.text(0, -35, 'PAUSA', { fontSize: '22px', fill: '#ffcc00' }).setOrigin(0.5);
    this._btnContinuar = this.add.text(0, 5, '[ Continuar ]', { fontSize: '16px', fill: '#00ff00' }).setOrigin(0.5);
    this._btnAbandonar = this.add.text(0, 35, '[ Abandonar ]', { fontSize: '16px', fill: '#ff4444' }).setOrigin(0.5);
    this._panelPausa.add([bg, txt, this._btnContinuar, this._btnAbandonar]);
    this._focoPausa = 0; // 0=continuar, 1=abandonar
  }

  _crearTeclado() {
    const C1 = CONFIG.controles.p1;
    const C2 = CONFIG.controles.p2;
    this._k1 = this.input.keyboard.addKeys({
      arriba: C1.arriba, abajo: C1.abajo, izq: C1.izq, der: C1.der,
      accion1: C1.accion1, accion2: C1.accion2
    });
    this._k2 = this.input.keyboard.addKeys({
      arriba: C2.arriba, abajo: C2.abajo, izq: C2.izq, der: C2.der,
      accion1: C2.accion1, accion2: C2.accion2
    });
    this._pausaKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    this._pausaKeyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    this._chute1Inicio = null;
    this._chute2Inicio = null;
  }

  _iniciarParte(primeraParte) {
    const S = this._S, W = this._W, H = this._H;
    const posL = this._posicionesIniciales('local');
    const posV = this._posicionesIniciales('visitante');

    // Recolocar jugadores
    this._porteroLocal.x = posL[0].x; this._porteroLocal.y = posL[0].y;
    this._porteroVisitante.x = posV[0].x; this._porteroVisitante.y = posV[0].y;
    for (let i = 0; i < 5; i++) {
      this._jugadoresLocal[i].x = posL[i+1].x;
      this._jugadoresLocal[i].y = posL[i+1].y;
      this._jugadoresVisitante[i].x = posV[i+1].x;
      this._jugadoresVisitante[i].y = posV[i+1].y;
    }

    this._ball.colocar(W/2, H/2);
    this._tiempoMs = GameState.duracionParte * 60 * 1000;

    // Moneda para quien saca
    this._equipoConBalon = Math.random() < 0.5 ? 'local' : 'visitante';
    this._mostrarMensajeCentro('Parte ' + this._parte, 1500);

    this._contando = true;
    this._pausado  = true;
    let cuenta = 3;
    const intervalo = this.time.addEvent({
      delay: 1000, repeat: 3,
      callback: () => {
        if (cuenta > 0) {
          this._mostrarMensajeCentro(String(cuenta), 900);
          cuenta--;
        } else {
          this._pausado  = false;
          this._contando = false;
          this._mostrarMensajeCentro('¡Ya!', 800);
        }
      }
    });
  }

  _cambiarJugadorMasCercano(equipo) {
    const jugadores = equipo === 'local' ? this._jugadoresLocal : this._jugadoresVisitante;
    let mejor = jugadores[0], minDist = Infinity;
    for (const j of jugadores) {
      const d = Phaser.Math.Distance.Between(j.x, j.y, this._ball.x, this._ball.y);
      if (d < minDist) { minDist = d; mejor = j; }
    }
    if (equipo === 'local') {
      this._activoLocal.esActivo = false;
      this._activoLocal = mejor;
      this._activoLocal.esActivo = true;
    } else {
      this._activoVisitante.esActivo = false;
      this._activoVisitante = mejor;
      this._activoVisitante.esActivo = true;
    }
  }

  _procesarInputEquipo(keys, equipo, chuteInicioProp) {
    const activo = equipo === 'local' ? this._activoLocal : this._activoVisitante;
    const companeros = equipo === 'local' ? this._jugadoresLocal : this._jugadoresVisitante;
    const rivales  = equipo === 'local' ? [...this._jugadoresVisitante, this._porteroVisitante]
                                        : [...this._jugadoresLocal,     this._porteroLocal];
    let dx = 0, dy = 0;
    if (keys.arriba.isDown) dy -= 1;
    if (keys.abajo.isDown)  dy += 1;
    if (keys.izq.isDown)    dx -= 1;
    if (keys.der.isDown)    dx += 1;
    if (dx !== 0 || dy !== 0) {
      activo._dx = dx; activo._dy = dy;
      activo.mover(dx, dy);
    }

    // Tomar balón si cerca
    if (activo.puedeControlarBalon(this._ball)) {
      activo.tomarBalon(this._ball);
    }

    // Accion1: chute/pase corto
    if (Phaser.Input.Keyboard.JustDown(keys.accion1)) {
      this[chuteInicioProp] = this.time.now;
    }
    if (Phaser.Input.Keyboard.JustUp(keys.accion1) && activo.tieneBalon) {
      const dur = Math.min(this.time.now - this[chuteInicioProp], 1000);
      activo.chutar(this._ball, dx || activo._dx || 1, dy || activo._dy || 0, dur / 1000);
    }

    // Accion2: pase (ataque) o cambio de jugador (defensa)
    if (Phaser.Input.Keyboard.JustDown(keys.accion2)) {
      if (activo.tieneBalon) {
        activo.pasar(this._ball, companeros, dx || activo._dx || 1, dy || activo._dy || 0);
      } else {
        // Tackle si no tiene balón
        for (const r of rivales) {
          if (activo.tackle(r, this._ball)) break;
        }
        this._cambiarJugadorMasCercano(equipo);
      }
    }
  }

  _actualizarIA() {
    const mitadX = this._W / 2;
    for (const j of this._jugadoresLocal) {
      if (j.esCPU) j.updateCPU(this._ball, mitadX);
    }
    for (const j of this._jugadoresVisitante) {
      if (j.esCPU) j.updateCPU(this._ball, mitadX);
    }
    this._porteroLocal.updateCPU(this._ball);
    this._porteroVisitante.updateCPU(this._ball);
  }

  _actualizarHUD(delta) {
    if (!this._pausado && !this._contando) {
      this._tiempoMs = Math.max(0, this._tiempoMs - delta);
    }
    const segs = Math.ceil(this._tiempoMs / 1000);
    const mm   = Math.floor(segs / 60);
    const ss   = segs % 60;
    const m    = GameState.marcador;
    const eqL  = GameState.equipoLocal.equipacion;
    const eqV  = GameState.equipoVisitante.equipacion;
    this._hudMarcador.setText((eqL ? eqL.nombre : 'L') + '  ' + m.local + ' — ' + m.visitante + '  ' + (eqV ? eqV.nombre : 'V'));
    this._hudTiempo.setText('Parte ' + this._parte + '  |  ' + mm + ':' + String(ss).padStart(2, '0'));
    this._hudActivo.setText('↑ ' + (this._activoLocal._pokemon ? this._activoLocal._pokemon.nombre : '?'));
  }

  _procesarGol(resultado) {
    if (!resultado || !resultado.gol) return;
    // TODO: play('gol')
    const equipo = resultado.equipo;
    GameState.marcador[equipo]++;
    const pokemon = this._ball.portador ? this._ball.portador._pokemon : null;
    if (pokemon) GameState[equipo === 'local' ? 'equipoLocal' : 'equipoVisitante'].goleadores.push(pokemon.nombre);

    this._mostrarMensajeCentro('¡GOL!', 2000);
    this._pausado = true;
    this.time.delayedCall(2000, () => {
      this._ball.colocar(this._W / 2, this._H / 2);
      this._pausado = false;
    });
  }

  _procesarPausa() {
    if (!this._pausado) {
      this._pausado = true;
      this._panelPausa.setVisible(true);
      this._focoPausa = 0;
      this._btnContinuar.setColor('#ffcc00');
      this._btnAbandonar.setColor('#ff4444');
      return;
    }
    if (this._panelPausa.visible) {
      if (this._focoPausa === 0) {
        this._pausado = false;
        this._panelPausa.setVisible(false);
      } else {
        this._terminarPartido();
      }
    }
  }

  _terminarPartido() {
    GameState.marcador = this._marcador;
    this.scene.start('SummaryScene');
  }

  update(time, delta) {
    // Pausa
    if (Phaser.Input.Keyboard.JustDown(this._pausaKey) || Phaser.Input.Keyboard.JustDown(this._pausaKeyP)) {
      if (!this._contando) this._procesarPausa();
    }

    // Navegación en menú de pausa
    if (this._panelPausa.visible) {
      const down  = this.input.keyboard.checkDown(this.input.keyboard.addKey('DOWN'), 200);
      const up    = this.input.keyboard.checkDown(this.input.keyboard.addKey('UP'),   200);
      const enter = this.input.keyboard.addKey('ENTER');
      if (down) { this._focoPausa = 1; this._btnContinuar.setColor('#ffffff'); this._btnAbandonar.setColor('#ffcc00'); }
      if (up)   { this._focoPausa = 0; this._btnContinuar.setColor('#ffcc00'); this._btnAbandonar.setColor('#ff4444'); }
      if (Phaser.Input.Keyboard.JustDown(enter)) this._procesarPausa();
      return;
    }

    if (this._pausado) return;

    // Input jugadores
    this._procesarInputEquipo(this._k1, 'local', '_chute1Inicio');
    if (GameState.modo === '2p') {
      this._procesarInputEquipo(this._k2, 'visitante', '_chute2Inicio');
    }

    // IA
    this._actualizarIA();

    // Física
    this._ball.update();

    // Colisiones jugador vs jugador (empuje suave)
    const todos = [...this._jugadoresLocal, ...this._jugadoresVisitante, this._porteroLocal, this._porteroVisitante];
    for (let i = 0; i < todos.length; i++) {
      for (let j = i + 1; j < todos.length; j++) {
        const a = todos[i], b = todos[j];
        const dist = Phaser.Math.Distance.Between(a.x, a.y, b.x, b.y);
        const minDist = a.radioPixels + b.radioPixels;
        if (dist < minDist && dist > 0) {
          const ang = Math.atan2(b.y - a.y, b.x - a.x);
          const solapamiento = (minDist - dist) / 2;
          a.x -= Math.cos(ang) * solapamiento * 0.5;
          a.y -= Math.sin(ang) * solapamiento * 0.5;
          b.x += Math.cos(ang) * solapamiento * 0.5;
          b.y += Math.sin(ang) * solapamiento * 0.5;
        }
      }
    }

    todos.forEach(j => j.update());
    this._porteroLocal.update();
    this._porteroVisitante.update();

    // Gol
    this._procesarGol(this._ball.comprobarGol());

    // Tiempo
    this._actualizarHUD(delta);
    if (this._tiempoMs <= 0) {
      if (this._parte === 1) {
        this._parte = 2;
        this._mostrarMensajeCentro('Descanso', 2000);
        this._pausado = true;
        this.time.delayedCall(2500, () => this._iniciarParte(false));
      } else {
        this._terminarPartido();
      }
    }
  }
}
```

- [ ] **Paso 2: Commit**

```bash
git add js/scenes/GameScene.js
git commit -m "feat: add GameScene with full match logic, HUD, AI and pause"
```

---

### Tarea 2: PenaltyScene

**Ficheros:**
- Crear: `js/scenes/PenaltyScene.js`

- [ ] **Paso 1: Crear `js/scenes/PenaltyScene.js`**

```js
class PenaltyScene extends Phaser.Scene {
  constructor() { super({ key: 'PenaltyScene' }); }

  create() {
    const S  = FIELD_CONFIG.escala;
    this._S  = S;
    this._W  = FIELD_CONFIG.largo * S;
    this._H  = FIELD_CONFIG.ancho * S;

    this._tandas    = CONFIG.penaltiesPorTanda; // 5
    this._golLocal  = 0;
    this._golVisita = 0;
    this._ronda     = 0; // 0-based, 0..4 normal, 5+ muerte súbita
    this._turno     = null; // 'local' | 'visitante'
    this._fase      = 'moneda'; // moneda | apuntando | esperandoPortero | resultado
    this._miraX     = 0;
    this._miraY     = 0;
    this._porteroLanzado = false;

    this._dibujarCampo();
    this._crearHUD();
    this._crearTeclado();
    this._lanzarMoneda();
  }

  _dibujarCampo() {
    const S = this._S, W = this._W, H = this._H;
    const g = this.add.graphics();
    g.fillStyle(0x2d7a2d); g.fillRect(0, 0, W, H);
    // Solo portería derecha visible (el lanzador apunta hacia la derecha)
    g.lineStyle(2, 0xffffff, 1); g.strokeRect(0, 0, W, H);
    const py = (FIELD_CONFIG.ancho/2 - FIELD_CONFIG.porteria.ancho/2)*S;
    const ph = FIELD_CONFIG.porteria.ancho*S;
    const pw = FIELD_CONFIG.porteria.alto*S;
    g.lineStyle(4, 0xffffff, 1);
    g.strokeRect(W, py, pw, ph);
    g.strokeRect(-pw, py, pw, ph);
    // Punto de penalty
    g.fillStyle(0xffffff);
    g.fillCircle(W - FIELD_CONFIG.penalty_dist*S, H/2, 6);
    g.fillCircle(FIELD_CONFIG.penalty_dist*S, H/2, 6);
  }

  _crearHUD() {
    const W = this._W;
    const eqL = GameState.equipoLocal.equipacion;
    const eqV = GameState.equipoVisitante.equipacion;

    this._hudMarcador = this.add.text(W/2, 8, '', { fontSize: '16px', fill: '#ffffff' }).setOrigin(0.5, 0);
    this._hudTurno    = this.add.text(W/2, 28, '', { fontSize: '13px', fill: '#ffcc00' }).setOrigin(0.5, 0);
    this._txtInfo     = this.add.text(W/2, this._H/2 - 20, '', { fontSize: '14px', fill: '#ffffff' }).setOrigin(0.5);
    this._txtCentro   = this.add.text(W/2, this._H/2 + 20, '', { fontSize: '28px', fill: '#ffffff', fontStyle: 'bold' }).setOrigin(0.5).setAlpha(0);

    // Mira (portería derecha: lanzador local apunta a la portería visitante = derecha)
    this._miraGraphics = this.add.graphics();
    this._miraX = this._W - FIELD_CONFIG.penalty_dist * this._S / 2;
    this._miraY = this._H / 2;

    // Portero (círculo)
    this._porteroGraphics = this.add.graphics();
    this._porteroY = this._H / 2;
  }

  _crearTeclado() {
    const C1 = CONFIG.controles.p1;
    this._k = this.input.keyboard.addKeys({
      arriba: C1.arriba, abajo: C1.abajo, izq: C1.izq, der: C1.der,
      accion1: C1.accion1
    });
  }

  _lanzarMoneda() {
    this._turno = Math.random() < 0.5 ? 'local' : 'visitante';
    this._fase  = 'moneda';
    this._mostrarCentro('Empieza: ' + this._turno.toUpperCase(), 2000, () => this._siguientePenalty());
  }

  _mostrarCentro(texto, dur, cb) {
    this._txtCentro.setText(texto).setAlpha(1);
    this.time.delayedCall(dur, () => {
      this.tweens.add({ targets: this._txtCentro, alpha: 0, duration: 300, onComplete: cb });
    });
  }

  _siguientePenalty() {
    // Comprobar terminación anticipada
    const tandas   = this._ronda < this._tandas ? this._tandas : Infinity;
    const restantesLocal   = this._turno === 'local'      ? this._tandas - this._ronda      : this._tandas - this._ronda - 1;
    const restantesVisita  = this._turno === 'visitante'  ? this._tandas - this._ronda      : this._tandas - this._ronda - 1;
    if (this._ronda >= this._tandas) {
      // Muerte súbita
    } else {
      const maxPosibleVisita = this._golVisita + restantesVisita;
      const maxPosibleLocal  = this._golLocal  + restantesLocal;
      if (this._golLocal > maxPosibleVisita || this._golVisita > maxPosibleLocal) {
        this._terminar();
        return;
      }
    }

    this._fase = 'apuntando';
    this._porteroLanzado = false;
    this._porteroY = this._H / 2;

    // La mira apunta hacia la portería del equipo contrario
    const apuntaIzq = this._turno === 'visitante';
    this._miraX = apuntaIzq
      ? FIELD_CONFIG.penalty_dist * this._S
      : this._W - FIELD_CONFIG.penalty_dist * this._S;
    this._miraY = this._H / 2;

    const nombreEquipo = this._turno === 'local'
      ? (GameState.equipoLocal.equipacion ? GameState.equipoLocal.equipacion.nombre : 'Local')
      : (GameState.equipoVisitante.equipacion ? GameState.equipoVisitante.equipacion.nombre : 'Visitante');

    const numTanda = this._ronda < this._tandas ? 'Tanda ' + (this._ronda + 1) : 'Muerte súbita';
    this._txtInfo.setText(numTanda + '  —  Lanza: ' + nombreEquipo);
    this._actualizarHUD();

    // Portero CPU lanza en dirección aleatoria tras retraso
    const retraso = Phaser.Math.Between(CONFIG.porteroRetrasoMin, CONFIG.porteroRetrasoMax);
    this.time.delayedCall(retraso, () => {
      this._porteroLanzado = true;
      this._porteroDir = Math.random() < 0.5 ? -1 : 1;
    });
  }

  _actualizarHUD() {
    const eqL = GameState.equipoLocal.equipacion;
    const eqV = GameState.equipoVisitante.equipacion;
    this._hudMarcador.setText(
      (eqL ? eqL.nombre : 'L') + '  ' + this._golLocal + ' — ' + this._golVisita + '  ' + (eqV ? eqV.nombre : 'V')
    );
    const esMS = this._ronda >= this._tandas;
    this._hudTurno.setText(esMS ? 'Muerte súbita' : 'Tanda ' + (this._ronda + 1) + ' / ' + this._tandas);
  }

  _dibujarMira(apuntaIzq) {
    const g = this._miraGraphics;
    g.clear();
    const S  = this._S;
    const ph = FIELD_CONFIG.porteria.ancho * S;
    const pw = FIELD_CONFIG.porteria.alto  * S;
    const porteriaX = apuntaIzq ? -pw : this._W;
    const porteriaY = (this._H - ph) / 2;

    // Zona de la portería en pantalla
    const zW = pw * 3;
    const zX = apuntaIzq ? 0 : this._W - zW;

    // Mira
    g.lineStyle(2, 0xff0000, 0.8);
    g.strokeCircle(this._miraX, this._miraY, 10);
    g.beginPath(); g.moveTo(this._miraX - 14, this._miraY); g.lineTo(this._miraX + 14, this._miraY); g.strokePath();
    g.beginPath(); g.moveTo(this._miraX, this._miraY - 14); g.lineTo(this._miraX, this._miraY + 14); g.strokePath();
  }

  _dibujarPortero(apuntaIzq) {
    const g = this._porteroGraphics;
    g.clear();
    const S   = this._S;
    const eqV = apuntaIzq ? GameState.equipoLocal.equipacion : GameState.equipoVisitante.equipacion;
    const col = eqV ? Phaser.Display.Color.HexStringToColor(eqV.color_portero).color : 0x888888;
    const px  = apuntaIzq ? FIELD_CONFIG.porteria.alto * S / 2 : this._W - FIELD_CONFIG.porteria.alto * S / 2;
    g.fillStyle(col);
    g.fillCircle(px, this._porteroY, CONFIG.jugadorRadio * S);
    g.lineStyle(1, 0x000000, 0.5);
    g.strokeCircle(px, this._porteroY, CONFIG.jugadorRadio * S);
  }

  _disparar(apuntaIzq) {
    this._fase = 'esperandoPortero';
    const S   = this._S;
    const ph  = FIELD_CONFIG.porteria.ancho * S;
    const pyT = (this._H - ph) / 2;
    const pyB = (this._H + ph) / 2;

    // ¿Está el portero en el rango de la mira?
    const porteroR = CONFIG.jugadorRadio * S;
    const enPorteria = this._miraY >= pyT && this._miraY <= pyB;
    const porteroEnPosicion = Math.abs(this._porteroY - this._miraY) < porteroR + 10;

    const esGol = enPorteria && !porteroEnPosicion;
    // TODO: play(esGol ? 'gol' : 'chute')

    this.time.delayedCall(600, () => {
      if (esGol) {
        this._mostrarCentro('¡GOL!', 1500, () => this._procesarResultado(true));
      } else {
        this._mostrarCentro('Parado', 1500, () => this._procesarResultado(false));
      }
    });
  }

  _procesarResultado(esGol) {
    if (esGol) {
      if (this._turno === 'local') this._golLocal++;
      else this._golVisita++;
    }
    this._actualizarHUD();

    // Alternar turno
    if (this._turno === 'local') {
      this._turno = 'visitante';
    } else {
      this._turno = 'local';
      this._ronda++;
    }

    // Comprobar fin
    if (this._ronda >= this._tandas) {
      if (this._golLocal !== this._golVisita) {
        this._terminar(); return;
      }
      // Muerte súbita: continuar
    }

    this.time.delayedCall(500, () => this._siguientePenalty());
  }

  _terminar() {
    GameState.marcador = { local: this._golLocal, visitante: this._golVisita };
    this.scene.start('SummaryScene');
  }

  update() {
    if (this._fase !== 'apuntando') return;

    const apuntaIzq = this._turno === 'visitante';
    const S  = this._S;
    const ph = FIELD_CONFIG.porteria.ancho * S;
    const pyT = (this._H - ph) / 2;
    const pyB = (this._H + ph) / 2;
    const velMira = 2;

    // Mover mira (solo vertical)
    if (this._k.arriba.isDown) this._miraY = Math.max(pyT - 10, this._miraY - velMira);
    if (this._k.abajo.isDown)  this._miraY = Math.min(pyB + 10, this._miraY + velMira);

    // Portero CPU se mueve tras el retraso
    if (this._porteroLanzado) {
      const velPortero = CONFIG.porteroVelocidad * S / 60 * 1.5;
      this._porteroY = Phaser.Math.Clamp(
        this._porteroY + this._porteroDir * velPortero,
        pyT + CONFIG.jugadorRadio * S,
        pyB - CONFIG.jugadorRadio * S
      );
    }

    // Disparar
    if (Phaser.Input.Keyboard.JustDown(this._k.accion1)) {
      this._disparar(apuntaIzq);
    }

    this._dibujarMira(apuntaIzq);
    this._dibujarPortero(apuntaIzq);
  }
}
```

- [ ] **Paso 2: Commit**

```bash
git add js/scenes/PenaltyScene.js
git commit -m "feat: add PenaltyScene with aim, CPU goalkeeper and sudden death"
```

---

### Tarea 3: Conectar todo en index.html

**Ficheros:**
- Modificar: `index.html`
- Eliminar: `js/scenes/PlaceholderGameScene.js`

- [ ] **Paso 1: Eliminar PlaceholderGameScene**

```bash
rm js/scenes/PlaceholderGameScene.js
```

- [ ] **Paso 2: Actualizar `index.html` con el orden final**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>FPP — Fútbol para Pokémons</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #111; display: flex; justify-content: center; align-items: center; height: 100vh; }
    canvas { display: block; }
  </style>
</head>
<body>

  <!-- Datos editables -->
  <script src="data/field.js"></script>
  <script src="data/pokemons.js"></script>
  <script src="data/equipaciones.js"></script>

  <!-- Configuración global -->
  <script src="js/config.js"></script>

  <!-- Entidades -->
  <script src="js/entities/Ball.js"></script>
  <script src="js/entities/Player.js"></script>
  <script src="js/entities/Goalkeeper.js"></script>

  <!-- Escenas -->
  <script src="js/scenes/BootScene.js"></script>
  <script src="js/scenes/MenuScene.js"></script>
  <script src="js/scenes/SelectScene.js"></script>
  <script src="js/scenes/GameScene.js"></script>
  <script src="js/scenes/PenaltyScene.js"></script>
  <script src="js/scenes/SummaryScene.js"></script>

  <!-- Phaser -->
  <script src="lib/phaser.min.js"></script>

  <!-- Arranque -->
  <script>
    const game = new Phaser.Game({
      type: Phaser.AUTO,
      width:  FIELD_CONFIG.largo * FIELD_CONFIG.escala,
      height: FIELD_CONFIG.ancho * FIELD_CONFIG.escala,
      backgroundColor: '#111111',
      scene: [BootScene, MenuScene, SelectScene, GameScene, PenaltyScene, SummaryScene]
    });
  </script>

</body>
</html>
```

- [ ] **Paso 3: Actualizar SelectScene para ir a la escena correcta**

En `js/scenes/SelectScene.js`, reemplaza el método `_confirmar` para que apunte a la escena real:

```js
  _confirmar() {
    const datos = { pokemons: this._seleccion, equipacion: this._equipacion, goleadores: [] };
    if (this._equipoActual === 'local') {
      GameState.equipoLocal = datos;
      this.scene.start('SelectScene', { equipo: 'visitante' });
    } else {
      GameState.equipoVisitante = datos;
      const siguiente = GameState.tipo === 'penalties' ? 'PenaltyScene' : 'GameScene';
      this.scene.start(siguiente);
    }
  }
```

- [ ] **Paso 4: Verificar el juego completo**

Abre `index.html` y verifica el flujo completo:

**Modo partido:**
1. BootScene → MenuScene → selecciona 1P / Partido / 1 min → SelectScene (random ambos equipos) → GameScene
2. En GameScene: los jugadores están en campo, el balón en el centro
3. WASD mueve el jugador activo (borde blanco grueso), F chuta, G pasa/cambia
4. El balón rebota en bandas y fondos
5. Los jugadores CPU se mueven hacia el balón
6. Marcar un gol muestra "¡GOL!" y reinicia desde el centro
7. ESC/P abre el menú de pausa: Continuar / Abandonar
8. Al acabar el tiempo → SummaryScene con marcador final

**Modo penalties:**
1. MenuScene → selecciona 1P / Penalties → SelectScene (random) → PenaltyScene
2. La mira roja aparece en la portería
3. Arriba/Abajo mueve la mira verticalmente
4. F dispara: si el portero no está en la mira, es GOL
5. Después de 5 tandas → SummaryScene

- [ ] **Paso 5: Commit final**

```bash
git add index.html js/scenes/SelectScene.js
git rm js/scenes/PlaceholderGameScene.js
git commit -m "feat: wire GameScene and PenaltyScene, Plan 4 complete — game is playable"
```
