# FPP — Plan 3: Escenas de Menú

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar BootScene, MenuScene, SelectScene y SummaryScene. Al terminar, el flujo completo de pantallas funciona desde el arranque hasta la selección de equipos, con un placeholder para GameScene/PenaltyScene.

**Prerequisito:** Plan 2 completado. Ball, Player y Goalkeeper funcionan en TestScene.

**Architecture:** Cada escena es una clase Phaser.Scene independiente. Usan `this.scene.start('NombreEscena', { datos })` para pasar datos entre ellas (modo de juego, selección de Pokémons, equipaciones). Un objeto `GameState` global en `js/config.js` acumula las decisiones del jugador durante el flujo de menús.

**Tech Stack:** Phaser 3, JavaScript, variables globales.

---

## Mapa de ficheros

| Fichero | Acción | Responsabilidad |
|---|---|---|
| `js/config.js` | Modificar | Añadir `GameState` global para pasar datos entre escenas |
| `js/scenes/BootScene.js` | Crear | Presentación, créditos, "pulsa cualquier tecla" |
| `js/scenes/MenuScene.js` | Crear | Selección de modo (1P/2P), tipo (partido/penalties), duración |
| `js/scenes/SelectScene.js` | Crear | Selección de Pokémons y equipaciones para ambos equipos |
| `js/scenes/SummaryScene.js` | Crear | Marcador final y goleadores al terminar el partido |
| `js/scenes/PlaceholderGameScene.js` | Crear | Placeholder que simula fin de partido (se reemplaza en Plan 4) |
| `index.html` | Modificar | Añadir todas las escenas y eliminar FieldTestScene |

---

### Tarea 1: GameState en config.js

**Ficheros:**
- Modificar: `js/config.js`

- [ ] **Paso 1: Añadir `GameState` al final de `js/config.js`**

```js
// Estado compartido entre escenas — se rellena durante los menús
const GameState = {
  modo: null,          // '1p' | '2p'
  tipo: null,          // 'partido' | 'penalties'
  duracionParte: null, // 1 | 2 | 3 (minutos)
  equipoLocal: {
    pokemons: [],      // array de objetos POKEMONS
    equipacion: null,  // objeto EQUIPACIONES
    goleadores: []
  },
  equipoVisitante: {
    pokemons: [],
    equipacion: null,
    goleadores: []
  },
  marcador: { local: 0, visitante: 0 }
};
```

- [ ] **Paso 2: Commit**

```bash
git add js/config.js
git commit -m "feat: add GameState to config for inter-scene data sharing"
```

---

### Tarea 2: BootScene

**Ficheros:**
- Crear: `js/scenes/BootScene.js`

- [ ] **Paso 1: Crear `js/scenes/BootScene.js`**

```js
class BootScene extends Phaser.Scene {
  constructor() { super({ key: 'BootScene' }); }

  create() {
    const W = FIELD_CONFIG.largo * FIELD_CONFIG.escala;
    const H = FIELD_CONFIG.ancho * FIELD_CONFIG.escala;

    this.add.rectangle(W/2, H/2, W, H, 0x111111);

    this.add.text(W/2, H/2 - 60, 'FPP', {
      fontSize: '64px', fill: '#ffffff', fontStyle: 'bold'
    }).setOrigin(0.5);

    this.add.text(W/2, H/2 - 10, 'Fútbol para Pokémons', {
      fontSize: '20px', fill: '#ffcc00'
    }).setOrigin(0.5);

    this.add.text(W/2, H/2 + 40, 'Un juego de Perkash Dhalani', {
      fontSize: '12px', fill: '#888888'
    }).setOrigin(0.5);

    const prompt = this.add.text(W/2, H/2 + 90, 'Pulsa cualquier tecla para continuar', {
      fontSize: '14px', fill: '#ffffff'
    }).setOrigin(0.5);

    // Parpadeo del prompt
    this.tweens.add({
      targets: prompt,
      alpha: 0,
      duration: 600,
      yoyo: true,
      repeat: -1
    });

    this.input.keyboard.once('keydown', () => {
      this.scene.start('MenuScene');
    });
  }
}
```

- [ ] **Paso 2: Commit**

```bash
git add js/scenes/BootScene.js
git commit -m "feat: add BootScene with title and credits"
```

---

### Tarea 3: MenuScene

**Ficheros:**
- Crear: `js/scenes/MenuScene.js`

- [ ] **Paso 1: Crear `js/scenes/MenuScene.js`**

