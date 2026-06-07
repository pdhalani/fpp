# CLAUDE.md — FPP: Fútbol para Pokémons

## Arquitectura

**Motor:** Phaser 3 (copia local en `lib/phaser.min.js`)  
**Lenguaje:** JavaScript sin módulos ES6  
**Ejecución:** `file://` directo en navegador, sin servidor, sin build step  
**Scripts:** cargados con `<script src="...">` en `index.html` en orden  

## Estructura

```
fpp/
├── index.html
├── lib/phaser.min.js
├── assets/audio/          ← vacío en v1
├── js/
│   ├── config.js          ← controles, constantes y GameState global
│   ├── scenes/
│   │   ├── BootScene.js         ← presentación y créditos
│   │   ├── MenuScene.js         ← modo, tipo, duración
│   │   ├── SelectScene.js       ← selección de Pokémons y equipaciones
│   │   ├── PlaceholderGameScene.js ← placeholder hasta Plan 4
│   │   ├── GameScene.js         ← partido normal (Plan 4)
│   │   ├── PenaltyScene.js      ← modo penalties (Plan 4)
│   │   └── SummaryScene.js      ← resumen final
│   └── entities/
│       ├── Ball.js        ← física, rebotes, detección de gol
│       ├── Player.js      ← movimiento, chute, pase, tackle
│       └── Goalkeeper.js  ← portero con posicionamiento en línea portería→balón
└── data/                  ← ficheros editables manualmente por el usuario
    ├── pokemons.js
    ├── equipaciones.js    ← packs con icono emoji para HUD
    └── field.js
```

## Reglas de desarrollo

- `data/` son ficheros de usuario, no lógica de juego — no añadir código de juego aquí
- Los controles se definen en `config.js`, nunca hardcodeados en escenas o entidades
- Las dimensiones del campo siempre vienen de `FIELD_CONFIG` (data/field.js), nunca de constantes inline
- Cada escena de Phaser vive en su propio fichero en `js/scenes/`
- Los ganchos de audio están comentados con `// TODO: play('nombre')`, no eliminar
- `GameState` en `config.js` es el objeto global que pasa datos entre escenas
- El portero usa `color_portero` del pack de equipación, los jugadores de campo usan `color_jugadores`
- El campo de juego se dibuja con gráficos vectoriales Phaser, sin imágenes externas

## Estado actual (planes 1-3 completados)

- **Campo:** vectorial completo — líneas, áreas, área pequeña, puntos de penalty, medias lunas
- **Ball:** física con inercia, fricción, rebotes, detección de gol, offset visual delante del portador
- **Player:** movimiento, control de balón, chute (tap/hold), pase por cono, tackle
- **Goalkeeper:** posicionamiento en línea portería→balón (10%), corre al balón en área pequeña (velocidad doble), coge el balón automáticamente
- **Flujo de pantallas:** Boot → Menu → Select (×2) → Placeholder → Summary → Menu
- **SelectScene:** selección manual o random de 5 Pokémons + equipación, filtro por tipo (T), Enter/Space confirman
- **Gráficos:** círculos coloreados (sin sprites)
- **IA:** zombie básica (portero con posicionamiento inteligente)
- **Audio:** estructura preparada, sin implementar

## Pendiente (Plan 4)

- GameScene: partido completo con HUD, gol, pausa, dos partes
- PenaltyScene: modo penalties completo
- Reemplazar PlaceholderGameScene

Ver `ROADMAP.md` para mejoras futuras planificadas.
