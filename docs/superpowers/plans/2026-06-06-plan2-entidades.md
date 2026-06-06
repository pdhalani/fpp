# FPP — Plan 2: Entidades y Física

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar Ball, Player y Goalkeeper con física, movimiento, colisiones y controles de teclado. Al terminar, dos círculos controlables por teclado se mueven en el campo con un balón con física.

**Prerequisito:** Plan 1 completado. `index.html` abre y muestra el campo correctamente.

**Architecture:** Cada entidad es una clase JS global. Ball gestiona su propia física por frame. Player expone métodos `mover(dx, dy)`, `controlarBalon(ball)`, `chutarBalon(ball, potencia)`, `pasarBalon(ball, compañeros)`, `tackle(rival, ball)`. Goalkeeper extiende Player con lógica de movimiento restringido. Una `TestScene` provisional reemplaza `FieldTestScene` y pone dos jugadores + balón en el campo.

**Tech Stack:** Phaser 3, JavaScript, variables globales.

---

## Mapa de ficheros

| Fichero | Acción | Responsabilidad |
|---|---|---|
| `js/entities/Ball.js` | Crear | Física del balón, rebotes, detección de gol |
| `js/entities/Player.js` | Crear | Jugador de campo: movimiento, control balón, chute, pase, tackle |
| `js/entities/Goalkeeper.js` | Crear | Portero: hereda Player, movimiento restringido al área |
| `js/scenes/FieldTestScene.js` | Modificar | Reemplazar por TestScene con entidades |
| `index.html` | Modificar | Añadir nuevos scripts en orden correcto |

---

### Tarea 1: Ball — física y rebotes

**Ficheros:**
- Crear: `js/entities/Ball.js`

- [ ] **Paso 1: Crear `js/entities/Ball.js`**

```js
class Ball {
  constructor(scene) {
    const S = FIELD_CONFIG.escala;
    const cx = (FIELD_CONFIG.largo / 2) * S;
    const cy = (FIELD_CONFIG.ancho / 2) * S;

    this.scene = scene;
    this.vx = 0;
    this.vy = 0;
    this.radio = CONFIG.balonRadioContacto * S;
    this.portador = null; // jugador que lleva el balón

    this.graphics = scene.add.graphics();
    this.x = cx;
    this.y = cy;
    this._dibujar();
  }

  _dibujar() {
    this.graphics.clear();
    this.graphics.fillStyle(0xffffff);
    this.graphics.fillCircle(this.x, this.y, 6);
    this.graphics.lineStyle(1, 0x888888);
    this.graphics.strokeCircle(this.x, this.y, 6);
  }

  colocar(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.portador = null;
  }

  impulsar(dx, dy, potencia) {
    this.portador = null;
    const mag = Math.sqrt(dx * dx + dy * dy) || 1;
    this.vx = (dx / mag) * potencia;
    this.vy = (dy / mag) * potencia;
  }

  update() {
    if (this.portador) {
      this.x = this.portador.x;
      this.y = this.portador.y;
      this._dibujar();
      return;
    }

    const S = FIELD_CONFIG.escala;
    const W = FIELD_CONFIG.largo * S;
    const H = FIELD_CONFIG.ancho * S;

    this.x += this.vx;
    this.y += this.vy;

    // Rebote en bandas (arriba/abajo)
    if (this.y < 0) { this.y = 0; this.vy = Math.abs(this.vy); }
    if (this.y > H) { this.y = H; this.vy = -Math.abs(this.vy); }

    // Rebote en fondos (izquierda/derecha) — sin fuera de fondo en v1
    if (this.x < 0) { this.x = 0; this.vx = Math.abs(this.vx); }
    if (this.x > W) { this.x = W; this.vx = -Math.abs(this.vx); }

    // Fricción
    this.vx *= CONFIG.balonFriccion;
    this.vy *= CONFIG.balonFriccion;

    // Parar si velocidad muy baja
    if (Math.abs(this.vx) < 0.05) this.vx = 0;
    if (Math.abs(this.vy) < 0.05) this.vy = 0;

    this._dibujar();
  }

  // Devuelve { equipo: 'local'|'visitante', gol: true } o null
  comprobarGol() {
    const S = FIELD_CONFIG.escala;
    const H = FIELD_CONFIG.ancho * S;
    const W = FIELD_CONFIG.largo * S;
    const phAncho = FIELD_CONFIG.porteria.ancho * S;
    const phAlto  = FIELD_CONFIG.porteria.alto * S;
    const pyTop    = (H - phAncho) / 2;
    const pyBottom = (H + phAncho) / 2;

    // Portería izquierda (equipo visitante marca)
    if (this.x <= 0 && this.y >= pyTop && this.y <= pyBottom) {
      return { gol: true, equipo: 'visitante' };
    }
    // Portería derecha (equipo local marca)
    if (this.x >= W && this.y >= pyTop && this.y <= pyBottom) {
      return { gol: true, equipo: 'local' };
    }
    return null;
  }
}
```

