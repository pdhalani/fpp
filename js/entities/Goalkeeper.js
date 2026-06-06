class Goalkeeper extends Player {
  constructor(scene, x, y, equipacion, equipo) {
    super(scene, x, y, equipacion, 'P', false);
    this.equipo    = equipo;
    this.velocidad = CONFIG.porteroVelocidad * FIELD_CONFIG.escala / 60;
    this._colorPortero = Phaser.Display.Color.HexStringToColor(equipacion.color_portero).color;
  }

  _dibujar() {
    const g = this.graphics;
    g.clear();
    g.fillStyle(this._colorPortero || 0x888888);
    g.fillCircle(this.x, this.y, this.radioPixels);
    g.lineStyle(this.esActivo ? 3 : 1, this.esActivo ? 0xffffff : 0x000000, this.esActivo ? 1 : 0.5);
    g.strokeCircle(this.x, this.y, this.radioPixels);
    this.label.setPosition(this.x, this.y);
  }

  updateCPU(ball) {
    const S       = FIELD_CONFIG.escala;
    const H       = FIELD_CONFIG.ancho * S;
    const W       = FIELD_CONFIG.largo * S;
    const apL     = FIELD_CONFIG.area_pequena.largo * S;
    const apHW    = (FIELD_CONFIG.area_pequena.ancho / 2) * S;
    const centroY = H / 2;
    const porteriaX = this.equipo === 'local' ? 0 : W;

    // ¿Está el balón dentro del área pequeña?
    const balonEnArea = this.equipo === 'local'
      ? ball.x >= 0 && ball.x <= apL && ball.y >= centroY - apHW && ball.y <= centroY + apHW
      : ball.x >= W - apL && ball.x <= W && ball.y >= centroY - apHW && ball.y <= centroY + apHW;

    let targetX, targetY;

    if (balonEnArea) {
      targetX = ball.x;
      targetY = ball.y;
    } else {
      const dx = ball.x - porteriaX;
      const dy = ball.y - centroY;
      targetX = porteriaX + dx * 0.1;
      targetY = centroY   + dy * 0.1;
    }

    // Restringir al área pequeña
    targetX = this.equipo === 'local'
      ? Phaser.Math.Clamp(targetX, this.radioPixels, apL)
      : Phaser.Math.Clamp(targetX, W - apL, W - this.radioPixels);
    targetY = Phaser.Math.Clamp(targetY, centroY - apHW + this.radioPixels, centroY + apHW - this.radioPixels);

    // Mover hacia el objetivo
    const mx = targetX - this.x;
    const my = targetY - this.y;
    const md = Math.sqrt(mx * mx + my * my);
    if (md > 2) {
      const vel = balonEnArea ? this.velocidad * 2 : this.velocidad;
      this.x += (mx / md) * vel;
      this.y += (my / md) * vel;
    } else if (balonEnArea && ball.portador === null) {
      ball.portador   = this;
      this.tieneBalon = true;
    }

    this._dibujar();
  }
}
