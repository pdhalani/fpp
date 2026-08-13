# AGENT.md — FPP: Fútbol para Pokémons

## Arquitectura

**Motor:** Phaser 3 local (`lib/phaser.min.js`)  
**Lenguaje:** JavaScript global, sin módulos ES6 ni build  
**Ejecución:** abre `index.html` mediante `file://`  
**Carga:** los scripts se incluyen en orden desde `index.html`.

## Estructura relevante

```
data/                     Datos editables del juego
  pokemons.js             Catálogo fijo seleccionable
  equipaciones.js         Equipaciones disponibles
  field.js                Dimensiones del campo
js/
  config.js               Controles y GameState global
  entities/               Ball, Player y Goalkeeper
  scenes/                 Pantallas y modos de juego
  ui/                     MatchHud y MatchPauseMenu
```

## Reglas de desarrollo

- Mantener `file://`: no introducir servidor, build ni dependencias sin acordarlo.
- `data/` contiene datos editables, no lógica de juego.
- Los controles se definen solo en `js/config.js`.
- Las dimensiones del campo proceden de `FIELD_CONFIG`.
- `GameState` transporta las selecciones temporales entre escenas. No persiste entre partidas.
- Cada escena Phaser vive en su propio fichero. Los componentes de HUD/pausa viven en `js/ui/`.
- El campo se dibuja con gráficos vectoriales Phaser.
- Conserva los comentarios `// TODO: play(...)` de los futuros efectos de audio.

## Estado actual

- Partido normal: dos partes, marcador, pausa, goles, porteros y selección de jugador.
  - El HUD vive en una franja superior independiente y no tapa el campo.
  - Los iconos de Pokémon en partido usan una escala de lectura mayor, configurable desde `UI.escalaIconoPartido`.
  - En el descanso, todos los jugadores y porteros cambian de lado mediante recolocación atómica.
- IA: formación base, apoyos ofensivos y un único perseguidor por equipo; aún faltan decisiones tácticas avanzadas.
- Selección: una escena con rosters Local/Visitante y campo virtual central.
  - `MANUAL`: equipo → equipación → seis Pokémon → confirmación.
  - `RANDOM`: genera ambos equipos, muestra el resultado y requiere confirmar `JUGAR`.
  - `ESC` retrocede un nivel.
  - El catálogo se muestra ordenado por tipo y nombre; mantener arriba/abajo acelera el desplazamiento.
  - Los iconos de la alineación son compactos, están centrados en su círculo de equipación y las dos formaciones ocupan mitades separadas del campo virtual.
- Menú: Partido normal configura modo y duración; Memory está restringido a un jugador y permite elegir cartas; Penalties se configurará más adelante.
- Audio: preparado, sin implementar.

## Pendiente prioritario

- Revisar y cerrar reglas de Penalties.
- Registrar correctamente el goleador del último toque en partido normal.
- Continuar el roadmap de IA, gráficos, audio y reglas.