- [ ] **Paso 2: Commit**

```bash
git add js/entities/Ball.js
git commit -m "feat: add Ball entity with physics, bounce and goal detection"
```

---

### Tarea 2: Player — movimiento y control del balón

**Ficheros:**
- Crear: `js/entities/Player.js`

- [ ] **Paso 1: Crear `js/entities/Player.js`**

```js
class Player {
  constructor(scene, x, y, equipacion, numero, esCPU) {
    this.scene    = scene;
    this.x        = x;
    this.y        = y;
    this.equipacion = equipacion; // objeto { color_jugadores, color_portero, ... }
    this.numero   = numero;
    this.esCPU    = esCPU;
    this.estado   = 'idle'; // idle | moving | tackling
    this.tieneBalon = false;
    this.esActivo  = false; // jugador controlado actualmente por el humano
    this.equipo    = null;  // 'local' | 'visitante', se asigna al crear el equipo

    const S = FIELD_CONFIG.escala;
    this.radioPixels = CONFIG.jugadorRadio * S;
    this.velocidad   = CONFIG.jugadorVelocidad * S / 60; // px por frame a 60fps

    this.graphics = scene.add.graphics();
    this.label    = scene.add.text(x, y, String(numero), {
      fontSize: '10px', fill: '#ffffff', align: 'center'
    }).setOrigin(0.5, 0.5);

    this._dibujar();
  }

  _dibujar() {
    const g = this.graphics;
    g.clear();

    // Relleno
    g.fillStyle(Phaser.Display.Color.HexStringToColor(this.equipacion.color_jugadores).color);
    g.fillCircle(this.x, this.y, this.radioPixels);

    // Borde: blanco grueso si es el jugador activo
    if (this.esActivo) {
      g.lineStyle(3, 0xffffff, 1);
    } else {
      g.lineStyle(1, 0x000000, 0.5);
    }
    g.strokeCircle(this.x, this.y, this.radioPixels);

    this.label.setPosition(this.x, this.y);
  }

  mover(dx, dy) {
    const S   = FIELD_CONFIG.escala;
    const W   = FIELD_CONFIG.largo * S;
    const H   = FIELD_CONFIG.ancho * S;
    const mag = Math.sqrt(dx * dx + dy * dy) || 1;

    this.x = Phaser.Math.Clamp(this.x + (dx / mag) * this.velocidad, this.radioPixels, W - this.radioPixels);
    this.y = Phaser.Math.Clamp(this.y + (dy / mag) * this.velocidad, this.radioPixels, H - this.radioPixels);
    this.estado = 'moving';
    this._dibujar();
  }

  // Comprueba si el balón está dentro del radio de control
  puedeControlarBalon(ball) {
    if (ball.portador && ball.portador !== this) return false;
    const dist = Phaser.Math.Distance.Between(this.x, this.y, ball.x, ball.y);
    return dist <= this.radioPixels + ball.radio;
  }

  tomarBalon(ball) {
    this.tieneBalon = true;
    ball.portador   = this;
  }

  // dx, dy: dirección normalizada de carrera. potencia: 0-1 (tap=0, hold máximo=1)
  chutar(ball, dx, dy, potencia) {
    if (!this.tieneBalon) return;
    this.tieneBalon = false;
    const impulso = CONFIG.balonImpulsoBase + potencia * (CONFIG.balonImpulsoMax - CONFIG.balonImpulsoBase);
    ball.impulsar(dx, dy, impulso);
    // TODO: play('chute')
  }

  // Pasa al compañero más cercano dentro del cono ±30°, o al más cercano en general
  pasar(ball, companeros, dx, dy) {
    if (!this.tieneBalon) return;
    const angDir  = Math.atan2(dy, dx);
    const cono    = Phaser.Math.DegToRad(CONFIG.paseAnguloCono);
    let objetivo  = null;
    let minDist   = Infinity;

    for (const c of companeros) {
      if (c === this) continue;
      const ang  = Math.atan2(c.y - this.y, c.x - this.x);
      const diff = Math.abs(Phaser.Math.Angle.Wrap(ang - angDir));
      const dist = Phaser.Math.Distance.Between(this.x, this.y, c.x, c.y);
      if (diff <= cono && dist < minDist) { minDist = dist; objetivo = c; }
    }

    // Si no hay nadie en el cono, al más cercano
    if (!objetivo) {
      for (const c of companeros) {
        if (c === this) continue;
        const dist = Phaser.Math.Distance.Between(this.x, this.y, c.x, c.y);
        if (dist < minDist) { minDist = dist; objetivo = c; }
      }
    }

    if (objetivo) {
      const tdx = objetivo.x - this.x;
      const tdy = objetivo.y - this.y;
      this.tieneBalon = false;
      ball.impulsar(tdx, tdy, CONFIG.balonImpulsoBase);
      // TODO: play('pase')
    }
  }

  // Intenta robar el balón al rival
  tackle(rival, ball) {
    if (!rival.tieneBalon) return false;
    const dist = Phaser.Math.Distance.Between(this.x, this.y, rival.x, rival.y);
    if (dist > CONFIG.tackleDistancia * FIELD_CONFIG.escala) return false;

    const angARival = Math.atan2(rival.y - this.y, rival.x - this.x);
    const angCarrera = Math.atan2(this._dy || 0, this._dx || 1);
    const diff = Math.abs(Phaser.Math.Angle.Wrap(angARival - angCarrera));
    if (diff > Phaser.Math.DegToRad(CONFIG.tackleAngulo)) return false;

    rival.tieneBalon = false;
    ball.portador    = null;
    ball.vx = 0; ball.vy = 0;
    this.estado = 'tackling';
    return true;
  }

  // IA zombie: se mueve hacia el balón si está en su mitad del campo
  updateCPU(ball, mitadX) {
    if (!this.esCPU) return;
    const enMiMitad = this.equipo === 'local'
      ? ball.x <= mitadX
      : ball.x >= mitadX;

    if (enMiMitad) {
      const dx = ball.x - this.x;
      const dy = ball.y - this.y;
      this._dx = dx; this._dy = dy;
      this.mover(dx, dy);
    } else {
      this.estado = 'idle';
    }
  }

  update() {
    this._dibujar();
  }

  destroy() {
    this.graphics.destroy();
    this.label.destroy();
  }
}
```

