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
// Estado compartido entre escenas — se rellena durante los menús
const GameState = {
  modo: null,
  tipo: null,
  duracionParte: null,
  equipoLocal:     { pokemons: [], equipacion: null, goleadores: [] },
  equipoVisitante: { pokemons: [], equipacion: null, goleadores: [] },
  marcador: { local: 0, visitante: 0 }
};
