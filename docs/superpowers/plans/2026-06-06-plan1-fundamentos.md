# FPP — Plan 1: Fundamentos

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scaffolding completo del proyecto: estructura de ficheros, datos editables, Phaser 3 cargando y el campo de juego dibujado en pantalla.

**Architecture:** Phaser 3 cargado como script local. Todos los datos en ficheros `.js` con variables globales cargados antes que Phaser. Una única escena `FieldTestScene` provisional que dibuja el campo para verificar que todo funciona. Se elimina en Plan 2.

**Tech Stack:** Phaser 3.60+, JavaScript ES6, `file://`, sin build step.

---

## Mapa de ficheros

| Fichero | Acción | Responsabilidad |
|---|---|---|
| `index.html` | Crear | Punto de entrada, carga scripts en orden |
| `lib/phaser.min.js` | Crear | Copia local de Phaser 3 |
| `data/pokemons.js` | Crear | Catálogo de Pokémons con tipo |
| `data/equipaciones.js` | Crear | Packs de equipaciones con colores |
| `data/field.js` | Crear | Dimensiones del campo |
| `js/config.js` | Crear | Controles y constantes de juego |
| `js/scenes/FieldTestScene.js` | Crear | Dibuja el campo completo (provisional) |
| `assets/audio/.gitkeep` | Crear | Mantiene la carpeta en git |

---

### Tarea 1: Descargar Phaser 3

**Ficheros:**
- Crear: `lib/phaser.min.js`

- [ ] **Paso 1: Descargar Phaser 3**

```bash
curl -L "https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser.min.js" -o lib/phaser.min.js
```

Verificar que el fichero existe y no está vacío:
```bash
ls -lh lib/phaser.min.js
# Esperado: ~1MB
head -c 100 lib/phaser.min.js
# Esperado: primera línea del código minificado de Phaser
```

- [ ] **Paso 2: Commit**

```bash
git add lib/phaser.min.js
git commit -m "feat: add Phaser 3.60 local copy"
```

---

### Tarea 2: Datos editables

**Ficheros:**
- Crear: `data/pokemons.js`
- Crear: `data/equipaciones.js`
- Crear: `data/field.js`
- Crear: `assets/audio/.gitkeep`

- [ ] **Paso 1: Crear `data/pokemons.js`**

```js
// Editables manualmente. Campos velocidad/potencia/equipo_default reservados para v2.
const POKEMONS = [
  { id: 1,   nombre: "Bulbasaur",  tipo: "Planta" },
  { id: 2,   nombre: "Ivysaur",    tipo: "Planta" },
  { id: 3,   nombre: "Venusaur",   tipo: "Planta" },
  { id: 4,   nombre: "Charmander", tipo: "Fuego" },
  { id: 5,   nombre: "Charmeleon", tipo: "Fuego" },
  { id: 6,   nombre: "Charizard",  tipo: "Fuego" },
  { id: 7,   nombre: "Squirtle",   tipo: "Agua" },
  { id: 8,   nombre: "Wartortle",  tipo: "Agua" },
  { id: 9,   nombre: "Blastoise",  tipo: "Agua" },
  { id: 25,  nombre: "Pikachu",    tipo: "Eléctrico" },
  { id: 26,  nombre: "Raichu",     tipo: "Eléctrico" },
  { id: 35,  nombre: "Clefairy",   tipo: "Normal" },
  { id: 39,  nombre: "Jigglypuff", tipo: "Normal" },
  { id: 52,  nombre: "Meowth",     tipo: "Normal" },
  { id: 54,  nombre: "Psyduck",    tipo: "Agua" },
  { id: 63,  nombre: "Abra",       tipo: "Psíquico" },
  { id: 65,  nombre: "Alakazam",   tipo: "Psíquico" },
  { id: 79,  nombre: "Slowpoke",   tipo: "Psíquico" },
  { id: 94,  nombre: "Gengar",     tipo: "Fantasma" },
  { id: 132, nombre: "Ditto",      tipo: "Normal" },
  { id: 133, nombre: "Eevee",      tipo: "Normal" },
  { id: 143, nombre: "Snorlax",    tipo: "Normal" },
  { id: 150, nombre: "Mewtwo",     tipo: "Psíquico" },
];
```