- [ ] **Paso 2: Commit**

```bash
git add js/entities/Player.js
git commit -m "feat: add Player entity with movement, ball control, shoot, pass and tackle"
```

---

### Tarea 3: Goalkeeper — portero

**Ficheros:**
- Crear: `js/entities/Goalkeeper.js`

- [ ] **Paso 1: Crear `js/entities/Goalkeeper.js`**

```js
class Goalkeeper extends Player {
  constructor(scene, x, y, equipacion, equipo) {
    super(scene, x, y, equipacion, 'P', false);
    this.equipo = equipo;
    this.velocidad = CONFIG.porteroVelocidad * FIELD_CONFIG.escala / 60;
    this._overrideColor();
  }

  _overrideColor() {
    // El portero usa color_portero del pack, no color_jugadores
    this._colorPortero = Phaser.Display.Color.HexStringToColor(this.equipacion.color_portero).color;
  }

  _dibujar() {
    const g = this.graphics;
    g.clear();
    g.fillStyle(this._colorPortero || 0x888888);
    g.fillCircle(this.x, this.y, this.radioPixels);
    if (this.esActivo) {
      g.lineStyle(3, 0xffffff, 1);
    } else {
      g.lineStyle(1, 0x000000, 0.5);
    }
    g.strokeCircle(this.x, this.y, this.radioPixels);
    this.label.setPosition(this.x, this.y);
  }

  // El portero se mueve solo lateralmente siguiendo la X del balón
  // Restringido dentro del área propia
  updateCPU(ball) {
    const S = FIELD_CONFIG.escala;
    const H = FIELD_CONFIG.ancho * S;
    const areaL = FIELD_CONFIG.area.largo * S;

    // Límites laterales del portero dentro del área
    const yMin = this.radioPixels;
    const yMax = H - this.radioPixels;

    // Seguir la Y del balón (movimiento lateral en vista cenital)
    const dy = ball.y - this.y;
    if (Math.abs(dy) > 2) {
      this.y = Phaser.Math.Clamp(this.y + Math.sign(dy) * this.velocidad, yMin, yMax);
    }

    // Mantener X dentro del área según equipo
    if (this.equipo === 'local') {
      this.x = Phaser.Math.Clamp(this.x, this.radioPixels, areaL);
    } else {
      const W = FIELD_CONFIG.largo * S;
      this.x = Phaser.Math.Clamp(this.x, W - areaL, W - this.radioPixels);
    }

    this._dibujar();
  }
}
```

- [ ] **Paso 2: Commit**

```bash
git add js/entities/Goalkeeper.js
git commit -m "feat: add Goalkeeper entity extending Player with restricted movement"
```

---

### Tarea 4: TestScene con entidades

**Ficheros:**
- Modificar: `js/scenes/FieldTestScene.js` (reemplazar contenido completo)
- Modificar: `index.html` (añadir scripts de entidades)

