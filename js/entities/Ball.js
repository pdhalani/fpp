class Ball {
  constructor(scene) {
    const S = FIELD_CONFIG.escala;
    const cx = (FIELD_CONFIG.largo / 2) * S;
    const cy = (FIELD_CONFIG.ancho / 2) * S;

    this.scene = scene;
    this.vx = 0;
    this.vy = 0;
    this.radio = CONFIG.balonRadioContacto * S;
    this.portador = null;

    this.graphics = scene.add.graphics().setDepth(10);
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
      // Offset delante del jugador en su dirección de movimiento
      const dx = this.portador._dx || 1;
      const dy = this.portador._dy || 0;
      const mag = Math.sqrt(dx * dx + dy * dy) || 1;
      const offset = this.portador.radioPixels + 6;
      this.x = this.portador.x + (dx / mag) * offset;
      this.y = this.portador.y + (dy / mag) * offset;
      this._dibujar();
      return;
    }

    const S = FIELD_CONFIG.escala;
    const W = FIELD_CONFIG.largo * S;
    const H = FIELD_CONFIG.ancho * S;

    this.x += this.vx;
    this.y += this.vy;

    if (this.y < 0)  { this.y = 0; this.vy =  Math.abs(this.vy); }
    if (this.y > H)  { this.y = H; this.vy = -Math.abs(this.vy); }
    if (this.x < 0)  { this.x = 0; this.vx =  Math.abs(this.vx); }
    if (this.x > W)  { this.x = W; this.vx = -Math.abs(this.vx); }

    this.vx *= CONFIG.balonFriccion;
    this.vy *= CONFIG.balonFriccion;
    if (Math.abs(this.vx) < 0.05) this.vx = 0;
    if (Math.abs(this.vy) < 0.05) this.vy = 0;

    this._dibujar();
  }

  comprobarGol() {
    const S        = FIELD_CONFIG.escala;
    const H        = FIELD_CONFIG.ancho * S;
    const W        = FIELD_CONFIG.largo * S;
    const phAncho  = FIELD_CONFIG.porteria.ancho * S;
    const pyTop    = (H - phAncho) / 2;
    const pyBottom = (H + phAncho) / 2;

    if (this.x <= 0 && this.y >= pyTop && this.y <= pyBottom) {
      return { gol: true, equipo: 'visitante' };
    }
    if (this.x >= W && this.y >= pyTop && this.y <= pyBottom) {
      return { gol: true, equipo: 'local' };
    }
    return null;
  }
}