```js
class MenuScene extends Phaser.Scene {
  constructor() { super({ key: 'MenuScene' }); }

  create() {
    const W = FIELD_CONFIG.largo * FIELD_CONFIG.escala;
    const H = FIELD_CONFIG.ancho * FIELD_CONFIG.escala;

    this.add.rectangle(W/2, H/2, W, H, 0x111111);
    this.add.text(W/2, 24, 'FPP — Menú Principal', {
      fontSize: '18px', fill: '#ffcc00'
    }).setOrigin(0.5);

    // Estado del menú
    this._modo      = 0; // 0='1p', 1='2p'
    this._tipo      = 0; // 0='partido', 1='penalties'
    this._duracion  = 0; // índice en CONFIG.duraciones

    // Textos de opciones
    this._txtModo     = this.add.text(W/2, 80,  '', { fontSize: '16px', fill: '#ffffff' }).setOrigin(0.5);
    this._txtTipo     = this.add.text(W/2, 115, '', { fontSize: '16px', fill: '#ffffff' }).setOrigin(0.5);
    this._txtDuracion = this.add.text(W/2, 150, '', { fontSize: '16px', fill: '#cccccc' }).setOrigin(0.5);
    this._txtJugar    = this.add.text(W/2, 210, '[ JUGAR ]', {
      fontSize: '20px', fill: '#00ff00'
    }).setOrigin(0.5);

    this.add.text(W/2, H - 20, 'Flechas: cambiar opción   Enter: confirmar', {
      fontSize: '11px', fill: '#666666'
    }).setOrigin(0.5);

    this._foco = 0; // 0=modo, 1=tipo, 2=duracion, 3=jugar
    this._actualizar();

    // Navegación
    this._cursores = this.input.keyboard.createCursorKeys();
    this._enter    = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    this._arriba   = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this._abajo    = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this._izq      = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this._der      = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  }

  _actualizar() {
    const modos     = ['1 Jugador', '2 Jugadores'];
    const tipos     = ['Partido Normal', 'Penalties'];
    const durStr    = CONFIG.duraciones[this._duracion] + ' min por parte';
    const focos     = [this._txtModo, this._txtTipo, this._txtDuracion, this._txtJugar];

    this._txtModo.setText('Modo: ' + modos[this._modo]);
    this._txtTipo.setText('Tipo: ' + tipos[this._tipo]);
    this._txtDuracion.setText(this._tipo === 1 ? '' : 'Duración: ' + durStr);

    focos.forEach((t, i) => t.setColor(i === this._foco ? '#ffcc00' : '#ffffff'));
    this._txtDuracion.setColor(this._tipo === 1 ? '#444444' : (this._foco === 2 ? '#ffcc00' : '#ffffff'));
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
      GameState.modo         = this._modo === 0 ? '1p' : '2p';
      GameState.tipo         = this._tipo === 0 ? 'partido' : 'penalties';
      GameState.duracionParte = CONFIG.duraciones[this._duracion];
      this.scene.start('SelectScene', { equipo: 'local' });
    }
  }
}
```

- [ ] **Paso 2: Commit**

```bash
git add js/scenes/MenuScene.js
git commit -m "feat: add MenuScene with mode, type and duration selection"
```

---

### Tarea 4: SelectScene

**Ficheros:**
- Crear: `js/scenes/SelectScene.js`

- [ ] **Paso 1: Crear `js/scenes/SelectScene.js`**

