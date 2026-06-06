class SelectScene extends Phaser.Scene {
  constructor() { super({ key: 'SelectScene' }); }

  init(data) {
    this._equipoActual   = data.equipo;
    this._seleccion      = [];
    this._equipacion     = null;
    this._foco           = 'pokemons'; // 'pokemons' | 'equipacion' | 'listo'
    this._idxPokemon     = 0;
    this._idxTipo        = 0;
    this._idxEquipacion  = 0;
  }

  create() {
    const W = FIELD_CONFIG.largo * FIELD_CONFIG.escala;
    const H = FIELD_CONFIG.ancho * FIELD_CONFIG.escala;

    this.add.rectangle(W / 2, H / 2, W, H, 0x111111);

    const titulo = this._equipoActual === 'local' ? 'Equipo Local' : 'Equipo Visitante';
    this.add.text(W / 2, 16, 'Selección — ' + titulo, {
      fontSize: '16px', fill: '#ffcc00'
    }).setOrigin(0.5);

    this._tipos   = ['Todos'].concat([...new Set(POKEMONS.map(p => p.tipo))].sort());
    this._txtTipo = this.add.text(10, 38, '', { fontSize: '11px', fill: '#aaaaaa' });

    this._txtPokemons = [];
    for (let i = 0; i < 7; i++) {
      this._txtPokemons.push(this.add.text(10, 54 + i * 17, '', { fontSize: '11px', fill: '#ffffff' }));
    }

    this.add.text(W / 2 + 10, 38, 'Equipo (5):', { fontSize: '11px', fill: '#aaaaaa' });
    this._txtSlots = [];
    for (let i = 0; i < 5; i++) {
      this._txtSlots.push(this.add.text(W / 2 + 10, 54 + i * 17, '', { fontSize: '11px', fill: '#888888' }));
    }

    this.add.text(W / 2 + 10, 150, 'Equipación:', { fontSize: '11px', fill: '#aaaaaa' });
    this._txtEquipaciones = [];
    for (let i = 0; i < EQUIPACIONES.length; i++) {
      this._txtEquipaciones.push(
        this.add.text(W / 2 + 10, 166 + i * 16, EQUIPACIONES[i].icono + ' ' + EQUIPACIONES[i].nombre, { fontSize: '11px', fill: '#888888' })
      );
    }

    this._txtRandom = this.add.text(10, H - 44, '[ R: RANDOM ]', { fontSize: '13px', fill: '#00aaff' });
    this._txtListo  = this.add.text(W / 2, H - 44, '[ LISTO ]', { fontSize: '14px', fill: '#444444' }).setOrigin(0.5, 0);

    this.add.text(W / 2, H - 16, 'Flechas: navegar   Enter: seleccionar   R: random   T: filtro tipo   Space: confirmar', {
      fontSize: '10px', fill: '#444444'
    }).setOrigin(0.5);

    this._arriba = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this._abajo  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this._izq    = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this._der    = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this._enter  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    this._space  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this._rKey   = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    this._fKey   = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T); // T = cambiar Tipo

    this._actualizar();
  }

  _filtrados() {
    if (this._idxTipo === 0) return POKEMONS;
    return POKEMONS.filter(p => p.tipo === this._tipos[this._idxTipo]);
  }

  _disponibles() {
    const ocupada = this._equipoActual === 'local'
      ? GameState.equipoVisitante.equipacion
      : GameState.equipoLocal.equipacion;
    return EQUIPACIONES.filter(e => !ocupada || e.id !== ocupada.id);
  }

  _random() {
    this._seleccion = [];
    for (let i = 0; i < 5; i++) {
      this._seleccion.push(POKEMONS[Math.floor(Math.random() * POKEMONS.length)]);
    }
    const disp = this._disponibles();
    this._equipacion    = disp[Math.floor(Math.random() * disp.length)];
    this._idxEquipacion = EQUIPACIONES.indexOf(this._equipacion);
    this._actualizar();
  }

  _actualizar() {
    const filtrados = this._filtrados();
    const offset    = Math.max(0, this._idxPokemon - 3);

    this._txtTipo.setText('Tipo: ' + this._tipos[this._idxTipo] + '  (F: cambiar)');

    for (let i = 0; i < 7; i++) {
      const p = filtrados[offset + i];
      if (!p) { this._txtPokemons[i].setText(''); continue; }
      const sel = this._seleccion.includes(p);
      const activo = (offset + i === this._idxPokemon) && this._foco === 'pokemons';
      this._txtPokemons[i].setText((sel ? '✓ ' : '  ') + p.nombre + ' [' + p.tipo + ']');
      this._txtPokemons[i].setColor(activo ? '#ffcc00' : sel ? '#88ff88' : '#ffffff');
    }

    for (let i = 0; i < 5; i++) {
      const p = this._seleccion[i];
      this._txtSlots[i].setText((i + 1) + '. ' + (p ? p.nombre : '—'));
      this._txtSlots[i].setColor(p ? '#88ff88' : '#555555');
    }

    const disp = this._disponibles();
    this._txtEquipaciones.forEach((t, i) => {
      const eq      = EQUIPACIONES[i];
      const noDisp  = !disp.includes(eq);
      const activo  = i === this._idxEquipacion && this._foco === 'equipacion';
      const elegida = this._equipacion === eq;
      t.setColor(noDisp ? '#333333' : activo ? '#ffcc00' : elegida ? '#88ff88' : '#888888');
    });

    const listo = this._seleccion.length === 5 && this._equipacion;
    this._txtListo.setColor(listo ? (this._foco === 'listo' ? '#ffcc00' : '#00ff00') : '#444444');
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(this._rKey)) { this._random(); return; }

    if (Phaser.Input.Keyboard.JustDown(this._fKey) && this._foco === 'pokemons') {
      this._idxTipo    = (this._idxTipo + 1) % this._tipos.length;
      this._idxPokemon = 0;
      this._actualizar();
      return;
    }

    const filtrados = this._filtrados();

    if (Phaser.Input.Keyboard.JustDown(this._abajo)) {
      if (this._foco === 'pokemons')    this._idxPokemon    = Math.min(this._idxPokemon + 1, filtrados.length - 1);
      if (this._foco === 'equipacion')  this._idxEquipacion = Math.min(this._idxEquipacion + 1, EQUIPACIONES.length - 1);
      this._actualizar();
    }
    if (Phaser.Input.Keyboard.JustDown(this._arriba)) {
      if (this._foco === 'pokemons')    this._idxPokemon    = Math.max(this._idxPokemon - 1, 0);
      if (this._foco === 'equipacion')  this._idxEquipacion = Math.max(this._idxEquipacion - 1, 0);
      this._actualizar();
    }
    if (Phaser.Input.Keyboard.JustDown(this._der)) {
      if (this._foco === 'pokemons')        this._foco = 'equipacion';
      else if (this._foco === 'equipacion') this._foco = 'listo';
      this._actualizar();
    }
    if (Phaser.Input.Keyboard.JustDown(this._izq)) {
      if (this._foco === 'listo')           this._foco = 'equipacion';
      else if (this._foco === 'equipacion') this._foco = 'pokemons';
      this._actualizar();
    }

    if (Phaser.Input.Keyboard.JustDown(this._enter) || Phaser.Input.Keyboard.JustDown(this._space)) {
      // Si todo está listo, confirmar siempre
      if (this._seleccion.length === 5 && this._equipacion) {
        this._confirmar();
        return;
      }
      if (this._foco === 'pokemons') {
        const p = filtrados[this._idxPokemon];
        if (!p) return;
        const idx = this._seleccion.indexOf(p);
        if (idx >= 0) {
          this._seleccion.splice(idx, 1);
        } else if (this._seleccion.length < 5) {
          this._seleccion.push(p);
        }
        this._actualizar();
      } else if (this._foco === 'equipacion') {
        const eq = EQUIPACIONES[this._idxEquipacion];
        if (this._disponibles().includes(eq)) { this._equipacion = eq; }
        this._actualizar();
      }
    }
  }

  _confirmar() {
    const datos = { pokemons: this._seleccion, equipacion: this._equipacion, goleadores: [] };
    if (this._equipoActual === 'local') {
      GameState.equipoLocal = datos;
      this.scene.start('SelectScene', { equipo: 'visitante' });
    } else {
      GameState.equipoVisitante = datos;
      const siguiente = GameState.tipo === 'penalties' ? 'PenaltyScene' : 'GameScene';
      this.scene.start(siguiente);
    }
  }
}
