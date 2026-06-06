class FieldTestScene extends Phaser.Scene {
  constructor() {
    super({ key: 'FieldTestScene' });
  }

  create() {
    const S = FIELD_CONFIG.escala;
    const W = FIELD_CONFIG.largo * S;   // 800px
    const H = FIELD_CONFIG.ancho * S;   // 320px
    const g = this.add.graphics();

    // Fondo verde
    g.fillStyle(0x2d7a2d);
    g.fillRect(0, 0, W, H);

    // Líneas blancas
    g.lineStyle(2, 0xffffff, 1);

    // Borde del campo
    g.strokeRect(0, 0, W, H);

    // Línea de medio campo
    g.beginPath();
    g.moveTo(W / 2, 0);
    g.lineTo(W / 2, H);
    g.strokePath();

    // Círculo central (radio 3 unidades)
    g.strokeCircle(W / 2, H / 2, 3 * S);

    // Punto central
    g.fillStyle(0xffffff);
    g.fillCircle(W / 2, H / 2, 4);

    // Portería izquierda
    const py = (FIELD_CONFIG.ancho / 2 - FIELD_CONFIG.porteria.ancho / 2) * S;
    const ph = FIELD_CONFIG.porteria.ancho * S;
    const pw = FIELD_CONFIG.porteria.alto * S;
    g.lineStyle(3, 0xffffff, 1);
    g.strokeRect(-pw, py, pw, ph);

    // Portería derecha
    g.strokeRect(W, py, pw, ph);

    // Área izquierda
    const areaL = FIELD_CONFIG.area.largo * S;
    const areaW = FIELD_CONFIG.area.ancho * S;
    const areaY = (FIELD_CONFIG.ancho / 2 - FIELD_CONFIG.area.ancho / 2) * S;
    g.lineStyle(2, 0xffffff, 1);
    g.strokeRect(0, areaY, areaL, areaW);

    // Área derecha
    g.strokeRect(W - areaL, areaY, areaL, areaW);

    // Punto de penalty izquierdo
    const penX = FIELD_CONFIG.penalty_dist * S;
    g.fillStyle(0xffffff);
    g.fillCircle(penX, H / 2, 4);

    // Punto de penalty derecho
    g.fillCircle(W - penX, H / 2, 4);

    // Texto de verificación
    this.add.text(10, 10, 'Campo OK - Plan 1 verificado', {
      fontSize: '14px', fill: '#ffffff'
    });
  }
}