```js
class SelectScene extends Phaser.Scene {
  constructor() { super({ key: 'SelectScene' }); }

  init(data) {
    this._equipoActual = data.equipo; // 'local' | 'visitante'
    this._seleccion    = [];          // Pokémons seleccionados
    this._equipacion   = null;
    this._filtroTipo   = null;        // null = todos
    this._foco         = 'pokemons';  // 'pokemons' | 'equipacion' | 'listo'
    this._idxPokemon   = 0;
    this._idxEquipacion = 0;
  }

  create() {
    const W = FIELD_CONFIG.largo * FIELD_CONFIG.escala;
    const H = FIELD_CONFIG.ancho * FIELD_CONFIG.escala;

    this.add.rectangle(W/2, H/2, W, H, 0x111111);

    const titulo = this._equipoActual === 'local' ? 'Equipo Local' : 'Equipo Visitante';
    this.add.text(W/2, 18, 'Selección — ' + titulo, {
      fontSize: '16px', fill: '#ffcc00'
    }).setOrigin(0.5);

    // Tipos disponibles
    this._tipos = ['Todos'].concat([...new Set(POKEMONS.map(p => p.tipo))].sort());
    this._idxTipo = 0;
    this._txtTipo = this.add.text(10, 40, '', { fontSize: '12px', fill: '#aaaaaa' });

    // Lista de Pokémons filtrada
    this._txtPokemons = [];
    for (let i = 0; i < 6; i++) {
      this._txtPokemons.push(this.add.text(10, 60 + i * 18, '', { fontSize: '12px', fill: '#ffffff' }));
    }

    // Selección actual (5 slots)
    this.add.text(W/2 + 10, 40, 'Equipo:', { fontSize: '12px', fill: '#aaaaaa' });
    this._txtSlots = [];
    for (let i = 0; i < 5; i++) {
      this._txtSlots.push(this.add.text(W/2 + 10, 58 + i * 18, (i+1) + '. —', { fontSize: '12px', fill: '#888888' }));
    }

    // Equipaciones
    this.add.text(W/2 + 10, 160, 'Equipación:', { fontSize: '12px', fill: '#aaaaaa' });
    this._txtEquipaciones = [];
    for (let i = 0; i < EQUIPACIONES.length; i++) {
      this._txtEquipaciones.push(this.add.text(W/2 + 10, 178 + i * 16, EQUIPACIONES[i].nombre, { fontSize: '12px', fill: '#888888' }));
    }

    // Botones
    this._txtRandom = this.add.text(10, H - 50, '[ RANDOM ]', { fontSize: '14px', fill: '#00aaff' });
    this._txtListo  = this.add.text(W/2, H - 50, '[ LISTO ]', { fontSize: '14px', fill: '#444444' }).setOrigin(0.5);

    this.add.text(W/2, H - 18, 'Flechas: navegar  Enter: seleccionar  R: random  F: filtro tipo', {
      fontSize: '10px', fill: '#555555'
    }).setOrigin(0.5);

    // Teclas
    this._enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    this._arriba = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this._abajo  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this._izq    = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this._der    = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this._rKey   = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    this._fKey   = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

    this._actualizar();
  }

  _pokemonsFiltrados() {
    if (this._idxTipo === 0) return POKEMONS;
    const tipo = this._tipos[this._idxTipo];
    return POKEMONS.filter(p => p.tipo === tipo);
  }

  _equipacionesDisponibles() {
    const ocupada = this._equipoActual === 'local'
      ? GameState.equipoVisitante.equipacion
      : GameState.equipoLocal.equipacion;
    return EQUIPACIONES.filter(e => !ocupada || e.id !== ocupada.id);
  }

  _seleccionarRandom() {
    const todos = POKEMONS.slice();
    this._seleccion = [];
    for (let i = 0; i < 5; i++) {
      this._seleccion.push(todos[Math.floor(Math.random() * todos.length)]);
    }
    const disponibles = this._equipacionesDisponibles();
    this._equipacion  = disponibles[Math.floor(Math.random() * disponibles.length)];
    this._idxEquipacion = EQUIPACIONES.indexOf(this._equipacion);
    this._actualizar();
  }

  _actualizar() {
    const filtrados = this._pokemonsFiltrados();
    const offset    = Math.max(0, this._idxPokemon - 2);

    this._txtTipo.setText('Tipo: ' + this._tipos[this._idxTipo]);

    for (let i = 0; i < 6; i++) {
      const p = filtrados[offset + i];
      if (p) {
        const enEquipo = this._seleccion.includes(p);
        this._txtPokemons[i].setText((enEquipo ? '✓ ' : '  ') + p.nombre + ' [' + p.tipo + ']');
        this._txtPokemons[i].setColor(offset + i === this._idxPokemon && this._foco === 'pokemons' ? '#ffcc00' : (enEquipo ? '#88ff88' : '#ffffff'));
      } else {
        this._txtPokemons[i].setText('');
      }
    }

    for (let i = 0; i < 5; i++) {
      const p = this._seleccion[i];
      this._txtSlots[i].setText((i+1) + '. ' + (p ? p.nombre : '—'));
      this._txtSlots[i].setColor(p ? '#88ff88' : '#888888');
    }

    const disponibles = this._equipacionesDisponibles();
    this._txtEquipaciones.forEach((t, i) => {
      const eq = EQUIPACIONES[i];
      const noDisp = !disponibles.includes(eq);
      t.setColor(noDisp ? '#333333' : (i === this._idxEquipacion && this._foco === 'equipacion' ? '#ffcc00' : (this._equipacion === eq ? '#88ff88' : '#888888')));
    });

    const listo = this._seleccion.length === 5 && this._equipacion;
    this._txtListo.setColor(listo ? (this._foco === 'listo' ? '#ffcc00' : '#00ff00') : '#444444');
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(this._rKey)) {
      this._seleccionarRandom();
      return;
    }

    if (Phaser.Input.Keyboard.JustDown(this._fKey) && this._foco === 'pokemons') {
      this._idxTipo = (this._idxTipo + 1) % this._tipos.length;
      this._idxPokemon = 0;
      this._actualizar();
      return;
    }

    const filtrados = this._pokemonsFiltrados();

    if (Phaser.Input.Keyboard.JustDown(this._abajo)) {
      if (this._foco === 'pokemons')    this._idxPokemon    = Math.min(this._idxPokemon + 1, filtrados.length - 1);
      else if (this._foco === 'equipacion') this._idxEquipacion = Math.min(this._idxEquipacion + 1, EQUIPACIONES.length - 1);
      this._actualizar();
    }
    if (Phaser.Input.Keyboard.JustDown(this._arriba)) {
      if (this._foco === 'pokemons')    this._idxPokemon    = Math.max(this._idxPokemon - 1, 0);
      else if (this._foco === 'equipacion') this._idxEquipacion = Math.max(this._idxEquipacion - 1, 0);
      this._actualizar();
    }
    if (Phaser.Input.Keyboard.JustDown(this._der)) {
      if (this._foco === 'pokemons')         this._foco = 'equipacion';
      else if (this._foco === 'equipacion')  this._foco = 'listo';
      this._actualizar();
    }
    if (Phaser.Input.Keyboard.JustDown(this._izq)) {
      if (this._foco === 'listo')            this._foco = 'equipacion';
      else if (this._foco === 'equipacion')  this._foco = 'pokemons';
      this._actualizar();
    }

    if (Phaser.Input.Keyboard.JustDown(this._enter)) {
      if (this._foco === 'pokemons') {
        const p = filtrados[this._idxPokemon];
        if (p && this._seleccion.length < 5) {
          this._seleccion.push(p);
        } else if (p && this._seleccion.includes(p)) {
          this._seleccion = this._seleccion.filter(x => x !== p);
        }
        this._actualizar();
      } else if (this._foco === 'equipacion') {
        const disponibles = this._equipacionesDisponibles();
        const eq = EQUIPACIONES[this._idxEquipacion];
        if (disponibles.includes(eq)) { this._equipacion = eq; }
        this._actualizar();
      } else if (this._foco === 'listo') {
        if (this._seleccion.length === 5 && this._equipacion) {
          this._confirmar();
        }
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
      const siguiente = GameState.tipo === 'penalties' ? 'PlaceholderGameScene' : 'PlaceholderGameScene';
      this.scene.start(siguiente);
    }
  }
}
```

