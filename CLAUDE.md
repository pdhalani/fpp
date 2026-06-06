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
│   ├── config.js          ← controles y constantes (editables aquí)
│   ├── scenes/            ← Boot, Menu, Select, Game, Penalty, Summary
│   └── entities/          ← Ball, Player, Goalkeeper
└── data/                  ← ficheros editables manualmente por el usuario
    ├── pokemons.js
    ├── equipaciones.js
    └── field.js
```

## Reglas de desarrollo

- `data/` son ficheros de usuario, no lógica de juego — no añadir código de juego aquí
- Los controles se definen en `config.js`, nunca hardcodeados en escenas o entidades
- Las dimensiones del campo siempre vienen de `FIELD_CONFIG` (data/field.js), nunca de constantes inline
- Cada escena de Phaser vive en su propio fichero en `js/scenes/`
- Los ganchos de audio están comentados con `// TODO: play('nombre')`, no eliminar

## Estado actual (v1)

- Gráficos: círculos coloreados (sin sprites)
- IA: zombie (se mueve hacia el balón)
- Penalties: mira libre (sin barra de potencia)
- Audio: estructura preparada, sin implementar

Ver `ROADMAP.md` para mejoras planificadas.
