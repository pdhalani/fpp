const MAX_SELECCION = 6;
const ROLES_EQUIPO = ['POR', 'DFI', 'DFD', 'MCI', 'MCD', 'DC'];

class SelectScene extends Phaser.Scene {
  constructor() { super({ key: 'SelectScene' }); }

  create() {
    this._W = FIELD_CONFIG.largo * FIELD_CONFIG.escala;
    this._H = FIELD_CONFIG.ancho * FIELD_CONFIG.escala;
    this._pokemons = PokemonCatalog.seleccionables();
    this._pokemons.sort((a, b) => a.tipo.localeCompare(b.tipo) || a.nombre.localeCompare(b.nombre));
    this._equipoActivo = 'local';
    this._indice = { local: 0, visitante: 0 };
    this._confirmados = { local: false, visitante: false };
    this._paso = 'modo';
    this._opcionModo = 0;
    this._modoElegido = null;
    this._origenSeleccion = null;
    this._ultimoMovimientoLista = 0;
    this._equipos = {
      local: { seleccion: [], equipacion: EQUIPACIONES[0] || null },
      visitante: { seleccion: [], equipacion: EQUIPACIONES[1] || EQUIPACIONES[0] || null }
    };

    this._crearFondo();
    this._crearCabecera();
    this._crearRosters();
    this._crearCampoVirtual();
    this._crearPie();
    this._crearControles();
    this._actualizar();
  }

  _crearFondo() {
    const { _W: W, _H: H } = this;
    this.add.rectangle(W / 2, H / 2, W, H, 0x101318);
    this.add.line(W / 2, 84, 0, 0, W, 0, 0x8a8f98, 0.7);
    this.add.line(W / 2, 310, 0, 0, W, 0, 0x8a8f98, 0.7);
  }

  _crearCabecera() {
    const W = this._W;
    this.add.text(W / 2, 14, 'SELECCIÓN DE EQUIPO & ALINEACIÓN', {
      fontSize: '15px', fill: '#ffcc00', fontStyle: 'bold'
    }).setOrigin(0.5);
    this._selectorModo = this.add.text(W / 2, 31, '', {
      fontSize: '11px', fill: '#ffcc00', fontStyle: 'bold'
    }).setOrigin(0.5);

    this._tituloLocal = this.add.text(100, 45, 'EQUIPO LOCAL', {
      fontSize: '12px', fill: '#ff6b6b', fontStyle: 'bold'
    }).setOrigin(0.5);
    this._tituloVisitante = this.add.text(500, 45, 'EQUIPO VISITANTE', {
      fontSize: '12px', fill: '#69aaff', fontStyle: 'bold'
    }).setOrigin(0.5);
    this._kitLocal = this.add.text(100, 65, '', { fontSize: '10px', fill: '#ffffff' }).setOrigin(0.5);
    this._kitVisitante = this.add.text(500, 65, '', { fontSize: '10px', fill: '#ffffff' }).setOrigin(0.5);

    this.add.text(100, 97, 'ROSTER ROJO · LISTA GLOBAL', { fontSize: '10px', fill: '#ff8888' }).setOrigin(0.5);
    this.add.text(300, 97, 'CAMPO VIRTUAL', { fontSize: '10px', fill: '#aaffaa' }).setOrigin(0.5);
    this.add.text(500, 97, 'ROSTER AZUL · LISTA GLOBAL', { fontSize: '10px', fill: '#88aaff' }).setOrigin(0.5);
  }

  _crearRosters() {
    this._filasRoster = { local: [], visitante: [] };
    ['local', 'visitante'].forEach(equipo => {
      const x = equipo === 'local' ? 8 : 402;
      const color = equipo === 'local' ? '#ffaaaa' : '#aaaaff';
      this.add.text(x, 111, 'Pokémon       Tipo  Atq Def Vel Pos', {
        fontSize: '8px', fill: '#aaaaaa'
      });
      for (let i = 0; i < 10; i++) {
        const y = 130 + i * 16;
        const fila = this.add.text(x, y, '', { fontSize: '8px', fill: color });
        this._filasRoster[equipo].push(fila);
      }
    });
  }

