# FPP — Fútbol para Pokémons

Juego de fútbol 2D para navegador local. 1 o 2 jugadores con teclado. Vista cenital. Elige tus Pokémons por tipo y lleva tu equipo a la victoria.

## Requisitos
- Navegador moderno (Chrome, Firefox, Edge)
- Sin servidor, sin instalación

## Cómo jugar
Abre `index.html` directamente en el navegador. No necesita servidor, instalación ni build.

## Controles
| Acción | Jugador 1 | Jugador 2 |
|---|---|---|
| Mover | Flechas | WASD |
| Chute / potencia | L | F |
| Pase / cambio jugador | K | G |
| Pausa | Escape / P | Escape / P |

## Flujo de selección

Tras elegir Partido normal o Penalties, la selección de equipos se hace en una sola pantalla.

- Elige `MANUAL` o `RANDOM`.
- `RANDOM` completa ambos equipos y sus equipaciones, pero se queda en pantalla hasta confirmar `JUGAR`.
- En `MANUAL`, elige Local o Visitante con izquierda/derecha, confirma la equipación y selecciona seis Pokémon.
- Al confirmar un equipo se pasa al otro; cuando ambos están completos, confirma `JUGAR` con Espacio o Enter.
- `Escape` vuelve un nivel; desde el primer nivel regresa al menú principal.
- En la lista de Pokémon, mantén arriba/abajo para desplazarte rápidamente. El catálogo está ordenado por tipo y nombre.
- El campo virtual central muestra las dos formaciones separadas; los iconos están centrados en el círculo de su equipación.
- Las posiciones son `POR`, `DFI`, `DFD`, `MCI`, `MCD` y `DC`.

## Pantalla de partido

- El marcador, el reloj, los avisos y el jugador activo se muestran en una franja superior independiente, sin cubrir el terreno de juego.
- Los iconos de los jugadores se muestran ampliados para facilitar la lectura durante el partido; su escala se puede ajustar desde `UI.escalaIconoPartido`.
- Al empezar la segunda parte, ambos equipos —incluidos los porteros— cambian automáticamente de lado.
- La IA usa una formación 2-2-1: `DFI/DFD`, `MCI/MCD` y `DC`. Los jugadores se separan entre sí, toman automáticamente un balón suelto y pueden robar al rival si su Defensa es al menos igual a su Ataque.
- El portero sale a por el balón cuando entra en su área, roba con la misma regla y dispone de un 50% extra de Defensa. Las porterías se representan con postes y red dentro del terreno.

## Menú principal

- Partido normal: Tipo → Modo (1 o 2 jugadores) → Duración.
- Penalties: sin opciones adicionales por ahora.
- Bonus: Memory: solo 1 jugador y selección del número de cartas.

## Personalización
Edita los ficheros en `data/` para modificar el catálogo fijo de Pokémons, equipaciones y dimensiones del campo. La alineación de cada partido solo existe durante esa ejecución.

## Tecnología
Phaser 3 · JavaScript · `file://`
