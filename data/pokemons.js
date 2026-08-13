// data/pokemons.js
// Filtro editable: solo los Pokémons que aparecerán en selección.
// Los datos completos salen de LISTA_DE_POKEMONS.

const POKEMONS = [
  // 🔩 Acero
  { id: 990 }, // EN: Iron Treads | ES: Ferrodada | DE: Eisenrad
  { id: 52, form: "Galarian Meowth" }, // EN: Galarian Meowth | ES: Meowth de Galar | DE: Galar-Mauzi
  { id: 809 }, // EN: Melmetal | ES: Melmetal | DE: Melmetal

  // 💧 Agua
  { id: 130 }, // EN: Gyarados | ES: Gyarados | DE: Garados
  { id: 131 }, // EN: Lapras | ES: Lapras | DE: Lapras
  { id: 7 },   // EN: Squirtle | ES: Squirtle | DE: Schiggy

  // 🐛 Bicho
  { id: 416 }, // EN: Vespiquen | ES: Vespiquen | DE: Honweisel
  { id: 49 },  // EN: Venomoth | ES: Venomoth | DE: Omot
  { id: 127 }, // EN: Pinsir | ES: Pinsir | DE: Pinsir

  // 🐉 Dragón
  { id: 841 },  // EN: Flapple | ES: Flapple | DE: Schlapfel
  { id: 1008 }, // EN: Miraidon | ES: Miraidon | DE: Miraidon
  { id: 978 },  // EN: Tatsugiri | ES: Tatsugiri | DE: Nigiragi

  // ⚡ Eléctrico
  { id: 995 }, // EN: Iron Thorns | ES: Ferropúas | DE: Eisendorn
  { id: 25 },  // EN: Pikachu | ES: Pikachu | DE: Pikachu
  { id: 807 }, // EN: Zeraora | ES: Zeraora | DE: Zeraora

  // 👻 Fantasma
  { id: 94 },  // EN: Gengar | ES: Gengar | DE: Gengar
  { id: 686 }, // EN: Inkay | ES: Inkay | DE: Iscalar
  { id: 510 }, // EN: Liepard | ES: Liepard | DE: Kleoparda

  // 🔥 Fuego
  { id: 4 },   // EN: Charmander | ES: Charmander | DE: Glumanda
  { id: 136 }, // EN: Flareon | ES: Flareon | DE: Flamara
  { id: 77 },  // EN: Ponyta | ES: Ponyta | DE: Ponita

  // 🌸 Hada
  { id: 282 }, // EN: Gardevoir | ES: Gardevoir | DE: Guardevoir
  { id: 684 }, // EN: Swirlix | ES: Swirlix | DE: Flauschling
  { id: 926 }, // EN: Fidough | ES: Fidough | DE: Hefel

  // ❄️ Hielo
  { id: 471 }, // EN: Glaceon | ES: Glaceon | DE: Glaziola
  { id: 582 }, // EN: Vanillite | ES: Vanillite | DE: Gelatini
  { id: 363 }, // EN: Spheal | ES: Spheal | DE: Seemops

  // 🧍 Normal
  { id: 641, form: "Incarnate Forme" }, // EN: Tornadus (Incarnate Forme) | ES: Tornadus (Forma Avatar) | DE: Boreos (Inkarnationsform)
  { id: 133 }, // EN: Eevee | ES: Eevee | DE: Evoli
  { id: 967 }, // EN: Cyclizar | ES: Cyclizar | DE: Mopex

  // 🌿 Planta
  { id: 1 },   // EN: Bulbasaur | ES: Bulbasaur | DE: Bisasam
  { id: 650 }, // EN: Chespin | ES: Chespin | DE: Igamaro
  { id: 389 }, // EN: Torterra | ES: Torterra | DE: Chelterrar

  // 🧠 Psíquico
  { id: 65 },  // EN: Alakazam | ES: Alakazam | DE: Simsala
  { id: 97 },  // EN: Hypno | ES: Hypno | DE: Hypno
  { id: 150 }, // EN: Mewtwo | ES: Mewtwo | DE: Mewtu

  // 🪨 Roca
  { id: 95 }, // EN: Onix | ES: Onix | DE: Onix
  { id: 837 }, // EN: Rolycoly | ES: Rolycoly | DE: Klopsor
  { id: 1022 }, // EN: Iron Boulder | ES: Ferromole | DE: Eisenfels

  // 🌙 Siniestro
  { id: 262 }, // EN: Mightyena | ES: Mightyena | DE: Magnayen
  { id: 571 }, // EN: Zoroark | ES: Zoroark | DE: Zoroark
  { id: 543 }, // EN: Venipede | ES: Venipede | DE: Toxiped

  // 🟫 Suelo
  { id: 450 }, // EN: Hippowdon | ES: Hippowdon | DE: Hippoterus
  { id: 231 }, // EN: Phanpy | ES: Phanpy | DE: Phanpy
  { id: 322 }, // EN: Numel | ES: Numel | DE: Camaub

  // ☠️ Veneno
  { id: 24 },  // EN: Arbok | ES: Arbok | DE: Arbok
  { id: 452 }, // EN: Drapion | ES: Drapion | DE: Piondragi
  { id: 336 }, // EN: Seviper | ES: Seviper | DE: Vipitis

  // 🌪️ Volador
  { id: 468 }, // EN: Togekiss | ES: Togekiss | DE: Togekiss
  { id: 469 }, // EN: Yanmega | ES: Yanmega | DE: Yanme
  { id: 163 }  // EN: Hoothoot | ES: Hoothoot | DE: Hoothoot

];