Esta escena pone un jugador humano (P1, WASD+F+G) y un portero CPU en el campo con un balón. Sirve para verificar que las entidades funcionan antes de construir las escenas de juego reales.

- [ ] **Paso 1: Reemplazar `js/scenes/FieldTestScene.js`**

```js
class FieldTestScene extends Phaser.Scene {
  constructor() { super({ key: 'FieldTestScene' }); }

  create() {
    const S = FIELD_CONFIG.escala;
    const W = FIELD_CONFIG.largo * S;
    const H = FIELD_CONFIG.ancho * S;

    this._dibujarCampo(W, H, S);

    const eq1 = EQUIPACIONES[0]; // Furia
    const eq2 = EQUIPACIONES[2]; // Lluvia

    this.ball = new Ball(this);
    this.jugador = new Player(this, W / 2, H / 2 + 40, eq1, 9, false);
    this.jugador.equipo = 'local';
    this.jugador.esActivo = true;

    this.portero = new Goalkeeper(this, 1.5 * S, H / 2, eq2, 'visitante');

    // Teclas P1
    const C = CONFIG.controles.p1;
    this.keys = this.input.keyboard.addKeys({
      arriba:  C.arriba,
      abajo:   C.abajo,
      izq:     C.izq,
      der:     C.der,
      accion1: C.accion1,
      accion2: C.accion2
    });

    this.chuteInicio = null; // timestamp de cuando se pulsó accion1

    this.add.text(10, 10, 'Test entidades: WASD=mover F=chute/hold G=pase', {
      fontSize: '11px', fill: '#ffffff'
    });
  }

  _dibujarCampo(W, H, S) {
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

  update() {
    const k = this.keys;
    let dx = 0, dy = 0;
    if (k.arriba.isDown)  dy -= 1;
    if (k.abajo.isDown)   dy += 1;
    if (k.izq.isDown)     dx -= 1;
    if (k.der.isDown)     dx += 1;
    if (dx !== 0 || dy !== 0) {
      this.jugador._dx = dx; this.jugador._dy = dy;
      this.jugador.mover(dx, dy);
    }

    // Tomar balón si está cerca
    if (this.jugador.puedeControlarBalon(this.ball)) {
      this.jugador.tomarBalon(this.ball);
    }

    // Chute: medir tiempo pulsado
    if (Phaser.Input.Keyboard.JustDown(k.accion1)) {
      this.chuteInicio = this.time.now;
    }
    if (Phaser.Input.Keyboard.JustUp(k.accion1) && this.jugador.tieneBalon) {
      const dur = Math.min(this.time.now - this.chuteInicio, 1000);
      const pot = dur / 1000;
      const ddx = dx || 1; const ddy = dy || 0;
      this.jugador.chutar(this.ball, ddx, ddy, pot);
    }

    // Pase
    if (Phaser.Input.Keyboard.JustDown(k.accion2) && this.jugador.tieneBalon) {
      this.jugador.pasar(this.ball, [], dx || 1, dy || 0);
    }

    this.ball.update();
    this.jugador.update();
    this.portero.updateCPU(this.ball);
  }
}
```

- [ ] **Paso 2: Actualizar `index.html` añadiendo scripts de entidades**

Reemplaza el bloque de escenas en `index.html`:

```html
  <!-- Entidades -->
  <script src="js/entities/Ball.js"></script>
  <script src="js/entities/Player.js"></script>
  <script src="js/entities/Goalkeeper.js"></script>

  <!-- Escenas -->
  <script src="js/scenes/FieldTestScene.js"></script>
```

El orden completo de scripts en `index.html` debe ser:
1. `data/field.js`
2. `data/pokemons.js`
3. `data/equipaciones.js`
4. `js/config.js`
5. `js/entities/Ball.js`
6. `js/entities/Player.js`
7. `js/entities/Goalkeeper.js`
8. `js/scenes/FieldTestScene.js`
9. `lib/phaser.min.js`
10. Script de arranque inline

- [ ] **Paso 3: Abrir en el navegador y verificar**

Abre `index.html`. Debes ver:
- Campo verde con líneas blancas
- Círculo rojo (jugador 9) en el centro-derecha
- Círculo azul oscuro (portero P) en el lado izquierdo
- Balón blanco en el centro

Verificar comportamiento:
- WASD mueve el círculo rojo
- Al acercarse al balón, lo arrastra consigo
- Pulsar F brevemente: chute suave
- Mantener F y soltar: chute potente (el balón sale más rápido)
- El balón rebota en las bandas y fondos
- El portero se mueve siguiendo la Y del balón

- [ ] **Paso 4: Commit final**

```bash
git add js/scenes/FieldTestScene.js index.html
git commit -m "feat: integrate entities into TestScene, Plan 2 complete"
```