  _crearCampoVirtual() {
    const x = 220, y = 108, w = 160, h = 190;
    this.add.rectangle(x + w / 2, y + h / 2, w, h, 0x1e6b38, 0.7)
      .setStrokeStyle(1, 0xffffff, 0.8);
    const lineasCampo = this.add.graphics();
    lineasCampo.lineStyle(1, 0xffffff, 0.6);
    lineasCampo.lineBetween(x, y + h / 2, x + w, y + h / 2);
    this.add.circle(x + w / 2, y + h / 2, 20).setStrokeStyle(1, 0xffffff, 0.6);

    this._jugadoresCampo = { local: [], visitante: [] };
    ['local', 'visitante'].forEach(equipo => {
      for (let i = 0; i < MAX_SELECCION; i++) {
        const icono = this.add.image(0, 0, null)
          .setOrigin(0.5, 0.5).setDisplaySize(14, 14).setVisible(false).setDepth(3);
        const circulo = this.add.circle(0, 0, 10, 0xffffff, 0.85).setVisible(false).setDepth(2);
        const etiqueta = this.add.text(0, 0, '', { fontSize: '6px', fill: '#ffffff', fontStyle: 'bold' })
          .setOrigin(0.5).setDepth(4).setVisible(false);
        this._jugadoresCampo[equipo].push({ circulo, icono, etiqueta });
      }
    });
  }

  _crearPie() {
    this._btnLocal = this.add.text(100, 287, '[ CONFIRMAR LOCAL ]', { fontSize: '10px' }).setOrigin(0.5);
    this._btnVisitante = this.add.text(500, 287, '[ CONFIRMAR VISITANTE ]', { fontSize: '10px' }).setOrigin(0.5);
    this._mensaje = this.add.text(this._W / 2, 326, '', { fontSize: '10px', fill: '#aaaaaa' }).setOrigin(0.5);
    this._start = this.add.text(this._W / 2, 344, '', {
      fontSize: '13px', fill: '#555555', fontStyle: 'bold'
    }).setOrigin(0.5);
  }

  _crearControles() {
    this.add.text(this._W / 2, this._H - 5,
      'ESC: volver · ↑↓: navegar · ←→: elegir · ENTER: confirmar',
      { fontSize: '8px', fill: '#777777' }).setOrigin(0.5);
    this._arriba = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this._abajo = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this._izq = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this._der = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this._enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    this._space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this._esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
  }

  _equipoRival(equipo) { return equipo === 'local' ? 'visitante' : 'local'; }

  _kitDisponible(equipo, kit) {
    const rival = this._equipos[this._equipoRival(equipo)].equipacion;
    return !rival || rival.id !== kit.id;
  }

  _cambiarKit(direccion) {
    const equipo = this._equipoActivo;
    const actual = this._equipos[equipo].equipacion;
    let indice = Math.max(0, EQUIPACIONES.indexOf(actual));
    for (let i = 0; i < EQUIPACIONES.length; i++) {
      indice = Phaser.Math.Wrap(indice + direccion, 0, EQUIPACIONES.length);
      if (this._kitDisponible(equipo, EQUIPACIONES[indice])) {
        this._equipos[equipo].equipacion = EQUIPACIONES[indice];
        return;
      }
    }
  }

  _alternarPokemon() {
    const equipo = this._equipos[this._equipoActivo];
    const pokemon = this._pokemons[this._indice[this._equipoActivo]];
    const indice = equipo.seleccion.indexOf(pokemon);
    if (indice >= 0) equipo.seleccion.splice(indice, 1);
    else if (equipo.seleccion.length < MAX_SELECCION) equipo.seleccion.push(pokemon);
  }

  _aleatorioEquipo(equipo) {
    const datos = this._equipos[equipo];
    datos.seleccion = Phaser.Utils.Array.Shuffle([...this._pokemons]).slice(0, MAX_SELECCION);
    const disponibles = EQUIPACIONES.filter(kit => this._kitDisponible(equipo, kit));
    datos.equipacion = Phaser.Utils.Array.GetRandom(disponibles);
  }

  _aleatorio() {
    this._aleatorioEquipo('local');
    this._aleatorioEquipo('visitante');
    this._confirmados.local = true;
    this._confirmados.visitante = true;
    this._modoElegido = 'RANDOM';
    this._guardarEquipo('local');
    this._guardarEquipo('visitante');
    this._origenSeleccion = 'random';
    this._paso = 'jugar';
  }

  _filaPokemon(pokemon, posicion) {
    const stats = pokemon.stats || {};
    const nombre = pokemon.nombre.length > 11 ? pokemon.nombre.slice(0, 10) + '…' : pokemon.nombre;
    const tipo = (pokemon.tipo || '?').slice(0, 5);
    const valor = stat => String(stats[stat] || 0).padStart(3, ' ');
    return nombre.padEnd(12, ' ') + tipo.padEnd(6, ' ') + valor('attack') + ' ' +
      valor('defense') + ' ' + valor('speed') + ' ' + (ROLES_EQUIPO[posicion] || '--');
  }

