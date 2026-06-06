# FPP — Fútbol para Pokémons: Diseño de Arquitectura

**Fecha:** 2026-06-06  
**Estado:** Aprobado  
**Versión:** 1.0

---

## 1. Visión general

Juego de fútbol 2D para navegador local (protocolo `file://`), sin servidor, sin distribución. Se ejecuta desde portátil abriendo `index.html`. Modo 1 jugador o 2 jugadores con teclado. Los equipos están formados por Pokémons elegidos por tipo. Vista cenital (top-down).

---

## 2. Stack tecnológico

| Elemento | Decisión |
|---|---|
| Motor | Phaser 3 (copia local en `lib/phaser.min.js`) |
| Lenguaje | JavaScript (ES5/ES6 sin módulos) |
| Carga de scripts | `<script src="...">` en `index.html`, sin build step |
| Datos editables | Ficheros `.js` con variables globales |
| Ejecución | `file://` directo en navegador, sin servidor |
| Audio | Estructura preparada, sin implementar en v1 |

---

## 3. Estructura de ficheros

```
fpp/
├── index.html
├── README.md
├── CLAUDE.md
├── ROADMAP.md
├── lib/
│   └── phaser.min.js
├── assets/
│   └── audio/               ← vacío en v1, preparado para sonidos
├── js/
│   ├── config.js            ← constantes globales y controles
│   ├── scenes/
│   │   ├── BootScene.js     ← presentación y créditos
│   │   ├── MenuScene.js     ← menú principal
│   │   ├── SelectScene.js   ← selección de Pokémons y equipaciones
│   │   ├── GameScene.js     ← partido normal
│   │   ├── PenaltyScene.js  ← modo penalties
│   │   └── SummaryScene.js  ← pantalla de resumen
│   └── entities/
│       ├── Player.js        ← jugador de campo (humano o CPU)
│       ├── Goalkeeper.js    ← portero
│       └── Ball.js          ← balón
└── data/                    ← ficheros editables manualmente
    ├── pokemons.js
    ├── equipaciones.js
    └── field.js
```

---

## 4. Campo de juego

| Parámetro | Valor |
|---|---|
| Dimensiones | 50 × 20 unidades |
| Escala | 1 unidad = 16px → canvas 800 × 320px |
| Portería | 4.5 ancho × 2 alto, centrada en cada fondo |
| Área | 15 ancho × 10 largo desde cada fondo |
| Punto de penalty | Centrado, a 7 unidades de cada portería |
| Bandas (arriba/abajo) | El balón rebota, jugadores no pueden salir del campo |
| Fondos (izquierda/derecha) | El balón rebota (no hay fuera de fondo en v1), jugadores no pueden salir |
| Perspectiva | Cenital (top-down) |
| Representación | Gráficos vectoriales Phaser (sin imágenes de campo) |

El canvas se centra en la ventana del navegador. Todos los parámetros del campo se definen en `data/field.js`.

---

## 5. Datos editables

### `data/pokemons.js`
```js
const POKEMONS = [
  { id: 1, nombre: "Bulbasaur", tipo: "Planta" },
  { id: 4, nombre: "Charmander", tipo: "Fuego" },
  { id: 25, nombre: "Pikachu", tipo: "Eléctrico" },
  // ...
];
```
Agrupados y filtrados por tipo en la pantalla de selección. Campos `velocidad`, `potencia` y `equipo_default` reservados para v2 (no usados en v1).

### `data/equipaciones.js`
```js
const EQUIPACIONES = [
  {
    id: "furia",
    nombre: "Furia",
    color_jugadores: "#E53935",
    color_portero:   "#B71C1C"
  },
  {
    id: "arena",
    nombre: "Arena",
    color_jugadores: "#FFB300",
    color_portero:   "#E65100"
  },
  // más packs...
];
```
Cada pack tiene color para jugadores de campo y color diferenciado para el portero. No se puede repetir el mismo pack entre los dos equipos.

### `data/field.js`
```js
const FIELD_CONFIG = {
  largo: 50, ancho: 20,
  porteria: { ancho: 4.5, alto: 2 },
  area: { largo: 10, ancho: 15 },
  penalty_dist: 7,
  escala: 16
};
```

---

## 6. Configuración y controles (`js/config.js`)

```js
const CONFIG = {
  controles: {
    p1: { arriba: "W", abajo: "S", izq: "A", der: "D", accion1: "F", accion2: "G" },
    p2: { arriba: "UP", abajo: "DOWN", izq: "LEFT", der: "RIGHT", accion1: "L", accion2: "K" }
  },
  duraciones: [1, 2, 3],  // minutos por parte
  penaltiesPorTanda: 5
};
```

**Accion1** = chute (tap) / chute potente (hold) en ataque  
**Accion2** = pase automático en ataque / cambio de jugador en defensa

El juego detecta automáticamente modo ataque/defensa según quién posea el balón.