- [ ] **Paso 2: Commit**

```bash
git add js/scenes/SelectScene.js
git commit -m "feat: add SelectScene with Pokemon and equipacion selection, random mode"
```

---

### Tarea 5: SummaryScene y PlaceholderGameScene

**Ficheros:**
- Crear: `js/scenes/SummaryScene.js`
- Crear: `js/scenes/PlaceholderGameScene.js`

- [ ] **Paso 1: Crear `js/scenes/SummaryScene.js`**

```js
class SummaryScene extends Phaser.Scene {
  constructor() { super({ key: 'SummaryScene' }); }

  create() {
    const W = FIELD_CONFIG.largo * FIELD_CONFIG.escala;
    const H = FIELD_CONFIG.ancho * FIELD_CONFIG.escala;

    this.add.rectangle(W/2, H/2, W, H, 0x111111);

    this.add.text(W/2, 24, 'Resultado Final', {
      fontSize: '20px', fill: '#ffcc00'
    }).setOrigin(0.5);

    const m = GameState.marcador;
    const eqL = GameState.equipoLocal.equipacion;
    const eqV = GameState.equipoVisitante.equipacion;

    this.add.text(W/2, 70,
      (eqL ? eqL.nombre : 'Local') + '  ' + m.local + ' — ' + m.visitante + '  ' + (eqV ? eqV.nombre : 'Visitante'),
      { fontSize: '24px', fill: '#ffffff' }
    ).setOrigin(0.5);

    // Goleadores
    const todos = [
      ...GameState.equipoLocal.goleadores.map(n => n + ' (' + (eqL ? eqL.nombre : 'L') + ')'),
      ...GameState.equipoVisitante.goleadores.map(n => n + ' (' + (eqV ? eqV.nombre : 'V') + ')')
    ];
    if (todos.length > 0) {
      this.add.text(W/2, 115, 'Goleadores:', { fontSize: '13px', fill: '#aaaaaa' }).setOrigin(0.5);
      todos.forEach((g, i) => {
        this.add.text(W/2, 135 + i * 18, g, { fontSize: '12px', fill: '#ffffff' }).setOrigin(0.5);
      });
    } else {
      this.add.text(W/2, 115, 'Sin goles', { fontSize: '13px', fill: '#666666' }).setOrigin(0.5);
    }

    const volver = this.add.text(W/2, H - 30, '[ Volver al Menú ]', {
      fontSize: '16px', fill: '#00ff00'
    }).setOrigin(0.5);

    this.tweens.add({ targets: volver, alpha: 0.3, duration: 700, yoyo: true, repeat: -1 });

    this.input.keyboard.once('keydown', () => {
      this.scene.start('MenuScene');
    });
  }
}
```

