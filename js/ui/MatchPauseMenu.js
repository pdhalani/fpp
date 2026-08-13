class MatchPauseMenu {
  constructor(scene, width, height) {
    this._scene = scene;
    this._foco = 0;
    this.panel = scene.add.container(width / 2, height / 2).setVisible(false).setDepth(30);
    const fondo = scene.add.rectangle(0, 0, 260, 120, 0x000000, 0.85);
    const titulo = scene.add.text(0, -35, 'PAUSA', { fontSize: '22px', fill: '#ffcc00' }).setOrigin(0.5);
    this.continuar = scene.add.text(0, 5, '[ Continuar ]', { fontSize: '16px' }).setOrigin(0.5);
    this.abandonar = scene.add.text(0, 35, '[ Abandonar ]', { fontSize: '16px' }).setOrigin(0.5);
    this.panel.add([fondo, titulo, this.continuar, this.abandonar]);

    this.arriba = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.abajo = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.enter = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    this._actualizarFoco();
  }

  abrir() {
    this._foco = 0;
    this.panel.setVisible(true);
    this._actualizarFoco();
  }

  procesarInput() {
    if (Phaser.Input.Keyboard.JustDown(this.abajo)) this._foco = 1;
    if (Phaser.Input.Keyboard.JustDown(this.arriba)) this._foco = 0;
    this._actualizarFoco();

    if (Phaser.Input.Keyboard.JustDown(this.enter)) {
      this.panel.setVisible(false);
      return this._foco === 0 ? 'continuar' : 'abandonar';
    }
    return null;
  }

  _actualizarFoco() {
    this.continuar.setColor(this._foco === 0 ? '#ffcc00' : '#ff4444');
    this.abandonar.setColor(this._foco === 1 ? '#ffcc00' : '#ff4444');
  }
}
