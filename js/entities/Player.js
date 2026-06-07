class Player {
  constructor(scene, x, y, equipacion, numero, esCPU) {
    this.scene      = scene;
    this.x          = x;
    this.y          = y;
    this.equipacion = equipacion;
    this.numero     = numero;
    this.esCPU      = esCPU;
    this.estado     = 'idle';
    this.tieneBalon = false;
    this.esActivo   = false;
    this.equipo     = null; // 'local' | 'visitante'
    this._dx        = 0;
    this._dy        = 0;
    this._cooldownBalon = 0;

    const S = FIELD_CONFIG.escala;
    this.radioPixels = CONFIG.jugadorRadio * S;
    this.velocidad   = CONFIG.jugadorVelocidad * S / 60;

    this.graphics = scene.add.graphics();
    this.label    = scene.add.text(x, y, String(numero), {
      fontSize: '10px', fill: '#ffffff', align: 'center'
    }).setOrigin(0.5, 0.5);

    this._dibujar();
  }

  _dibujar() {
    const g = this.graphics;
    g.clear();
    g.fillStyle(Phaser.Display.Color.HexStringToColor(this.equipacion.color_jugadores).color);
    g.fillCircle(this.x, this.y, this.radioPixels);
    g.lineStyle(this.esActivo ? 3 : 1, this.esActivo ? 0xffffff : 0x000000, this.esActivo ? 1 : 0.5);
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

  puedeControlarBalon(ball) {
    if (ball.portador && ball.portador !== this) return false;
    const dist = Phaser.Math.Distance.Between(this.x, this.y, ball.x, ball.y);
    return dist <= this.radioPixels + ball.radio;
  }

  tomarBalon(ball) {
    if (this._cooldownBalon > 0) return;
    this.tieneBalon = true;
    ball.portador   = this;
  }

  chutar(ball, dx, dy, potencia) {
    if (!this.tieneBalon) return;
    this.tieneBalon = false;
    this._cooldownBalon = 15;
    const impulso = CONFIG.balonImpulsoBase + potencia * (CONFIG.balonImpulsoMax - CONFIG.balonImpulsoBase);
    ball.impulsar(dx, dy, impulso);
    // TODO: play('chute')
  }

  pasar(ball, companeros, dx, dy) {
    if (!this.tieneBalon) return;
    const angDir = Math.atan2(dy, dx);
    const cono   = Phaser.Math.DegToRad(CONFIG.paseAnguloCono);
    let objetivo = null;
    let minDist  = Infinity;

    for (const c of companeros) {
      if (c === this) continue;
      const ang  = Math.atan2(c.y - this.y, c.x - this.x);
      const diff = Math.abs(Phaser.Math.Angle.Wrap(ang - angDir));
      const dist = Phaser.Math.Distance.Between(this.x, this.y, c.x, c.y);
      if (diff <= cono && dist < minDist) { minDist = dist; objetivo = c; }
    }

    if (!objetivo) {
      for (const c of companeros) {
        if (c === this) continue;
        const dist = Phaser.Math.Distance.Between(this.x, this.y, c.x, c.y);
        if (dist < minDist) { minDist = dist; objetivo = c; }
      }
    }

    if (objetivo) {
      this.tieneBalon = false;
      this._cooldownBalon = 15;
      ball.impulsar(objetivo.x - this.x, objetivo.y - this.y, CONFIG.balonImpulsoBase);
      // TODO: play('pase')
    }
  }

  tackle(rival, ball) {
    if (!rival.tieneBalon) return false;
    const dist = Phaser.Math.Distance.Between(this.x, this.y, rival.x, rival.y);
    if (dist > CONFIG.tackleDistancia * FIELD_CONFIG.escala) return false;
    const angARival  = Math.atan2(rival.y - this.y, rival.x - this.x);
    const angCarrera = Math.atan2(this._dy, this._dx || 1);
    const diff = Math.abs(Phaser.Math.Angle.Wrap(angARival - angCarrera));
    if (diff > Phaser.Math.DegToRad(CONFIG.tackleAngulo)) return false;
    rival.tieneBalon = false;
    ball.portador    = null;
    ball.vx = 0; ball.vy = 0;
    this.estado = 'tackling';
    return true;
  }

  updateCPU(ball, mitadX) {
    if (!this.esCPU) return;
    const enMiMitad = this.equipo === 'local' ? ball.x <= mitadX : ball.x >= mitadX;
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
    if (this._cooldownBalon > 0) this._cooldownBalon--;
    this._dibujar();
  }

  destroy() {
    this.graphics.destroy();
    this.label.destroy();
  }
}
