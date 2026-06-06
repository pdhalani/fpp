class FieldTestScene extends Phaser.Scene {
  constructor() { super({ key: 'FieldTestScene' }); }

  create() {
    const S = FIELD_CONFIG.escala;
    const W = FIELD_CONFIG.largo * S;
    const H = FIELD_CONFIG.ancho * S;

    this._dibujarCampo(W, H, S);

    const eq1 = EQUIPACIONES[0]; // Cohetes: turquesa
    const eq2 = EQUIPACIONES[1]; // Unicornios: portero rosa-oscuro, visible

    this.ball = new Ball(this);

    this.jugador = new Player(this, W / 2, H / 2 + 40, eq1, 9, false);
    this.jugador.equipo   = 'local';
    this.jugador.esActivo = true;

    this.portero = new Goalkeeper(this, 1.5 * S, H / 2, eq2, 'visitante');

    const C = CONFIG.controles.p1;
    this.keys = this.input.keyboard.addKeys({
      arriba:  C.arriba,
      abajo:   C.abajo,
      izq:     C.izq,
      der:     C.der,
      accion1: C.accion1,
      accion2: C.accion2
    });

    this.chuteInicio = null;
    this.ultimaDirX = 1;
    this.ultimaDirY = 0;

    this.add.text(10, 10, 'WASD=mover  F=chute (hold=potente)  G=pase', {
      fontSize: '11px', fill: '#ffffff'
    });
  }

  _dibujarCampo(W, H, S) {
    const g = this.add.graphics();
    g.fillStyle(0x2d7a2d);
    g.fillRect(0, 0, W, H);
    g.lineStyle(2, 0xffffff, 1);
    g.strokeRect(0, 0, W, H);
    g.beginPath(); g.moveTo(W / 2, 0); g.lineTo(W / 2, H); g.strokePath();
    g.strokeCircle(W / 2, H / 2, 4 * S);
    g.fillStyle(0xffffff);
    g.fillCircle(W / 2, H / 2, 4);

    const py = (FIELD_CONFIG.ancho / 2 - FIELD_CONFIG.porteria.ancho / 2) * S;
    const ph = FIELD_CONFIG.porteria.ancho * S;
    const pw = FIELD_CONFIG.porteria.alto * S;
    g.lineStyle(3, 0xffffff, 1);
    g.strokeRect(-pw, py, pw, ph);
    g.strokeRect(W, py, pw, ph);

    const aL = FIELD_CONFIG.area.largo * S;
    const aW = FIELD_CONFIG.area.ancho * S;
    const aY = (FIELD_CONFIG.ancho / 2 - FIELD_CONFIG.area.ancho / 2) * S;
    g.lineStyle(2, 0xffffff, 1);
    g.strokeRect(0, aY, aL, aW);
    g.strokeRect(W - aL, aY, aL, aW);

    const apL = FIELD_CONFIG.area_pequena.largo * S;
    const apW = FIELD_CONFIG.area_pequena.ancho * S;
    const apY = (FIELD_CONFIG.ancho / 2 - FIELD_CONFIG.area_pequena.ancho / 2) * S;
    g.strokeRect(0, apY, apL, apW);
    g.strokeRect(W - apL, apY, apL, apW);

    const penX = FIELD_CONFIG.penalty_dist * S;
    g.fillStyle(0xffffff);
    g.fillCircle(penX, H / 2, 4);
    g.fillCircle(W - penX, H / 2, 4);

    const lunaR     = FIELD_CONFIG.luna_radio * S;
    const lunaAngulo = Math.acos((aL - penX) / lunaR);
    g.lineStyle(2, 0xffffff, 1);
    g.beginPath();
    g.arc(penX, H / 2, lunaR, -lunaAngulo, lunaAngulo, false);
    g.strokePath();
    g.beginPath();
    g.arc(W - penX, H / 2, lunaR, Math.PI - lunaAngulo, Math.PI + lunaAngulo, false);
    g.strokePath();
  }

  update() {
    const k = this.keys;
    let dx = 0, dy = 0;
    if (k.arriba.isDown) dy -= 1;
    if (k.abajo.isDown)  dy += 1;
    if (k.izq.isDown)    dx -= 1;
    if (k.der.isDown)    dx += 1;

    if (dx !== 0 || dy !== 0) {
      this.jugador._dx = dx;
      this.jugador._dy = dy;
      this.ultimaDirX = dx;
      this.ultimaDirY = dy;
      this.jugador.mover(dx, dy);
    } else {
      this.jugador._dx = this.ultimaDirX;
      this.jugador._dy = this.ultimaDirY;
    }

    if (this.jugador.puedeControlarBalon(this.ball)) {
      this.jugador.tomarBalon(this.ball);
    }

    if (Phaser.Input.Keyboard.JustDown(k.accion1)) {
      this.chuteInicio = this.time.now;
    }
    if (Phaser.Input.Keyboard.JustUp(k.accion1) && this.jugador.tieneBalon) {
      const pot = Math.min(this.time.now - this.chuteInicio, 300) / 300;
      this.jugador.chutar(this.ball, this.ultimaDirX, this.ultimaDirY, pot);
    }

    if (Phaser.Input.Keyboard.JustDown(k.accion2) && this.jugador.tieneBalon) {
      this.jugador.pasar(this.ball, [], this.ultimaDirX, this.ultimaDirY);
    }

    this.ball.update();
    this.jugador.update();
    this.portero.updateCPU(this.ball);
  }
}