---

## 7. Controles de juego

### Modo ataque (tu equipo tiene el balón)
| Tecla | Acción |
|---|---|
| Movimiento | Desplaza al jugador activo |
| Accion1 (tap) | Pase corto en dirección de carrera |
| Accion1 (hold) | Chute potente (más tiempo = más potencia) |
| Accion2 | Pase automático al compañero más cercano en cono ±30° frontal (si no hay nadie, al más cercano) |

### Modo defensa (el rival tiene el balón)
| Tecla | Acción |
|---|---|
| Movimiento | Desplaza al jugador activo |
| Accion1 | Tackle: roba el balón si el rival está a distancia corta y dentro de ±45° frontal |
| Accion2 | Cambia al jugador más cercano al balón |

### General
| Tecla | Acción |
|---|---|
| Escape / P | Pausa |

---

## 8. Escenas y flujo de pantallas

```
BootScene
  └─→ MenuScene
        ├─ Modo: 1P / 2P
        ├─ Tipo: Partido normal / Penalties
        ├─ Duración por parte: 1 / 2 / 3 min  (solo partido normal)
        └─→ SelectScene
              ├─ Ronda 1: Equipo local (5 Pokémons + equipación) o Random
              ├─ Ronda 2: Equipo visitante (5 Pokémons + equipación) o Random
              └─→ GameScene       (partido normal)
                    └─→ SummaryScene → MenuScene
              └─→ PenaltyScene    (modo penalties)
                    └─→ SummaryScene → MenuScene
```

### BootScene
Pantalla de presentación: nombre del juego, créditos básicos. "Pulsa cualquier tecla para continuar."

### MenuScene
Menú en texto simple. Navegación con teclado.

### SelectScene
- Pokémons listados y filtrables por tipo
- Un Pokémon puede repetirse en el mismo equipo o entre equipos
- Equipaciones: no se puede repetir el mismo pack entre equipos
- Botón "Random" para selección automática

### GameScene
- Moneda virtual al inicio → quién saca
- Posición inicial: formación 3-1-1 + portero
- Cuenta atrás 3-2-1 antes de arrancar
- Dos partes; descanso breve entre ellas con cambio de lado
- HUD: marcador, tiempo restante, parte actual, indicador de jugador activo
- Gol: texto "GOL", balón al centro, saque del equipo que recibió el gol
- Pausa (Escape/P): Continuar / Abandonar
- Final: empate = empate en v1 (sin prórroga)

### PenaltyScene
- Moneda virtual → quién lanza primero
- 5 tandas por equipo
- Terminación anticipada si la diferencia es matemáticamente insuperable
- Empate tras 5 tandas → muerte súbita 1 a 1
- Mira libre con teclas de movimiento + Accion1 para disparar (v1)

### SummaryScene
Marcador final, lista de goleadores, botón Volver al menú.

---

## 9. Entidades

### Ball
- Vector de posición y velocidad (x, y)
- Fricción constante que lo frena gradualmente
- Chute: impulso en dirección del jugador; magnitud según duración de la pulsación
- Rebote en bandas: invierte componente Y
- Rebote en postes/travesaño si no entra en portería
- Gol: el balón cruza la línea de portería dentro del ancho 4.5 y alto 2

### Player
- Estado: `idle / moving / tackling`
- Radio de control del balón: si el balón entra en su radio, lo lleva consigo
- El jugador activo se marca visualmente (borde diferenciado en el círculo)
- CPU (IA v1 zombie): se mueve hacia el balón si está en su mitad del campo
- Representación visual: círculo con color de equipación + número

### Goalkeeper
- Hereda comportamiento de Player
- Movimiento restringido al área
- Sigue lateralmente la posición X del balón
- En penalties: se lanza izquierda/derecha con retraso aleatorio (0.3–0.8s)
- Representación visual: círculo con color de portero del pack de equipación

### Colisiones
| Par | Comportamiento |
|---|---|
| Jugador vs balón | Radio de contacto ~1 unidad |
| Jugador vs jugador | Empuje suave, sin bloqueo completo |
| Jugador vs límites | Rebote simple |
| Tackle | ±45° frontal + distancia corta al rival con balón |

---

## 10. Audio (estructura preparada, sin implementar en v1)

Carpeta `assets/audio/` creada y vacía. Los puntos de llamada en el código están comentados con `// TODO: play('...')`. Sonidos previstos para v2: música de fondo, gol, chute, silbato.

---

## 11. Representación visual (v1)

Todos los elementos se dibujan con la API gráfica vectorial de Phaser, sin imágenes:
- Campo: rectángulo verde, líneas blancas, áreas, círculo central, puntos de penalty
- Jugadores: círculos de color según equipación, número encima
- Portero: círculo con color de portero del pack
- Balón: círculo blanco pequeño
- HUD: texto Phaser sobre el canvas
