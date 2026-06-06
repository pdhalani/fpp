class PlaceholderGameScene extends Phaser.Scene {
  constructor() { super({ key: 'PlaceholderGameScene' }); }

  create() {
    const W = FIELD_CONFIG.largo * FIELD_CONFIG.escala;
    const H = FIELD_CONFIG.ancho * FIELD_CONFIG.escala;

    GameState.marcador = { local: 2, visitante: 1 };
    GameState.equipoLocal.goleadores     = ['Pikachu (25\')', 'Charizard (67\')'];
    GameState.equipoVisitante.goleadores = ['Mewtwo (34\')'];

    this.add.rectangle(W / 2, H / 2, W, H, 0x1a3a1a);
    this.add.text(W / 2, H / 2 - 20, '[JUEGO — Plan 4]', { fontSize: '18px', fill: '#888888' }).setOrigin(0.5);
    this.add.text(W / 2, H / 2 + 20, 'Pulsa cualquier tecla para ver el resumen', { fontSize: '12px', fill: '#555555' }).setOrigin(0.5);

    this.input.keyboard.once('keydown', () => this.scene.start('SummaryScene'));
  }
}