  _actualizarRoster(equipo) {
    const seleccion = this._equipos[equipo].seleccion;
    const indice = this._indice[equipo];
    const offset = Math.max(0, Math.min(indice - 4, this._pokemons.length - 10));
    const colorBase = equipo === 'local' ? '#ffaaaa' : '#aaaaff';

    this._filasRoster[equipo].forEach((fila, i) => {
      const pokemon = this._pokemons[offset + i];
      if (!pokemon) { fila.setText(''); return; }
      const posicion = seleccion.indexOf(pokemon);
      const actual = equipo === this._equipoActivo && offset + i === indice;
      fila.setText((actual ? '▶ ' : posicion >= 0 ? '✓ ' : '  ') + this._filaPokemon(pokemon, posicion));
      fila.setColor(actual ? '#ffcc00' : posicion >= 0 ? '#88ff88' : colorBase);
    });
  }

  _posicionCampo(equipo, indice) {
    const formacionLocal = [
      { x: 300, y: 278 }, { x: 270, y: 258 }, { x: 330, y: 258 },
      { x: 270, y: 238 }, { x: 330, y: 238 }, { x: 300, y: 220 }
    ];
    const formacionVisitante = [
      { x: 300, y: 128 }, { x: 270, y: 148 }, { x: 330, y: 148 },
      { x: 270, y: 168 }, { x: 330, y: 168 }, { x: 300, y: 186 }
    ];
    return (equipo === 'local' ? formacionLocal : formacionVisitante)[indice];
  }

  _actualizarCampo(equipo) {
    const datos = this._equipos[equipo];
    const color = Phaser.Display.Color.HexStringToColor(datos.equipacion.color_jugadores).color;
    this._jugadoresCampo[equipo].forEach((jugador, i) => {
      const pokemon = datos.seleccion[i];
      const visible = Boolean(pokemon);
      jugador.circulo.setVisible(visible).setFillStyle(color);
      jugador.icono.setVisible(visible);
      jugador.etiqueta.setVisible(visible);
      if (!visible) return;
      const pos = this._posicionCampo(equipo, i);
      jugador.circulo.setPosition(pos.x, pos.y);
      jugador.icono.setTexture(PokemonCatalog.assetKey(pokemon)).setPosition(pos.x, pos.y);
      jugador.etiqueta.setText(ROLES_EQUIPO[i]).setPosition(pos.x, pos.y + 12);
    });
  }

  _actualizar() {
    ['local', 'visitante'].forEach(equipo => {
      const datos = this._equipos[equipo];
      const activo = equipo === this._equipoActivo;
      const kitTexto = '◀ EQUIPACIÓN: ' + datos.equipacion.icono + ' ' + datos.equipacion.nombre + ' ▶';
      (equipo === 'local' ? this._kitLocal : this._kitVisitante).setText(kitTexto)
        .setColor(activo ? '#ffcc00' : '#cccccc');
      (equipo === 'local' ? this._tituloLocal : this._tituloVisitante)
        .setColor(activo ? '#ffcc00' : equipo === 'local' ? '#ff6b6b' : '#69aaff');
      const completo = datos.seleccion.length === MAX_SELECCION;
      (equipo === 'local' ? this._btnLocal : this._btnVisitante)
        .setColor(completo ? '#88ff88' : '#666666');
      this._actualizarRoster(equipo);
      this._actualizarCampo(equipo);
    });

    const mensajes = {
      modo: 'Elige cómo formar los equipos: MANUAL o RANDOM',
      equipo: 'Manual: elige el equipo que quieres configurar',
      equipacion: 'Equipación: usa ← / → y confirma con ENTER',
      pokemon: 'Selecciona 6 Pokémon con ENTER · lista ordenada por tipo',
      confirmar: 'Equipo completo. ENTER para confirmar la alineación',
      jugar: this._origenSeleccion === 'random'
        ? 'Equipos aleatorios listos. Confirma para jugar'
        : 'Los dos equipos están listos. Confirma para jugar'
    };
    const nombresModo = ['[ MANUAL ]', '[ RANDOM ]'];
    this._mensaje.setText(mensajes[this._paso]);
    if (this._paso === 'modo') {
      this._selectorModo.setText(nombresModo.map((nombre, i) =>
        i === this._opcionModo ? '▶ ' + nombre : '  ' + nombre
      ).join('     ')).setColor('#ffcc00');
    } else {
      this._selectorModo.setText('Modo: ' + this._modoElegido).setColor('#aaaaaa');
    }
    if (this._paso === 'modo') {
      this._start.setText('');
    } else if (this._paso === 'jugar') {
      this._start.setText('[ SPACE / ENTER: JUGAR ]').setColor('#00ff00');
    } else {
      this._start.setText('');
    }
  }

