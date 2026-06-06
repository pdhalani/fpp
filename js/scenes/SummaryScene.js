class SummaryScene extends Phaser.Scene {
  constructor() { super({ key: 'SummaryScene' }); }

  create() {
    const W = FIELD_CONFIG.largo * FIELD_CONFIG.escala;
    const H = FIELD_CONFIG.ancho * FIELD_CONFIG.escala;

    this.add.rectangle(W / 2, H / 2, W, H, 0x111111);

    this.add.text(W / 2, 24, 'Resultado Final', {
      fontSize: '20px', fill: '#ffcc00'
    }).setOrigin(0.5);

    const m   = GameState.marcador;
    const eqL = GameState.equipoLocal.equipacion;
    const eqV = GameState.equipoVisitante.equipacion;
    const nomL = eqL ? eqL.icono + ' ' + eqL.nombre : 'Local';
    const nomV = eqV ? eqV.icono + ' ' + eqV.nombre : 'Visitante';

    this.add.text(W / 2, 70,
      nomL + '   ' + m.local + ' — ' + m.visitante + '   ' + nomV,
      { fontSize: '20px', fill: '#ffffff' }
    ).setOrigin(0.5);

    const goles = [
      ...GameState.equipoLocal.goleadores.map(n => n + ' (' + (eqL ? eqL.nombre : 'L') + ')'),
      ...GameState.equipoVisitante.goleadores.map(n => n + ' (' + (eqV ? eqV.nombre : 'V') + ')')
    ];

    if (goles.length > 0) {
      this.add.text(W / 2, 110, 'Goleadores:', { fontSize: '13px', fill: '#aaaaaa' }).setOrigin(0.5);
      goles.forEach((g, i) => {
        this.add.text(W / 2, 130 + i * 18, g, { fontSize: '12px', fill: '#ffffff' }).setOrigin(0.5);
      });
    } else {
      this.add.text(W / 2, 110, 'Sin goles', { fontSize: '13px', fill: '#555555' }).setOrigin(0.5);
    }

    const volver = this.add.text(W / 2, H - 30, '[ Pulsa cualquier tecla — Volver al Menú ]', {
      fontSize: '14px', fill: '#00ff00'
    }).setOrigin(0.5);

    this.tweens.add({ targets: volver, alpha: 0.3, duration: 700, yoyo: true, repeat: -1 });

    this.input.keyboard.once('keydown', () => this.scene.start('MenuScene'));
  }
}
