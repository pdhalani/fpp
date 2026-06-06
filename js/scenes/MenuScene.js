class MenuScene extends Phaser.Scene {
  constructor() { super({ key: 'MenuScene' }); }

  create() {
    const W = FIELD_CONFIG.largo * FIELD_CONFIG.escala;
    const H = FIELD_CONFIG.ancho * FIELD_CONFIG.escala;

    this.add.rectangle(W / 2, H / 2, W, H, 0x111111);
    this.add.text(W / 2, 24, 'FPP — Menú Principal', {
      fontSize: '18px', fill: '#ffcc00'
    }).setOrigin(0.5);

    this._modo     = 0;
    this._tipo     = 0;
    this._duracion = 0;
    this._foco     = 0; // 0=modo 1=tipo 2=duracion 3=jugar

    this._txtModo     = this.add.text(W / 2, 80,  '', { fontSize: '16px', fill: '#ffffff' }).setOrigin(0.5);
    this._txtTipo     = this.add.text(W / 2, 115, '', { fontSize: '16px', fill: '#ffffff' }).setOrigin(0.5);
    this._txtDuracion = this.add.text(W / 2, 150, '', { fontSize: '16px', fill: '#ffffff' }).setOrigin(0.5);
    this._txtJugar    = this.add.text(W / 2, 210, '[ JUGAR ]', { fontSize: '20px', fill: '#00ff00' }).setOrigin(0.5);

    this.add.text(W / 2, H - 20, 'Arriba/Abajo: cambiar fila   Izq/Der: cambiar valor   Enter: confirmar', {
      fontSize: '10px', fill: '#555555'
    }).setOrigin(0.5);

    this._actualizar();

    this._arriba = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this._abajo  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this._izq    = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this._der    = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this._enter  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
  }

  _actualizar() {
    const modos  = ['1 Jugador', '2 Jugadores'];
    const tipos  = ['Partido Normal', 'Penalties'];
    const dur    = CONFIG.duraciones[this._duracion] + ' min por parte';

    this._txtModo.setText('Modo: ' + modos[this._modo]);
    this._txtTipo.setText('Tipo: ' + tipos[this._tipo]);
    this._txtDuracion.setText(this._tipo === 1 ? '' : 'Duración: ' + dur);

    const items = [this._txtModo, this._txtTipo, this._txtDuracion, this._txtJugar];
    items.forEach((t, i) => t.setColor(i === this._foco ? '#ffcc00' : '#ffffff'));
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(this._abajo)) {
      this._foco = (this._foco + 1) % 4;
      if (this._foco === 2 && this._tipo === 1) this._foco = 3;
      this._actualizar();
    }
    if (Phaser.Input.Keyboard.JustDown(this._arriba)) {
      this._foco = (this._foco + 3) % 4;
      if (this._foco === 2 && this._tipo === 1) this._foco = 1;
      this._actualizar();
    }
    if (Phaser.Input.Keyboard.JustDown(this._der) || Phaser.Input.Keyboard.JustDown(this._izq)) {
      const dir = Phaser.Input.Keyboard.JustDown(this._der) ? 1 : -1;
      if (this._foco === 0) this._modo     = (this._modo + 1) % 2;
      if (this._foco === 1) this._tipo     = (this._tipo + 1) % 2;
      if (this._foco === 2) this._duracion = Phaser.Math.Wrap(this._duracion + dir, 0, CONFIG.duraciones.length);
      this._actualizar();
    }
    if (Phaser.Input.Keyboard.JustDown(this._enter) && this._foco === 3) {
      GameState.modo          = this._modo === 0 ? '1p' : '2p';
      GameState.tipo          = this._tipo === 0 ? 'partido' : 'penalties';
      GameState.duracionParte = CONFIG.duraciones[this._duracion];
      this.scene.start('SelectScene', { equipo: 'local' });
    }
  }
}
