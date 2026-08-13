class MenuScene extends Phaser.Scene {
  constructor() { super({ key: 'MenuScene' }); }

  create() {
    const W = FIELD_CONFIG.largo * FIELD_CONFIG.escala;
    const H = FIELD_CONFIG.ancho * FIELD_CONFIG.escala;

    this.add.rectangle(W / 2, H / 2, W, H, 0x111111);

    this.add.text(W / 2, 24, 'FPP — Menú Principal', {
      fontSize: '18px',
      fill: '#ffcc00'
    }).setOrigin(0.5);

    this._tipo = 0;
    this._modo = 0;
    this._duracion = 0;
    this._memoryCartas = 0;
    this._foco = 'tipo';

    this._opcionesMemory = [10, 20, 30, 40];

    this._txtTipo = this.add.text(W / 2, 80, '', {
      fontSize: '16px',
      fill: '#ffffff'
    }).setOrigin(0.5);

    this._txtModo = this.add.text(W / 2, 115, '', {
      fontSize: '16px',
      fill: '#ffffff'
    }).setOrigin(0.5);

    this._txtDuracion = this.add.text(W / 2, 150, '', {
      fontSize: '16px',
      fill: '#ffffff'
    }).setOrigin(0.5);

    this._txtMemory = this.add.text(W / 2, 150, '', {
      fontSize: '16px',
      fill: '#ffffff'
    }).setOrigin(0.5);

    this._txtJugar = this.add.text(W / 2, 235, '[ JUGAR ]', {
      fontSize: '20px',
      fill: '#00ff00'
    }).setOrigin(0.5);

    this.add.text(W / 2, H - 20, 'Arriba/Abajo: fila   Izq/Der: valor   Enter: confirmar', {
      fontSize: '10px',
      fill: '#555555'
    }).setOrigin(0.5);

    this._arriba = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this._abajo = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this._izq = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this._der = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this._enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    this._actualizar();
  }

  _tipoActual() {
    return ['partido', 'penalties', 'memory'][this._tipo];
  }

  _opcionesVisibles() {
    const tipo = this._tipoActual();
    if (tipo === 'partido') return ['tipo', 'modo', 'duracion', 'jugar'];
    if (tipo === 'memory') return ['tipo', 'modo', 'cartas', 'jugar'];
    return ['tipo', 'jugar'];
  }

  _normalizarFoco() {
    const opciones = this._opcionesVisibles();
    if (!opciones.includes(this._foco)) this._foco = opciones[0];
  }

  _actualizar() {
    const modos = ['1 Jugador', '2 Jugadores'];
    const tipos = ['Partido Normal', 'Penalties', 'Bonus: Memory'];
    const tipoActual = this._tipoActual();
    const esPartido = tipoActual === 'partido';
    const esMemory = tipoActual === 'memory';

    this._normalizarFoco();

    this._txtTipo.setText('Tipo: ' + tipos[this._tipo]);
    this._txtModo.setText(tipoActual === 'penalties'
      ? ''
      : 'Modo: ' + (esMemory ? modos[0] : modos[this._modo]));

    this._txtDuracion.setText(
      esPartido ? 'Duración: ' + CONFIG.duraciones[this._duracion] + ' min por parte' : ''
    );

    this._txtMemory.setText(
      esMemory
        ? 'Cartas: ' + this._opcionesMemory[this._memoryCartas]
        : ''
    );

    const items = {
      tipo: this._txtTipo, modo: this._txtModo, duracion: this._txtDuracion,
      cartas: this._txtMemory, jugar: this._txtJugar
    };
    Object.entries(items).forEach(([nombre, texto]) => {
      texto.setColor(nombre === this._foco ? '#ffcc00' : '#ffffff');
    });
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(this._abajo)) {
      const opciones = this._opcionesVisibles();
      this._foco = opciones[(opciones.indexOf(this._foco) + 1) % opciones.length];
      this._normalizarFoco();
      this._actualizar();
    }

    if (Phaser.Input.Keyboard.JustDown(this._arriba)) {
      const opciones = this._opcionesVisibles();
      this._foco = opciones[Phaser.Math.Wrap(opciones.indexOf(this._foco) - 1, 0, opciones.length)];
      this._normalizarFoco();
      this._actualizar();
    }

    if (Phaser.Input.Keyboard.JustDown(this._der) || Phaser.Input.Keyboard.JustDown(this._izq)) {
      const dir = Phaser.Input.Keyboard.JustDown(this._der) ? 1 : -1;

      if (this._foco === 'tipo') {
        this._tipo = Phaser.Math.Wrap(this._tipo + dir, 0, 3);
      }

      if (this._foco === 'modo') {
        this._modo = Phaser.Math.Wrap(this._modo + dir, 0, 2);
      }

      if (this._foco === 'duracion') {
        this._duracion = Phaser.Math.Wrap(this._duracion + dir, 0, CONFIG.duraciones.length);
      }

      if (this._foco === 'cartas') {
        this._memoryCartas = Phaser.Math.Wrap(this._memoryCartas + dir, 0, this._opcionesMemory.length);
      }

      this._actualizar();
    }

    if (Phaser.Input.Keyboard.JustDown(this._enter) && this._foco === 'jugar') {
      const tipo = this._tipoActual();
      GameState.modo = tipo === 'memory' ? '1p' : (this._modo === 0 ? '1p' : '2p');

      if (tipo === 'memory') {
        GameState.tipo = 'memory';
        GameState.memoryCartas = this._opcionesMemory[this._memoryCartas];
        this.scene.start('MemoryScene');
        return;
      }

      GameState.tipo = tipo;
      GameState.duracionParte = CONFIG.duraciones[this._duracion];

      this.scene.start('SelectScene', { equipo: 'local' });
    }
  }
}
