const ICONO_LISTA = 10;
const ICONO_SLOT = 22;
const MAX_SELECCION = 6;
const ROLES_EQUIPO = ['POR', 'DEF', 'DEF', 'MED', 'MED', 'DEL'];

class SelectScene extends Phaser.Scene {
  constructor() { super({ key: 'SelectScene' }); }

  init(data) {
    this._equipoActual   = data.equipo;
    this._seleccion      = [];
    this._equipacion     = null;
    this._foco           = 'pokemons';
    this._idxPokemon     = 0;
    this._idxTipo        = 0;
    this._idxEquipacion  = 0;
  }

  create() {
    const W = FIELD_CONFIG.largo * FIELD_CONFIG.escala;
    const H = FIELD_CONFIG.ancho * FIELD_CONFIG.escala;

    this._W = W;
    this._H = H;
    this._pokemons = PokemonCatalog.seleccionables();
    this._tipos = ['Todos'].concat([...new Set(this._pokemons.map(p => p.tipo))].sort());

    this.add.rectangle(W / 2, H / 2, W, H, 0x111111);

    const titulo = this._equipoActual === 'local' ? 'Equipo Local' : 'Equipo Visitante';

    this.add.text(W / 2, 14, 'Selección — ' + titulo, {
      fontSize: '16px',
      fill: '#ffcc00'
    }).setOrigin(0.5);

    this._crearPanelLista();
    this._crearPanelAlineacion();
    this._crearPanelDetalle();
    this._crearPanelEquipaciones();
    this._crearPanelEquipoAnterior();
    this._crearControles();

    this._actualizar();
  }

  _crearPanelLista() {
    this._txtTipo = this.add.text(16, 36, '', {
      fontSize: '12px',
      fill: '#aaaaaa'
    });

    this.add.text(16, 54, 'Pokémons disponibles', {
      fontSize: '12px',
      fill: '#ffffff'
    });

    this._txtPokemons = [];
    this._imgPokemons = [];

    for (let i = 0; i < 11; i++) {
      const y = 74 + i * 18;

      this._imgPokemons.push(
        this.add.image(24, y + 6, null)
          .setDisplaySize(ICONO_LISTA, ICONO_LISTA)
          .setVisible(false)
      );

      this._txtPokemons.push(
        this.add.text(40, y, '', {
          fontSize: '10px',
          fill: '#ffffff'
        })
      );
    }
  }

  _crearPanelAlineacion() {
    const cx = this._W * 0.62;
    const cy = 150;

    this.add.text(cx, 36, 'Alineación', {
      fontSize: '12px',
      fill: '#ffffff'
    }).setOrigin(0.5);

    this.add.rectangle(cx, cy, 250, 190, 0x1f5f2a, 0.45)
      .setStrokeStyle(1, 0x66aa66, 0.5);

    this._slotPos = [
      { x: cx - 95, y: cy,      rol: 'POR' },
      { x: cx - 38, y: cy - 45, rol: 'DEF' },
      { x: cx - 38, y: cy + 45, rol: 'DEF' },
      { x: cx + 28, y: cy - 35, rol: 'MED' },
      { x: cx + 28, y: cy + 35, rol: 'MED' },
      { x: cx + 92, y: cy,      rol: 'DEL' }
    ];

    this._imgSlots = [];
    this._txtSlots = [];

    for (let i = 0; i < MAX_SELECCION; i++) {
      const pos = this._slotPos[i];

      this.add.circle(pos.x, pos.y, 18, 0x000000, 0.35)
        .setStrokeStyle(1, 0xffffff, 0.35);

      this._imgSlots.push(
        this.add.image(pos.x, pos.y - 4, null)
          .setDisplaySize(ICONO_SLOT, ICONO_SLOT)
          .setVisible(false)
      );

      this._txtSlots.push(
        this.add.text(pos.x, pos.y + 14, pos.rol, {
          fontSize: '9px',
          fill: '#aaaaaa',
          align: 'center'
        }).setOrigin(0.5)
      );
    }
  }

  _crearPanelDetalle() {
    this._txtDetalle = this.add.text(this._W * 0.48, this._H - 128, '', {
      fontSize: '11px',
      fill: '#ffffff',
      lineSpacing: 4
    });
  }

