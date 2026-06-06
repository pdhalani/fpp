const POKEMONS = [
  // ⚙️ Acero (0100)
  { id: 0101, nombre: "Ferrodada", tipo: "Acero" },
  { id: 0102, nombre: "Galar-Mauzi", tipo: "Acero" },
  { id: 0103, nombre: "Melmetal", tipo: "Acero" },

  // 💧 Agua (0200)
  { id: 0201, nombre: "Gyarados", tipo: "Agua" },
  { id: 0202, nombre: "Lapras", tipo: "Agua" },
  { id: 0203, nombre: "Squirtle", tipo: "Agua" },

  // 🐛 Bicho (0300)
  { id: 0301, nombre: "Honweisel", tipo: "Bicho" },
  { id: 0302, nombre: "Omot", tipo: "Bicho" },
  { id: 0303, nombre: "Pinsir", tipo: "Bicho" },

  // 🐉 Dragón (0400)
  { id: 0401, nombre: "Drapfel", tipo: "Dragón" },
  { id: 0402, nombre: "Miraidon", tipo: "Dragón" },
  { id: 0403, nombre: "Nigiragi", tipo: "Dragón" },

  // ⚡ Eléctrico (0500)
  { id: 0501, nombre: "Ferropuas", tipo: "Eléctrico" },
  { id: 0502, nombre: "Pikachu", tipo: "Eléctrico" },
  { id: 0503, nombre: "Zeraora", tipo: "Eléctrico" },

  // 👻 Fantasma (0600)
  { id: 0601, nombre: "Gengar", tipo: "Fantasma" },
  { id: 0602, nombre: "Iskalar", tipo: "Fantasma" },
  { id: 0603, nombre: "Kleoparda", tipo: "Fantasma" },

  // 🔥 Fuego (0700)
  { id: 0701, nombre: "Charmander", tipo: "Fuego" },
  { id: 0702, nombre: "Flareon", tipo: "Fuego" },
  { id: 0703, nombre: "Ponyta", tipo: "Fuego" },

  // ❄️ Hada (0800)
  { id: 0801, nombre: "Gardevoir", tipo: "Hada" },
  { id: 0802, nombre: "Flauschling", tipo: "Hada" },
  { id: 0803, nombre: "Hefel", tipo: "Hada" },

  // ❄️ Hielo (0900)
  { id: 0901, nombre: "Glaceon", tipo: "Hielo" },
  { id: 0902, nombre: "Gelatini", tipo: "Hielo" },
  { id: 0903, nombre: "Seemops", tipo: "Hielo" },

  // 🧍 Normal (1000)
  { id: 1001, nombre: "Boreos", tipo: "Normal" },
  { id: 1002, nombre: "Eevee", tipo: "Normal" },
  { id: 1003, nombre: "Mopex", tipo: "Normal" },

  // 🌿 Planta (1100)
  { id: 1101, nombre: "Bulbasaur", tipo: "Planta" },
  { id: 1102, nombre: "Igamaro", tipo: "Planta" },
  { id: 1103, nombre: "Torterra", tipo: "Planta" },

  // 🧠 Psíquico (1200)
  { id: 1201, nombre: "Alakazam", tipo: "Psíquico" },
  { id: 1202, nombre: "Hypno", tipo: "Psíquico" },
  { id: 1203, nombre: "Mewtwo", tipo: "Psíquico" },

  // 🪨 Roca (1300)
  // (sin Pokémon identificados)

  // 🌙 Siniestro (1400)
  { id: 1401, nombre: "Mightyena", tipo: "Siniestro" },
  { id: 1402, nombre: "Zoroark", tipo: "Siniestro" },

  // 🟫 Suelo (1500)
  { id: 1501, nombre: "Hippowdon", tipo: "Suelo" },
  { id: 1502, nombre: "Phanpy", tipo: "Suelo" },

  // ☠️ Veneno (1600)
  { id: 1601, nombre: "Arbok", tipo: "Veneno" },
  { id: 1602, nombre: "Drapion", tipo: "Veneno" },
  { id: 1603, nombre: "Seviper", tipo: "Veneno" },

  // 🌪️ Volador (1700)
  { id: 1701, nombre: "Togekiss", tipo: "Volador" },
  { id: 1702, nombre: "Yanmega", tipo: "Volador" }
];