- [ ] **Paso 2: Crear `data/equipaciones.js`**

```js
// Editables manualmente. No repetir el mismo id entre los dos equipos.
const EQUIPACIONES = [
  { id: "furia",    nombre: "Furia",    color_jugadores: "#E53935", color_portero: "#B71C1C" },
  { id: "arena",    nombre: "Arena",    color_jugadores: "#FFB300", color_portero: "#E65100" },
  { id: "lluvia",   nombre: "Lluvia",   color_jugadores: "#1E88E5", color_portero: "#0D47A1" },
  { id: "bosque",   nombre: "Bosque",   color_jugadores: "#43A047", color_portero: "#1B5E20" },
  { id: "noche",    nombre: "Noche",    color_jugadores: "#5E35B1", color_portero: "#1A237E" },
  { id: "niebla",   nombre: "Niebla",   color_jugadores: "#90A4AE", color_portero: "#37474F" },
  { id: "hielo",    nombre: "Hielo",    color_jugadores: "#80DEEA", color_portero: "#00838F" },
  { id: "volcan",   nombre: "Volcán",   color_jugadores: "#FF7043", color_portero: "#BF360C" },
];
```

- [ ] **Paso 3: Crear `data/field.js`**

```js
// Editables manualmente. Todas las dimensiones en unidades de juego.
// escala: píxeles por unidad de juego.
const FIELD_CONFIG = {
  largo: 50,
  ancho: 20,
  porteria: { ancho: 4.5, alto: 2 },
  area:     { largo: 10, ancho: 15 },
  penalty_dist: 7,
  escala: 16
};
```

- [ ] **Paso 4: Crear `assets/audio/.gitkeep`**

Crea el fichero vacío para mantener la carpeta en git:
```bash
touch assets/audio/.gitkeep
```

- [ ] **Paso 5: Commit**

```bash
git add data/ assets/
git commit -m "feat: add editable data files and audio folder structure"
```

---

### Tarea 3: Configuración global

**Ficheros:**
- Crear: `js/config.js`

- [ ] **Paso 1: Crear `js/config.js`**

```js
// Constantes globales del juego. Los controles son configurables aquí.
const CONFIG = {
  controles: {
    p1: {
      arriba:  "W",
      abajo:   "S",
      izq:     "A",
      der:     "D",
      accion1: "F",
      accion2: "G"
    },
    p2: {
      arriba:  "UP",
      abajo:   "DOWN",
      izq:     "LEFT",
      der:     "RIGHT",
      accion1: "L",
      accion2: "K"
    },
    pausa: "ESC"
  },
  duraciones: [1, 2, 3],
  penaltiesPorTanda: 5,
  jugadoresPorEquipo: 5,
  // Física del balón
  balonFriccion: 0.985,
  balonImpulsoBase: 8,
  balonImpulsoMax: 20,
  balonRadioContacto: 1,
  // Jugadores
  jugadorVelocidad: 3,
  jugadorRadio: 0.6,
  // Tackle
  tackleDistancia: 1.5,
  tackleAngulo: 45,
  // Pase
  paseAnguloCono: 30,
  // Portero
  porteroVelocidad: 2.5,
  porteroRetrasoMin: 300,
  porteroRetrasoMax: 800
};
```

- [ ] **Paso 2: Commit**

```bash
git add js/config.js
git commit -m "feat: add global config with controls and game constants"
```

---

### Tarea 4: FieldTestScene — dibujar el campo

**Ficheros:**
- Crear: `js/scenes/FieldTestScene.js`

Esta escena es provisional. Su único propósito es verificar que Phaser carga correctamente y que el campo se dibuja con las dimensiones correctas. Se reemplazará en el Plan 2.