  _crearPanelEquipaciones() {
    const x = 16;
    const yBase = this._H - 114;

    this.add.text(x, yBase, 'Equipación', {
      fontSize: '12px',
      fill: '#aaaaaa'
    });

    this._txtEquipaciones = [];

    for (let i = 0; i < EQUIPACIONES.length; i++) {
      this._txtEquipaciones.push(
        this.add.text(
          x,
          yBase + 17 + i * 14,
          EQUIPACIONES[i].icono + ' ' + EQUIPACIONES[i].nombre,
          { fontSize: '10px', fill: '#888888' }
        )
      );
    }

    this._txtRandom = this.add.text(this._W / 2 - 55, this._H - 44, '[ R: RANDOM ]', {
      fontSize: '13px',
      fill: '#00aaff'
    });

    this._txtListo = this.add.text(this._W - 100, this._H - 44, '[ LISTO ]', {
      fontSize: '14px',
      fill: '#444444'
    });
  }

  _crearPanelEquipoAnterior() {
    const x = this._W - 180;
    const y = 36;

    this.add.text(x, y, 'Equipo rival', {
      fontSize: '12px',
      fill: '#aaaaaa'
    });

    this._txtEquipoAnterior = [];

    for (let i = 0; i < MAX_SELECCION; i++) {
      this._txtEquipoAnterior.push(
        this.add.text(x, y + 18 + i * 14, '', {
          fontSize: '9px',
          fill: '#666666'
        })
      );
    }
  }

  _crearControles() {
    this.add.text(
      this._W / 2,
      this._H - 16,
      'Flechas: navegar   Enter: seleccionar   T: tipo   R: random   Space: confirmar',
      { fontSize: '10px', fill: '#555555' }
    ).setOrigin(0.5);

    this._arriba = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this._abajo  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this._izq    = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this._der    = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this._enter  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    this._space  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this._rKey   = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    this._fKey   = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
  }

  _rolTexto(i) {
    return ROLES_EQUIPO[i] || 'JUG';
  }

  _statsTexto(p) {
    const s = p.stats || {};
    return 'SPD ' + (s.speed || 100) +
      '   ATK ' + (s.attack || 0) +
      '   DEF ' + (s.defense || 0);
  }

  _filtrados() {
    if (this._idxTipo === 0) return this._pokemons;
    return this._pokemons.filter(p => p.tipo === this._tipos[this._idxTipo]);
  }

  _disponibles() {
    const ocupada = this._equipoActual === 'local'
      ? GameState.equipoVisitante.equipacion
      : GameState.equipoLocal.equipacion;

    return EQUIPACIONES.filter(e => !ocupada || e.id !== ocupada.id);
  }

  _random() {
    this._seleccion = [];

    const disponibles = [...this._pokemons];

    for (let i = 0; i < MAX_SELECCION && disponibles.length > 0; i++) {
      const idx = Math.floor(Math.random() * disponibles.length);
      this._seleccion.push(disponibles[idx]);
      disponibles.splice(idx, 1);
    }

    const disp = this._disponibles();
    this._equipacion = disp[Math.floor(Math.random() * disp.length)];
    this._idxEquipacion = EQUIPACIONES.indexOf(this._equipacion);

    this._actualizar();
  }

