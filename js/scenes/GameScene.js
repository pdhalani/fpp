class GameScene extends Phaser.Scene {
  constructor() { super({ key: 'GameScene' }); }

  create() {
    const S  = FIELD_CONFIG.escala;
    this._S  = S;
    this._W  = FIELD_CONFIG.largo * S;
    this._H  = FIELD_CONFIG.ancho * S;
    this._campoY = UI.altoHudPartido;

    this._parte       = 1;
    this._tiempoMs    = GameState.duracionParte * 60 * 1000;
    this._pausado     = false;
    this._contando    = false;
    this._finDeParteEjecutado = false;

    GameState.marcador = { local: 0, visitante: 0 };
    GameState.equipoLocal.goleadores     = [];
    GameState.equipoVisitante.goleadores = [];

    this._dibujarCampo();
    this._crearEquipos();
    this._hud = new MatchHud(this, this._W, UI.altoHudPartido);
    this._menuPausa = new MatchPauseMenu(this, this._W, this._H + UI.altoHudPartido);
    this._crearTeclado();
    this._iniciarParte(true);
  }

  _dibujarCampo() {
    const S = this._S, W = this._W, H = this._H;
    const g = this.add.graphics().setPosition(0, this._campoY);

    g.fillStyle(0x2d7a2d); g.fillRect(0, 0, W, H);
    g.lineStyle(2, 0xffffff, 1);
    g.strokeRect(0, 0, W, H);

    g.beginPath(); g.moveTo(W/2, 0); g.lineTo(W/2, H); g.strokePath();
    g.strokeCircle(W/2, H/2, 3*S);
    g.fillStyle(0xffffff); g.fillCircle(W/2, H/2, 4);

    const pGateH = FIELD_CONFIG.porteria.ancho * S;
    const pGateD = FIELD_CONFIG.porteria.alto  * S * 2;
    const pGateY = (H - pGateH) / 2;
    // Porterías visibles dentro del campo: red sombreada y postes blancos.
    const redIzquierdaX = 2;
    const redDerechaX = W - pGateD - 2;
    g.fillStyle(0x173d51, 0.7);
    g.fillRect(redIzquierdaX, pGateY, pGateD, pGateH);
    g.fillRect(redDerechaX, pGateY, pGateD, pGateH);
    g.lineStyle(1, 0x8bc7e8, 0.5);
    for (let y = pGateY + 4; y < pGateY + pGateH; y += 5) {
      g.lineBetween(redIzquierdaX, y, redIzquierdaX + pGateD, y);
      g.lineBetween(redDerechaX, y, redDerechaX + pGateD, y);
    }
    g.lineStyle(3, 0xffffff, 1);
    g.lineBetween(2, pGateY, 2, pGateY + pGateH);
    g.lineBetween(W - 2, pGateY, W - 2, pGateY + pGateH);
    g.lineBetween(2, pGateY, redIzquierdaX + pGateD, pGateY);
    g.lineBetween(2, pGateY + pGateH, redIzquierdaX + pGateD, pGateY + pGateH);
    g.lineBetween(W - 2, pGateY, redDerechaX, pGateY);
    g.lineBetween(W - 2, pGateY + pGateH, redDerechaX, pGateY + pGateH);

    const aL = FIELD_CONFIG.area.largo * S;
    const aW = FIELD_CONFIG.area.ancho * S;
    const aY = (H - aW) / 2;
    g.lineStyle(2, 0xffffff, 1);
    g.strokeRect(0, aY, aL, aW);
    g.strokeRect(W-aL, aY, aL, aW);

    const apL = FIELD_CONFIG.area_pequena.largo * S;
    const apW = FIELD_CONFIG.area_pequena.ancho * S;
    const apY = (H - apW) / 2;
    g.strokeRect(0, apY, apL, apW);
    g.strokeRect(W-apL, apY, apL, apW);

    g.fillStyle(0xffffff);
    g.fillCircle(FIELD_CONFIG.penalty_dist * S, H/2, 4);
    g.fillCircle(W - FIELD_CONFIG.penalty_dist * S, H/2, 4);

    const penX = FIELD_CONFIG.penalty_dist * S;
    const lunaR = FIELD_CONFIG.luna_radio * S;
    const angLoc = Math.acos((aL - penX) / lunaR);
    g.lineStyle(2, 0xffffff, 1);
    g.beginPath();
    g.arc(penX, H/2, lunaR, -angLoc, angLoc, false);
    g.strokePath();
    g.beginPath();
    g.arc(W-penX, H/2, lunaR, Math.PI-angLoc, Math.PI+angLoc, false);
    g.strokePath();
  }

  _posicionesIniciales(equipo) {
    const S = this._S, W = this._W, H = this._H;
    const cy = H / 2;

    if (equipo === 'local') {
      return [
        { x: 1.5*S, y: cy },
        { x: 8*S, y: cy - 4.5*S },
        { x: 8*S, y: cy },
        { x: 8*S, y: cy + 4.5*S },
        { x: 16*S, y: cy },
        { x: 22*S, y: cy },
      ];
    }

    return [
      { x: W - 1.5*S, y: cy },
      { x: W - 8*S, y: cy - 4.5*S },
      { x: W - 8*S, y: cy },
      { x: W - 8*S, y: cy + 4.5*S },
      { x: W - 16*S, y: cy },
      { x: W - 22*S, y: cy },
    ];
  }

  _crearEquipos() {
    const eqL = GameState.equipoLocal.equipacion;
    const eqV = GameState.equipoVisitante.equipacion;
    const posL = this._posicionesIniciales('local');
    const posV = this._posicionesIniciales('visitante');

   this._porteroLocal = new Goalkeeper(
  this,
  posL[0].x,
  posL[0].y,
  eqL,
  'local',
  GameState.equipoLocal.portero
);

this._porteroVisitante = new Goalkeeper(
  this,
  posV[0].x,
  posV[0].y,
  eqV,
  'visitante',
  GameState.equipoVisitante.portero
);

    this._jugadoresLocal = [];
    this._jugadoresVisitante = [];

    for (let i = 0; i < 5; i++) {
      const p = GameState.equipoLocal.pokemons[i];

      const j = new Player(
        this,
        posL[i+1].x,
        posL[i+1].y,
        eqL,
        i+1,
        false,
        p
      );

      j.equipo = 'local';
      j.rol = GameState.equipoLocal.roles[i + 1];
      this._jugadoresLocal.push(j);
    }

    for (let i = 0; i < 5; i++) {
      const p = GameState.equipoVisitante.pokemons[i];
      const esCPU = GameState.modo === '1p' || i > 0;

      const j = new Player(
        this,
        posV[i+1].x,
        posV[i+1].y,
        eqV,
        i+1,
        esCPU,
        p
      );

      j.equipo = 'visitante';
      j.rol = GameState.equipoVisitante.roles[i + 1];
      this._jugadoresVisitante.push(j);
    }

    this._activoLocal = this._jugadoresLocal[4];
    this._activoVisitante = this._jugadoresVisitante[0];
    this._activoLocal.esActivo = true;
    this._activoVisitante.esActivo = true;

    this._ball = new Ball(this);
    this._ball.colocar(this._W / 2, this._H / 2);
  }

  _mostrarMensajeCentro(texto) {
    this._hud.mostrarMensaje(texto);
  }

  _ocultarMensajeCentro(duracion) {
    this._hud.ocultarMensaje(duracion);
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

    this._pausaKey  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    this._pausaKeyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    this._chute1Inicio = null;
    this._chute2Inicio = null;
  }

  _iniciarParte(primera) {
    const invertir = !primera;
    const posL = this._posicionesIniciales(invertir ? 'visitante' : 'local');
    const posV = this._posicionesIniciales(invertir ? 'local' : 'visitante');

    this._colocarEquipos(posL, posV);

    this._ball.colocar(this._W / 2, this._H / 2);
    this._tiempoMs = GameState.duracionParte * 60 * 1000;
    this._contando = true;
    this._pausado = true;

    this._mostrarMensajeCentro('Parte ' + this._parte);
    this.time.delayedCall(1200, () => {
      this._mostrarMensajeCentro('3');
      this.time.delayedCall(1000, () => {
        this._mostrarMensajeCentro('2');
        this.time.delayedCall(1000, () => {
          this._mostrarMensajeCentro('1');
          this.time.delayedCall(1000, () => {
            this._pausado = false;
            this._contando = false;
            this._mostrarMensajeCentro('¡Ya!');
            this._ocultarMensajeCentro(700);
          });
        });
      });
    });
  }

  _cambiarActivoMasCercano(equipo) {
    const jugadores = equipo === 'local' ? this._jugadoresLocal : this._jugadoresVisitante;
    let mejor = jugadores[0], minDist = Infinity;

    for (const j of jugadores) {
      const d = Phaser.Math.Distance.Between(j.x, j.y, this._ball.x, this._ball.y);
      if (d < minDist) {
        minDist = d;
        mejor = j;
      }
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
    const rivales = equipo === 'local'
      ? [...this._jugadoresVisitante, this._porteroVisitante]
      : [...this._jugadoresLocal, this._porteroLocal];

    let dx = 0, dy = 0;
    if (keys.arriba.isDown) dy -= 1;
    if (keys.abajo.isDown) dy += 1;
    if (keys.izq.isDown) dx -= 1;
    if (keys.der.isDown) dx += 1;

    if (dx !== 0 || dy !== 0) {
      activo._dx = dx;
      activo._dy = dy;
      activo.mover(dx, dy);
    }

    if (activo.puedeControlarBalon(this._ball)) {
      activo.tomarBalon(this._ball);
    }

    if (Phaser.Input.Keyboard.JustDown(keys.accion1)) {
      this[chuteInicioProp] = this.time.now;
    }

    if (Phaser.Input.Keyboard.JustUp(keys.accion1) && activo.tieneBalon) {
      const dur = Math.min(this.time.now - this[chuteInicioProp], 300);
      activo.chutar(this._ball, activo._dx || (equipo === 'local' ? 1 : -1), activo._dy || 0, dur / 300);
    }

    if (Phaser.Input.Keyboard.JustDown(keys.accion2)) {
      if (activo.tieneBalon) {
        activo.pasar(this._ball, companeros, activo._dx || (equipo === 'local' ? 1 : -1), activo._dy || 0);
      } else {
        for (const r of rivales) {
          if (activo.tackle(r, this._ball)) break;
        }
        this._cambiarActivoMasCercano(equipo);
      }
    }
  }

  _colocarEquipos(posL, posV) {
    this._ball.portador = null;
    this._porteroLocal.colocar(posL[0].x, posL[0].y);
    this._porteroVisitante.colocar(posV[0].x, posV[0].y);

    for (let i = 0; i < 5; i++) {
      this._jugadoresLocal[i].colocar(posL[i + 1].x, posL[i + 1].y);
      this._jugadoresLocal[i].establecerPosicionBase(posL[i + 1].x, posL[i + 1].y);
      this._jugadoresVisitante[i].colocar(posV[i + 1].x, posV[i + 1].y);
      this._jugadoresVisitante[i].establecerPosicionBase(posV[i + 1].x, posV[i + 1].y);
    }
  }

  _referenciaArea(equipo, lado) {
    const S = this._S;
    const xPorteria = equipo === 'local' ? 0 : this._W;
    const xArea = equipo === 'local'
      ? FIELD_CONFIG.area.largo * S
      : this._W - FIELD_CONFIG.area.largo * S;
    const yArea = lado === 'I'
      ? (this._H - FIELD_CONFIG.area.ancho * S) / 2
      : (this._H + FIELD_CONFIG.area.ancho * S) / 2;
    const yPalo = lado === 'I'
      ? (this._H - FIELD_CONFIG.porteria.ancho * S) / 2
      : (this._H + FIELD_CONFIG.porteria.ancho * S) / 2;
    return { porteria: { x: xPorteria, y: yPalo }, area: { x: xArea, y: yArea } };
  }

  _puntoMedio(a, b) {
    return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
  }

  _objetivoRol(jugador, equipo) {
    const balon = { x: this._ball.x, y: this._ball.y };
    const enAtaque = this._ball.portador && this._ball.portador.equipo === equipo;
    const lado = jugador.rol.endsWith('I') ? 'I' : 'D';
    const equipoReferencia = enAtaque ? (equipo === 'local' ? 'visitante' : 'local') : equipo;
    const ref = this._referenciaArea(equipoReferencia, lado);
    const rival = this._ball.portador && this._ball.portador.equipo !== equipo ? this._ball.portador : null;
    const balonMasCercaDelArea = rival &&
      Phaser.Math.Distance.Between(balon.x, balon.y, ref.area.x, ref.area.y) <
      Phaser.Math.Distance.Between(jugador.x, jugador.y, ref.area.x, ref.area.y);

    if (!this._ball.portador) {
      return { destino: balon, intentaRobo: false };
    }
    if (this._ball.portador === jugador) {
      const metaX = equipo === 'local' ? this._W - jugador.radioPixels : jugador.radioPixels;
      return { destino: { x: metaX, y: this._ball.y }, intentaRobo: false };
    }
    if (jugador.rol === 'DC') {
      const enCampoContrario = equipo === 'local' ? this._ball.x > this._W / 2 : this._ball.x < this._W / 2;
      if (!enAtaque && enCampoContrario) return { destino: balon, intentaRobo: true };
      const centroPorteriaRival = { x: equipo === 'local' ? this._W : 0, y: this._H / 2 };
      return { destino: this._puntoMedio(balon, centroPorteriaRival), intentaRobo: false };
    }
    if (jugador.rol.startsWith('DF')) {
      return {
        destino: balonMasCercaDelArea ? balon : this._puntoMedio(balon, ref.porteria),
        intentaRobo: Boolean(balonMasCercaDelArea)
      };
    }
    if (jugador.rol.startsWith('MC')) {
      const distancia = Phaser.Math.Distance.Between(jugador.x, jugador.y, balon.x, balon.y);
      const presiona = !enAtaque && distancia <= CONFIG.iaDistanciaPresionMC;
      return {
        destino: presiona ? balon : this._puntoMedio(balon, ref.area),
        intentaRobo: presiona
      };
    }
    return { destino: jugador.posicionBase, intentaRobo: false };
  }

  _separarObjetivos(jugadores, objetivos) {
    const distanciaMinima = 2.5 * this._S;
    jugadores.forEach((jugador, i) => {
      jugadores.forEach((otro, j) => {
        if (i >= j) return;
        const objetivo = objetivos.get(jugador);
        const otroObjetivo = objetivos.get(otro);
        const dx = objetivo.x - otroObjetivo.x;
        const dy = objetivo.y - otroObjetivo.y;
        const distancia = Math.hypot(dx, dy);
        if (distancia >= distanciaMinima) return;
        const angulo = distancia > 0 ? Math.atan2(dy, dx) : (i % 2 ? Math.PI / 2 : 0);
        const ajuste = (distanciaMinima - distancia) / 2;
        objetivo.x += Math.cos(angulo) * ajuste;
        objetivo.y += Math.sin(angulo) * ajuste;
        otroObjetivo.x -= Math.cos(angulo) * ajuste;
        otroObjetivo.y -= Math.sin(angulo) * ajuste;
      });
    });
  }

  _actualizarIAEquipo(equipo, jugadores, jugadorControlado) {
    const cpu = jugadores.filter(jugador => jugador !== jugadorControlado);
    const objetivos = new Map(cpu.map(jugador => [jugador, this._objetivoRol(jugador, equipo)]));
    this._separarObjetivos(cpu, new Map(cpu.map(jugador => [jugador, objetivos.get(jugador).destino])));
    cpu.forEach(jugador => jugador.updateCPU(this._ball, objetivos.get(jugador)));
  }

  _actualizarIA() {
    this._actualizarIAEquipo('local', this._jugadoresLocal, this._activoLocal);
    this._actualizarIAEquipo('visitante', this._jugadoresVisitante,
      GameState.modo === '2p' ? this._activoVisitante : null);

    this._porteroLocal.updateCPU(this._ball);
    this._porteroVisitante.updateCPU(this._ball);
  }

  _actualizarHUD(delta) {
    if (!this._pausado && !this._contando) {
      this._tiempoMs = Math.max(0, this._tiempoMs - delta);
    }

    this._hud.actualizar({
      parte: this._parte, tiempoMs: this._tiempoMs, marcador: GameState.marcador,
      equipoLocal: GameState.equipoLocal, equipoVisitante: GameState.equipoVisitante,
      jugadorActivo: this._activoLocal
    });
  }

  _procesarGol(resultado) {
    if (!resultado || !resultado.gol) return;

    const equipoMarca = resultado.equipo;
    const equipoRecibe = equipoMarca === 'local' ? 'visitante' : 'local';

    GameState.marcador[equipoMarca]++;

    const portador = this._ball.portador;
    const nombre = portador && portador.pokemon ? portador.pokemon.nombre : null;

    if (nombre) {
      const lista = equipoMarca === 'local'
        ? GameState.equipoLocal.goleadores
        : GameState.equipoVisitante.goleadores;

      lista.push(nombre);
    }

    this._mostrarMensajeCentro('¡GOL!');
    this._pausado = true;

    this.time.delayedCall(2200, () => {
      this._recolocarTras(equipoRecibe);
    });
  }

  _recolocarTras(equipoQueRecibio) {
    const invertir = this._parte === 2;
    const posL = this._posicionesIniciales(invertir ? 'visitante' : 'local');
    const posV = this._posicionesIniciales(invertir ? 'local' : 'visitante');

    this._colocarEquipos(posL, posV);

    this._ball.colocar(this._W / 2, this._H / 2);

    if (equipoQueRecibio === 'local') {
      this._activoLocal.esActivo = false;
      this._activoLocal = this._jugadoresLocal[4];
      this._activoLocal.esActivo = true;
      this._activoLocal.tomarBalon(this._ball);
    } else {
      this._activoVisitante.esActivo = false;
      this._activoVisitante = this._jugadoresVisitante[4];
      this._activoVisitante.esActivo = true;
      this._activoVisitante.tomarBalon(this._ball);
    }

    this._mostrarMensajeCentro('Saque');
    this._ocultarMensajeCentro(1000);

    this.time.delayedCall(600, () => {
      this._pausado = false;
    });
  }

  _abrirPausa() {
    this._pausado = true;
    this._menuPausa.abrir();
  }

  _terminarPartido() {
    this.scene.start('SummaryScene');
  }

  update(time, delta) {
    if (Phaser.Input.Keyboard.JustDown(this._pausaKey) || Phaser.Input.Keyboard.JustDown(this._pausaKeyP)) {
      if (!this._contando && !this._menuPausa.panel.visible) {
        this._abrirPausa();
      }
    }

    if (this._menuPausa.panel.visible) {
      const accion = this._menuPausa.procesarInput();
      if (accion === 'continuar') this._pausado = false;
      if (accion === 'abandonar') this._terminarPartido();

      return;
    }

    if (this._pausado) return;

    this._procesarInputEquipo(this._k1, 'local', '_chute1Inicio');

    if (GameState.modo === '2p') {
      this._procesarInputEquipo(this._k2, 'visitante', '_chute2Inicio');
    }

    this._actualizarIA();
    this._ball.update();

    const todos = [
      ...this._jugadoresLocal,
      ...this._jugadoresVisitante,
      this._porteroLocal,
      this._porteroVisitante
    ];

    for (let i = 0; i < todos.length; i++) {
      for (let j = i + 1; j < todos.length; j++) {
        const a = todos[i], b = todos[j];
        const dist = Phaser.Math.Distance.Between(a.x, a.y, b.x, b.y);
        const minD = a.radioPixels + b.radioPixels;

        if (dist < minD && dist > 0) {
          const ang = Math.atan2(b.y - a.y, b.x - a.x);
          const sep = (minD - dist) / 2;

          a.x -= Math.cos(ang) * sep * 0.5;
          a.y -= Math.sin(ang) * sep * 0.5;
          b.x += Math.cos(ang) * sep * 0.5;
          b.y += Math.sin(ang) * sep * 0.5;
        }
      }
    }

    todos.forEach(j => j.update());

    this._procesarGol(this._ball.comprobarGol());
    this._actualizarHUD(delta);

    if (this._tiempoMs <= 0 && !this._finDeParteEjecutado) {
      this._finDeParteEjecutado = true;

      if (this._parte === 1) {
        this._parte = 2;
        this._pausado = true;
        this._mostrarMensajeCentro('Descanso');
        this._ocultarMensajeCentro(2200);

        this.time.delayedCall(3000, () => {
          this._finDeParteEjecutado = false;
          this._iniciarParte(false);
        });
      } else {
        this._terminarPartido();
      }
    }
  }
}
