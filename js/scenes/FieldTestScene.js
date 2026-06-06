class FieldTestScene extends Phaser.Scene {
  constructor() {
    super({ key: 'FieldTestScene' });
  }

  create() {
    const S = FIELD_CONFIG.escala;
    const W = FIELD_CONFIG.largo * S;          // 800px
    const H = FIELD_CONFIG.ancho * S;          // 480px
    const g = this.add.graphics();

    // Fondo verde
    g.fillStyle(0x2d7a2d);
    g.fillRect(0, 0, W, H);

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

    // Porterías
    const py = (FIELD_CONFIG.ancho / 2 - FIELD_CONFIG.porteria.ancho / 2) * S;
    const ph = FIELD_CONFIG.porteria.ancho * S;
    const pw = FIELD_CONFIG.porteria.alto * S;
    g.lineStyle(3, 0xffffff, 1);
    g.strokeRect(-pw, py, pw, ph);
    g.strokeRect(W, py, pw, ph);

    // Áreas grandes
    const areaL = FIELD_CONFIG.area.largo * S;
    const areaW = FIELD_CONFIG.area.ancho * S;
    const areaY = (FIELD_CONFIG.ancho / 2 - FIELD_CONFIG.area.ancho / 2) * S;
    g.lineStyle(2, 0xffffff, 1);
    g.strokeRect(0, areaY, areaL, areaW);
    g.strokeRect(W - areaL, areaY, areaL, areaW);

    // Áreas pequeñas
    const apL = FIELD_CONFIG.area_pequena.largo * S;
    const apW = FIELD_CONFIG.area_pequena.ancho * S;
    const apY = (FIELD_CONFIG.ancho / 2 - FIELD_CONFIG.area_pequena.ancho / 2) * S;
    g.strokeRect(0, apY, apL, apW);
    g.strokeRect(W - apL, apY, apL, apW);

    // Puntos de penalty
    const penX = FIELD_CONFIG.penalty_dist * S;
    g.fillStyle(0xffffff);
    g.fillCircle(penX, H / 2, 4);
    g.fillCircle(W - penX, H / 2, 4);

    // Medias lunas: arco centrado en el punto de penalty, recortado al exterior del área
    const lunaR  = FIELD_CONFIG.luna_radio * S;
    const areaBorde = areaL; // borde exterior del área en px desde cada fondo
    g.lineStyle(2, 0xffffff, 1);

    // Izquierda: el punto de penalty está a penX del fondo izquierdo (x=0)
    // El área llega hasta x=areaBorde. El arco empieza donde el círculo cruza x=areaBorde.
    const izqAngulo = Math.acos((areaBorde - penX) / lunaR);
    g.beginPath();
    g.arc(penX, H / 2, lunaR, -izqAngulo, izqAngulo, false);
    g.strokePath();

    // Derecha: simétrico
    g.beginPath();
    g.arc(W - penX, H / 2, lunaR, Math.PI - izqAngulo, Math.PI + izqAngulo, false);
    g.strokePath();

    this.add.text(10, 10, 'Campo OK - Plan 1 verificado', {
      fontSize: '14px', fill: '#ffffff'
    });
  }
}