  _actualizar() {
    const filtrados = this._filtrados();
    const offset = Math.max(0, this._idxPokemon - 5);

    this._txtTipo.setText('Tipo: ' + this._tipos[this._idxTipo] + '  (T)');

    for (let i = 0; i < 11; i++) {
      const p = filtrados[offset + i];

      if (!p) {
        this._txtPokemons[i].setText('');
        this._imgPokemons[i].setVisible(false);
        continue;
      }

      const sel = this._seleccion.includes(p);
      const activo = (offset + i === this._idxPokemon) && this._foco === 'pokemons';

      this._imgPokemons[i]
        .setTexture(PokemonCatalog.assetKey(p))
        .setVisible(true);

      this._txtPokemons[i].setText(
        (activo ? '▶ ' : sel ? '✓ ' : '  ') +
        p.nombre +
        ' [' + p.tipo + ']'
      );

      this._txtPokemons[i].setColor(activo ? '#ffcc00' : sel ? '#88ff88' : '#ffffff');
    }

    for (let i = 0; i < MAX_SELECCION; i++) {
      const p = this._seleccion[i];

      this._txtSlots[i].setText(
        this._rolTexto(i) + (p ? '\n' + p.nombre : '')
      );

      this._txtSlots[i].setColor(p ? '#88ff88' : '#aaaaaa');

      if (p) {
        this._imgSlots[i]
          .setTexture(PokemonCatalog.assetKey(p))
          .setVisible(true);
      } else {
        this._imgSlots[i].setVisible(false);
      }
    }

    const activo = filtrados[this._idxPokemon];

    this._txtDetalle.setText(
      activo
        ? activo.nombre + '\n' +
          'Tipo: ' + activo.tipo + '\n' +
          this._statsTexto(activo) + '\n' +
          'Rol al seleccionar: ' + this._rolTexto(this._seleccion.length)
        : ''
    );

    const anterior = this._equipoActual === 'visitante'
      ? GameState.equipoLocal
      : null;

    const anteriorLista = anterior
      ? [anterior.portero].concat(anterior.pokemons || [])
      : [];

    for (let i = 0; i < MAX_SELECCION; i++) {
      const p = anteriorLista[i];
      this._txtEquipoAnterior[i].setText(p ? this._rolTexto(i) + ' ' + p.nombre : '');
    }

    const disp = this._disponibles();

    this._txtEquipaciones.forEach((t, i) => {
      const eq = EQUIPACIONES[i];
      const noDisp = !disp.includes(eq);
      const activo = i === this._idxEquipacion && this._foco === 'equipacion';
      const elegida = this._equipacion === eq;

      t.setColor(noDisp ? '#333333' : activo ? '#ffcc00' : elegida ? '#88ff88' : '#888888');
    });

    const listo = this._seleccion.length === MAX_SELECCION && this._equipacion;
    this._txtListo.setColor(listo ? (this._foco === 'listo' ? '#ffcc00' : '#00ff00') : '#444444');
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(this._rKey)) {
      this._random();
      return;
    }

    if (Phaser.Input.Keyboard.JustDown(this._fKey) && this._foco === 'pokemons') {
      this._idxTipo = (this._idxTipo + 1) % this._tipos.length;
      this._idxPokemon = 0;
      this._actualizar();
      return;
    }

    const filtrados = this._filtrados();

    if (Phaser.Input.Keyboard.JustDown(this._abajo)) {
      if (this._foco === 'pokemons') {
        this._idxPokemon = Math.min(this._idxPokemon + 1, filtrados.length - 1);
      }

      if (this._foco === 'equipacion') {
        this._idxEquipacion = Math.min(this._idxEquipacion + 1, EQUIPACIONES.length - 1);
      }

      this._actualizar();
    }

    if (Phaser.Input.Keyboard.JustDown(this._arriba)) {
      if (this._foco === 'pokemons') {
        this._idxPokemon = Math.max(this._idxPokemon - 1, 0);
      }

      if (this._foco === 'equipacion') {
        this._idxEquipacion = Math.max(this._idxEquipacion - 1, 0);
      }

      this._actualizar();
    }

    if (Phaser.Input.Keyboard.JustDown(this._der)) {
      if (this._foco === 'pokemons') this._foco = 'equipacion';
      else if (this._foco === 'equipacion') this._foco = 'listo';

      this._actualizar();
    }

    if (Phaser.Input.Keyboard.JustDown(this._izq)) {
      if (this._foco === 'listo') this._foco = 'equipacion';
      else if (this._foco === 'equipacion') this._foco = 'pokemons';

      this._actualizar();
    }

    if (Phaser.Input.Keyboard.JustDown(this._enter) || Phaser.Input.Keyboard.JustDown(this._space)) {
      if (this._seleccion.length === MAX_SELECCION && this._equipacion) {
        this._confirmar();
        return;
      }

      if (this._foco === 'pokemons') {
        const p = filtrados[this._idxPokemon];
        if (!p) return;

        const idx = this._seleccion.indexOf(p);

        if (idx >= 0) {
          this._seleccion.splice(idx, 1);
        } else if (this._seleccion.length < MAX_SELECCION) {
          this._seleccion.push(p);
        }

        this._actualizar();
      } else if (this._foco === 'equipacion') {
        const eq = EQUIPACIONES[this._idxEquipacion];

        if (this._disponibles().includes(eq)) {
          this._equipacion = eq;
        }

        this._actualizar();
      }
    }
  }

  _confirmar() {
    const datos = {
      portero: this._seleccion[0],
      pokemons: this._seleccion.slice(1),
      roles: ROLES_EQUIPO,
      equipacion: this._equipacion,
      goleadores: []
    };

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