- [ ] **Paso 2: Crear `js/scenes/PlaceholderGameScene.js`**

Esta escena simula que el partido terminó con un resultado fijo. Se reemplaza en el Plan 4.

```js
class PlaceholderGameScene extends Phaser.Scene {
  constructor() { super({ key: 'PlaceholderGameScene' }); }

  create() {
    const W = FIELD_CONFIG.largo * FIELD_CONFIG.escala;
    const H = FIELD_CONFIG.ancho * FIELD_CONFIG.escala;

    // Simular resultado para verificar SummaryScene
    GameState.marcador = { local: 2, visitante: 1 };
    GameState.equipoLocal.goleadores     = ['Pikachu (25\')', 'Charizard (67\')'];
    GameState.equipoVisitante.goleadores = ['Mewtwo (34\')'];

    this.add.rectangle(W/2, H/2, W, H, 0x1a3a1a);
    this.add.text(W/2, H/2 - 20, '[JUEGO — Plan 4]', { fontSize: '18px', fill: '#888888' }).setOrigin(0.5);
    this.add.text(W/2, H/2 + 20, 'Pulsa cualquier tecla para ver el resumen', { fontSize: '12px', fill: '#666666' }).setOrigin(0.5);

    this.input.keyboard.once('keydown', () => {
      this.scene.start('SummaryScene');
    });
  }
}
```

- [ ] **Paso 3: Commit**

```bash
git add js/scenes/SummaryScene.js js/scenes/PlaceholderGameScene.js
git commit -m "feat: add SummaryScene and PlaceholderGameScene"
```

---

### Tarea 6: Actualizar index.html con todas las escenas

**Ficheros:**
- Modificar: `index.html`

- [ ] **Paso 1: Reemplazar `index.html` con el orden completo de scripts**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>FPP — Fútbol para Pokémons</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #111; display: flex; justify-content: center; align-items: center; height: 100vh; }
    canvas { display: block; }
  </style>
</head>
<body>

  <!-- Datos editables -->
  <script src="data/field.js"></script>
  <script src="data/pokemons.js"></script>
  <script src="data/equipaciones.js"></script>

  <!-- Configuración global -->
  <script src="js/config.js"></script>

  <!-- Entidades -->
  <script src="js/entities/Ball.js"></script>
  <script src="js/entities/Player.js"></script>
  <script src="js/entities/Goalkeeper.js"></script>

  <!-- Escenas -->
  <script src="js/scenes/BootScene.js"></script>
  <script src="js/scenes/MenuScene.js"></script>
  <script src="js/scenes/SelectScene.js"></script>
  <script src="js/scenes/PlaceholderGameScene.js"></script>
  <script src="js/scenes/SummaryScene.js"></script>

  <!-- Phaser -->
  <script src="lib/phaser.min.js"></script>

  <!-- Arranque -->
  <script>
    const game = new Phaser.Game({
      type: Phaser.AUTO,
      width:  FIELD_CONFIG.largo * FIELD_CONFIG.escala,
      height: FIELD_CONFIG.ancho * FIELD_CONFIG.escala,
      backgroundColor: '#111111',
      scene: [BootScene, MenuScene, SelectScene, PlaceholderGameScene, SummaryScene]
    });
  </script>

</body>
</html>
```

- [ ] **Paso 2: Verificar el flujo completo**

Abre `index.html`. Verifica el flujo completo:
1. BootScene: título "FPP", créditos, prompt parpadeante → pulsa cualquier tecla
2. MenuScene: opciones de modo/tipo/duración, navega con flechas, Enter en JUGAR
3. SelectScene equipo local: selecciona 5 Pokémons y equipación (o pulsa R para random) → LISTO
4. SelectScene equipo visitante: ídem → LISTO
5. PlaceholderGameScene: pantalla negra con texto "[JUEGO — Plan 4]" → pulsa tecla
6. SummaryScene: marcador 2-1, goleadores → pulsa tecla → vuelve a MenuScene

- [ ] **Paso 3: Commit final**

```bash
git add index.html
git commit -m "feat: wire all menu scenes, Plan 3 complete"
```