  _guardarEquipo(equipo) {
    const datos = this._equipos[equipo];
    const destino = equipo === 'local' ? 'equipoLocal' : 'equipoVisitante';
    GameState[destino] = {
      portero: datos.seleccion[0], pokemons: datos.seleccion.slice(1), roles: ROLES_EQUIPO,
      equipacion: datos.equipacion, goleadores: []
    };
  }

  _jugar() {
    if (!this._confirmados.local || !this._confirmados.visitante) return;
    this.scene.start(GameState.tipo === 'penalties' ? 'PenaltyScene' : 'GameScene');
  }

  _moverLista(direccion) {
    this._indice[this._equipoActivo] = Phaser.Math.Clamp(
      this._indice[this._equipoActivo] + direccion, 0, this._pokemons.length - 1
    );
  }

  _confirmarEquipo() {
    this._confirmados[this._equipoActivo] = true;
    this._guardarEquipo(this._equipoActivo);
    const siguiente = this._equipoRival(this._equipoActivo);
    if (this._confirmados[siguiente]) {
      this._paso = 'jugar';
      return;
    }
    this._equipoActivo = siguiente;
    this._paso = 'equipacion';
  }

  _volver() {
    if (this._paso === 'modo') {
      this.scene.start('MenuScene');
    } else if (this._paso === 'equipo') {
      this._paso = 'modo';
    } else if (this._paso === 'equipacion') {
      this._paso = 'equipo';
    } else if (this._paso === 'pokemon') {
      this._paso = 'equipacion';
    } else if (this._paso === 'confirmar') {
      this._paso = 'pokemon';
    } else if (this._paso === 'jugar') {
      this._paso = 'equipo';
    }
  }

  update(time) {
    if (Phaser.Input.Keyboard.JustDown(this._esc)) {
      this._volver();
      this._actualizar();
      return;
    }

    if (this._paso === 'modo') {
      if (Phaser.Input.Keyboard.JustDown(this._izq) || Phaser.Input.Keyboard.JustDown(this._der)) {
        this._opcionModo = 1 - this._opcionModo;
      }
      if (Phaser.Input.Keyboard.JustDown(this._enter)) {
        if (this._opcionModo === 1) this._aleatorio();
        else {
          this._modoElegido = 'MANUAL';
          this._paso = 'equipo';
        }
      }
    } else if (this._paso === 'equipo') {
      if (Phaser.Input.Keyboard.JustDown(this._izq)) this._equipoActivo = 'local';
      if (Phaser.Input.Keyboard.JustDown(this._der)) this._equipoActivo = 'visitante';
      if (Phaser.Input.Keyboard.JustDown(this._enter) && !this._confirmados[this._equipoActivo]) {
        this._paso = 'equipacion';
      }
    } else if (this._paso === 'equipacion') {
      if (Phaser.Input.Keyboard.JustDown(this._izq)) this._cambiarKit(-1);
      if (Phaser.Input.Keyboard.JustDown(this._der)) this._cambiarKit(1);
      if (Phaser.Input.Keyboard.JustDown(this._enter)) this._paso = 'pokemon';
    } else if (this._paso === 'pokemon') {
      const inicialArriba = Phaser.Input.Keyboard.JustDown(this._arriba);
      const inicialAbajo = Phaser.Input.Keyboard.JustDown(this._abajo);
      const repetirArriba = this._arriba.isDown && this._arriba.getDuration() > 300 && time - this._ultimoMovimientoLista > 65;
      const repetirAbajo = this._abajo.isDown && this._abajo.getDuration() > 300 && time - this._ultimoMovimientoLista > 65;
      if (inicialArriba || repetirArriba) { this._moverLista(-1); this._ultimoMovimientoLista = time; }
      if (inicialAbajo || repetirAbajo) { this._moverLista(1); this._ultimoMovimientoLista = time; }
      if (Phaser.Input.Keyboard.JustDown(this._enter)) {
        this._alternarPokemon();
        if (this._equipos[this._equipoActivo].seleccion.length === MAX_SELECCION) this._paso = 'confirmar';
      }
    } else if (this._paso === 'confirmar') {
      if (Phaser.Input.Keyboard.JustDown(this._enter)) this._confirmarEquipo();
    } else if (this._paso === 'jugar') {
      if (Phaser.Input.Keyboard.JustDown(this._enter) || Phaser.Input.Keyboard.JustDown(this._space)) this._jugar();
    }
    this._actualizar();
  }
}
