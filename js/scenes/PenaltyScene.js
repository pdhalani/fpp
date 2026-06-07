class PenaltyScene extends Phaser.Scene {
  constructor() { super({ key: 'PenaltyScene' }); }

  create() {
    const S = FIELD_CONFIG.escala;
    this._S = S;
    this._W = FIELD_CONFIG.largo * S;
    this._H = FIELD_CONFIG.ancho * S;

    this._tandas    = CONFIG.penaltiesPorTanda;
    this._golLocal  = 0;
    this._golVisita = 0;
    this._ronda     = 0;
    this._turno     = null;
    this._fase      = 'moneda';
    this._miraX     = 0;
    this._miraY     = 0;
    this._porteroLanzado = false;
    this._porteroDir     = 1;
    this._porteroY       = 0;

    GameState.equipoLocal.goleadores     = [];
    GameState.equipoVisitante.goleadores = [];

    this._dibujarCampo();
    this._crearHUD();
    this._crearTeclado();
    this._lanzarMoneda();
  }

  _dibujarCampo() {
    const S = this._S, W = this._W, H = this._H;
    const g = this.add.graphics();

    g.fillStyle(0x2d7a2d); g.fillRect(0, 0, W, H);
    g.lineStyle(2, 0xffffff, 1); g.strokeRect(0, 0, W, H);

    const pGateH = FIELD_CONFIG.porteria.ancho * S;
    const pGateD = FIELD_CONFIG.porteria.alto  * S * 2;
    const pGateY = (H - pGateH) / 2;
    g.fillStyle(0x555555, 0.6);
    g.fillRect(-pGateD, pGateY, pGateD, pGateH);
    g.fillRect(W,       pGateY, pGateD, pGateH);
    g.lineStyle(4, 0xffffff, 1);
    g.strokeRect(-pGateD, pGateY, pGateD, pGateH);
    g.strokeRect(W,       pGateY, pGateD, pGateH);

    g.lineStyle(2, 0xffffff, 1);
    const aL = FIELD_CONFIG.area.largo  * S;
    const aW = FIELD_CONFIG.area.ancho  * S;
    const aY = (H - aW) / 2;
    g.strokeRect(0,    aY, aL, aW);
    g.strokeRect(W-aL, aY, aL, aW);

    g.fillStyle(0xffffff);
    g.fillCircle(FIELD_CONFIG.penalty_dist * S,     H/2, 6);
    g.fillCircle(W - FIELD_CONFIG.penalty_dist * S, H/2, 6);
  }

  _crearHUD() {
    const W = this._W;
    this._hudMarcador = this.add.text(W/2, 8, '', {
      fontSize: '16px', fill: '#ffffff'
    }).setOrigin(0.5, 0).setDepth(20);

    this._hudTurno = this.add.text(W/2, 28, '', {
      fontSize: '13px', fill: '#ffcc00'
    }).setOrigin(0.5, 0).setDepth(20);

    this._txtInfo = this.add.text(W/2, this._H - 36, '', {
      fontSize: '13px', fill: '#aaaaaa'
    }).setOrigin(0.5).setDepth(20);

    this._txtCentro = this.add.text(W/2, this._H/2, '', {
      fontSize: '28px', fill: '#ffffff', fontStyle: 'bold'
    }).setOrigin(0.5).setAlpha(0).setDepth(20);

    this._miraGraphics   = this.add.graphics().setDepth(15);
    this._porteroGraphics = this.add.graphics().setDepth(12);
    this._porteroY = this._H / 2;
  }

  _crearTeclado() {
    const C1 = CONFIG.controles.p1;
    this._k = this.input.keyboard.addKeys({
      arriba:  C1.arriba,
      abajo:   C1.abajo,
      accion1: C1.accion1
    });
  }

  _lanzarMoneda() {
    this._turno = Math.random() < 0.5 ? 'local' : 'visitante';
    this._fase  = 'moneda';
    const quien = this._turno === 'local'
      ? (GameState.equipoLocal.equipacion ? GameState.equipoLocal.equipacion.nombre : 'Local')
      : (GameState.equipoVisitante.equipacion ? GameState.equipoVisitante.equipacion.nombre : 'Visitante');
    this._mostrarCentro('Empieza: ' + quien, 2000, () => this._siguientePenalty());
  }

  _mostrarCentro(texto, dur, cb) {
    this._txtCentro.setText(texto).setAlpha(1);
    this.time.delayedCall(dur, () => {
      this.tweens.add({
        targets: this._txtCentro, alpha: 0, duration: 300,
        onComplete: cb || null
      });
    });
  }

  _siguientePenalty() {
    // Terminación anticipada
    if (this._ronda < this._tandas) {
      const lanzadoLocal    = Math.floor(this._ronda / 2) + (this._turno === 'visitante' && this._ronda % 2 === 0 ? 1 : 0);
      const lanzadoVisita   = Math.floor(this._ronda / 2) + (this._turno === 'local'     && this._ronda % 2 !== 0 ? 1 : 0);
      const restantesLocal  = this._tandas - lanzadoLocal;
      const restantesVisita = this._tandas - lanzadoVisita;
      const maxLocal  = this._golLocal  + restantesLocal;
      const maxVisita = this._golVisita + restantesVisita;
      if (this._golLocal > maxVisita || this._golVisita > maxLocal) {
        this._terminar(); return;
      }
    }

    this._fase = 'apuntando';
    this._porteroLanzado = false;
    this._porteroY = this._H / 2;

    // La mira apunta a la portería rival
    const apuntaIzq = this._turno === 'visitante';
    this._miraX = apuntaIzq
      ? FIELD_CONFIG.penalty_dist * this._S / 2
      : this._W - FIELD_CONFIG.penalty_dist * this._S / 2;
    this._miraY = this._H / 2;

    const esMS = this._ronda >= this._tandas;
    const nombreTurno = this._turno === 'local'
      ? (GameState.equipoLocal.equipacion ? GameState.equipoLocal.equipacion.nombre : 'Local')
      : (GameState.equipoVisitante.equipacion ? GameState.equipoVisitante.equipacion.nombre : 'Visitante');
    this._txtInfo.setText((esMS ? 'Muerte súbita' : 'Tanda ' + (Math.floor(this._ronda/2) + 1)) + '  —  Lanza: ' + nombreTurno);

    this._actualizarHUD();

    // Portero CPU lanza tras retraso aleatorio
    const retraso = Phaser.Math.Between(CONFIG.porteroRetrasoMin, CONFIG.porteroRetrasoMax);
    this.time.delayedCall(retraso, () => {
      if (this._fase === 'apuntando') {
        this._porteroLanzado = true;
        this._porteroDir = Math.random() < 0.5 ? -1 : 1;
      }
    });
  }

  _actualizarHUD() {
    const eqL = GameState.equipoLocal.equipacion;
    const eqV = GameState.equipoVisitante.equipacion;
    const nombreL = eqL ? eqL.icono + ' ' + eqL.nombre : 'Local';
    const nombreV = eqV ? eqV.icono + ' ' + eqV.nombre : 'Visitante';
    this._hudMarcador.setText(nombreL + '  ' + this._golLocal + ' — ' + this._golVisita + '  ' + nombreV);
    const esMS = this._ronda >= this._tandas;
    this._hudTurno.setText(esMS ? 'Muerte súbita' : 'Tanda ' + (Math.floor(this._ronda/2) + 1) + ' / ' + this._tandas);
  }

  _dibujarMira(apuntaIzq) {
    const g = this._miraGraphics;
    g.clear();
    const ph = FIELD_CONFIG.porteria.ancho * this._S;
    const pd = FIELD_CONFIG.porteria.alto  * this._S * 2;
    const pyT = (this._H - ph) / 2;
    const pyB = (this._H + ph) / 2;

    // Marco portería objetivo
    g.lineStyle(2, 0xffffff, 0.5);
    if (apuntaIzq) {
      g.strokeRect(-pd, pyT, pd, ph);
    } else {
      g.strokeRect(this._W, pyT, pd, ph);
    }

    // Mira
    g.lineStyle(2, 0xff3333, 0.9);
    g.strokeCircle(this._miraX, this._miraY, 12);
    g.beginPath();
    g.moveTo(this._miraX - 16, this._miraY);
    g.lineTo(this._miraX + 16, this._miraY);
    g.strokePath();
    g.beginPath();
    g.moveTo(this._miraX, this._miraY - 16);
    g.lineTo(this._miraX, this._miraY + 16);
    g.strokePath();
  }

  _dibujarPortero(apuntaIzq) {
    const g = this._porteroGraphics;
    g.clear();
    const S   = this._S;
    const eq  = apuntaIzq
      ? GameState.equipoLocal.equipacion
      : GameState.equipoVisitante.equipacion;
    const hexStr = eq ? eq.color_portero : '#888888';
    const col    = Phaser.Display.Color.HexStringToColor(hexStr).color;
    const radio  = CONFIG.jugadorRadio * S;
    // Portero en la línea de gol
    const px = apuntaIzq ? radio : this._W - radio;
    g.fillStyle(col);
    g.fillCircle(px, this._porteroY, radio);
    g.lineStyle(2, 0xffffff, 0.8);
    g.strokeCircle(px, this._porteroY, radio);
  }

  _disparar(apuntaIzq) {
    this._fase = 'resultado';
    const ph  = FIELD_CONFIG.porteria.ancho * this._S;
    const pyT = (this._H - ph) / 2;
    const pyB = (this._H + ph) / 2;

    const enPorteria = this._miraY >= pyT && this._miraY <= pyB;
    const porteroR   = CONFIG.jugadorRadio * this._S;
    const porteroEnPosicion = Math.abs(this._porteroY - this._miraY) < porteroR + 8;
    const esGol = enPorteria && !porteroEnPosicion;
    // TODO: play(esGol ? 'gol' : 'chute')

    this.time.delayedCall(600, () => {
      if (esGol) {
        this._mostrarCentro('¡GOL!', 1500, () => this._procesarResultado(true));
      } else {
        this._mostrarCentro(enPorteria ? 'Parado' : 'Fuera', 1500, () => this._procesarResultado(false));
      }
    });
  }

  _procesarResultado(esGol) {
    if (esGol) {
      if (this._turno === 'local') this._golLocal++;
      else this._golVisita++;
    }
    this._actualizarHUD();

    // Alternar turno; incrementar ronda cuando los dos han lanzado
    if (this._turno === 'local') {
      this._turno = 'visitante';
    } else {
      this._turno = 'local';
      this._ronda++;
    }

    // Fin si hay ganador tras rondas completas
    if (this._ronda >= this._tandas && this._golLocal !== this._golVisita) {
      this.time.delayedCall(500, () => this._terminar());
      return;
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
    const ph  = FIELD_CONFIG.porteria.ancho * this._S;
    const pyT = (this._H - ph) / 2;
    const pyB = (this._H + ph) / 2;
    const velMira = 2.5;

    if (this._k.arriba.isDown) this._miraY = Math.max(pyT - 20, this._miraY - velMira);
    if (this._k.abajo.isDown)  this._miraY = Math.min(pyB + 20, this._miraY + velMira);

    if (this._porteroLanzado) {
      const velPortero = CONFIG.porteroVelocidad * this._S / 60 * 1.5;
      this._porteroY = Phaser.Math.Clamp(
        this._porteroY + this._porteroDir * velPortero,
        pyT + CONFIG.jugadorRadio * this._S,
        pyB - CONFIG.jugadorRadio * this._S
      );
    }

    if (Phaser.Input.Keyboard.JustDown(this._k.accion1)) {
      this._disparar(apuntaIzq);
    }

    this._dibujarMira(apuntaIzq);
    this._dibujarPortero(apuntaIzq);
  }
}