- [ ] **Paso 1: Crear `js/scenes/FieldTestScene.js`**

```js
class FieldTestScene extends Phaser.Scene {
  constructor() {
    super({ key: 'FieldTestScene' });
  }

  create() {
    const S = FIELD_CONFIG.escala;
    const W = FIELD_CONFIG.largo * S;   // 800px
    const H = FIELD_CONFIG.ancho * S;   // 320px
    const g = this.add.graphics();

    // Fondo verde
    g.fillStyle(0x2d7a2d);
    g.fillRect(0, 0, W, H);

    // Líneas blancas
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

    // Portería izquierda
    const py = (FIELD_CONFIG.ancho / 2 - FIELD_CONFIG.porteria.ancho / 2) * S;
    const ph = FIELD_CONFIG.porteria.ancho * S;
    const pw = FIELD_CONFIG.porteria.alto * S;
    g.lineStyle(3, 0xffffff, 1);
    g.strokeRect(-pw, py, pw, ph);

    // Portería derecha
    g.strokeRect(W, py, pw, ph);

    // Área izquierda
    const areaL = FIELD_CONFIG.area.largo * S;
    const areaW = FIELD_CONFIG.area.ancho * S;
    const areaY = (FIELD_CONFIG.ancho / 2 - FIELD_CONFIG.area.ancho / 2) * S;
    g.lineStyle(2, 0xffffff, 1);
    g.strokeRect(0, areaY, areaL, areaW);

    // Área derecha
    g.strokeRect(W - areaL, areaY, areaL, areaW);

    // Punto de penalty izquierdo
    const penX = FIELD_CONFIG.penalty_dist * S;
    g.fillStyle(0xffffff);
    g.fillCircle(penX, H / 2, 4);

    // Punto de penalty derecho
    g.fillCircle(W - penX, H / 2, 4);

    // Texto de verificación
    this.add.text(10, 10, 'Campo OK - Plan 1 verificado', {
      fontSize: '14px', fill: '#ffffff'
    });
  }
}
```

- [ ] **Paso 2: Commit**

```bash
git add js/scenes/FieldTestScene.js
git commit -m "feat: add FieldTestScene to verify field rendering"
```

---

### Tarea 5: index.html y verificación final

**Ficheros:**
- Crear: `index.html`

- [ ] **Paso 1: Crear `index.html`**

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

  <!-- Datos editables (deben cargarse antes que el juego) -->
  <script src="data/field.js"></script>
  <script src="data/pokemons.js"></script>
  <script src="data/equipaciones.js"></script>

  <!-- Configuración global -->
  <script src="js/config.js"></script>

  <!-- Escenas -->
  <script src="js/scenes/FieldTestScene.js"></script>

  <!-- Phaser -->
  <script src="lib/phaser.min.js"></script>

  <!-- Arranque -->
  <script>
    const game = new Phaser.Game({
      type: Phaser.AUTO,
      width:  FIELD_CONFIG.largo * FIELD_CONFIG.escala,
      height: FIELD_CONFIG.ancho * FIELD_CONFIG.escala,
      backgroundColor: '#111111',
      scene: [FieldTestScene]
    });
  </script>

</body>
</html>
```

- [ ] **Paso 2: Abrir en el navegador y verificar**

Abre `index.html` directamente (doble clic o `file://`). Debes ver:
- Fondo negro con campo verde centrado
- Líneas blancas: borde, línea de medio, círculo central
- Dos porterías en los fondos
- Dos áreas rectangulares
- Dos puntos de penalty
- Texto "Campo OK - Plan 1 verificado" en la esquina superior izquierda

Si el canvas aparece en blanco o hay errores en la consola del navegador (F12), verificar:
- Que `lib/phaser.min.js` se descargó correctamente (no está vacío)
- Que el orden de los `<script>` es el correcto (`data/` antes que `js/`)

- [ ] **Paso 3: Commit final**

```bash
git add index.html
git commit -m "feat: add index.html, complete Plan 1 scaffolding"
```
