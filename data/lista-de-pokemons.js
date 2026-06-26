const LISTA_DE_POKEMONS = [
    {
        "id": 1,
        "name": "Bulbasaur",
        "form": null,
        "types": [
            "Grass",
            "Poison"
        ],
        "stats": {
            "total": 318,
            "hp": 45,
            "attack": 49,
            "defense": 49,
            "spAtk": 65,
            "spDef": 65,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bulbasaur.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bulbasaur.avif"
        }
    },
    {
        "id": 2,
        "name": "Ivysaur",
        "form": null,
        "types": [
            "Grass",
            "Poison"
        ],
        "stats": {
            "total": 405,
            "hp": 60,
            "attack": 62,
            "defense": 63,
            "spAtk": 80,
            "spDef": 80,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ivysaur.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ivysaur.avif"
        }
    },
    {
        "id": 3,
        "name": "Venusaur",
        "form": null,
        "types": [
            "Grass",
            "Poison"
        ],
        "stats": {
            "total": 525,
            "hp": 80,
            "attack": 82,
            "defense": 83,
            "spAtk": 100,
            "spDef": 100,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/venusaur.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/venusaur.avif"
        }
    },
    {
        "id": 3,
        "name": "Venusaur",
        "form": "Mega Venusaur",
        "types": [
            "Grass",
            "Poison"
        ],
        "stats": {
            "total": 625,
            "hp": 80,
            "attack": 100,
            "defense": 123,
            "spAtk": 122,
            "spDef": 120,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/venusaur-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/venusaur-mega.avif"
        }
    },
    {
        "id": 4,
        "name": "Charmander",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 309,
            "hp": 39,
            "attack": 52,
            "defense": 43,
            "spAtk": 60,
            "spDef": 50,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/charmander.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/charmander.avif"
        }
    },
    {
        "id": 5,
        "name": "Charmeleon",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 405,
            "hp": 58,
            "attack": 64,
            "defense": 58,
            "spAtk": 80,
            "spDef": 65,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/charmeleon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/charmeleon.avif"
        }
    },
    {
        "id": 6,
        "name": "Charizard",
        "form": null,
        "types": [
            "Fire",
            "Flying"
        ],
        "stats": {
            "total": 534,
            "hp": 78,
            "attack": 84,
            "defense": 78,
            "spAtk": 109,
            "spDef": 85,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/charizard.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/charizard.avif"
        }
    },
    {
        "id": 6,
        "name": "Charizard",
        "form": "Mega Charizard X",
        "types": [
            "Fire",
            "Dragon"
        ],
        "stats": {
            "total": 634,
            "hp": 78,
            "attack": 130,
            "defense": 111,
            "spAtk": 130,
            "spDef": 85,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/charizard-mega-x.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/charizard-mega-x.avif"
        }
    },
    {
        "id": 6,
        "name": "Charizard",
        "form": "Mega Charizard Y",
        "types": [
            "Fire",
            "Flying"
        ],
        "stats": {
            "total": 634,
            "hp": 78,
            "attack": 104,
            "defense": 78,
            "spAtk": 159,
            "spDef": 115,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/charizard-mega-y.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/charizard-mega-y.avif"
        }
    },
    {
        "id": 7,
        "name": "Squirtle",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 314,
            "hp": 44,
            "attack": 48,
            "defense": 65,
            "spAtk": 50,
            "spDef": 64,
            "speed": 43
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/squirtle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/squirtle.avif"
        }
    },
    {
        "id": 8,
        "name": "Wartortle",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 405,
            "hp": 59,
            "attack": 63,
            "defense": 80,
            "spAtk": 65,
            "spDef": 80,
            "speed": 58
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wartortle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wartortle.avif"
        }
    },
    {
        "id": 9,
        "name": "Blastoise",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 530,
            "hp": 79,
            "attack": 83,
            "defense": 100,
            "spAtk": 85,
            "spDef": 105,
            "speed": 78
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/blastoise.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/blastoise.avif"
        }
    },
    {
        "id": 9,
        "name": "Blastoise",
        "form": "Mega Blastoise",
        "types": [
            "Water"
        ],
        "stats": {
            "total": 630,
            "hp": 79,
            "attack": 103,
            "defense": 120,
            "spAtk": 135,
            "spDef": 115,
            "speed": 78
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/blastoise-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/blastoise-mega.avif"
        }
    },
    {
        "id": 10,
        "name": "Caterpie",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 195,
            "hp": 45,
            "attack": 30,
            "defense": 35,
            "spAtk": 20,
            "spDef": 20,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/caterpie.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/caterpie.avif"
        }
    },
    {
        "id": 11,
        "name": "Metapod",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 205,
            "hp": 50,
            "attack": 20,
            "defense": 55,
            "spAtk": 25,
            "spDef": 25,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/metapod.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/metapod.avif"
        }
    },
    {
        "id": 12,
        "name": "Butterfree",
        "form": null,
        "types": [
            "Bug",
            "Flying"
        ],
        "stats": {
            "total": 395,
            "hp": 60,
            "attack": 45,
            "defense": 50,
            "spAtk": 90,
            "spDef": 80,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/butterfree.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/butterfree.avif"
        }
    },
    {
        "id": 13,
        "name": "Weedle",
        "form": null,
        "types": [
            "Bug",
            "Poison"
        ],
        "stats": {
            "total": 195,
            "hp": 40,
            "attack": 35,
            "defense": 30,
            "spAtk": 20,
            "spDef": 20,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/weedle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/weedle.avif"
        }
    },
    {
        "id": 14,
        "name": "Kakuna",
        "form": null,
        "types": [
            "Bug",
            "Poison"
        ],
        "stats": {
            "total": 205,
            "hp": 45,
            "attack": 25,
            "defense": 50,
            "spAtk": 25,
            "spDef": 25,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kakuna.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kakuna.avif"
        }
    },
    {
        "id": 15,
        "name": "Beedrill",
        "form": null,
        "types": [
            "Bug",
            "Poison"
        ],
        "stats": {
            "total": 395,
            "hp": 65,
            "attack": 90,
            "defense": 40,
            "spAtk": 45,
            "spDef": 80,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/beedrill.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/beedrill.avif"
        }
    },
    {
        "id": 15,
        "name": "Beedrill",
        "form": "Mega Beedrill",
        "types": [
            "Bug",
            "Poison"
        ],
        "stats": {
            "total": 495,
            "hp": 65,
            "attack": 150,
            "defense": 40,
            "spAtk": 15,
            "spDef": 80,
            "speed": 145
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/beedrill-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/beedrill-mega.avif"
        }
    },
    {
        "id": 16,
        "name": "Pidgey",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 251,
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "spAtk": 35,
            "spDef": 35,
            "speed": 56
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pidgey.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pidgey.avif"
        }
    },
    {
        "id": 17,
        "name": "Pidgeotto",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 349,
            "hp": 63,
            "attack": 60,
            "defense": 55,
            "spAtk": 50,
            "spDef": 50,
            "speed": 71
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pidgeotto.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pidgeotto.avif"
        }
    },
    {
        "id": 18,
        "name": "Pidgeot",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 479,
            "hp": 83,
            "attack": 80,
            "defense": 75,
            "spAtk": 70,
            "spDef": 70,
            "speed": 101
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pidgeot.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pidgeot.avif"
        }
    },
    {
        "id": 18,
        "name": "Pidgeot",
        "form": "Mega Pidgeot",
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 579,
            "hp": 83,
            "attack": 80,
            "defense": 80,
            "spAtk": 135,
            "spDef": 80,
            "speed": 121
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pidgeot-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pidgeot-mega.avif"
        }
    },
    {
        "id": 19,
        "name": "Rattata",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 253,
            "hp": 30,
            "attack": 56,
            "defense": 35,
            "spAtk": 25,
            "spDef": 35,
            "speed": 72
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rattata.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rattata.avif"
        }
    },
    {
        "id": 19,
        "name": "Rattata",
        "form": "Alolan Rattata",
        "types": [
            "Dark",
            "Normal"
        ],
        "stats": {
            "total": 253,
            "hp": 30,
            "attack": 56,
            "defense": 35,
            "spAtk": 25,
            "spDef": 35,
            "speed": 72
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rattata-alolan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rattata-alolan.avif"
        }
    },
    {
        "id": 20,
        "name": "Raticate",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 413,
            "hp": 55,
            "attack": 81,
            "defense": 60,
            "spAtk": 50,
            "spDef": 70,
            "speed": 97
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/raticate.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/raticate.avif"
        }
    },
    {
        "id": 20,
        "name": "Raticate",
        "form": "Alolan Raticate",
        "types": [
            "Dark",
            "Normal"
        ],
        "stats": {
            "total": 413,
            "hp": 75,
            "attack": 71,
            "defense": 70,
            "spAtk": 40,
            "spDef": 80,
            "speed": 77
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/raticate-alolan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/raticate-alolan.avif"
        }
    },
    {
        "id": 21,
        "name": "Spearow",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 262,
            "hp": 40,
            "attack": 60,
            "defense": 30,
            "spAtk": 31,
            "spDef": 31,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/spearow.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/spearow.avif"
        }
    },
    {
        "id": 22,
        "name": "Fearow",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 442,
            "hp": 65,
            "attack": 90,
            "defense": 65,
            "spAtk": 61,
            "spDef": 61,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/fearow.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/fearow.avif"
        }
    },
    {
        "id": 23,
        "name": "Ekans",
        "form": null,
        "types": [
            "Poison"
        ],
        "stats": {
            "total": 288,
            "hp": 35,
            "attack": 60,
            "defense": 44,
            "spAtk": 40,
            "spDef": 54,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ekans.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ekans.avif"
        }
    },
    {
        "id": 24,
        "name": "Arbok",
        "form": null,
        "types": [
            "Poison"
        ],
        "stats": {
            "total": 448,
            "hp": 60,
            "attack": 95,
            "defense": 69,
            "spAtk": 65,
            "spDef": 79,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/arbok.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/arbok.avif"
        }
    },
    {
        "id": 25,
        "name": "Pikachu",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 320,
            "hp": 35,
            "attack": 55,
            "defense": 40,
            "spAtk": 50,
            "spDef": 50,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pikachu.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pikachu.avif"
        }
    },
    {
        "id": 25,
        "name": "Pikachu",
        "form": "Partner Pikachu",
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 430,
            "hp": 45,
            "attack": 80,
            "defense": 50,
            "spAtk": 75,
            "spDef": 60,
            "speed": 120
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pikachu-lets-go.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pikachu-lets-go.avif"
        }
    },
    {
        "id": 26,
        "name": "Raichu",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 485,
            "hp": 60,
            "attack": 90,
            "defense": 55,
            "spAtk": 90,
            "spDef": 80,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/raichu.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/raichu.avif"
        }
    },
    {
        "id": 26,
        "name": "Raichu",
        "form": "Alolan Raichu",
        "types": [
            "Electric",
            "Psychic"
        ],
        "stats": {
            "total": 485,
            "hp": 60,
            "attack": 85,
            "defense": 50,
            "spAtk": 95,
            "spDef": 85,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/raichu-alolan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/raichu-alolan.avif"
        }
    },
    {
        "id": 27,
        "name": "Sandshrew",
        "form": null,
        "types": [
            "Ground"
        ],
        "stats": {
            "total": 300,
            "hp": 50,
            "attack": 75,
            "defense": 85,
            "spAtk": 20,
            "spDef": 30,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sandshrew.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sandshrew.avif"
        }
    },
    {
        "id": 27,
        "name": "Sandshrew",
        "form": "Alolan Sandshrew",
        "types": [
            "Ice",
            "Steel"
        ],
        "stats": {
            "total": 300,
            "hp": 50,
            "attack": 75,
            "defense": 90,
            "spAtk": 10,
            "spDef": 35,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sandshrew-alolan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sandshrew-alolan.avif"
        }
    },
    {
        "id": 28,
        "name": "Sandslash",
        "form": null,
        "types": [
            "Ground"
        ],
        "stats": {
            "total": 450,
            "hp": 75,
            "attack": 100,
            "defense": 110,
            "spAtk": 45,
            "spDef": 55,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sandslash.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sandslash.avif"
        }
    },
    {
        "id": 28,
        "name": "Sandslash",
        "form": "Alolan Sandslash",
        "types": [
            "Ice",
            "Steel"
        ],
        "stats": {
            "total": 450,
            "hp": 75,
            "attack": 100,
            "defense": 120,
            "spAtk": 25,
            "spDef": 65,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sandslash-alolan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sandslash-alolan.avif"
        }
    },
    {
        "id": 29,
        "name": "Nidoran♀",
        "form": null,
        "types": [
            "Poison"
        ],
        "stats": {
            "total": 275,
            "hp": 55,
            "attack": 47,
            "defense": 52,
            "spAtk": 40,
            "spDef": 40,
            "speed": 41
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/nidoran-f.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/nidoran-f.avif"
        }
    },
    {
        "id": 30,
        "name": "Nidorina",
        "form": null,
        "types": [
            "Poison"
        ],
        "stats": {
            "total": 365,
            "hp": 70,
            "attack": 62,
            "defense": 67,
            "spAtk": 55,
            "spDef": 55,
            "speed": 56
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/nidorina.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/nidorina.avif"
        }
    },
    {
        "id": 31,
        "name": "Nidoqueen",
        "form": null,
        "types": [
            "Poison",
            "Ground"
        ],
        "stats": {
            "total": 505,
            "hp": 90,
            "attack": 92,
            "defense": 87,
            "spAtk": 75,
            "spDef": 85,
            "speed": 76
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/nidoqueen.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/nidoqueen.avif"
        }
    },
    {
        "id": 32,
        "name": "Nidoran♂",
        "form": null,
        "types": [
            "Poison"
        ],
        "stats": {
            "total": 273,
            "hp": 46,
            "attack": 57,
            "defense": 40,
            "spAtk": 40,
            "spDef": 40,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/nidoran-m.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/nidoran-m.avif"
        }
    },
    {
        "id": 33,
        "name": "Nidorino",
        "form": null,
        "types": [
            "Poison"
        ],
        "stats": {
            "total": 365,
            "hp": 61,
            "attack": 72,
            "defense": 57,
            "spAtk": 55,
            "spDef": 55,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/nidorino.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/nidorino.avif"
        }
    },
    {
        "id": 34,
        "name": "Nidoking",
        "form": null,
        "types": [
            "Poison",
            "Ground"
        ],
        "stats": {
            "total": 505,
            "hp": 81,
            "attack": 102,
            "defense": 77,
            "spAtk": 85,
            "spDef": 75,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/nidoking.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/nidoking.avif"
        }
    },
    {
        "id": 35,
        "name": "Clefairy",
        "form": null,
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 323,
            "hp": 70,
            "attack": 45,
            "defense": 48,
            "spAtk": 60,
            "spDef": 65,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/clefairy.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/clefairy.avif"
        }
    },
    {
        "id": 36,
        "name": "Clefable",
        "form": null,
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 483,
            "hp": 95,
            "attack": 70,
            "defense": 73,
            "spAtk": 95,
            "spDef": 90,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/clefable.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/clefable.avif"
        }
    },
    {
        "id": 37,
        "name": "Vulpix",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 299,
            "hp": 38,
            "attack": 41,
            "defense": 40,
            "spAtk": 50,
            "spDef": 65,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/vulpix.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/vulpix.avif"
        }
    },
    {
        "id": 37,
        "name": "Vulpix",
        "form": "Alolan Vulpix",
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 299,
            "hp": 38,
            "attack": 41,
            "defense": 40,
            "spAtk": 50,
            "spDef": 65,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/vulpix-alolan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/vulpix-alolan.avif"
        }
    },
    {
        "id": 38,
        "name": "Ninetales",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 505,
            "hp": 73,
            "attack": 76,
            "defense": 75,
            "spAtk": 81,
            "spDef": 100,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ninetales.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ninetales.avif"
        }
    },
    {
        "id": 38,
        "name": "Ninetales",
        "form": "Alolan Ninetales",
        "types": [
            "Ice",
            "Fairy"
        ],
        "stats": {
            "total": 505,
            "hp": 73,
            "attack": 67,
            "defense": 75,
            "spAtk": 81,
            "spDef": 100,
            "speed": 109
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ninetales-alolan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ninetales-alolan.avif"
        }
    },
    {
        "id": 39,
        "name": "Jigglypuff",
        "form": null,
        "types": [
            "Normal",
            "Fairy"
        ],
        "stats": {
            "total": 270,
            "hp": 115,
            "attack": 45,
            "defense": 20,
            "spAtk": 45,
            "spDef": 25,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/jigglypuff.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/jigglypuff.avif"
        }
    },
    {
        "id": 40,
        "name": "Wigglytuff",
        "form": null,
        "types": [
            "Normal",
            "Fairy"
        ],
        "stats": {
            "total": 435,
            "hp": 140,
            "attack": 70,
            "defense": 45,
            "spAtk": 85,
            "spDef": 50,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wigglytuff.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wigglytuff.avif"
        }
    },
    {
        "id": 41,
        "name": "Zubat",
        "form": null,
        "types": [
            "Poison",
            "Flying"
        ],
        "stats": {
            "total": 245,
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "spAtk": 30,
            "spDef": 40,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zubat.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zubat.avif"
        }
    },
    {
        "id": 42,
        "name": "Golbat",
        "form": null,
        "types": [
            "Poison",
            "Flying"
        ],
        "stats": {
            "total": 455,
            "hp": 75,
            "attack": 80,
            "defense": 70,
            "spAtk": 65,
            "spDef": 75,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/golbat.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/golbat.avif"
        }
    },
    {
        "id": 43,
        "name": "Oddish",
        "form": null,
        "types": [
            "Grass",
            "Poison"
        ],
        "stats": {
            "total": 320,
            "hp": 45,
            "attack": 50,
            "defense": 55,
            "spAtk": 75,
            "spDef": 65,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/oddish.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/oddish.avif"
        }
    },
    {
        "id": 44,
        "name": "Gloom",
        "form": null,
        "types": [
            "Grass",
            "Poison"
        ],
        "stats": {
            "total": 395,
            "hp": 60,
            "attack": 65,
            "defense": 70,
            "spAtk": 85,
            "spDef": 75,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gloom.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gloom.avif"
        }
    },
    {
        "id": 45,
        "name": "Vileplume",
        "form": null,
        "types": [
            "Grass",
            "Poison"
        ],
        "stats": {
            "total": 490,
            "hp": 75,
            "attack": 80,
            "defense": 85,
            "spAtk": 110,
            "spDef": 90,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/vileplume.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/vileplume.avif"
        }
    },
    {
        "id": 46,
        "name": "Paras",
        "form": null,
        "types": [
            "Bug",
            "Grass"
        ],
        "stats": {
            "total": 285,
            "hp": 35,
            "attack": 70,
            "defense": 55,
            "spAtk": 45,
            "spDef": 55,
            "speed": 25
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/paras.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/paras.avif"
        }
    },
    {
        "id": 47,
        "name": "Parasect",
        "form": null,
        "types": [
            "Bug",
            "Grass"
        ],
        "stats": {
            "total": 405,
            "hp": 60,
            "attack": 95,
            "defense": 80,
            "spAtk": 60,
            "spDef": 80,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/parasect.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/parasect.avif"
        }
    },
    {
        "id": 48,
        "name": "Venonat",
        "form": null,
        "types": [
            "Bug",
            "Poison"
        ],
        "stats": {
            "total": 305,
            "hp": 60,
            "attack": 55,
            "defense": 50,
            "spAtk": 40,
            "spDef": 55,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/venonat.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/venonat.avif"
        }
    },
    {
        "id": 49,
        "name": "Venomoth",
        "form": null,
        "types": [
            "Bug",
            "Poison"
        ],
        "stats": {
            "total": 450,
            "hp": 70,
            "attack": 65,
            "defense": 60,
            "spAtk": 90,
            "spDef": 75,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/venomoth.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/venomoth.avif"
        }
    },
    {
        "id": 50,
        "name": "Diglett",
        "form": null,
        "types": [
            "Ground"
        ],
        "stats": {
            "total": 265,
            "hp": 10,
            "attack": 55,
            "defense": 25,
            "spAtk": 35,
            "spDef": 45,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/diglett.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/diglett.avif"
        }
    },
    {
        "id": 50,
        "name": "Diglett",
        "form": "Alolan Diglett",
        "types": [
            "Ground",
            "Steel"
        ],
        "stats": {
            "total": 265,
            "hp": 10,
            "attack": 55,
            "defense": 30,
            "spAtk": 35,
            "spDef": 45,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/diglett-alolan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/diglett-alolan.avif"
        }
    },
    {
        "id": 51,
        "name": "Dugtrio",
        "form": null,
        "types": [
            "Ground"
        ],
        "stats": {
            "total": 425,
            "hp": 35,
            "attack": 100,
            "defense": 50,
            "spAtk": 50,
            "spDef": 70,
            "speed": 120
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dugtrio.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dugtrio.avif"
        }
    },
    {
        "id": 51,
        "name": "Dugtrio",
        "form": "Alolan Dugtrio",
        "types": [
            "Ground",
            "Steel"
        ],
        "stats": {
            "total": 425,
            "hp": 35,
            "attack": 100,
            "defense": 60,
            "spAtk": 50,
            "spDef": 70,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dugtrio-alolan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dugtrio-alolan.avif"
        }
    },
    {
        "id": 52,
        "name": "Meowth",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 290,
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "spAtk": 40,
            "spDef": 40,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/meowth.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/meowth.avif"
        }
    },
    {
        "id": 52,
        "name": "Meowth",
        "form": "Alolan Meowth",
        "types": [
            "Dark"
        ],
        "stats": {
            "total": 290,
            "hp": 40,
            "attack": 35,
            "defense": 35,
            "spAtk": 50,
            "spDef": 40,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/meowth-alolan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/meowth-alolan.avif"
        }
    },
    {
        "id": 52,
        "name": "Meowth",
        "form": "Galarian Meowth",
        "types": [
            "Steel"
        ],
        "stats": {
            "total": 290,
            "hp": 50,
            "attack": 65,
            "defense": 55,
            "spAtk": 40,
            "spDef": 40,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/meowth-galarian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/meowth-galarian.avif"
        }
    },
    {
        "id": 53,
        "name": "Persian",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 440,
            "hp": 65,
            "attack": 70,
            "defense": 60,
            "spAtk": 65,
            "spDef": 65,
            "speed": 115
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/persian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/persian.avif"
        }
    },
    {
        "id": 53,
        "name": "Persian",
        "form": "Alolan Persian",
        "types": [
            "Dark"
        ],
        "stats": {
            "total": 440,
            "hp": 65,
            "attack": 60,
            "defense": 60,
            "spAtk": 75,
            "spDef": 65,
            "speed": 115
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/persian-alolan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/persian-alolan.avif"
        }
    },
    {
        "id": 54,
        "name": "Psyduck",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 320,
            "hp": 50,
            "attack": 52,
            "defense": 48,
            "spAtk": 65,
            "spDef": 50,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/psyduck.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/psyduck.avif"
        }
    },
    {
        "id": 55,
        "name": "Golduck",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 500,
            "hp": 80,
            "attack": 82,
            "defense": 78,
            "spAtk": 95,
            "spDef": 80,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/golduck.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/golduck.avif"
        }
    },
    {
        "id": 56,
        "name": "Mankey",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 305,
            "hp": 40,
            "attack": 80,
            "defense": 35,
            "spAtk": 35,
            "spDef": 45,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mankey.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mankey.avif"
        }
    },
    {
        "id": 57,
        "name": "Primeape",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 455,
            "hp": 65,
            "attack": 105,
            "defense": 60,
            "spAtk": 60,
            "spDef": 70,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/primeape.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/primeape.avif"
        }
    },
    {
        "id": 58,
        "name": "Growlithe",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 350,
            "hp": 55,
            "attack": 70,
            "defense": 45,
            "spAtk": 70,
            "spDef": 50,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/growlithe.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/growlithe.avif"
        }
    },
    {
        "id": 58,
        "name": "Growlithe",
        "form": "Hisuian Growlithe",
        "types": [
            "Fire",
            "Rock"
        ],
        "stats": {
            "total": 350,
            "hp": 60,
            "attack": 75,
            "defense": 45,
            "spAtk": 65,
            "spDef": 50,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/growlithe-hisuian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/growlithe-hisuian.avif"
        }
    },
    {
        "id": 59,
        "name": "Arcanine",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 555,
            "hp": 90,
            "attack": 110,
            "defense": 80,
            "spAtk": 100,
            "spDef": 80,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/arcanine.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/arcanine.avif"
        }
    },
    {
        "id": 59,
        "name": "Arcanine",
        "form": "Hisuian Arcanine",
        "types": [
            "Fire",
            "Rock"
        ],
        "stats": {
            "total": 555,
            "hp": 95,
            "attack": 115,
            "defense": 80,
            "spAtk": 95,
            "spDef": 80,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/arcanine-hisuian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/arcanine-hisuian.avif"
        }
    },
    {
        "id": 60,
        "name": "Poliwag",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 300,
            "hp": 40,
            "attack": 50,
            "defense": 40,
            "spAtk": 40,
            "spDef": 40,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/poliwag.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/poliwag.avif"
        }
    },
    {
        "id": 61,
        "name": "Poliwhirl",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 385,
            "hp": 65,
            "attack": 65,
            "defense": 65,
            "spAtk": 50,
            "spDef": 50,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/poliwhirl.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/poliwhirl.avif"
        }
    },
    {
        "id": 62,
        "name": "Poliwrath",
        "form": null,
        "types": [
            "Water",
            "Fighting"
        ],
        "stats": {
            "total": 510,
            "hp": 90,
            "attack": 95,
            "defense": 95,
            "spAtk": 70,
            "spDef": 90,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/poliwrath.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/poliwrath.avif"
        }
    },
    {
        "id": 63,
        "name": "Abra",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 310,
            "hp": 25,
            "attack": 20,
            "defense": 15,
            "spAtk": 105,
            "spDef": 55,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/abra.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/abra.avif"
        }
    },
    {
        "id": 64,
        "name": "Kadabra",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 400,
            "hp": 40,
            "attack": 35,
            "defense": 30,
            "spAtk": 120,
            "spDef": 70,
            "speed": 105
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kadabra.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kadabra.avif"
        }
    },
    {
        "id": 65,
        "name": "Alakazam",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 500,
            "hp": 55,
            "attack": 50,
            "defense": 45,
            "spAtk": 135,
            "spDef": 95,
            "speed": 120
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/alakazam.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/alakazam.avif"
        }
    },
    {
        "id": 65,
        "name": "Alakazam",
        "form": "Mega Alakazam",
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 600,
            "hp": 55,
            "attack": 50,
            "defense": 65,
            "spAtk": 175,
            "spDef": 105,
            "speed": 150
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/alakazam-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/alakazam-mega.avif"
        }
    },
    {
        "id": 66,
        "name": "Machop",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 305,
            "hp": 70,
            "attack": 80,
            "defense": 50,
            "spAtk": 35,
            "spDef": 35,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/machop.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/machop.avif"
        }
    },
    {
        "id": 67,
        "name": "Machoke",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 405,
            "hp": 80,
            "attack": 100,
            "defense": 70,
            "spAtk": 50,
            "spDef": 60,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/machoke.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/machoke.avif"
        }
    },
    {
        "id": 68,
        "name": "Machamp",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 505,
            "hp": 90,
            "attack": 130,
            "defense": 80,
            "spAtk": 65,
            "spDef": 85,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/machamp.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/machamp.avif"
        }
    },
    {
        "id": 69,
        "name": "Bellsprout",
        "form": null,
        "types": [
            "Grass",
            "Poison"
        ],
        "stats": {
            "total": 300,
            "hp": 50,
            "attack": 75,
            "defense": 35,
            "spAtk": 70,
            "spDef": 30,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bellsprout.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bellsprout.avif"
        }
    },
    {
        "id": 70,
        "name": "Weepinbell",
        "form": null,
        "types": [
            "Grass",
            "Poison"
        ],
        "stats": {
            "total": 390,
            "hp": 65,
            "attack": 90,
            "defense": 50,
            "spAtk": 85,
            "spDef": 45,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/weepinbell.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/weepinbell.avif"
        }
    },
    {
        "id": 71,
        "name": "Victreebel",
        "form": null,
        "types": [
            "Grass",
            "Poison"
        ],
        "stats": {
            "total": 490,
            "hp": 80,
            "attack": 105,
            "defense": 65,
            "spAtk": 100,
            "spDef": 70,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/victreebel.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/victreebel.avif"
        }
    },
    {
        "id": 71,
        "name": "Victreebel",
        "form": "Mega Victreebel",
        "types": [
            "Grass",
            "Poison"
        ],
        "stats": {
            "total": 590,
            "hp": 80,
            "attack": 125,
            "defense": 85,
            "spAtk": 135,
            "spDef": 95,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/s.png",
            "avif": null
        }
    },
    {
        "id": 72,
        "name": "Tentacool",
        "form": null,
        "types": [
            "Water",
            "Poison"
        ],
        "stats": {
            "total": 335,
            "hp": 40,
            "attack": 40,
            "defense": 35,
            "spAtk": 50,
            "spDef": 100,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tentacool.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tentacool.avif"
        }
    },
    {
        "id": 73,
        "name": "Tentacruel",
        "form": null,
        "types": [
            "Water",
            "Poison"
        ],
        "stats": {
            "total": 515,
            "hp": 80,
            "attack": 70,
            "defense": 65,
            "spAtk": 80,
            "spDef": 120,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tentacruel.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tentacruel.avif"
        }
    },
    {
        "id": 74,
        "name": "Geodude",
        "form": null,
        "types": [
            "Rock",
            "Ground"
        ],
        "stats": {
            "total": 300,
            "hp": 40,
            "attack": 80,
            "defense": 100,
            "spAtk": 30,
            "spDef": 30,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/geodude.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/geodude.avif"
        }
    },
    {
        "id": 74,
        "name": "Geodude",
        "form": "Alolan Geodude",
        "types": [
            "Rock",
            "Electric"
        ],
        "stats": {
            "total": 300,
            "hp": 40,
            "attack": 80,
            "defense": 100,
            "spAtk": 30,
            "spDef": 30,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/geodude-alolan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/geodude-alolan.avif"
        }
    },
    {
        "id": 75,
        "name": "Graveler",
        "form": null,
        "types": [
            "Rock",
            "Ground"
        ],
        "stats": {
            "total": 390,
            "hp": 55,
            "attack": 95,
            "defense": 115,
            "spAtk": 45,
            "spDef": 45,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/graveler.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/graveler.avif"
        }
    },
    {
        "id": 75,
        "name": "Graveler",
        "form": "Alolan Graveler",
        "types": [
            "Rock",
            "Electric"
        ],
        "stats": {
            "total": 390,
            "hp": 55,
            "attack": 95,
            "defense": 115,
            "spAtk": 45,
            "spDef": 45,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/graveler-alolan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/graveler-alolan.avif"
        }
    },
    {
        "id": 76,
        "name": "Golem",
        "form": null,
        "types": [
            "Rock",
            "Ground"
        ],
        "stats": {
            "total": 495,
            "hp": 80,
            "attack": 120,
            "defense": 130,
            "spAtk": 55,
            "spDef": 65,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/golem.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/golem.avif"
        }
    },
    {
        "id": 76,
        "name": "Golem",
        "form": "Alolan Golem",
        "types": [
            "Rock",
            "Electric"
        ],
        "stats": {
            "total": 495,
            "hp": 80,
            "attack": 120,
            "defense": 130,
            "spAtk": 55,
            "spDef": 65,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/golem-alolan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/golem-alolan.avif"
        }
    },
    {
        "id": 77,
        "name": "Ponyta",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 410,
            "hp": 50,
            "attack": 85,
            "defense": 55,
            "spAtk": 65,
            "spDef": 65,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ponyta.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ponyta.avif"
        }
    },
    {
        "id": 77,
        "name": "Ponyta",
        "form": "Galarian Ponyta",
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 410,
            "hp": 50,
            "attack": 85,
            "defense": 55,
            "spAtk": 65,
            "spDef": 65,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ponyta-galarian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ponyta-galarian.avif"
        }
    },
    {
        "id": 78,
        "name": "Rapidash",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 500,
            "hp": 65,
            "attack": 100,
            "defense": 70,
            "spAtk": 80,
            "spDef": 80,
            "speed": 105
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rapidash.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rapidash.avif"
        }
    },
    {
        "id": 78,
        "name": "Rapidash",
        "form": "Galarian Rapidash",
        "types": [
            "Psychic",
            "Fairy"
        ],
        "stats": {
            "total": 500,
            "hp": 65,
            "attack": 100,
            "defense": 70,
            "spAtk": 80,
            "spDef": 80,
            "speed": 105
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rapidash-galarian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rapidash-galarian.avif"
        }
    },
    {
        "id": 79,
        "name": "Slowpoke",
        "form": null,
        "types": [
            "Water",
            "Psychic"
        ],
        "stats": {
            "total": 315,
            "hp": 90,
            "attack": 65,
            "defense": 65,
            "spAtk": 40,
            "spDef": 40,
            "speed": 15
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/slowpoke.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/slowpoke.avif"
        }
    },
    {
        "id": 79,
        "name": "Slowpoke",
        "form": "Galarian Slowpoke",
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 315,
            "hp": 90,
            "attack": 65,
            "defense": 65,
            "spAtk": 40,
            "spDef": 40,
            "speed": 15
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/slowpoke-galarian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/slowpoke-galarian.avif"
        }
    },
    {
        "id": 80,
        "name": "Slowbro",
        "form": null,
        "types": [
            "Water",
            "Psychic"
        ],
        "stats": {
            "total": 490,
            "hp": 95,
            "attack": 75,
            "defense": 110,
            "spAtk": 100,
            "spDef": 80,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/slowbro.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/slowbro.avif"
        }
    },
    {
        "id": 80,
        "name": "Slowbro",
        "form": "Mega Slowbro",
        "types": [
            "Water",
            "Psychic"
        ],
        "stats": {
            "total": 590,
            "hp": 95,
            "attack": 75,
            "defense": 180,
            "spAtk": 130,
            "spDef": 80,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/slowbro-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/slowbro-mega.avif"
        }
    },
    {
        "id": 80,
        "name": "Slowbro",
        "form": "Galarian Slowbro",
        "types": [
            "Poison",
            "Psychic"
        ],
        "stats": {
            "total": 490,
            "hp": 95,
            "attack": 100,
            "defense": 95,
            "spAtk": 100,
            "spDef": 70,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/slowbro-galarian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/slowbro-galarian.avif"
        }
    },
    {
        "id": 81,
        "name": "Magnemite",
        "form": null,
        "types": [
            "Electric",
            "Steel"
        ],
        "stats": {
            "total": 325,
            "hp": 25,
            "attack": 35,
            "defense": 70,
            "spAtk": 95,
            "spDef": 55,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/magnemite.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/magnemite.avif"
        }
    },
    {
        "id": 82,
        "name": "Magneton",
        "form": null,
        "types": [
            "Electric",
            "Steel"
        ],
        "stats": {
            "total": 465,
            "hp": 50,
            "attack": 60,
            "defense": 95,
            "spAtk": 120,
            "spDef": 70,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/magneton.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/magneton.avif"
        }
    },
    {
        "id": 83,
        "name": "Farfetch'd",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 377,
            "hp": 52,
            "attack": 90,
            "defense": 55,
            "spAtk": 58,
            "spDef": 62,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/farfetchd.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/farfetchd.avif"
        }
    },
    {
        "id": 83,
        "name": "Farfetch'd",
        "form": "Galarian Farfetch'd",
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 377,
            "hp": 52,
            "attack": 95,
            "defense": 55,
            "spAtk": 58,
            "spDef": 62,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/farfetchd-galarian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/farfetchd-galarian.avif"
        }
    },
    {
        "id": 84,
        "name": "Doduo",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 310,
            "hp": 35,
            "attack": 85,
            "defense": 45,
            "spAtk": 35,
            "spDef": 35,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/doduo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/doduo.avif"
        }
    },
    {
        "id": 85,
        "name": "Dodrio",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 470,
            "hp": 60,
            "attack": 110,
            "defense": 70,
            "spAtk": 60,
            "spDef": 60,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dodrio.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dodrio.avif"
        }
    },
    {
        "id": 86,
        "name": "Seel",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 325,
            "hp": 65,
            "attack": 45,
            "defense": 55,
            "spAtk": 45,
            "spDef": 70,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/seel.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/seel.avif"
        }
    },
    {
        "id": 87,
        "name": "Dewgong",
        "form": null,
        "types": [
            "Water",
            "Ice"
        ],
        "stats": {
            "total": 475,
            "hp": 90,
            "attack": 70,
            "defense": 80,
            "spAtk": 70,
            "spDef": 95,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dewgong.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dewgong.avif"
        }
    },
    {
        "id": 88,
        "name": "Grimer",
        "form": null,
        "types": [
            "Poison"
        ],
        "stats": {
            "total": 325,
            "hp": 80,
            "attack": 80,
            "defense": 50,
            "spAtk": 40,
            "spDef": 50,
            "speed": 25
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/grimer.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/grimer.avif"
        }
    },
    {
        "id": 88,
        "name": "Grimer",
        "form": "Alolan Grimer",
        "types": [
            "Poison",
            "Dark"
        ],
        "stats": {
            "total": 325,
            "hp": 80,
            "attack": 80,
            "defense": 50,
            "spAtk": 40,
            "spDef": 50,
            "speed": 25
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/grimer-alolan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/grimer-alolan.avif"
        }
    },
    {
        "id": 89,
        "name": "Muk",
        "form": null,
        "types": [
            "Poison"
        ],
        "stats": {
            "total": 500,
            "hp": 105,
            "attack": 105,
            "defense": 75,
            "spAtk": 65,
            "spDef": 100,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/muk.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/muk.avif"
        }
    },
    {
        "id": 89,
        "name": "Muk",
        "form": "Alolan Muk",
        "types": [
            "Poison",
            "Dark"
        ],
        "stats": {
            "total": 500,
            "hp": 105,
            "attack": 105,
            "defense": 75,
            "spAtk": 65,
            "spDef": 100,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/muk-alolan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/muk-alolan.avif"
        }
    },
    {
        "id": 90,
        "name": "Shellder",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 305,
            "hp": 30,
            "attack": 65,
            "defense": 100,
            "spAtk": 45,
            "spDef": 25,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/shellder.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/shellder.avif"
        }
    },
    {
        "id": 91,
        "name": "Cloyster",
        "form": null,
        "types": [
            "Water",
            "Ice"
        ],
        "stats": {
            "total": 525,
            "hp": 50,
            "attack": 95,
            "defense": 180,
            "spAtk": 85,
            "spDef": 45,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cloyster.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cloyster.avif"
        }
    },
    {
        "id": 92,
        "name": "Gastly",
        "form": null,
        "types": [
            "Ghost",
            "Poison"
        ],
        "stats": {
            "total": 310,
            "hp": 30,
            "attack": 35,
            "defense": 30,
            "spAtk": 100,
            "spDef": 35,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gastly.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gastly.avif"
        }
    },
    {
        "id": 93,
        "name": "Haunter",
        "form": null,
        "types": [
            "Ghost",
            "Poison"
        ],
        "stats": {
            "total": 405,
            "hp": 45,
            "attack": 50,
            "defense": 45,
            "spAtk": 115,
            "spDef": 55,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/haunter.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/haunter.avif"
        }
    },
    {
        "id": 94,
        "name": "Gengar",
        "form": null,
        "types": [
            "Ghost",
            "Poison"
        ],
        "stats": {
            "total": 500,
            "hp": 60,
            "attack": 65,
            "defense": 60,
            "spAtk": 130,
            "spDef": 75,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gengar.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gengar.avif"
        }
    },
    {
        "id": 94,
        "name": "Gengar",
        "form": "Mega Gengar",
        "types": [
            "Ghost",
            "Poison"
        ],
        "stats": {
            "total": 600,
            "hp": 60,
            "attack": 65,
            "defense": 80,
            "spAtk": 170,
            "spDef": 95,
            "speed": 130
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gengar-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gengar-mega.avif"
        }
    },
    {
        "id": 95,
        "name": "Onix",
        "form": null,
        "types": [
            "Rock",
            "Ground"
        ],
        "stats": {
            "total": 385,
            "hp": 35,
            "attack": 45,
            "defense": 160,
            "spAtk": 30,
            "spDef": 45,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/onix.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/onix.avif"
        }
    },
    {
        "id": 96,
        "name": "Drowzee",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 328,
            "hp": 60,
            "attack": 48,
            "defense": 45,
            "spAtk": 43,
            "spDef": 90,
            "speed": 42
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/drowzee.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/drowzee.avif"
        }
    },
    {
        "id": 97,
        "name": "Hypno",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 483,
            "hp": 85,
            "attack": 73,
            "defense": 70,
            "spAtk": 73,
            "spDef": 115,
            "speed": 67
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/hypno.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/hypno.avif"
        }
    },
    {
        "id": 98,
        "name": "Krabby",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 325,
            "hp": 30,
            "attack": 105,
            "defense": 90,
            "spAtk": 25,
            "spDef": 25,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/krabby.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/krabby.avif"
        }
    },
    {
        "id": 99,
        "name": "Kingler",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 475,
            "hp": 55,
            "attack": 130,
            "defense": 115,
            "spAtk": 50,
            "spDef": 50,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kingler.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kingler.avif"
        }
    },
    {
        "id": 100,
        "name": "Voltorb",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 330,
            "hp": 40,
            "attack": 30,
            "defense": 50,
            "spAtk": 55,
            "spDef": 55,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/voltorb.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/voltorb.avif"
        }
    },
    {
        "id": 100,
        "name": "Voltorb",
        "form": "Hisuian Voltorb",
        "types": [
            "Electric",
            "Grass"
        ],
        "stats": {
            "total": 330,
            "hp": 40,
            "attack": 30,
            "defense": 50,
            "spAtk": 55,
            "spDef": 55,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/voltorb-hisuian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/voltorb-hisuian.avif"
        }
    },
    {
        "id": 101,
        "name": "Electrode",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 490,
            "hp": 60,
            "attack": 50,
            "defense": 70,
            "spAtk": 80,
            "spDef": 80,
            "speed": 150
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/electrode.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/electrode.avif"
        }
    },
    {
        "id": 101,
        "name": "Electrode",
        "form": "Hisuian Electrode",
        "types": [
            "Electric",
            "Grass"
        ],
        "stats": {
            "total": 490,
            "hp": 60,
            "attack": 50,
            "defense": 70,
            "spAtk": 80,
            "spDef": 80,
            "speed": 150
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/electrode-hisuian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/electrode-hisuian.avif"
        }
    },
    {
        "id": 102,
        "name": "Exeggcute",
        "form": null,
        "types": [
            "Grass",
            "Psychic"
        ],
        "stats": {
            "total": 325,
            "hp": 60,
            "attack": 40,
            "defense": 80,
            "spAtk": 60,
            "spDef": 45,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/exeggcute.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/exeggcute.avif"
        }
    },
    {
        "id": 103,
        "name": "Exeggutor",
        "form": null,
        "types": [
            "Grass",
            "Psychic"
        ],
        "stats": {
            "total": 530,
            "hp": 95,
            "attack": 95,
            "defense": 85,
            "spAtk": 125,
            "spDef": 75,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/exeggutor.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/exeggutor.avif"
        }
    },
    {
        "id": 103,
        "name": "Exeggutor",
        "form": "Alolan Exeggutor",
        "types": [
            "Grass",
            "Dragon"
        ],
        "stats": {
            "total": 530,
            "hp": 95,
            "attack": 105,
            "defense": 85,
            "spAtk": 125,
            "spDef": 75,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/exeggutor-alolan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/exeggutor-alolan.avif"
        }
    },
    {
        "id": 104,
        "name": "Cubone",
        "form": null,
        "types": [
            "Ground"
        ],
        "stats": {
            "total": 320,
            "hp": 50,
            "attack": 50,
            "defense": 95,
            "spAtk": 40,
            "spDef": 50,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cubone.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cubone.avif"
        }
    },
    {
        "id": 105,
        "name": "Marowak",
        "form": null,
        "types": [
            "Ground"
        ],
        "stats": {
            "total": 425,
            "hp": 60,
            "attack": 80,
            "defense": 110,
            "spAtk": 50,
            "spDef": 80,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/marowak.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/marowak.avif"
        }
    },
    {
        "id": 105,
        "name": "Marowak",
        "form": "Alolan Marowak",
        "types": [
            "Fire",
            "Ghost"
        ],
        "stats": {
            "total": 425,
            "hp": 60,
            "attack": 80,
            "defense": 110,
            "spAtk": 50,
            "spDef": 80,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/marowak-alolan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/marowak-alolan.avif"
        }
    },
    {
        "id": 106,
        "name": "Hitmonlee",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 455,
            "hp": 50,
            "attack": 120,
            "defense": 53,
            "spAtk": 35,
            "spDef": 110,
            "speed": 87
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/hitmonlee.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/hitmonlee.avif"
        }
    },
    {
        "id": 107,
        "name": "Hitmonchan",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 455,
            "hp": 50,
            "attack": 105,
            "defense": 79,
            "spAtk": 35,
            "spDef": 110,
            "speed": 76
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/hitmonchan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/hitmonchan.avif"
        }
    },
    {
        "id": 108,
        "name": "Lickitung",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 385,
            "hp": 90,
            "attack": 55,
            "defense": 75,
            "spAtk": 60,
            "spDef": 75,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lickitung.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lickitung.avif"
        }
    },
    {
        "id": 109,
        "name": "Koffing",
        "form": null,
        "types": [
            "Poison"
        ],
        "stats": {
            "total": 340,
            "hp": 40,
            "attack": 65,
            "defense": 95,
            "spAtk": 60,
            "spDef": 45,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/koffing.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/koffing.avif"
        }
    },
    {
        "id": 110,
        "name": "Weezing",
        "form": null,
        "types": [
            "Poison"
        ],
        "stats": {
            "total": 490,
            "hp": 65,
            "attack": 90,
            "defense": 120,
            "spAtk": 85,
            "spDef": 70,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/weezing.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/weezing.avif"
        }
    },
    {
        "id": 110,
        "name": "Weezing",
        "form": "Galarian Weezing",
        "types": [
            "Poison",
            "Fairy"
        ],
        "stats": {
            "total": 490,
            "hp": 65,
            "attack": 90,
            "defense": 120,
            "spAtk": 85,
            "spDef": 70,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/weezing-galarian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/weezing-galarian.avif"
        }
    },
    {
        "id": 111,
        "name": "Rhyhorn",
        "form": null,
        "types": [
            "Ground",
            "Rock"
        ],
        "stats": {
            "total": 345,
            "hp": 80,
            "attack": 85,
            "defense": 95,
            "spAtk": 30,
            "spDef": 30,
            "speed": 25
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rhyhorn.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rhyhorn.avif"
        }
    },
    {
        "id": 112,
        "name": "Rhydon",
        "form": null,
        "types": [
            "Ground",
            "Rock"
        ],
        "stats": {
            "total": 485,
            "hp": 105,
            "attack": 130,
            "defense": 120,
            "spAtk": 45,
            "spDef": 45,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rhydon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rhydon.avif"
        }
    },
    {
        "id": 113,
        "name": "Chansey",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 450,
            "hp": 250,
            "attack": 5,
            "defense": 5,
            "spAtk": 35,
            "spDef": 105,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/chansey.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/chansey.avif"
        }
    },
    {
        "id": 114,
        "name": "Tangela",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 435,
            "hp": 65,
            "attack": 55,
            "defense": 115,
            "spAtk": 100,
            "spDef": 40,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tangela.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tangela.avif"
        }
    },
    {
        "id": 115,
        "name": "Kangaskhan",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 490,
            "hp": 105,
            "attack": 95,
            "defense": 80,
            "spAtk": 40,
            "spDef": 80,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kangaskhan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kangaskhan.avif"
        }
    },
    {
        "id": 115,
        "name": "Kangaskhan",
        "form": "Mega Kangaskhan",
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 590,
            "hp": 105,
            "attack": 125,
            "defense": 100,
            "spAtk": 60,
            "spDef": 100,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kangaskhan-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kangaskhan-mega.avif"
        }
    },
    {
        "id": 116,
        "name": "Horsea",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 295,
            "hp": 30,
            "attack": 40,
            "defense": 70,
            "spAtk": 70,
            "spDef": 25,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/horsea.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/horsea.avif"
        }
    },
    {
        "id": 117,
        "name": "Seadra",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 440,
            "hp": 55,
            "attack": 65,
            "defense": 95,
            "spAtk": 95,
            "spDef": 45,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/seadra.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/seadra.avif"
        }
    },
    {
        "id": 118,
        "name": "Goldeen",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 320,
            "hp": 45,
            "attack": 67,
            "defense": 60,
            "spAtk": 35,
            "spDef": 50,
            "speed": 63
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/goldeen.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/goldeen.avif"
        }
    },
    {
        "id": 119,
        "name": "Seaking",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 450,
            "hp": 80,
            "attack": 92,
            "defense": 65,
            "spAtk": 65,
            "spDef": 80,
            "speed": 68
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/seaking.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/seaking.avif"
        }
    },
    {
        "id": 120,
        "name": "Staryu",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 340,
            "hp": 30,
            "attack": 45,
            "defense": 55,
            "spAtk": 70,
            "spDef": 55,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/staryu.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/staryu.avif"
        }
    },
    {
        "id": 121,
        "name": "Starmie",
        "form": null,
        "types": [
            "Water",
            "Psychic"
        ],
        "stats": {
            "total": 520,
            "hp": 60,
            "attack": 75,
            "defense": 85,
            "spAtk": 100,
            "spDef": 85,
            "speed": 115
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/starmie.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/starmie.avif"
        }
    },
    {
        "id": 122,
        "name": "Mr. Mime",
        "form": null,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "stats": {
            "total": 460,
            "hp": 40,
            "attack": 45,
            "defense": 65,
            "spAtk": 100,
            "spDef": 120,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mr-mime.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mr-mime.avif"
        }
    },
    {
        "id": 122,
        "name": "Mr. Mime",
        "form": "Galarian Mr. Mime",
        "types": [
            "Ice",
            "Psychic"
        ],
        "stats": {
            "total": 460,
            "hp": 50,
            "attack": 65,
            "defense": 65,
            "spAtk": 90,
            "spDef": 90,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mr-mime-galarian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mr-mime-galarian.avif"
        }
    },
    {
        "id": 123,
        "name": "Scyther",
        "form": null,
        "types": [
            "Bug",
            "Flying"
        ],
        "stats": {
            "total": 500,
            "hp": 70,
            "attack": 110,
            "defense": 80,
            "spAtk": 55,
            "spDef": 80,
            "speed": 105
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/scyther.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/scyther.avif"
        }
    },
    {
        "id": 124,
        "name": "Jynx",
        "form": null,
        "types": [
            "Ice",
            "Psychic"
        ],
        "stats": {
            "total": 455,
            "hp": 65,
            "attack": 50,
            "defense": 35,
            "spAtk": 115,
            "spDef": 95,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/jynx.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/jynx.avif"
        }
    },
    {
        "id": 125,
        "name": "Electabuzz",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 490,
            "hp": 65,
            "attack": 83,
            "defense": 57,
            "spAtk": 95,
            "spDef": 85,
            "speed": 105
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/electabuzz.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/electabuzz.avif"
        }
    },
    {
        "id": 126,
        "name": "Magmar",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 495,
            "hp": 65,
            "attack": 95,
            "defense": 57,
            "spAtk": 100,
            "spDef": 85,
            "speed": 93
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/magmar.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/magmar.avif"
        }
    },
    {
        "id": 127,
        "name": "Pinsir",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 500,
            "hp": 65,
            "attack": 125,
            "defense": 100,
            "spAtk": 55,
            "spDef": 70,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pinsir.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pinsir.avif"
        }
    },
    {
        "id": 127,
        "name": "Pinsir",
        "form": "Mega Pinsir",
        "types": [
            "Bug",
            "Flying"
        ],
        "stats": {
            "total": 600,
            "hp": 65,
            "attack": 155,
            "defense": 120,
            "spAtk": 65,
            "spDef": 90,
            "speed": 105
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pinsir-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pinsir-mega.avif"
        }
    },
    {
        "id": 128,
        "name": "Tauros",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 490,
            "hp": 75,
            "attack": 100,
            "defense": 95,
            "spAtk": 40,
            "spDef": 70,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tauros.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tauros.avif"
        }
    },
    {
        "id": 128,
        "name": "Tauros",
        "form": "Combat Breed",
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 490,
            "hp": 75,
            "attack": 110,
            "defense": 105,
            "spAtk": 30,
            "spDef": 70,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tauros-paldean-combat.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tauros-paldean-combat.avif"
        }
    },
    {
        "id": 128,
        "name": "Tauros",
        "form": "Blaze Breed",
        "types": [
            "Fighting",
            "Fire"
        ],
        "stats": {
            "total": 490,
            "hp": 75,
            "attack": 110,
            "defense": 105,
            "spAtk": 30,
            "spDef": 70,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tauros-paldean-blaze.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tauros-paldean-blaze.avif"
        }
    },
    {
        "id": 128,
        "name": "Tauros",
        "form": "Aqua Breed",
        "types": [
            "Fighting",
            "Water"
        ],
        "stats": {
            "total": 490,
            "hp": 75,
            "attack": 110,
            "defense": 105,
            "spAtk": 30,
            "spDef": 70,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tauros-paldean-aqua.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tauros-paldean-aqua.avif"
        }
    },
    {
        "id": 129,
        "name": "Magikarp",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 200,
            "hp": 20,
            "attack": 10,
            "defense": 55,
            "spAtk": 15,
            "spDef": 20,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/magikarp.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/magikarp.avif"
        }
    },
    {
        "id": 130,
        "name": "Gyarados",
        "form": null,
        "types": [
            "Water",
            "Flying"
        ],
        "stats": {
            "total": 540,
            "hp": 95,
            "attack": 125,
            "defense": 79,
            "spAtk": 60,
            "spDef": 100,
            "speed": 81
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gyarados.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gyarados.avif"
        }
    },
    {
        "id": 130,
        "name": "Gyarados",
        "form": "Mega Gyarados",
        "types": [
            "Water",
            "Dark"
        ],
        "stats": {
            "total": 640,
            "hp": 95,
            "attack": 155,
            "defense": 109,
            "spAtk": 70,
            "spDef": 130,
            "speed": 81
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gyarados-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gyarados-mega.avif"
        }
    },
    {
        "id": 131,
        "name": "Lapras",
        "form": null,
        "types": [
            "Water",
            "Ice"
        ],
        "stats": {
            "total": 535,
            "hp": 130,
            "attack": 85,
            "defense": 80,
            "spAtk": 85,
            "spDef": 95,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lapras.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lapras.avif"
        }
    },
    {
        "id": 132,
        "name": "Ditto",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 288,
            "hp": 48,
            "attack": 48,
            "defense": 48,
            "spAtk": 48,
            "spDef": 48,
            "speed": 48
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ditto.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ditto.avif"
        }
    },
    {
        "id": 133,
        "name": "Eevee",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 325,
            "hp": 55,
            "attack": 55,
            "defense": 50,
            "spAtk": 45,
            "spDef": 65,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/eevee.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/eevee.avif"
        }
    },
    {
        "id": 133,
        "name": "Eevee",
        "form": "Partner Eevee",
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 435,
            "hp": 65,
            "attack": 75,
            "defense": 70,
            "spAtk": 65,
            "spDef": 85,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/eevee-lets-go.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/eevee-lets-go.avif"
        }
    },
    {
        "id": 134,
        "name": "Vaporeon",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 525,
            "hp": 130,
            "attack": 65,
            "defense": 60,
            "spAtk": 110,
            "spDef": 95,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/vaporeon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/vaporeon.avif"
        }
    },
    {
        "id": 135,
        "name": "Jolteon",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 525,
            "hp": 65,
            "attack": 65,
            "defense": 60,
            "spAtk": 110,
            "spDef": 95,
            "speed": 130
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/jolteon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/jolteon.avif"
        }
    },
    {
        "id": 136,
        "name": "Flareon",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 525,
            "hp": 65,
            "attack": 130,
            "defense": 60,
            "spAtk": 95,
            "spDef": 110,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/flareon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/flareon.avif"
        }
    },
    {
        "id": 137,
        "name": "Porygon",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 395,
            "hp": 65,
            "attack": 60,
            "defense": 70,
            "spAtk": 85,
            "spDef": 75,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/porygon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/porygon.avif"
        }
    },
    {
        "id": 138,
        "name": "Omanyte",
        "form": null,
        "types": [
            "Rock",
            "Water"
        ],
        "stats": {
            "total": 355,
            "hp": 35,
            "attack": 40,
            "defense": 100,
            "spAtk": 90,
            "spDef": 55,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/omanyte.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/omanyte.avif"
        }
    },
    {
        "id": 139,
        "name": "Omastar",
        "form": null,
        "types": [
            "Rock",
            "Water"
        ],
        "stats": {
            "total": 495,
            "hp": 70,
            "attack": 60,
            "defense": 125,
            "spAtk": 115,
            "spDef": 70,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/omastar.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/omastar.avif"
        }
    },
    {
        "id": 140,
        "name": "Kabuto",
        "form": null,
        "types": [
            "Rock",
            "Water"
        ],
        "stats": {
            "total": 355,
            "hp": 30,
            "attack": 80,
            "defense": 90,
            "spAtk": 55,
            "spDef": 45,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kabuto.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kabuto.avif"
        }
    },
    {
        "id": 141,
        "name": "Kabutops",
        "form": null,
        "types": [
            "Rock",
            "Water"
        ],
        "stats": {
            "total": 495,
            "hp": 60,
            "attack": 115,
            "defense": 105,
            "spAtk": 65,
            "spDef": 70,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kabutops.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kabutops.avif"
        }
    },
    {
        "id": 142,
        "name": "Aerodactyl",
        "form": null,
        "types": [
            "Rock",
            "Flying"
        ],
        "stats": {
            "total": 515,
            "hp": 80,
            "attack": 105,
            "defense": 65,
            "spAtk": 60,
            "spDef": 75,
            "speed": 130
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/aerodactyl.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/aerodactyl.avif"
        }
    },
    {
        "id": 142,
        "name": "Aerodactyl",
        "form": "Mega Aerodactyl",
        "types": [
            "Rock",
            "Flying"
        ],
        "stats": {
            "total": 615,
            "hp": 80,
            "attack": 135,
            "defense": 85,
            "spAtk": 70,
            "spDef": 95,
            "speed": 150
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/aerodactyl-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/aerodactyl-mega.avif"
        }
    },
    {
        "id": 143,
        "name": "Snorlax",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 540,
            "hp": 160,
            "attack": 110,
            "defense": 65,
            "spAtk": 65,
            "spDef": 110,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/snorlax.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/snorlax.avif"
        }
    },
    {
        "id": 144,
        "name": "Articuno",
        "form": null,
        "types": [
            "Ice",
            "Flying"
        ],
        "stats": {
            "total": 580,
            "hp": 90,
            "attack": 85,
            "defense": 100,
            "spAtk": 95,
            "spDef": 125,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/articuno.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/articuno.avif"
        }
    },
    {
        "id": 144,
        "name": "Articuno",
        "form": "Galarian Articuno",
        "types": [
            "Psychic",
            "Flying"
        ],
        "stats": {
            "total": 580,
            "hp": 90,
            "attack": 85,
            "defense": 85,
            "spAtk": 125,
            "spDef": 100,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/articuno-galarian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/articuno-galarian.avif"
        }
    },
    {
        "id": 145,
        "name": "Zapdos",
        "form": null,
        "types": [
            "Electric",
            "Flying"
        ],
        "stats": {
            "total": 580,
            "hp": 90,
            "attack": 90,
            "defense": 85,
            "spAtk": 125,
            "spDef": 90,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zapdos.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zapdos.avif"
        }
    },
    {
        "id": 145,
        "name": "Zapdos",
        "form": "Galarian Zapdos",
        "types": [
            "Fighting",
            "Flying"
        ],
        "stats": {
            "total": 580,
            "hp": 90,
            "attack": 125,
            "defense": 90,
            "spAtk": 85,
            "spDef": 90,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zapdos-galarian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zapdos-galarian.avif"
        }
    },
    {
        "id": 146,
        "name": "Moltres",
        "form": null,
        "types": [
            "Fire",
            "Flying"
        ],
        "stats": {
            "total": 580,
            "hp": 90,
            "attack": 100,
            "defense": 90,
            "spAtk": 125,
            "spDef": 85,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/moltres.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/moltres.avif"
        }
    },
    {
        "id": 146,
        "name": "Moltres",
        "form": "Galarian Moltres",
        "types": [
            "Dark",
            "Flying"
        ],
        "stats": {
            "total": 580,
            "hp": 90,
            "attack": 85,
            "defense": 90,
            "spAtk": 100,
            "spDef": 125,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/moltres-galarian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/moltres-galarian.avif"
        }
    },
    {
        "id": 147,
        "name": "Dratini",
        "form": null,
        "types": [
            "Dragon"
        ],
        "stats": {
            "total": 300,
            "hp": 41,
            "attack": 64,
            "defense": 45,
            "spAtk": 50,
            "spDef": 50,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dratini.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dratini.avif"
        }
    },
    {
        "id": 148,
        "name": "Dragonair",
        "form": null,
        "types": [
            "Dragon"
        ],
        "stats": {
            "total": 420,
            "hp": 61,
            "attack": 84,
            "defense": 65,
            "spAtk": 70,
            "spDef": 70,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dragonair.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dragonair.avif"
        }
    },
    {
        "id": 149,
        "name": "Dragonite",
        "form": null,
        "types": [
            "Dragon",
            "Flying"
        ],
        "stats": {
            "total": 600,
            "hp": 91,
            "attack": 134,
            "defense": 95,
            "spAtk": 100,
            "spDef": 100,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dragonite.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dragonite.avif"
        }
    },
    {
        "id": 149,
        "name": "Dragonite",
        "form": "Mega Dragonite",
        "types": [
            "Dragon",
            "Flying"
        ],
        "stats": {
            "total": 700,
            "hp": 91,
            "attack": 124,
            "defense": 115,
            "spAtk": 145,
            "spDef": 125,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/s.png",
            "avif": null
        }
    },
    {
        "id": 150,
        "name": "Mewtwo",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 680,
            "hp": 106,
            "attack": 110,
            "defense": 90,
            "spAtk": 154,
            "spDef": 90,
            "speed": 130
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mewtwo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mewtwo.avif"
        }
    },
    {
        "id": 150,
        "name": "Mewtwo",
        "form": "Mega Mewtwo X",
        "types": [
            "Psychic",
            "Fighting"
        ],
        "stats": {
            "total": 780,
            "hp": 106,
            "attack": 190,
            "defense": 100,
            "spAtk": 154,
            "spDef": 100,
            "speed": 130
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mewtwo-mega-x.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mewtwo-mega-x.avif"
        }
    },
    {
        "id": 150,
        "name": "Mewtwo",
        "form": "Mega Mewtwo Y",
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 780,
            "hp": 106,
            "attack": 150,
            "defense": 70,
            "spAtk": 194,
            "spDef": 120,
            "speed": 140
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mewtwo-mega-y.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mewtwo-mega-y.avif"
        }
    },
    {
        "id": 151,
        "name": "Mew",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 600,
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "spAtk": 100,
            "spDef": 100,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mew.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mew.avif"
        }
    },
    {
        "id": 152,
        "name": "Chikorita",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 318,
            "hp": 45,
            "attack": 49,
            "defense": 65,
            "spAtk": 49,
            "spDef": 65,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/chikorita.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/chikorita.avif"
        }
    },
    {
        "id": 153,
        "name": "Bayleef",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 405,
            "hp": 60,
            "attack": 62,
            "defense": 80,
            "spAtk": 63,
            "spDef": 80,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bayleef.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bayleef.avif"
        }
    },
    {
        "id": 154,
        "name": "Meganium",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 525,
            "hp": 80,
            "attack": 82,
            "defense": 100,
            "spAtk": 83,
            "spDef": 100,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/meganium.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/meganium.avif"
        }
    },
    {
        "id": 155,
        "name": "Cyndaquil",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 309,
            "hp": 39,
            "attack": 52,
            "defense": 43,
            "spAtk": 60,
            "spDef": 50,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cyndaquil.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cyndaquil.avif"
        }
    },
    {
        "id": 156,
        "name": "Quilava",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 405,
            "hp": 58,
            "attack": 64,
            "defense": 58,
            "spAtk": 80,
            "spDef": 65,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/quilava.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/quilava.avif"
        }
    },
    {
        "id": 157,
        "name": "Typhlosion",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 534,
            "hp": 78,
            "attack": 84,
            "defense": 78,
            "spAtk": 109,
            "spDef": 85,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/typhlosion.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/typhlosion.avif"
        }
    },
    {
        "id": 157,
        "name": "Typhlosion",
        "form": "Hisuian Typhlosion",
        "types": [
            "Fire",
            "Ghost"
        ],
        "stats": {
            "total": 534,
            "hp": 73,
            "attack": 84,
            "defense": 78,
            "spAtk": 119,
            "spDef": 85,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/typhlosion-hisuian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/typhlosion-hisuian.avif"
        }
    },
    {
        "id": 158,
        "name": "Totodile",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 314,
            "hp": 50,
            "attack": 65,
            "defense": 64,
            "spAtk": 44,
            "spDef": 48,
            "speed": 43
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/totodile.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/totodile.avif"
        }
    },
    {
        "id": 159,
        "name": "Croconaw",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 405,
            "hp": 65,
            "attack": 80,
            "defense": 80,
            "spAtk": 59,
            "spDef": 63,
            "speed": 58
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/croconaw.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/croconaw.avif"
        }
    },
    {
        "id": 160,
        "name": "Feraligatr",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 530,
            "hp": 85,
            "attack": 105,
            "defense": 100,
            "spAtk": 79,
            "spDef": 83,
            "speed": 78
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/feraligatr.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/feraligatr.avif"
        }
    },
    {
        "id": 161,
        "name": "Sentret",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 215,
            "hp": 35,
            "attack": 46,
            "defense": 34,
            "spAtk": 35,
            "spDef": 45,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sentret.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sentret.avif"
        }
    },
    {
        "id": 162,
        "name": "Furret",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 415,
            "hp": 85,
            "attack": 76,
            "defense": 64,
            "spAtk": 45,
            "spDef": 55,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/furret.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/furret.avif"
        }
    },
    {
        "id": 163,
        "name": "Hoothoot",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 262,
            "hp": 60,
            "attack": 30,
            "defense": 30,
            "spAtk": 36,
            "spDef": 56,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/hoothoot.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/hoothoot.avif"
        }
    },
    {
        "id": 164,
        "name": "Noctowl",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 452,
            "hp": 100,
            "attack": 50,
            "defense": 50,
            "spAtk": 86,
            "spDef": 96,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/noctowl.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/noctowl.avif"
        }
    },
    {
        "id": 165,
        "name": "Ledyba",
        "form": null,
        "types": [
            "Bug",
            "Flying"
        ],
        "stats": {
            "total": 265,
            "hp": 40,
            "attack": 20,
            "defense": 30,
            "spAtk": 40,
            "spDef": 80,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ledyba.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ledyba.avif"
        }
    },
    {
        "id": 166,
        "name": "Ledian",
        "form": null,
        "types": [
            "Bug",
            "Flying"
        ],
        "stats": {
            "total": 390,
            "hp": 55,
            "attack": 35,
            "defense": 50,
            "spAtk": 55,
            "spDef": 110,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ledian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ledian.avif"
        }
    },
    {
        "id": 167,
        "name": "Spinarak",
        "form": null,
        "types": [
            "Bug",
            "Poison"
        ],
        "stats": {
            "total": 250,
            "hp": 40,
            "attack": 60,
            "defense": 40,
            "spAtk": 40,
            "spDef": 40,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/spinarak.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/spinarak.avif"
        }
    },
    {
        "id": 168,
        "name": "Ariados",
        "form": null,
        "types": [
            "Bug",
            "Poison"
        ],
        "stats": {
            "total": 400,
            "hp": 70,
            "attack": 90,
            "defense": 70,
            "spAtk": 60,
            "spDef": 70,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ariados.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ariados.avif"
        }
    },
    {
        "id": 169,
        "name": "Crobat",
        "form": null,
        "types": [
            "Poison",
            "Flying"
        ],
        "stats": {
            "total": 535,
            "hp": 85,
            "attack": 90,
            "defense": 80,
            "spAtk": 70,
            "spDef": 80,
            "speed": 130
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/crobat.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/crobat.avif"
        }
    },
    {
        "id": 170,
        "name": "Chinchou",
        "form": null,
        "types": [
            "Water",
            "Electric"
        ],
        "stats": {
            "total": 330,
            "hp": 75,
            "attack": 38,
            "defense": 38,
            "spAtk": 56,
            "spDef": 56,
            "speed": 67
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/chinchou.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/chinchou.avif"
        }
    },
    {
        "id": 171,
        "name": "Lanturn",
        "form": null,
        "types": [
            "Water",
            "Electric"
        ],
        "stats": {
            "total": 460,
            "hp": 125,
            "attack": 58,
            "defense": 58,
            "spAtk": 76,
            "spDef": 76,
            "speed": 67
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lanturn.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lanturn.avif"
        }
    },
    {
        "id": 172,
        "name": "Pichu",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 205,
            "hp": 20,
            "attack": 40,
            "defense": 15,
            "spAtk": 35,
            "spDef": 35,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pichu.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pichu.avif"
        }
    },
    {
        "id": 173,
        "name": "Cleffa",
        "form": null,
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 218,
            "hp": 50,
            "attack": 25,
            "defense": 28,
            "spAtk": 45,
            "spDef": 55,
            "speed": 15
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cleffa.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cleffa.avif"
        }
    },
    {
        "id": 174,
        "name": "Igglybuff",
        "form": null,
        "types": [
            "Normal",
            "Fairy"
        ],
        "stats": {
            "total": 210,
            "hp": 90,
            "attack": 30,
            "defense": 15,
            "spAtk": 40,
            "spDef": 20,
            "speed": 15
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/igglybuff.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/igglybuff.avif"
        }
    },
    {
        "id": 175,
        "name": "Togepi",
        "form": null,
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 245,
            "hp": 35,
            "attack": 20,
            "defense": 65,
            "spAtk": 40,
            "spDef": 65,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/togepi.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/togepi.avif"
        }
    },
    {
        "id": 176,
        "name": "Togetic",
        "form": null,
        "types": [
            "Fairy",
            "Flying"
        ],
        "stats": {
            "total": 405,
            "hp": 55,
            "attack": 40,
            "defense": 85,
            "spAtk": 80,
            "spDef": 105,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/togetic.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/togetic.avif"
        }
    },
    {
        "id": 177,
        "name": "Natu",
        "form": null,
        "types": [
            "Psychic",
            "Flying"
        ],
        "stats": {
            "total": 320,
            "hp": 40,
            "attack": 50,
            "defense": 45,
            "spAtk": 70,
            "spDef": 45,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/natu.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/natu.avif"
        }
    },
    {
        "id": 178,
        "name": "Xatu",
        "form": null,
        "types": [
            "Psychic",
            "Flying"
        ],
        "stats": {
            "total": 470,
            "hp": 65,
            "attack": 75,
            "defense": 70,
            "spAtk": 95,
            "spDef": 70,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/xatu.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/xatu.avif"
        }
    },
    {
        "id": 179,
        "name": "Mareep",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 280,
            "hp": 55,
            "attack": 40,
            "defense": 40,
            "spAtk": 65,
            "spDef": 45,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mareep.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mareep.avif"
        }
    },
    {
        "id": 180,
        "name": "Flaaffy",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 365,
            "hp": 70,
            "attack": 55,
            "defense": 55,
            "spAtk": 80,
            "spDef": 60,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/flaaffy.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/flaaffy.avif"
        }
    },
    {
        "id": 181,
        "name": "Ampharos",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 510,
            "hp": 90,
            "attack": 75,
            "defense": 85,
            "spAtk": 115,
            "spDef": 90,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ampharos.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ampharos.avif"
        }
    },
    {
        "id": 181,
        "name": "Ampharos",
        "form": "Mega Ampharos",
        "types": [
            "Electric",
            "Dragon"
        ],
        "stats": {
            "total": 610,
            "hp": 90,
            "attack": 95,
            "defense": 105,
            "spAtk": 165,
            "spDef": 110,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ampharos-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ampharos-mega.avif"
        }
    },
    {
        "id": 182,
        "name": "Bellossom",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 490,
            "hp": 75,
            "attack": 80,
            "defense": 95,
            "spAtk": 90,
            "spDef": 100,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bellossom.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bellossom.avif"
        }
    },
    {
        "id": 183,
        "name": "Marill",
        "form": null,
        "types": [
            "Water",
            "Fairy"
        ],
        "stats": {
            "total": 250,
            "hp": 70,
            "attack": 20,
            "defense": 50,
            "spAtk": 20,
            "spDef": 50,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/marill.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/marill.avif"
        }
    },
    {
        "id": 184,
        "name": "Azumarill",
        "form": null,
        "types": [
            "Water",
            "Fairy"
        ],
        "stats": {
            "total": 420,
            "hp": 100,
            "attack": 50,
            "defense": 80,
            "spAtk": 60,
            "spDef": 80,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/azumarill.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/azumarill.avif"
        }
    },
    {
        "id": 185,
        "name": "Sudowoodo",
        "form": null,
        "types": [
            "Rock"
        ],
        "stats": {
            "total": 410,
            "hp": 70,
            "attack": 100,
            "defense": 115,
            "spAtk": 30,
            "spDef": 65,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sudowoodo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sudowoodo.avif"
        }
    },
    {
        "id": 186,
        "name": "Politoed",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 500,
            "hp": 90,
            "attack": 75,
            "defense": 75,
            "spAtk": 90,
            "spDef": 100,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/politoed.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/politoed.avif"
        }
    },
    {
        "id": 187,
        "name": "Hoppip",
        "form": null,
        "types": [
            "Grass",
            "Flying"
        ],
        "stats": {
            "total": 250,
            "hp": 35,
            "attack": 35,
            "defense": 40,
            "spAtk": 35,
            "spDef": 55,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/hoppip.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/hoppip.avif"
        }
    },
    {
        "id": 188,
        "name": "Skiploom",
        "form": null,
        "types": [
            "Grass",
            "Flying"
        ],
        "stats": {
            "total": 340,
            "hp": 55,
            "attack": 45,
            "defense": 50,
            "spAtk": 45,
            "spDef": 65,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/skiploom.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/skiploom.avif"
        }
    },
    {
        "id": 189,
        "name": "Jumpluff",
        "form": null,
        "types": [
            "Grass",
            "Flying"
        ],
        "stats": {
            "total": 460,
            "hp": 75,
            "attack": 55,
            "defense": 70,
            "spAtk": 55,
            "spDef": 95,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/jumpluff.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/jumpluff.avif"
        }
    },
    {
        "id": 190,
        "name": "Aipom",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 360,
            "hp": 55,
            "attack": 70,
            "defense": 55,
            "spAtk": 40,
            "spDef": 55,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/aipom.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/aipom.avif"
        }
    },
    {
        "id": 191,
        "name": "Sunkern",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 180,
            "hp": 30,
            "attack": 30,
            "defense": 30,
            "spAtk": 30,
            "spDef": 30,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sunkern.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sunkern.avif"
        }
    },
    {
        "id": 192,
        "name": "Sunflora",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 425,
            "hp": 75,
            "attack": 75,
            "defense": 55,
            "spAtk": 105,
            "spDef": 85,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sunflora.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sunflora.avif"
        }
    },
    {
        "id": 193,
        "name": "Yanma",
        "form": null,
        "types": [
            "Bug",
            "Flying"
        ],
        "stats": {
            "total": 390,
            "hp": 65,
            "attack": 65,
            "defense": 45,
            "spAtk": 75,
            "spDef": 45,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/yanma.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/yanma.avif"
        }
    },
    {
        "id": 194,
        "name": "Wooper",
        "form": null,
        "types": [
            "Water",
            "Ground"
        ],
        "stats": {
            "total": 210,
            "hp": 55,
            "attack": 45,
            "defense": 45,
            "spAtk": 25,
            "spDef": 25,
            "speed": 15
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wooper.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wooper.avif"
        }
    },
    {
        "id": 194,
        "name": "Wooper",
        "form": "Paldean Wooper",
        "types": [
            "Poison",
            "Ground"
        ],
        "stats": {
            "total": 210,
            "hp": 55,
            "attack": 45,
            "defense": 45,
            "spAtk": 25,
            "spDef": 25,
            "speed": 15
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wooper-paldean.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wooper-paldean.avif"
        }
    },
    {
        "id": 195,
        "name": "Quagsire",
        "form": null,
        "types": [
            "Water",
            "Ground"
        ],
        "stats": {
            "total": 430,
            "hp": 95,
            "attack": 85,
            "defense": 85,
            "spAtk": 65,
            "spDef": 65,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/quagsire.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/quagsire.avif"
        }
    },
    {
        "id": 196,
        "name": "Espeon",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 525,
            "hp": 65,
            "attack": 65,
            "defense": 60,
            "spAtk": 130,
            "spDef": 95,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/espeon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/espeon.avif"
        }
    },
    {
        "id": 197,
        "name": "Umbreon",
        "form": null,
        "types": [
            "Dark"
        ],
        "stats": {
            "total": 525,
            "hp": 95,
            "attack": 65,
            "defense": 110,
            "spAtk": 60,
            "spDef": 130,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/umbreon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/umbreon.avif"
        }
    },
    {
        "id": 198,
        "name": "Murkrow",
        "form": null,
        "types": [
            "Dark",
            "Flying"
        ],
        "stats": {
            "total": 405,
            "hp": 60,
            "attack": 85,
            "defense": 42,
            "spAtk": 85,
            "spDef": 42,
            "speed": 91
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/murkrow.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/murkrow.avif"
        }
    },
    {
        "id": 199,
        "name": "Slowking",
        "form": null,
        "types": [
            "Water",
            "Psychic"
        ],
        "stats": {
            "total": 490,
            "hp": 95,
            "attack": 75,
            "defense": 80,
            "spAtk": 100,
            "spDef": 110,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/slowking.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/slowking.avif"
        }
    },
    {
        "id": 199,
        "name": "Slowking",
        "form": "Galarian Slowking",
        "types": [
            "Poison",
            "Psychic"
        ],
        "stats": {
            "total": 490,
            "hp": 95,
            "attack": 65,
            "defense": 80,
            "spAtk": 110,
            "spDef": 110,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/slowking-galarian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/slowking-galarian.avif"
        }
    },
    {
        "id": 200,
        "name": "Misdreavus",
        "form": null,
        "types": [
            "Ghost"
        ],
        "stats": {
            "total": 435,
            "hp": 60,
            "attack": 60,
            "defense": 60,
            "spAtk": 85,
            "spDef": 85,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/misdreavus.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/misdreavus.avif"
        }
    },
    {
        "id": 201,
        "name": "Unown",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 336,
            "hp": 48,
            "attack": 72,
            "defense": 48,
            "spAtk": 72,
            "spDef": 48,
            "speed": 48
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/unown.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/unown.avif"
        }
    },
    {
        "id": 202,
        "name": "Wobbuffet",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 405,
            "hp": 190,
            "attack": 33,
            "defense": 58,
            "spAtk": 33,
            "spDef": 58,
            "speed": 33
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wobbuffet.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wobbuffet.avif"
        }
    },
    {
        "id": 203,
        "name": "Girafarig",
        "form": null,
        "types": [
            "Normal",
            "Psychic"
        ],
        "stats": {
            "total": 455,
            "hp": 70,
            "attack": 80,
            "defense": 65,
            "spAtk": 90,
            "spDef": 65,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/girafarig.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/girafarig.avif"
        }
    },
    {
        "id": 204,
        "name": "Pineco",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 290,
            "hp": 50,
            "attack": 65,
            "defense": 90,
            "spAtk": 35,
            "spDef": 35,
            "speed": 15
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pineco.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pineco.avif"
        }
    },
    {
        "id": 205,
        "name": "Forretress",
        "form": null,
        "types": [
            "Bug",
            "Steel"
        ],
        "stats": {
            "total": 465,
            "hp": 75,
            "attack": 90,
            "defense": 140,
            "spAtk": 60,
            "spDef": 60,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/forretress.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/forretress.avif"
        }
    },
    {
        "id": 206,
        "name": "Dunsparce",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 415,
            "hp": 100,
            "attack": 70,
            "defense": 70,
            "spAtk": 65,
            "spDef": 65,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dunsparce.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dunsparce.avif"
        }
    },
    {
        "id": 207,
        "name": "Gligar",
        "form": null,
        "types": [
            "Ground",
            "Flying"
        ],
        "stats": {
            "total": 430,
            "hp": 65,
            "attack": 75,
            "defense": 105,
            "spAtk": 35,
            "spDef": 65,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gligar.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gligar.avif"
        }
    },
    {
        "id": 208,
        "name": "Steelix",
        "form": null,
        "types": [
            "Steel",
            "Ground"
        ],
        "stats": {
            "total": 510,
            "hp": 75,
            "attack": 85,
            "defense": 200,
            "spAtk": 55,
            "spDef": 65,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/steelix.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/steelix.avif"
        }
    },
    {
        "id": 208,
        "name": "Steelix",
        "form": "Mega Steelix",
        "types": [
            "Steel",
            "Ground"
        ],
        "stats": {
            "total": 610,
            "hp": 75,
            "attack": 125,
            "defense": 230,
            "spAtk": 55,
            "spDef": 95,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/steelix-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/steelix-mega.avif"
        }
    },
    {
        "id": 209,
        "name": "Snubbull",
        "form": null,
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 300,
            "hp": 60,
            "attack": 80,
            "defense": 50,
            "spAtk": 40,
            "spDef": 40,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/snubbull.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/snubbull.avif"
        }
    },
    {
        "id": 210,
        "name": "Granbull",
        "form": null,
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 450,
            "hp": 90,
            "attack": 120,
            "defense": 75,
            "spAtk": 60,
            "spDef": 60,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/granbull.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/granbull.avif"
        }
    },
    {
        "id": 211,
        "name": "Qwilfish",
        "form": null,
        "types": [
            "Water",
            "Poison"
        ],
        "stats": {
            "total": 440,
            "hp": 65,
            "attack": 95,
            "defense": 85,
            "spAtk": 55,
            "spDef": 55,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/qwilfish.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/qwilfish.avif"
        }
    },
    {
        "id": 211,
        "name": "Qwilfish",
        "form": "Hisuian Qwilfish",
        "types": [
            "Dark",
            "Poison"
        ],
        "stats": {
            "total": 440,
            "hp": 65,
            "attack": 95,
            "defense": 85,
            "spAtk": 55,
            "spDef": 55,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/qwilfish-hisuian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/qwilfish-hisuian.avif"
        }
    },
    {
        "id": 212,
        "name": "Scizor",
        "form": null,
        "types": [
            "Bug",
            "Steel"
        ],
        "stats": {
            "total": 500,
            "hp": 70,
            "attack": 130,
            "defense": 100,
            "spAtk": 55,
            "spDef": 80,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/scizor.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/scizor.avif"
        }
    },
    {
        "id": 212,
        "name": "Scizor",
        "form": "Mega Scizor",
        "types": [
            "Bug",
            "Steel"
        ],
        "stats": {
            "total": 600,
            "hp": 70,
            "attack": 150,
            "defense": 140,
            "spAtk": 65,
            "spDef": 100,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/scizor-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/scizor-mega.avif"
        }
    },
    {
        "id": 213,
        "name": "Shuckle",
        "form": null,
        "types": [
            "Bug",
            "Rock"
        ],
        "stats": {
            "total": 505,
            "hp": 20,
            "attack": 10,
            "defense": 230,
            "spAtk": 10,
            "spDef": 230,
            "speed": 5
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/shuckle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/shuckle.avif"
        }
    },
    {
        "id": 214,
        "name": "Heracross",
        "form": null,
        "types": [
            "Bug",
            "Fighting"
        ],
        "stats": {
            "total": 500,
            "hp": 80,
            "attack": 125,
            "defense": 75,
            "spAtk": 40,
            "spDef": 95,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/heracross.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/heracross.avif"
        }
    },
    {
        "id": 214,
        "name": "Heracross",
        "form": "Mega Heracross",
        "types": [
            "Bug",
            "Fighting"
        ],
        "stats": {
            "total": 600,
            "hp": 80,
            "attack": 185,
            "defense": 115,
            "spAtk": 40,
            "spDef": 105,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/heracross-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/heracross-mega.avif"
        }
    },
    {
        "id": 215,
        "name": "Sneasel",
        "form": null,
        "types": [
            "Dark",
            "Ice"
        ],
        "stats": {
            "total": 430,
            "hp": 55,
            "attack": 95,
            "defense": 55,
            "spAtk": 35,
            "spDef": 75,
            "speed": 115
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sneasel.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sneasel.avif"
        }
    },
    {
        "id": 215,
        "name": "Sneasel",
        "form": "Hisuian Sneasel",
        "types": [
            "Fighting",
            "Poison"
        ],
        "stats": {
            "total": 430,
            "hp": 55,
            "attack": 95,
            "defense": 55,
            "spAtk": 35,
            "spDef": 75,
            "speed": 115
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sneasel-hisuian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sneasel-hisuian.avif"
        }
    },
    {
        "id": 216,
        "name": "Teddiursa",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 330,
            "hp": 60,
            "attack": 80,
            "defense": 50,
            "spAtk": 50,
            "spDef": 50,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/teddiursa.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/teddiursa.avif"
        }
    },
    {
        "id": 217,
        "name": "Ursaring",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 500,
            "hp": 90,
            "attack": 130,
            "defense": 75,
            "spAtk": 75,
            "spDef": 75,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ursaring.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ursaring.avif"
        }
    },
    {
        "id": 218,
        "name": "Slugma",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 250,
            "hp": 40,
            "attack": 40,
            "defense": 40,
            "spAtk": 70,
            "spDef": 40,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/slugma.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/slugma.avif"
        }
    },
    {
        "id": 219,
        "name": "Magcargo",
        "form": null,
        "types": [
            "Fire",
            "Rock"
        ],
        "stats": {
            "total": 430,
            "hp": 60,
            "attack": 50,
            "defense": 120,
            "spAtk": 90,
            "spDef": 80,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/magcargo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/magcargo.avif"
        }
    },
    {
        "id": 220,
        "name": "Swinub",
        "form": null,
        "types": [
            "Ice",
            "Ground"
        ],
        "stats": {
            "total": 250,
            "hp": 50,
            "attack": 50,
            "defense": 40,
            "spAtk": 30,
            "spDef": 30,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/swinub.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/swinub.avif"
        }
    },
    {
        "id": 221,
        "name": "Piloswine",
        "form": null,
        "types": [
            "Ice",
            "Ground"
        ],
        "stats": {
            "total": 450,
            "hp": 100,
            "attack": 100,
            "defense": 80,
            "spAtk": 60,
            "spDef": 60,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/piloswine.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/piloswine.avif"
        }
    },
    {
        "id": 222,
        "name": "Corsola",
        "form": null,
        "types": [
            "Water",
            "Rock"
        ],
        "stats": {
            "total": 410,
            "hp": 65,
            "attack": 55,
            "defense": 95,
            "spAtk": 65,
            "spDef": 95,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/corsola.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/corsola.avif"
        }
    },
    {
        "id": 222,
        "name": "Corsola",
        "form": "Galarian Corsola",
        "types": [
            "Ghost"
        ],
        "stats": {
            "total": 410,
            "hp": 60,
            "attack": 55,
            "defense": 100,
            "spAtk": 65,
            "spDef": 100,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/corsola-galarian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/corsola-galarian.avif"
        }
    },
    {
        "id": 223,
        "name": "Remoraid",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 300,
            "hp": 35,
            "attack": 65,
            "defense": 35,
            "spAtk": 65,
            "spDef": 35,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/remoraid.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/remoraid.avif"
        }
    },
    {
        "id": 224,
        "name": "Octillery",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 480,
            "hp": 75,
            "attack": 105,
            "defense": 75,
            "spAtk": 105,
            "spDef": 75,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/octillery.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/octillery.avif"
        }
    },
    {
        "id": 225,
        "name": "Delibird",
        "form": null,
        "types": [
            "Ice",
            "Flying"
        ],
        "stats": {
            "total": 330,
            "hp": 45,
            "attack": 55,
            "defense": 45,
            "spAtk": 65,
            "spDef": 45,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/delibird.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/delibird.avif"
        }
    },
    {
        "id": 226,
        "name": "Mantine",
        "form": null,
        "types": [
            "Water",
            "Flying"
        ],
        "stats": {
            "total": 485,
            "hp": 85,
            "attack": 40,
            "defense": 70,
            "spAtk": 80,
            "spDef": 140,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mantine.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mantine.avif"
        }
    },
    {
        "id": 227,
        "name": "Skarmory",
        "form": null,
        "types": [
            "Steel",
            "Flying"
        ],
        "stats": {
            "total": 465,
            "hp": 65,
            "attack": 80,
            "defense": 140,
            "spAtk": 40,
            "spDef": 70,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/skarmory.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/skarmory.avif"
        }
    },
    {
        "id": 228,
        "name": "Houndour",
        "form": null,
        "types": [
            "Dark",
            "Fire"
        ],
        "stats": {
            "total": 330,
            "hp": 45,
            "attack": 60,
            "defense": 30,
            "spAtk": 80,
            "spDef": 50,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/houndour.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/houndour.avif"
        }
    },
    {
        "id": 229,
        "name": "Houndoom",
        "form": null,
        "types": [
            "Dark",
            "Fire"
        ],
        "stats": {
            "total": 500,
            "hp": 75,
            "attack": 90,
            "defense": 50,
            "spAtk": 110,
            "spDef": 80,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/houndoom.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/houndoom.avif"
        }
    },
    {
        "id": 229,
        "name": "Houndoom",
        "form": "Mega Houndoom",
        "types": [
            "Dark",
            "Fire"
        ],
        "stats": {
            "total": 600,
            "hp": 75,
            "attack": 90,
            "defense": 90,
            "spAtk": 140,
            "spDef": 90,
            "speed": 115
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/houndoom-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/houndoom-mega.avif"
        }
    },
    {
        "id": 230,
        "name": "Kingdra",
        "form": null,
        "types": [
            "Water",
            "Dragon"
        ],
        "stats": {
            "total": 540,
            "hp": 75,
            "attack": 95,
            "defense": 95,
            "spAtk": 95,
            "spDef": 95,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kingdra.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kingdra.avif"
        }
    },
    {
        "id": 231,
        "name": "Phanpy",
        "form": null,
        "types": [
            "Ground"
        ],
        "stats": {
            "total": 330,
            "hp": 90,
            "attack": 60,
            "defense": 60,
            "spAtk": 40,
            "spDef": 40,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/phanpy.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/phanpy.avif"
        }
    },
    {
        "id": 232,
        "name": "Donphan",
        "form": null,
        "types": [
            "Ground"
        ],
        "stats": {
            "total": 500,
            "hp": 90,
            "attack": 120,
            "defense": 120,
            "spAtk": 60,
            "spDef": 60,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/donphan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/donphan.avif"
        }
    },
    {
        "id": 233,
        "name": "Porygon2",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 515,
            "hp": 85,
            "attack": 80,
            "defense": 90,
            "spAtk": 105,
            "spDef": 95,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/porygon2.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/porygon2.avif"
        }
    },
    {
        "id": 234,
        "name": "Stantler",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 465,
            "hp": 73,
            "attack": 95,
            "defense": 62,
            "spAtk": 85,
            "spDef": 65,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/stantler.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/stantler.avif"
        }
    },
    {
        "id": 235,
        "name": "Smeargle",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 250,
            "hp": 55,
            "attack": 20,
            "defense": 35,
            "spAtk": 20,
            "spDef": 45,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/smeargle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/smeargle.avif"
        }
    },
    {
        "id": 236,
        "name": "Tyrogue",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 210,
            "hp": 35,
            "attack": 35,
            "defense": 35,
            "spAtk": 35,
            "spDef": 35,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tyrogue.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tyrogue.avif"
        }
    },
    {
        "id": 237,
        "name": "Hitmontop",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 455,
            "hp": 50,
            "attack": 95,
            "defense": 95,
            "spAtk": 35,
            "spDef": 110,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/hitmontop.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/hitmontop.avif"
        }
    },
    {
        "id": 238,
        "name": "Smoochum",
        "form": null,
        "types": [
            "Ice",
            "Psychic"
        ],
        "stats": {
            "total": 305,
            "hp": 45,
            "attack": 30,
            "defense": 15,
            "spAtk": 85,
            "spDef": 65,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/smoochum.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/smoochum.avif"
        }
    },
    {
        "id": 239,
        "name": "Elekid",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 360,
            "hp": 45,
            "attack": 63,
            "defense": 37,
            "spAtk": 65,
            "spDef": 55,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/elekid.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/elekid.avif"
        }
    },
    {
        "id": 240,
        "name": "Magby",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 365,
            "hp": 45,
            "attack": 75,
            "defense": 37,
            "spAtk": 70,
            "spDef": 55,
            "speed": 83
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/magby.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/magby.avif"
        }
    },
    {
        "id": 241,
        "name": "Miltank",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 490,
            "hp": 95,
            "attack": 80,
            "defense": 105,
            "spAtk": 40,
            "spDef": 70,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/miltank.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/miltank.avif"
        }
    },
    {
        "id": 242,
        "name": "Blissey",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 540,
            "hp": 255,
            "attack": 10,
            "defense": 10,
            "spAtk": 75,
            "spDef": 135,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/blissey.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/blissey.avif"
        }
    },
    {
        "id": 243,
        "name": "Raikou",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 580,
            "hp": 90,
            "attack": 85,
            "defense": 75,
            "spAtk": 115,
            "spDef": 100,
            "speed": 115
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/raikou.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/raikou.avif"
        }
    },
    {
        "id": 244,
        "name": "Entei",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 580,
            "hp": 115,
            "attack": 115,
            "defense": 85,
            "spAtk": 90,
            "spDef": 75,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/entei.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/entei.avif"
        }
    },
    {
        "id": 245,
        "name": "Suicune",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 580,
            "hp": 100,
            "attack": 75,
            "defense": 115,
            "spAtk": 90,
            "spDef": 115,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/suicune.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/suicune.avif"
        }
    },
    {
        "id": 246,
        "name": "Larvitar",
        "form": null,
        "types": [
            "Rock",
            "Ground"
        ],
        "stats": {
            "total": 300,
            "hp": 50,
            "attack": 64,
            "defense": 50,
            "spAtk": 45,
            "spDef": 50,
            "speed": 41
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/larvitar.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/larvitar.avif"
        }
    },
    {
        "id": 247,
        "name": "Pupitar",
        "form": null,
        "types": [
            "Rock",
            "Ground"
        ],
        "stats": {
            "total": 410,
            "hp": 70,
            "attack": 84,
            "defense": 70,
            "spAtk": 65,
            "spDef": 70,
            "speed": 51
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pupitar.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pupitar.avif"
        }
    },
    {
        "id": 248,
        "name": "Tyranitar",
        "form": null,
        "types": [
            "Rock",
            "Dark"
        ],
        "stats": {
            "total": 600,
            "hp": 100,
            "attack": 134,
            "defense": 110,
            "spAtk": 95,
            "spDef": 100,
            "speed": 61
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tyranitar.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tyranitar.avif"
        }
    },
    {
        "id": 248,
        "name": "Tyranitar",
        "form": "Mega Tyranitar",
        "types": [
            "Rock",
            "Dark"
        ],
        "stats": {
            "total": 700,
            "hp": 100,
            "attack": 164,
            "defense": 150,
            "spAtk": 95,
            "spDef": 120,
            "speed": 71
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tyranitar-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tyranitar-mega.avif"
        }
    },
    {
        "id": 249,
        "name": "Lugia",
        "form": null,
        "types": [
            "Psychic",
            "Flying"
        ],
        "stats": {
            "total": 680,
            "hp": 106,
            "attack": 90,
            "defense": 130,
            "spAtk": 90,
            "spDef": 154,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lugia.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lugia.avif"
        }
    },
    {
        "id": 250,
        "name": "Ho-oh",
        "form": null,
        "types": [
            "Fire",
            "Flying"
        ],
        "stats": {
            "total": 680,
            "hp": 106,
            "attack": 130,
            "defense": 90,
            "spAtk": 110,
            "spDef": 154,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ho-oh.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ho-oh.avif"
        }
    },
    {
        "id": 251,
        "name": "Celebi",
        "form": null,
        "types": [
            "Psychic",
            "Grass"
        ],
        "stats": {
            "total": 600,
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "spAtk": 100,
            "spDef": 100,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/celebi.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/celebi.avif"
        }
    },
    {
        "id": 252,
        "name": "Treecko",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 310,
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "spAtk": 65,
            "spDef": 55,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/treecko.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/treecko.avif"
        }
    },
    {
        "id": 253,
        "name": "Grovyle",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 405,
            "hp": 50,
            "attack": 65,
            "defense": 45,
            "spAtk": 85,
            "spDef": 65,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/grovyle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/grovyle.avif"
        }
    },
    {
        "id": 254,
        "name": "Sceptile",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 530,
            "hp": 70,
            "attack": 85,
            "defense": 65,
            "spAtk": 105,
            "spDef": 85,
            "speed": 120
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sceptile.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sceptile.avif"
        }
    },
    {
        "id": 254,
        "name": "Sceptile",
        "form": "Mega Sceptile",
        "types": [
            "Grass",
            "Dragon"
        ],
        "stats": {
            "total": 630,
            "hp": 70,
            "attack": 110,
            "defense": 75,
            "spAtk": 145,
            "spDef": 85,
            "speed": 145
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sceptile-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sceptile-mega.avif"
        }
    },
    {
        "id": 255,
        "name": "Torchic",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 310,
            "hp": 45,
            "attack": 60,
            "defense": 40,
            "spAtk": 70,
            "spDef": 50,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/torchic.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/torchic.avif"
        }
    },
    {
        "id": 256,
        "name": "Combusken",
        "form": null,
        "types": [
            "Fire",
            "Fighting"
        ],
        "stats": {
            "total": 405,
            "hp": 60,
            "attack": 85,
            "defense": 60,
            "spAtk": 85,
            "spDef": 60,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/combusken.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/combusken.avif"
        }
    },
    {
        "id": 257,
        "name": "Blaziken",
        "form": null,
        "types": [
            "Fire",
            "Fighting"
        ],
        "stats": {
            "total": 530,
            "hp": 80,
            "attack": 120,
            "defense": 70,
            "spAtk": 110,
            "spDef": 70,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/blaziken.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/blaziken.avif"
        }
    },
    {
        "id": 257,
        "name": "Blaziken",
        "form": "Mega Blaziken",
        "types": [
            "Fire",
            "Fighting"
        ],
        "stats": {
            "total": 630,
            "hp": 80,
            "attack": 160,
            "defense": 80,
            "spAtk": 130,
            "spDef": 80,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/blaziken-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/blaziken-mega.avif"
        }
    },
    {
        "id": 258,
        "name": "Mudkip",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 310,
            "hp": 50,
            "attack": 70,
            "defense": 50,
            "spAtk": 50,
            "spDef": 50,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mudkip.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mudkip.avif"
        }
    },
    {
        "id": 259,
        "name": "Marshtomp",
        "form": null,
        "types": [
            "Water",
            "Ground"
        ],
        "stats": {
            "total": 405,
            "hp": 70,
            "attack": 85,
            "defense": 70,
            "spAtk": 60,
            "spDef": 70,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/marshtomp.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/marshtomp.avif"
        }
    },
    {
        "id": 260,
        "name": "Swampert",
        "form": null,
        "types": [
            "Water",
            "Ground"
        ],
        "stats": {
            "total": 535,
            "hp": 100,
            "attack": 110,
            "defense": 90,
            "spAtk": 85,
            "spDef": 90,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/swampert.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/swampert.avif"
        }
    },
    {
        "id": 260,
        "name": "Swampert",
        "form": "Mega Swampert",
        "types": [
            "Water",
            "Ground"
        ],
        "stats": {
            "total": 635,
            "hp": 100,
            "attack": 150,
            "defense": 110,
            "spAtk": 95,
            "spDef": 110,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/swampert-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/swampert-mega.avif"
        }
    },
    {
        "id": 261,
        "name": "Poochyena",
        "form": null,
        "types": [
            "Dark"
        ],
        "stats": {
            "total": 220,
            "hp": 35,
            "attack": 55,
            "defense": 35,
            "spAtk": 30,
            "spDef": 30,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/poochyena.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/poochyena.avif"
        }
    },
    {
        "id": 262,
        "name": "Mightyena",
        "form": null,
        "types": [
            "Dark"
        ],
        "stats": {
            "total": 420,
            "hp": 70,
            "attack": 90,
            "defense": 70,
            "spAtk": 60,
            "spDef": 60,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mightyena.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mightyena.avif"
        }
    },
    {
        "id": 263,
        "name": "Zigzagoon",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 240,
            "hp": 38,
            "attack": 30,
            "defense": 41,
            "spAtk": 30,
            "spDef": 41,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zigzagoon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zigzagoon.avif"
        }
    },
    {
        "id": 263,
        "name": "Zigzagoon",
        "form": "Galarian Zigzagoon",
        "types": [
            "Dark",
            "Normal"
        ],
        "stats": {
            "total": 240,
            "hp": 38,
            "attack": 30,
            "defense": 41,
            "spAtk": 30,
            "spDef": 41,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zigzagoon-galarian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zigzagoon-galarian.avif"
        }
    },
    {
        "id": 264,
        "name": "Linoone",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 420,
            "hp": 78,
            "attack": 70,
            "defense": 61,
            "spAtk": 50,
            "spDef": 61,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/linoone.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/linoone.avif"
        }
    },
    {
        "id": 264,
        "name": "Linoone",
        "form": "Galarian Linoone",
        "types": [
            "Dark",
            "Normal"
        ],
        "stats": {
            "total": 420,
            "hp": 78,
            "attack": 70,
            "defense": 61,
            "spAtk": 50,
            "spDef": 61,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/linoone-galarian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/linoone-galarian.avif"
        }
    },
    {
        "id": 265,
        "name": "Wurmple",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 195,
            "hp": 45,
            "attack": 45,
            "defense": 35,
            "spAtk": 20,
            "spDef": 30,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wurmple.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wurmple.avif"
        }
    },
    {
        "id": 266,
        "name": "Silcoon",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 205,
            "hp": 50,
            "attack": 35,
            "defense": 55,
            "spAtk": 25,
            "spDef": 25,
            "speed": 15
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/silcoon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/silcoon.avif"
        }
    },
    {
        "id": 267,
        "name": "Beautifly",
        "form": null,
        "types": [
            "Bug",
            "Flying"
        ],
        "stats": {
            "total": 395,
            "hp": 60,
            "attack": 70,
            "defense": 50,
            "spAtk": 100,
            "spDef": 50,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/beautifly.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/beautifly.avif"
        }
    },
    {
        "id": 268,
        "name": "Cascoon",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 205,
            "hp": 50,
            "attack": 35,
            "defense": 55,
            "spAtk": 25,
            "spDef": 25,
            "speed": 15
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cascoon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cascoon.avif"
        }
    },
    {
        "id": 269,
        "name": "Dustox",
        "form": null,
        "types": [
            "Bug",
            "Poison"
        ],
        "stats": {
            "total": 385,
            "hp": 60,
            "attack": 50,
            "defense": 70,
            "spAtk": 50,
            "spDef": 90,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dustox.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dustox.avif"
        }
    },
    {
        "id": 270,
        "name": "Lotad",
        "form": null,
        "types": [
            "Water",
            "Grass"
        ],
        "stats": {
            "total": 220,
            "hp": 40,
            "attack": 30,
            "defense": 30,
            "spAtk": 40,
            "spDef": 50,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lotad.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lotad.avif"
        }
    },
    {
        "id": 271,
        "name": "Lombre",
        "form": null,
        "types": [
            "Water",
            "Grass"
        ],
        "stats": {
            "total": 340,
            "hp": 60,
            "attack": 50,
            "defense": 50,
            "spAtk": 60,
            "spDef": 70,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lombre.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lombre.avif"
        }
    },
    {
        "id": 272,
        "name": "Ludicolo",
        "form": null,
        "types": [
            "Water",
            "Grass"
        ],
        "stats": {
            "total": 480,
            "hp": 80,
            "attack": 70,
            "defense": 70,
            "spAtk": 90,
            "spDef": 100,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ludicolo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ludicolo.avif"
        }
    },
    {
        "id": 273,
        "name": "Seedot",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 220,
            "hp": 40,
            "attack": 40,
            "defense": 50,
            "spAtk": 30,
            "spDef": 30,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/seedot.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/seedot.avif"
        }
    },
    {
        "id": 274,
        "name": "Nuzleaf",
        "form": null,
        "types": [
            "Grass",
            "Dark"
        ],
        "stats": {
            "total": 340,
            "hp": 70,
            "attack": 70,
            "defense": 40,
            "spAtk": 60,
            "spDef": 40,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/nuzleaf.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/nuzleaf.avif"
        }
    },
    {
        "id": 275,
        "name": "Shiftry",
        "form": null,
        "types": [
            "Grass",
            "Dark"
        ],
        "stats": {
            "total": 480,
            "hp": 90,
            "attack": 100,
            "defense": 60,
            "spAtk": 90,
            "spDef": 60,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/shiftry.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/shiftry.avif"
        }
    },
    {
        "id": 276,
        "name": "Taillow",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 270,
            "hp": 40,
            "attack": 55,
            "defense": 30,
            "spAtk": 30,
            "spDef": 30,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/taillow.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/taillow.avif"
        }
    },
    {
        "id": 277,
        "name": "Swellow",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 455,
            "hp": 60,
            "attack": 85,
            "defense": 60,
            "spAtk": 75,
            "spDef": 50,
            "speed": 125
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/swellow.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/swellow.avif"
        }
    },
    {
        "id": 278,
        "name": "Wingull",
        "form": null,
        "types": [
            "Water",
            "Flying"
        ],
        "stats": {
            "total": 270,
            "hp": 40,
            "attack": 30,
            "defense": 30,
            "spAtk": 55,
            "spDef": 30,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wingull.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wingull.avif"
        }
    },
    {
        "id": 279,
        "name": "Pelipper",
        "form": null,
        "types": [
            "Water",
            "Flying"
        ],
        "stats": {
            "total": 440,
            "hp": 60,
            "attack": 50,
            "defense": 100,
            "spAtk": 95,
            "spDef": 70,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pelipper.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pelipper.avif"
        }
    },
    {
        "id": 280,
        "name": "Ralts",
        "form": null,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "stats": {
            "total": 198,
            "hp": 28,
            "attack": 25,
            "defense": 25,
            "spAtk": 45,
            "spDef": 35,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ralts.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ralts.avif"
        }
    },
    {
        "id": 281,
        "name": "Kirlia",
        "form": null,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "stats": {
            "total": 278,
            "hp": 38,
            "attack": 35,
            "defense": 35,
            "spAtk": 65,
            "spDef": 55,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kirlia.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kirlia.avif"
        }
    },
    {
        "id": 282,
        "name": "Gardevoir",
        "form": null,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "stats": {
            "total": 518,
            "hp": 68,
            "attack": 65,
            "defense": 65,
            "spAtk": 125,
            "spDef": 115,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gardevoir.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gardevoir.avif"
        }
    },
    {
        "id": 282,
        "name": "Gardevoir",
        "form": "Mega Gardevoir",
        "types": [
            "Psychic",
            "Fairy"
        ],
        "stats": {
            "total": 618,
            "hp": 68,
            "attack": 85,
            "defense": 65,
            "spAtk": 165,
            "spDef": 135,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gardevoir-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gardevoir-mega.avif"
        }
    },
    {
        "id": 283,
        "name": "Surskit",
        "form": null,
        "types": [
            "Bug",
            "Water"
        ],
        "stats": {
            "total": 269,
            "hp": 40,
            "attack": 30,
            "defense": 32,
            "spAtk": 50,
            "spDef": 52,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/surskit.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/surskit.avif"
        }
    },
    {
        "id": 284,
        "name": "Masquerain",
        "form": null,
        "types": [
            "Bug",
            "Flying"
        ],
        "stats": {
            "total": 454,
            "hp": 70,
            "attack": 60,
            "defense": 62,
            "spAtk": 100,
            "spDef": 82,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/masquerain.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/masquerain.avif"
        }
    },
    {
        "id": 285,
        "name": "Shroomish",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 295,
            "hp": 60,
            "attack": 40,
            "defense": 60,
            "spAtk": 40,
            "spDef": 60,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/shroomish.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/shroomish.avif"
        }
    },
    {
        "id": 286,
        "name": "Breloom",
        "form": null,
        "types": [
            "Grass",
            "Fighting"
        ],
        "stats": {
            "total": 460,
            "hp": 60,
            "attack": 130,
            "defense": 80,
            "spAtk": 60,
            "spDef": 60,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/breloom.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/breloom.avif"
        }
    },
    {
        "id": 287,
        "name": "Slakoth",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 280,
            "hp": 60,
            "attack": 60,
            "defense": 60,
            "spAtk": 35,
            "spDef": 35,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/slakoth.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/slakoth.avif"
        }
    },
    {
        "id": 288,
        "name": "Vigoroth",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 440,
            "hp": 80,
            "attack": 80,
            "defense": 80,
            "spAtk": 55,
            "spDef": 55,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/vigoroth.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/vigoroth.avif"
        }
    },
    {
        "id": 289,
        "name": "Slaking",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 670,
            "hp": 150,
            "attack": 160,
            "defense": 100,
            "spAtk": 95,
            "spDef": 65,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/slaking.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/slaking.avif"
        }
    },
    {
        "id": 290,
        "name": "Nincada",
        "form": null,
        "types": [
            "Bug",
            "Ground"
        ],
        "stats": {
            "total": 266,
            "hp": 31,
            "attack": 45,
            "defense": 90,
            "spAtk": 30,
            "spDef": 30,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/nincada.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/nincada.avif"
        }
    },
    {
        "id": 291,
        "name": "Ninjask",
        "form": null,
        "types": [
            "Bug",
            "Flying"
        ],
        "stats": {
            "total": 456,
            "hp": 61,
            "attack": 90,
            "defense": 45,
            "spAtk": 50,
            "spDef": 50,
            "speed": 160
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ninjask.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ninjask.avif"
        }
    },
    {
        "id": 292,
        "name": "Shedinja",
        "form": null,
        "types": [
            "Bug",
            "Ghost"
        ],
        "stats": {
            "total": 236,
            "hp": 1,
            "attack": 90,
            "defense": 45,
            "spAtk": 30,
            "spDef": 30,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/shedinja.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/shedinja.avif"
        }
    },
    {
        "id": 293,
        "name": "Whismur",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 240,
            "hp": 64,
            "attack": 51,
            "defense": 23,
            "spAtk": 51,
            "spDef": 23,
            "speed": 28
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/whismur.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/whismur.avif"
        }
    },
    {
        "id": 294,
        "name": "Loudred",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 360,
            "hp": 84,
            "attack": 71,
            "defense": 43,
            "spAtk": 71,
            "spDef": 43,
            "speed": 48
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/loudred.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/loudred.avif"
        }
    },
    {
        "id": 295,
        "name": "Exploud",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 490,
            "hp": 104,
            "attack": 91,
            "defense": 63,
            "spAtk": 91,
            "spDef": 73,
            "speed": 68
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/exploud.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/exploud.avif"
        }
    },
    {
        "id": 296,
        "name": "Makuhita",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 237,
            "hp": 72,
            "attack": 60,
            "defense": 30,
            "spAtk": 20,
            "spDef": 30,
            "speed": 25
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/makuhita.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/makuhita.avif"
        }
    },
    {
        "id": 297,
        "name": "Hariyama",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 474,
            "hp": 144,
            "attack": 120,
            "defense": 60,
            "spAtk": 40,
            "spDef": 60,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/hariyama.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/hariyama.avif"
        }
    },
    {
        "id": 298,
        "name": "Azurill",
        "form": null,
        "types": [
            "Normal",
            "Fairy"
        ],
        "stats": {
            "total": 190,
            "hp": 50,
            "attack": 20,
            "defense": 40,
            "spAtk": 20,
            "spDef": 40,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/azurill.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/azurill.avif"
        }
    },
    {
        "id": 299,
        "name": "Nosepass",
        "form": null,
        "types": [
            "Rock"
        ],
        "stats": {
            "total": 375,
            "hp": 30,
            "attack": 45,
            "defense": 135,
            "spAtk": 45,
            "spDef": 90,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/nosepass.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/nosepass.avif"
        }
    },
    {
        "id": 300,
        "name": "Skitty",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 260,
            "hp": 50,
            "attack": 45,
            "defense": 45,
            "spAtk": 35,
            "spDef": 35,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/skitty.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/skitty.avif"
        }
    },
    {
        "id": 301,
        "name": "Delcatty",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 400,
            "hp": 70,
            "attack": 65,
            "defense": 65,
            "spAtk": 55,
            "spDef": 55,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/delcatty.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/delcatty.avif"
        }
    },
    {
        "id": 302,
        "name": "Sableye",
        "form": null,
        "types": [
            "Dark",
            "Ghost"
        ],
        "stats": {
            "total": 380,
            "hp": 50,
            "attack": 75,
            "defense": 75,
            "spAtk": 65,
            "spDef": 65,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sableye.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sableye.avif"
        }
    },
    {
        "id": 302,
        "name": "Sableye",
        "form": "Mega Sableye",
        "types": [
            "Dark",
            "Ghost"
        ],
        "stats": {
            "total": 480,
            "hp": 50,
            "attack": 85,
            "defense": 125,
            "spAtk": 85,
            "spDef": 115,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sableye-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sableye-mega.avif"
        }
    },
    {
        "id": 303,
        "name": "Mawile",
        "form": null,
        "types": [
            "Steel",
            "Fairy"
        ],
        "stats": {
            "total": 380,
            "hp": 50,
            "attack": 85,
            "defense": 85,
            "spAtk": 55,
            "spDef": 55,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mawile.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mawile.avif"
        }
    },
    {
        "id": 303,
        "name": "Mawile",
        "form": "Mega Mawile",
        "types": [
            "Steel",
            "Fairy"
        ],
        "stats": {
            "total": 480,
            "hp": 50,
            "attack": 105,
            "defense": 125,
            "spAtk": 55,
            "spDef": 95,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mawile-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mawile-mega.avif"
        }
    },
    {
        "id": 304,
        "name": "Aron",
        "form": null,
        "types": [
            "Steel",
            "Rock"
        ],
        "stats": {
            "total": 330,
            "hp": 50,
            "attack": 70,
            "defense": 100,
            "spAtk": 40,
            "spDef": 40,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/aron.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/aron.avif"
        }
    },
    {
        "id": 305,
        "name": "Lairon",
        "form": null,
        "types": [
            "Steel",
            "Rock"
        ],
        "stats": {
            "total": 430,
            "hp": 60,
            "attack": 90,
            "defense": 140,
            "spAtk": 50,
            "spDef": 50,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lairon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lairon.avif"
        }
    },
    {
        "id": 306,
        "name": "Aggron",
        "form": null,
        "types": [
            "Steel",
            "Rock"
        ],
        "stats": {
            "total": 530,
            "hp": 70,
            "attack": 110,
            "defense": 180,
            "spAtk": 60,
            "spDef": 60,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/aggron.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/aggron.avif"
        }
    },
    {
        "id": 306,
        "name": "Aggron",
        "form": "Mega Aggron",
        "types": [
            "Steel"
        ],
        "stats": {
            "total": 630,
            "hp": 70,
            "attack": 140,
            "defense": 230,
            "spAtk": 60,
            "spDef": 80,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/aggron-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/aggron-mega.avif"
        }
    },
    {
        "id": 307,
        "name": "Meditite",
        "form": null,
        "types": [
            "Fighting",
            "Psychic"
        ],
        "stats": {
            "total": 280,
            "hp": 30,
            "attack": 40,
            "defense": 55,
            "spAtk": 40,
            "spDef": 55,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/meditite.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/meditite.avif"
        }
    },
    {
        "id": 308,
        "name": "Medicham",
        "form": null,
        "types": [
            "Fighting",
            "Psychic"
        ],
        "stats": {
            "total": 410,
            "hp": 60,
            "attack": 60,
            "defense": 75,
            "spAtk": 60,
            "spDef": 75,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/medicham.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/medicham.avif"
        }
    },
    {
        "id": 308,
        "name": "Medicham",
        "form": "Mega Medicham",
        "types": [
            "Fighting",
            "Psychic"
        ],
        "stats": {
            "total": 510,
            "hp": 60,
            "attack": 100,
            "defense": 85,
            "spAtk": 80,
            "spDef": 85,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/medicham-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/medicham-mega.avif"
        }
    },
    {
        "id": 309,
        "name": "Electrike",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 295,
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "spAtk": 65,
            "spDef": 40,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/electrike.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/electrike.avif"
        }
    },
    {
        "id": 310,
        "name": "Manectric",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 475,
            "hp": 70,
            "attack": 75,
            "defense": 60,
            "spAtk": 105,
            "spDef": 60,
            "speed": 105
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/manectric.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/manectric.avif"
        }
    },
    {
        "id": 310,
        "name": "Manectric",
        "form": "Mega Manectric",
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 575,
            "hp": 70,
            "attack": 75,
            "defense": 80,
            "spAtk": 135,
            "spDef": 80,
            "speed": 135
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/manectric-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/manectric-mega.avif"
        }
    },
    {
        "id": 311,
        "name": "Plusle",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 405,
            "hp": 60,
            "attack": 50,
            "defense": 40,
            "spAtk": 85,
            "spDef": 75,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/plusle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/plusle.avif"
        }
    },
    {
        "id": 312,
        "name": "Minun",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 405,
            "hp": 60,
            "attack": 40,
            "defense": 50,
            "spAtk": 75,
            "spDef": 85,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/minun.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/minun.avif"
        }
    },
    {
        "id": 313,
        "name": "Volbeat",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 430,
            "hp": 65,
            "attack": 73,
            "defense": 75,
            "spAtk": 47,
            "spDef": 85,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/volbeat.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/volbeat.avif"
        }
    },
    {
        "id": 314,
        "name": "Illumise",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 430,
            "hp": 65,
            "attack": 47,
            "defense": 75,
            "spAtk": 73,
            "spDef": 85,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/illumise.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/illumise.avif"
        }
    },
    {
        "id": 315,
        "name": "Roselia",
        "form": null,
        "types": [
            "Grass",
            "Poison"
        ],
        "stats": {
            "total": 400,
            "hp": 50,
            "attack": 60,
            "defense": 45,
            "spAtk": 100,
            "spDef": 80,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/roselia.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/roselia.avif"
        }
    },
    {
        "id": 316,
        "name": "Gulpin",
        "form": null,
        "types": [
            "Poison"
        ],
        "stats": {
            "total": 302,
            "hp": 70,
            "attack": 43,
            "defense": 53,
            "spAtk": 43,
            "spDef": 53,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gulpin.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gulpin.avif"
        }
    },
    {
        "id": 317,
        "name": "Swalot",
        "form": null,
        "types": [
            "Poison"
        ],
        "stats": {
            "total": 467,
            "hp": 100,
            "attack": 73,
            "defense": 83,
            "spAtk": 73,
            "spDef": 83,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/swalot.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/swalot.avif"
        }
    },
    {
        "id": 318,
        "name": "Carvanha",
        "form": null,
        "types": [
            "Water",
            "Dark"
        ],
        "stats": {
            "total": 305,
            "hp": 45,
            "attack": 90,
            "defense": 20,
            "spAtk": 65,
            "spDef": 20,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/carvanha.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/carvanha.avif"
        }
    },
    {
        "id": 319,
        "name": "Sharpedo",
        "form": null,
        "types": [
            "Water",
            "Dark"
        ],
        "stats": {
            "total": 460,
            "hp": 70,
            "attack": 120,
            "defense": 40,
            "spAtk": 95,
            "spDef": 40,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sharpedo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sharpedo.avif"
        }
    },
    {
        "id": 319,
        "name": "Sharpedo",
        "form": "Mega Sharpedo",
        "types": [
            "Water",
            "Dark"
        ],
        "stats": {
            "total": 560,
            "hp": 70,
            "attack": 140,
            "defense": 70,
            "spAtk": 110,
            "spDef": 65,
            "speed": 105
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sharpedo-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sharpedo-mega.avif"
        }
    },
    {
        "id": 320,
        "name": "Wailmer",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 400,
            "hp": 130,
            "attack": 70,
            "defense": 35,
            "spAtk": 70,
            "spDef": 35,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wailmer.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wailmer.avif"
        }
    },
    {
        "id": 321,
        "name": "Wailord",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 500,
            "hp": 170,
            "attack": 90,
            "defense": 45,
            "spAtk": 90,
            "spDef": 45,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wailord.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wailord.avif"
        }
    },
    {
        "id": 322,
        "name": "Numel",
        "form": null,
        "types": [
            "Fire",
            "Ground"
        ],
        "stats": {
            "total": 305,
            "hp": 60,
            "attack": 60,
            "defense": 40,
            "spAtk": 65,
            "spDef": 45,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/numel.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/numel.avif"
        }
    },
    {
        "id": 323,
        "name": "Camerupt",
        "form": null,
        "types": [
            "Fire",
            "Ground"
        ],
        "stats": {
            "total": 460,
            "hp": 70,
            "attack": 100,
            "defense": 70,
            "spAtk": 105,
            "spDef": 75,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/camerupt.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/camerupt.avif"
        }
    },
    {
        "id": 323,
        "name": "Camerupt",
        "form": "Mega Camerupt",
        "types": [
            "Fire",
            "Ground"
        ],
        "stats": {
            "total": 560,
            "hp": 70,
            "attack": 120,
            "defense": 100,
            "spAtk": 145,
            "spDef": 105,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/camerupt-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/camerupt-mega.avif"
        }
    },
    {
        "id": 324,
        "name": "Torkoal",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 470,
            "hp": 70,
            "attack": 85,
            "defense": 140,
            "spAtk": 85,
            "spDef": 70,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/torkoal.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/torkoal.avif"
        }
    },
    {
        "id": 325,
        "name": "Spoink",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 330,
            "hp": 60,
            "attack": 25,
            "defense": 35,
            "spAtk": 70,
            "spDef": 80,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/spoink.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/spoink.avif"
        }
    },
    {
        "id": 326,
        "name": "Grumpig",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 470,
            "hp": 80,
            "attack": 45,
            "defense": 65,
            "spAtk": 90,
            "spDef": 110,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/grumpig.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/grumpig.avif"
        }
    },
    {
        "id": 327,
        "name": "Spinda",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 360,
            "hp": 60,
            "attack": 60,
            "defense": 60,
            "spAtk": 60,
            "spDef": 60,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/spinda.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/spinda.avif"
        }
    },
    {
        "id": 328,
        "name": "Trapinch",
        "form": null,
        "types": [
            "Ground"
        ],
        "stats": {
            "total": 290,
            "hp": 45,
            "attack": 100,
            "defense": 45,
            "spAtk": 45,
            "spDef": 45,
            "speed": 10
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/trapinch.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/trapinch.avif"
        }
    },
    {
        "id": 329,
        "name": "Vibrava",
        "form": null,
        "types": [
            "Ground",
            "Dragon"
        ],
        "stats": {
            "total": 340,
            "hp": 50,
            "attack": 70,
            "defense": 50,
            "spAtk": 50,
            "spDef": 50,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/vibrava.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/vibrava.avif"
        }
    },
    {
        "id": 330,
        "name": "Flygon",
        "form": null,
        "types": [
            "Ground",
            "Dragon"
        ],
        "stats": {
            "total": 520,
            "hp": 80,
            "attack": 100,
            "defense": 80,
            "spAtk": 80,
            "spDef": 80,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/flygon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/flygon.avif"
        }
    },
    {
        "id": 331,
        "name": "Cacnea",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 335,
            "hp": 50,
            "attack": 85,
            "defense": 40,
            "spAtk": 85,
            "spDef": 40,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cacnea.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cacnea.avif"
        }
    },
    {
        "id": 332,
        "name": "Cacturne",
        "form": null,
        "types": [
            "Grass",
            "Dark"
        ],
        "stats": {
            "total": 475,
            "hp": 70,
            "attack": 115,
            "defense": 60,
            "spAtk": 115,
            "spDef": 60,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cacturne.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cacturne.avif"
        }
    },
    {
        "id": 333,
        "name": "Swablu",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 310,
            "hp": 45,
            "attack": 40,
            "defense": 60,
            "spAtk": 40,
            "spDef": 75,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/swablu.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/swablu.avif"
        }
    },
    {
        "id": 334,
        "name": "Altaria",
        "form": null,
        "types": [
            "Dragon",
            "Flying"
        ],
        "stats": {
            "total": 490,
            "hp": 75,
            "attack": 70,
            "defense": 90,
            "spAtk": 70,
            "spDef": 105,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/altaria.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/altaria.avif"
        }
    },
    {
        "id": 334,
        "name": "Altaria",
        "form": "Mega Altaria",
        "types": [
            "Dragon",
            "Fairy"
        ],
        "stats": {
            "total": 590,
            "hp": 75,
            "attack": 110,
            "defense": 110,
            "spAtk": 110,
            "spDef": 105,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/altaria-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/altaria-mega.avif"
        }
    },
    {
        "id": 335,
        "name": "Zangoose",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 458,
            "hp": 73,
            "attack": 115,
            "defense": 60,
            "spAtk": 60,
            "spDef": 60,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zangoose.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zangoose.avif"
        }
    },
    {
        "id": 336,
        "name": "Seviper",
        "form": null,
        "types": [
            "Poison"
        ],
        "stats": {
            "total": 458,
            "hp": 73,
            "attack": 100,
            "defense": 60,
            "spAtk": 100,
            "spDef": 60,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/seviper.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/seviper.avif"
        }
    },
    {
        "id": 337,
        "name": "Lunatone",
        "form": null,
        "types": [
            "Rock",
            "Psychic"
        ],
        "stats": {
            "total": 460,
            "hp": 90,
            "attack": 55,
            "defense": 65,
            "spAtk": 95,
            "spDef": 85,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lunatone.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lunatone.avif"
        }
    },
    {
        "id": 338,
        "name": "Solrock",
        "form": null,
        "types": [
            "Rock",
            "Psychic"
        ],
        "stats": {
            "total": 460,
            "hp": 90,
            "attack": 95,
            "defense": 85,
            "spAtk": 55,
            "spDef": 65,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/solrock.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/solrock.avif"
        }
    },
    {
        "id": 339,
        "name": "Barboach",
        "form": null,
        "types": [
            "Water",
            "Ground"
        ],
        "stats": {
            "total": 288,
            "hp": 50,
            "attack": 48,
            "defense": 43,
            "spAtk": 46,
            "spDef": 41,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/barboach.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/barboach.avif"
        }
    },
    {
        "id": 340,
        "name": "Whiscash",
        "form": null,
        "types": [
            "Water",
            "Ground"
        ],
        "stats": {
            "total": 468,
            "hp": 110,
            "attack": 78,
            "defense": 73,
            "spAtk": 76,
            "spDef": 71,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/whiscash.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/whiscash.avif"
        }
    },
    {
        "id": 341,
        "name": "Corphish",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 308,
            "hp": 43,
            "attack": 80,
            "defense": 65,
            "spAtk": 50,
            "spDef": 35,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/corphish.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/corphish.avif"
        }
    },
    {
        "id": 342,
        "name": "Crawdaunt",
        "form": null,
        "types": [
            "Water",
            "Dark"
        ],
        "stats": {
            "total": 468,
            "hp": 63,
            "attack": 120,
            "defense": 85,
            "spAtk": 90,
            "spDef": 55,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/crawdaunt.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/crawdaunt.avif"
        }
    },
    {
        "id": 343,
        "name": "Baltoy",
        "form": null,
        "types": [
            "Ground",
            "Psychic"
        ],
        "stats": {
            "total": 300,
            "hp": 40,
            "attack": 40,
            "defense": 55,
            "spAtk": 40,
            "spDef": 70,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/baltoy.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/baltoy.avif"
        }
    },
    {
        "id": 344,
        "name": "Claydol",
        "form": null,
        "types": [
            "Ground",
            "Psychic"
        ],
        "stats": {
            "total": 500,
            "hp": 60,
            "attack": 70,
            "defense": 105,
            "spAtk": 70,
            "spDef": 120,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/claydol.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/claydol.avif"
        }
    },
    {
        "id": 345,
        "name": "Lileep",
        "form": null,
        "types": [
            "Rock",
            "Grass"
        ],
        "stats": {
            "total": 355,
            "hp": 66,
            "attack": 41,
            "defense": 77,
            "spAtk": 61,
            "spDef": 87,
            "speed": 23
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lileep.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lileep.avif"
        }
    },
    {
        "id": 346,
        "name": "Cradily",
        "form": null,
        "types": [
            "Rock",
            "Grass"
        ],
        "stats": {
            "total": 495,
            "hp": 86,
            "attack": 81,
            "defense": 97,
            "spAtk": 81,
            "spDef": 107,
            "speed": 43
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cradily.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cradily.avif"
        }
    },
    {
        "id": 347,
        "name": "Anorith",
        "form": null,
        "types": [
            "Rock",
            "Bug"
        ],
        "stats": {
            "total": 355,
            "hp": 45,
            "attack": 95,
            "defense": 50,
            "spAtk": 40,
            "spDef": 50,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/anorith.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/anorith.avif"
        }
    },
    {
        "id": 348,
        "name": "Armaldo",
        "form": null,
        "types": [
            "Rock",
            "Bug"
        ],
        "stats": {
            "total": 495,
            "hp": 75,
            "attack": 125,
            "defense": 100,
            "spAtk": 70,
            "spDef": 80,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/armaldo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/armaldo.avif"
        }
    },
    {
        "id": 349,
        "name": "Feebas",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 200,
            "hp": 20,
            "attack": 15,
            "defense": 20,
            "spAtk": 10,
            "spDef": 55,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/feebas.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/feebas.avif"
        }
    },
    {
        "id": 350,
        "name": "Milotic",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 540,
            "hp": 95,
            "attack": 60,
            "defense": 79,
            "spAtk": 100,
            "spDef": 125,
            "speed": 81
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/milotic.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/milotic.avif"
        }
    },
    {
        "id": 351,
        "name": "Castform",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 420,
            "hp": 70,
            "attack": 70,
            "defense": 70,
            "spAtk": 70,
            "spDef": 70,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/castform.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/castform.avif"
        }
    },
    {
        "id": 351,
        "name": "Castform",
        "form": "Sunny Form",
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 420,
            "hp": 70,
            "attack": 70,
            "defense": 70,
            "spAtk": 70,
            "spDef": 70,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/castform-sunny.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/castform-sunny.avif"
        }
    },
    {
        "id": 351,
        "name": "Castform",
        "form": "Rainy Form",
        "types": [
            "Water"
        ],
        "stats": {
            "total": 420,
            "hp": 70,
            "attack": 70,
            "defense": 70,
            "spAtk": 70,
            "spDef": 70,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/castform-rainy.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/castform-rainy.avif"
        }
    },
    {
        "id": 351,
        "name": "Castform",
        "form": "Snowy Form",
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 420,
            "hp": 70,
            "attack": 70,
            "defense": 70,
            "spAtk": 70,
            "spDef": 70,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/castform-snowy.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/castform-snowy.avif"
        }
    },
    {
        "id": 352,
        "name": "Kecleon",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 440,
            "hp": 60,
            "attack": 90,
            "defense": 70,
            "spAtk": 60,
            "spDef": 120,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kecleon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kecleon.avif"
        }
    },
    {
        "id": 353,
        "name": "Shuppet",
        "form": null,
        "types": [
            "Ghost"
        ],
        "stats": {
            "total": 295,
            "hp": 44,
            "attack": 75,
            "defense": 35,
            "spAtk": 63,
            "spDef": 33,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/shuppet.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/shuppet.avif"
        }
    },
    {
        "id": 354,
        "name": "Banette",
        "form": null,
        "types": [
            "Ghost"
        ],
        "stats": {
            "total": 455,
            "hp": 64,
            "attack": 115,
            "defense": 65,
            "spAtk": 83,
            "spDef": 63,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/banette.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/banette.avif"
        }
    },
    {
        "id": 354,
        "name": "Banette",
        "form": "Mega Banette",
        "types": [
            "Ghost"
        ],
        "stats": {
            "total": 555,
            "hp": 64,
            "attack": 165,
            "defense": 75,
            "spAtk": 93,
            "spDef": 83,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/banette-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/banette-mega.avif"
        }
    },
    {
        "id": 355,
        "name": "Duskull",
        "form": null,
        "types": [
            "Ghost"
        ],
        "stats": {
            "total": 295,
            "hp": 20,
            "attack": 40,
            "defense": 90,
            "spAtk": 30,
            "spDef": 90,
            "speed": 25
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/duskull.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/duskull.avif"
        }
    },
    {
        "id": 356,
        "name": "Dusclops",
        "form": null,
        "types": [
            "Ghost"
        ],
        "stats": {
            "total": 455,
            "hp": 40,
            "attack": 70,
            "defense": 130,
            "spAtk": 60,
            "spDef": 130,
            "speed": 25
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dusclops.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dusclops.avif"
        }
    },
    {
        "id": 357,
        "name": "Tropius",
        "form": null,
        "types": [
            "Grass",
            "Flying"
        ],
        "stats": {
            "total": 460,
            "hp": 99,
            "attack": 68,
            "defense": 83,
            "spAtk": 72,
            "spDef": 87,
            "speed": 51
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tropius.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tropius.avif"
        }
    },
    {
        "id": 358,
        "name": "Chimecho",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 455,
            "hp": 75,
            "attack": 50,
            "defense": 80,
            "spAtk": 95,
            "spDef": 90,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/chimecho.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/chimecho.avif"
        }
    },
    {
        "id": 359,
        "name": "Absol",
        "form": null,
        "types": [
            "Dark"
        ],
        "stats": {
            "total": 465,
            "hp": 65,
            "attack": 130,
            "defense": 60,
            "spAtk": 75,
            "spDef": 60,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/absol.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/absol.avif"
        }
    },
    {
        "id": 359,
        "name": "Absol",
        "form": "Mega Absol",
        "types": [
            "Dark"
        ],
        "stats": {
            "total": 565,
            "hp": 65,
            "attack": 150,
            "defense": 60,
            "spAtk": 115,
            "spDef": 60,
            "speed": 115
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/absol-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/absol-mega.avif"
        }
    },
    {
        "id": 360,
        "name": "Wynaut",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 260,
            "hp": 95,
            "attack": 23,
            "defense": 48,
            "spAtk": 23,
            "spDef": 48,
            "speed": 23
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wynaut.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wynaut.avif"
        }
    },
    {
        "id": 361,
        "name": "Snorunt",
        "form": null,
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 300,
            "hp": 50,
            "attack": 50,
            "defense": 50,
            "spAtk": 50,
            "spDef": 50,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/snorunt.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/snorunt.avif"
        }
    },
    {
        "id": 362,
        "name": "Glalie",
        "form": null,
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 480,
            "hp": 80,
            "attack": 80,
            "defense": 80,
            "spAtk": 80,
            "spDef": 80,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/glalie.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/glalie.avif"
        }
    },
    {
        "id": 362,
        "name": "Glalie",
        "form": "Mega Glalie",
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 580,
            "hp": 80,
            "attack": 120,
            "defense": 80,
            "spAtk": 120,
            "spDef": 80,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/glalie-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/glalie-mega.avif"
        }
    },
    {
        "id": 363,
        "name": "Spheal",
        "form": null,
        "types": [
            "Ice",
            "Water"
        ],
        "stats": {
            "total": 290,
            "hp": 70,
            "attack": 40,
            "defense": 50,
            "spAtk": 55,
            "spDef": 50,
            "speed": 25
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/spheal.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/spheal.avif"
        }
    },
    {
        "id": 364,
        "name": "Sealeo",
        "form": null,
        "types": [
            "Ice",
            "Water"
        ],
        "stats": {
            "total": 410,
            "hp": 90,
            "attack": 60,
            "defense": 70,
            "spAtk": 75,
            "spDef": 70,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sealeo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sealeo.avif"
        }
    },
    {
        "id": 365,
        "name": "Walrein",
        "form": null,
        "types": [
            "Ice",
            "Water"
        ],
        "stats": {
            "total": 530,
            "hp": 110,
            "attack": 80,
            "defense": 90,
            "spAtk": 95,
            "spDef": 90,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/walrein.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/walrein.avif"
        }
    },
    {
        "id": 366,
        "name": "Clamperl",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 345,
            "hp": 35,
            "attack": 64,
            "defense": 85,
            "spAtk": 74,
            "spDef": 55,
            "speed": 32
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/clamperl.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/clamperl.avif"
        }
    },
    {
        "id": 367,
        "name": "Huntail",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 485,
            "hp": 55,
            "attack": 104,
            "defense": 105,
            "spAtk": 94,
            "spDef": 75,
            "speed": 52
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/huntail.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/huntail.avif"
        }
    },
    {
        "id": 368,
        "name": "Gorebyss",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 485,
            "hp": 55,
            "attack": 84,
            "defense": 105,
            "spAtk": 114,
            "spDef": 75,
            "speed": 52
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gorebyss.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gorebyss.avif"
        }
    },
    {
        "id": 369,
        "name": "Relicanth",
        "form": null,
        "types": [
            "Water",
            "Rock"
        ],
        "stats": {
            "total": 485,
            "hp": 100,
            "attack": 90,
            "defense": 130,
            "spAtk": 45,
            "spDef": 65,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/relicanth.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/relicanth.avif"
        }
    },
    {
        "id": 370,
        "name": "Luvdisc",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 330,
            "hp": 43,
            "attack": 30,
            "defense": 55,
            "spAtk": 40,
            "spDef": 65,
            "speed": 97
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/luvdisc.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/luvdisc.avif"
        }
    },
    {
        "id": 371,
        "name": "Bagon",
        "form": null,
        "types": [
            "Dragon"
        ],
        "stats": {
            "total": 300,
            "hp": 45,
            "attack": 75,
            "defense": 60,
            "spAtk": 40,
            "spDef": 30,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bagon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bagon.avif"
        }
    },
    {
        "id": 372,
        "name": "Shelgon",
        "form": null,
        "types": [
            "Dragon"
        ],
        "stats": {
            "total": 420,
            "hp": 65,
            "attack": 95,
            "defense": 100,
            "spAtk": 60,
            "spDef": 50,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/shelgon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/shelgon.avif"
        }
    },
    {
        "id": 373,
        "name": "Salamence",
        "form": null,
        "types": [
            "Dragon",
            "Flying"
        ],
        "stats": {
            "total": 600,
            "hp": 95,
            "attack": 135,
            "defense": 80,
            "spAtk": 110,
            "spDef": 80,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/salamence.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/salamence.avif"
        }
    },
    {
        "id": 373,
        "name": "Salamence",
        "form": "Mega Salamence",
        "types": [
            "Dragon",
            "Flying"
        ],
        "stats": {
            "total": 700,
            "hp": 95,
            "attack": 145,
            "defense": 130,
            "spAtk": 120,
            "spDef": 90,
            "speed": 120
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/salamence-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/salamence-mega.avif"
        }
    },
    {
        "id": 374,
        "name": "Beldum",
        "form": null,
        "types": [
            "Steel",
            "Psychic"
        ],
        "stats": {
            "total": 300,
            "hp": 40,
            "attack": 55,
            "defense": 80,
            "spAtk": 35,
            "spDef": 60,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/beldum.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/beldum.avif"
        }
    },
    {
        "id": 375,
        "name": "Metang",
        "form": null,
        "types": [
            "Steel",
            "Psychic"
        ],
        "stats": {
            "total": 420,
            "hp": 60,
            "attack": 75,
            "defense": 100,
            "spAtk": 55,
            "spDef": 80,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/metang.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/metang.avif"
        }
    },
    {
        "id": 376,
        "name": "Metagross",
        "form": null,
        "types": [
            "Steel",
            "Psychic"
        ],
        "stats": {
            "total": 600,
            "hp": 80,
            "attack": 135,
            "defense": 130,
            "spAtk": 95,
            "spDef": 90,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/metagross.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/metagross.avif"
        }
    },
    {
        "id": 376,
        "name": "Metagross",
        "form": "Mega Metagross",
        "types": [
            "Steel",
            "Psychic"
        ],
        "stats": {
            "total": 700,
            "hp": 80,
            "attack": 145,
            "defense": 150,
            "spAtk": 105,
            "spDef": 110,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/metagross-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/metagross-mega.avif"
        }
    },
    {
        "id": 377,
        "name": "Regirock",
        "form": null,
        "types": [
            "Rock"
        ],
        "stats": {
            "total": 580,
            "hp": 80,
            "attack": 100,
            "defense": 200,
            "spAtk": 50,
            "spDef": 100,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/regirock.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/regirock.avif"
        }
    },
    {
        "id": 378,
        "name": "Regice",
        "form": null,
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 580,
            "hp": 80,
            "attack": 50,
            "defense": 100,
            "spAtk": 100,
            "spDef": 200,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/regice.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/regice.avif"
        }
    },
    {
        "id": 379,
        "name": "Registeel",
        "form": null,
        "types": [
            "Steel"
        ],
        "stats": {
            "total": 580,
            "hp": 80,
            "attack": 75,
            "defense": 150,
            "spAtk": 75,
            "spDef": 150,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/registeel.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/registeel.avif"
        }
    },
    {
        "id": 380,
        "name": "Latias",
        "form": null,
        "types": [
            "Dragon",
            "Psychic"
        ],
        "stats": {
            "total": 600,
            "hp": 80,
            "attack": 80,
            "defense": 90,
            "spAtk": 110,
            "spDef": 130,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/latias.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/latias.avif"
        }
    },
    {
        "id": 380,
        "name": "Latias",
        "form": "Mega Latias",
        "types": [
            "Dragon",
            "Psychic"
        ],
        "stats": {
            "total": 700,
            "hp": 80,
            "attack": 100,
            "defense": 120,
            "spAtk": 140,
            "spDef": 150,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/latias-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/latias-mega.avif"
        }
    },
    {
        "id": 381,
        "name": "Latios",
        "form": null,
        "types": [
            "Dragon",
            "Psychic"
        ],
        "stats": {
            "total": 600,
            "hp": 80,
            "attack": 90,
            "defense": 80,
            "spAtk": 130,
            "spDef": 110,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/latios.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/latios.avif"
        }
    },
    {
        "id": 381,
        "name": "Latios",
        "form": "Mega Latios",
        "types": [
            "Dragon",
            "Psychic"
        ],
        "stats": {
            "total": 700,
            "hp": 80,
            "attack": 130,
            "defense": 100,
            "spAtk": 160,
            "spDef": 120,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/latios-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/latios-mega.avif"
        }
    },
    {
        "id": 382,
        "name": "Kyogre",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 670,
            "hp": 100,
            "attack": 100,
            "defense": 90,
            "spAtk": 150,
            "spDef": 140,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kyogre.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kyogre.avif"
        }
    },
    {
        "id": 382,
        "name": "Kyogre",
        "form": "Primal Kyogre",
        "types": [
            "Water"
        ],
        "stats": {
            "total": 770,
            "hp": 100,
            "attack": 150,
            "defense": 90,
            "spAtk": 180,
            "spDef": 160,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kyogre-primal.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kyogre-primal.avif"
        }
    },
    {
        "id": 383,
        "name": "Groudon",
        "form": null,
        "types": [
            "Ground"
        ],
        "stats": {
            "total": 670,
            "hp": 100,
            "attack": 150,
            "defense": 140,
            "spAtk": 100,
            "spDef": 90,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/groudon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/groudon.avif"
        }
    },
    {
        "id": 383,
        "name": "Groudon",
        "form": "Primal Groudon",
        "types": [
            "Ground",
            "Fire"
        ],
        "stats": {
            "total": 770,
            "hp": 100,
            "attack": 180,
            "defense": 160,
            "spAtk": 150,
            "spDef": 90,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/groudon-primal.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/groudon-primal.avif"
        }
    },
    {
        "id": 384,
        "name": "Rayquaza",
        "form": null,
        "types": [
            "Dragon",
            "Flying"
        ],
        "stats": {
            "total": 680,
            "hp": 105,
            "attack": 150,
            "defense": 90,
            "spAtk": 150,
            "spDef": 90,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rayquaza.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rayquaza.avif"
        }
    },
    {
        "id": 384,
        "name": "Rayquaza",
        "form": "Mega Rayquaza",
        "types": [
            "Dragon",
            "Flying"
        ],
        "stats": {
            "total": 780,
            "hp": 105,
            "attack": 180,
            "defense": 100,
            "spAtk": 180,
            "spDef": 100,
            "speed": 115
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rayquaza-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rayquaza-mega.avif"
        }
    },
    {
        "id": 385,
        "name": "Jirachi",
        "form": null,
        "types": [
            "Steel",
            "Psychic"
        ],
        "stats": {
            "total": 600,
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "spAtk": 100,
            "spDef": 100,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/jirachi.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/jirachi.avif"
        }
    },
    {
        "id": 386,
        "name": "Deoxys",
        "form": "Normal Forme",
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 600,
            "hp": 50,
            "attack": 150,
            "defense": 50,
            "spAtk": 150,
            "spDef": 50,
            "speed": 150
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/deoxys-normal.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/deoxys-normal.avif"
        }
    },
    {
        "id": 386,
        "name": "Deoxys",
        "form": "Attack Forme",
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 600,
            "hp": 50,
            "attack": 180,
            "defense": 20,
            "spAtk": 180,
            "spDef": 20,
            "speed": 150
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/deoxys-attack.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/deoxys-attack.avif"
        }
    },
    {
        "id": 386,
        "name": "Deoxys",
        "form": "Defense Forme",
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 600,
            "hp": 50,
            "attack": 70,
            "defense": 160,
            "spAtk": 70,
            "spDef": 160,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/deoxys-defense.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/deoxys-defense.avif"
        }
    },
    {
        "id": 386,
        "name": "Deoxys",
        "form": "Speed Forme",
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 600,
            "hp": 50,
            "attack": 95,
            "defense": 90,
            "spAtk": 95,
            "spDef": 90,
            "speed": 180
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/deoxys-speed.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/deoxys-speed.avif"
        }
    },
    {
        "id": 387,
        "name": "Turtwig",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 318,
            "hp": 55,
            "attack": 68,
            "defense": 64,
            "spAtk": 45,
            "spDef": 55,
            "speed": 31
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/turtwig.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/turtwig.avif"
        }
    },
    {
        "id": 388,
        "name": "Grotle",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 405,
            "hp": 75,
            "attack": 89,
            "defense": 85,
            "spAtk": 55,
            "spDef": 65,
            "speed": 36
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/grotle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/grotle.avif"
        }
    },
    {
        "id": 389,
        "name": "Torterra",
        "form": null,
        "types": [
            "Grass",
            "Ground"
        ],
        "stats": {
            "total": 525,
            "hp": 95,
            "attack": 109,
            "defense": 105,
            "spAtk": 75,
            "spDef": 85,
            "speed": 56
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/torterra.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/torterra.avif"
        }
    },
    {
        "id": 390,
        "name": "Chimchar",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 309,
            "hp": 44,
            "attack": 58,
            "defense": 44,
            "spAtk": 58,
            "spDef": 44,
            "speed": 61
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/chimchar.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/chimchar.avif"
        }
    },
    {
        "id": 391,
        "name": "Monferno",
        "form": null,
        "types": [
            "Fire",
            "Fighting"
        ],
        "stats": {
            "total": 405,
            "hp": 64,
            "attack": 78,
            "defense": 52,
            "spAtk": 78,
            "spDef": 52,
            "speed": 81
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/monferno.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/monferno.avif"
        }
    },
    {
        "id": 392,
        "name": "Infernape",
        "form": null,
        "types": [
            "Fire",
            "Fighting"
        ],
        "stats": {
            "total": 534,
            "hp": 76,
            "attack": 104,
            "defense": 71,
            "spAtk": 104,
            "spDef": 71,
            "speed": 108
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/infernape.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/infernape.avif"
        }
    },
    {
        "id": 393,
        "name": "Piplup",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 314,
            "hp": 53,
            "attack": 51,
            "defense": 53,
            "spAtk": 61,
            "spDef": 56,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/piplup.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/piplup.avif"
        }
    },
    {
        "id": 394,
        "name": "Prinplup",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 405,
            "hp": 64,
            "attack": 66,
            "defense": 68,
            "spAtk": 81,
            "spDef": 76,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/prinplup.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/prinplup.avif"
        }
    },
    {
        "id": 395,
        "name": "Empoleon",
        "form": null,
        "types": [
            "Water",
            "Steel"
        ],
        "stats": {
            "total": 530,
            "hp": 84,
            "attack": 86,
            "defense": 88,
            "spAtk": 111,
            "spDef": 101,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/empoleon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/empoleon.avif"
        }
    },
    {
        "id": 396,
        "name": "Starly",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 245,
            "hp": 40,
            "attack": 55,
            "defense": 30,
            "spAtk": 30,
            "spDef": 30,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/starly.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/starly.avif"
        }
    },
    {
        "id": 397,
        "name": "Staravia",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 340,
            "hp": 55,
            "attack": 75,
            "defense": 50,
            "spAtk": 40,
            "spDef": 40,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/staravia.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/staravia.avif"
        }
    },
    {
        "id": 398,
        "name": "Staraptor",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 485,
            "hp": 85,
            "attack": 120,
            "defense": 70,
            "spAtk": 50,
            "spDef": 60,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/staraptor.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/staraptor.avif"
        }
    },
    {
        "id": 399,
        "name": "Bidoof",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 250,
            "hp": 59,
            "attack": 45,
            "defense": 40,
            "spAtk": 35,
            "spDef": 40,
            "speed": 31
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bidoof.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bidoof.avif"
        }
    },
    {
        "id": 400,
        "name": "Bibarel",
        "form": null,
        "types": [
            "Normal",
            "Water"
        ],
        "stats": {
            "total": 410,
            "hp": 79,
            "attack": 85,
            "defense": 60,
            "spAtk": 55,
            "spDef": 60,
            "speed": 71
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bibarel.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bibarel.avif"
        }
    },
    {
        "id": 401,
        "name": "Kricketot",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 194,
            "hp": 37,
            "attack": 25,
            "defense": 41,
            "spAtk": 25,
            "spDef": 41,
            "speed": 25
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kricketot.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kricketot.avif"
        }
    },
    {
        "id": 402,
        "name": "Kricketune",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 384,
            "hp": 77,
            "attack": 85,
            "defense": 51,
            "spAtk": 55,
            "spDef": 51,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kricketune.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kricketune.avif"
        }
    },
    {
        "id": 403,
        "name": "Shinx",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 263,
            "hp": 45,
            "attack": 65,
            "defense": 34,
            "spAtk": 40,
            "spDef": 34,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/shinx.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/shinx.avif"
        }
    },
    {
        "id": 404,
        "name": "Luxio",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 363,
            "hp": 60,
            "attack": 85,
            "defense": 49,
            "spAtk": 60,
            "spDef": 49,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/luxio.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/luxio.avif"
        }
    },
    {
        "id": 405,
        "name": "Luxray",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 523,
            "hp": 80,
            "attack": 120,
            "defense": 79,
            "spAtk": 95,
            "spDef": 79,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/luxray.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/luxray.avif"
        }
    },
    {
        "id": 406,
        "name": "Budew",
        "form": null,
        "types": [
            "Grass",
            "Poison"
        ],
        "stats": {
            "total": 280,
            "hp": 40,
            "attack": 30,
            "defense": 35,
            "spAtk": 50,
            "spDef": 70,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/budew.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/budew.avif"
        }
    },
    {
        "id": 407,
        "name": "Roserade",
        "form": null,
        "types": [
            "Grass",
            "Poison"
        ],
        "stats": {
            "total": 515,
            "hp": 60,
            "attack": 70,
            "defense": 65,
            "spAtk": 125,
            "spDef": 105,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/roserade.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/roserade.avif"
        }
    },
    {
        "id": 408,
        "name": "Cranidos",
        "form": null,
        "types": [
            "Rock"
        ],
        "stats": {
            "total": 350,
            "hp": 67,
            "attack": 125,
            "defense": 40,
            "spAtk": 30,
            "spDef": 30,
            "speed": 58
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cranidos.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cranidos.avif"
        }
    },
    {
        "id": 409,
        "name": "Rampardos",
        "form": null,
        "types": [
            "Rock"
        ],
        "stats": {
            "total": 495,
            "hp": 97,
            "attack": 165,
            "defense": 60,
            "spAtk": 65,
            "spDef": 50,
            "speed": 58
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rampardos.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rampardos.avif"
        }
    },
    {
        "id": 410,
        "name": "Shieldon",
        "form": null,
        "types": [
            "Rock",
            "Steel"
        ],
        "stats": {
            "total": 350,
            "hp": 30,
            "attack": 42,
            "defense": 118,
            "spAtk": 42,
            "spDef": 88,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/shieldon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/shieldon.avif"
        }
    },
    {
        "id": 411,
        "name": "Bastiodon",
        "form": null,
        "types": [
            "Rock",
            "Steel"
        ],
        "stats": {
            "total": 495,
            "hp": 60,
            "attack": 52,
            "defense": 168,
            "spAtk": 47,
            "spDef": 138,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bastiodon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bastiodon.avif"
        }
    },
    {
        "id": 412,
        "name": "Burmy",
        "form": "Plant Cloak",
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 224,
            "hp": 40,
            "attack": 29,
            "defense": 45,
            "spAtk": 29,
            "spDef": 45,
            "speed": 36
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/burmy-plant.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/burmy-plant.avif"
        }
    },
    {
        "id": 412,
        "name": "Burmy",
        "form": "Sandy Cloak",
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 224,
            "hp": 40,
            "attack": 29,
            "defense": 45,
            "spAtk": 29,
            "spDef": 45,
            "speed": 36
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/burmy-sandy.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/burmy-sandy.avif"
        }
    },
    {
        "id": 412,
        "name": "Burmy",
        "form": "Trash Cloak",
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 224,
            "hp": 40,
            "attack": 29,
            "defense": 45,
            "spAtk": 29,
            "spDef": 45,
            "speed": 36
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/burmy-trash.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/burmy-trash.avif"
        }
    },
    {
        "id": 413,
        "name": "Wormadam",
        "form": "Plant Cloak",
        "types": [
            "Bug",
            "Grass"
        ],
        "stats": {
            "total": 424,
            "hp": 60,
            "attack": 59,
            "defense": 85,
            "spAtk": 79,
            "spDef": 105,
            "speed": 36
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wormadam-plant.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wormadam-plant.avif"
        }
    },
    {
        "id": 413,
        "name": "Wormadam",
        "form": "Sandy Cloak",
        "types": [
            "Bug",
            "Ground"
        ],
        "stats": {
            "total": 424,
            "hp": 60,
            "attack": 79,
            "defense": 105,
            "spAtk": 59,
            "spDef": 85,
            "speed": 36
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wormadam-sandy.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wormadam-sandy.avif"
        }
    },
    {
        "id": 413,
        "name": "Wormadam",
        "form": "Trash Cloak",
        "types": [
            "Bug",
            "Steel"
        ],
        "stats": {
            "total": 424,
            "hp": 60,
            "attack": 69,
            "defense": 95,
            "spAtk": 69,
            "spDef": 95,
            "speed": 36
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wormadam-trash.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wormadam-trash.avif"
        }
    },
    {
        "id": 414,
        "name": "Mothim",
        "form": null,
        "types": [
            "Bug",
            "Flying"
        ],
        "stats": {
            "total": 424,
            "hp": 70,
            "attack": 94,
            "defense": 50,
            "spAtk": 94,
            "spDef": 50,
            "speed": 66
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mothim.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mothim.avif"
        }
    },
    {
        "id": 415,
        "name": "Combee",
        "form": null,
        "types": [
            "Bug",
            "Flying"
        ],
        "stats": {
            "total": 244,
            "hp": 30,
            "attack": 30,
            "defense": 42,
            "spAtk": 30,
            "spDef": 42,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/combee.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/combee.avif"
        }
    },
    {
        "id": 416,
        "name": "Vespiquen",
        "form": null,
        "types": [
            "Bug",
            "Flying"
        ],
        "stats": {
            "total": 474,
            "hp": 70,
            "attack": 80,
            "defense": 102,
            "spAtk": 80,
            "spDef": 102,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/vespiquen.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/vespiquen.avif"
        }
    },
    {
        "id": 417,
        "name": "Pachirisu",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 405,
            "hp": 60,
            "attack": 45,
            "defense": 70,
            "spAtk": 45,
            "spDef": 90,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pachirisu.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pachirisu.avif"
        }
    },
    {
        "id": 418,
        "name": "Buizel",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 330,
            "hp": 55,
            "attack": 65,
            "defense": 35,
            "spAtk": 60,
            "spDef": 30,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/buizel.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/buizel.avif"
        }
    },
    {
        "id": 419,
        "name": "Floatzel",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 495,
            "hp": 85,
            "attack": 105,
            "defense": 55,
            "spAtk": 85,
            "spDef": 50,
            "speed": 115
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/floatzel.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/floatzel.avif"
        }
    },
    {
        "id": 420,
        "name": "Cherubi",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 275,
            "hp": 45,
            "attack": 35,
            "defense": 45,
            "spAtk": 62,
            "spDef": 53,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cherubi.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cherubi.avif"
        }
    },
    {
        "id": 421,
        "name": "Cherrim",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 450,
            "hp": 70,
            "attack": 60,
            "defense": 70,
            "spAtk": 87,
            "spDef": 78,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cherrim.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cherrim.avif"
        }
    },
    {
        "id": 422,
        "name": "Shellos",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 325,
            "hp": 76,
            "attack": 48,
            "defense": 48,
            "spAtk": 57,
            "spDef": 62,
            "speed": 34
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/shellos.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/shellos.avif"
        }
    },
    {
        "id": 423,
        "name": "Gastrodon",
        "form": null,
        "types": [
            "Water",
            "Ground"
        ],
        "stats": {
            "total": 475,
            "hp": 111,
            "attack": 83,
            "defense": 68,
            "spAtk": 92,
            "spDef": 82,
            "speed": 39
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gastrodon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gastrodon.avif"
        }
    },
    {
        "id": 424,
        "name": "Ambipom",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 482,
            "hp": 75,
            "attack": 100,
            "defense": 66,
            "spAtk": 60,
            "spDef": 66,
            "speed": 115
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ambipom.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ambipom.avif"
        }
    },
    {
        "id": 425,
        "name": "Drifloon",
        "form": null,
        "types": [
            "Ghost",
            "Flying"
        ],
        "stats": {
            "total": 348,
            "hp": 90,
            "attack": 50,
            "defense": 34,
            "spAtk": 60,
            "spDef": 44,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/drifloon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/drifloon.avif"
        }
    },
    {
        "id": 426,
        "name": "Drifblim",
        "form": null,
        "types": [
            "Ghost",
            "Flying"
        ],
        "stats": {
            "total": 498,
            "hp": 150,
            "attack": 80,
            "defense": 44,
            "spAtk": 90,
            "spDef": 54,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/drifblim.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/drifblim.avif"
        }
    },
    {
        "id": 427,
        "name": "Buneary",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 350,
            "hp": 55,
            "attack": 66,
            "defense": 44,
            "spAtk": 44,
            "spDef": 56,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/buneary.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/buneary.avif"
        }
    },
    {
        "id": 428,
        "name": "Lopunny",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 480,
            "hp": 65,
            "attack": 76,
            "defense": 84,
            "spAtk": 54,
            "spDef": 96,
            "speed": 105
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lopunny.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lopunny.avif"
        }
    },
    {
        "id": 428,
        "name": "Lopunny",
        "form": "Mega Lopunny",
        "types": [
            "Normal",
            "Fighting"
        ],
        "stats": {
            "total": 580,
            "hp": 65,
            "attack": 136,
            "defense": 94,
            "spAtk": 54,
            "spDef": 96,
            "speed": 135
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lopunny-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lopunny-mega.avif"
        }
    },
    {
        "id": 429,
        "name": "Mismagius",
        "form": null,
        "types": [
            "Ghost"
        ],
        "stats": {
            "total": 495,
            "hp": 60,
            "attack": 60,
            "defense": 60,
            "spAtk": 105,
            "spDef": 105,
            "speed": 105
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mismagius.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mismagius.avif"
        }
    },
    {
        "id": 430,
        "name": "Honchkrow",
        "form": null,
        "types": [
            "Dark",
            "Flying"
        ],
        "stats": {
            "total": 505,
            "hp": 100,
            "attack": 125,
            "defense": 52,
            "spAtk": 105,
            "spDef": 52,
            "speed": 71
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/honchkrow.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/honchkrow.avif"
        }
    },
    {
        "id": 431,
        "name": "Glameow",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 310,
            "hp": 49,
            "attack": 55,
            "defense": 42,
            "spAtk": 42,
            "spDef": 37,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/glameow.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/glameow.avif"
        }
    },
    {
        "id": 432,
        "name": "Purugly",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 452,
            "hp": 71,
            "attack": 82,
            "defense": 64,
            "spAtk": 64,
            "spDef": 59,
            "speed": 112
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/purugly.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/purugly.avif"
        }
    },
    {
        "id": 433,
        "name": "Chingling",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 285,
            "hp": 45,
            "attack": 30,
            "defense": 50,
            "spAtk": 65,
            "spDef": 50,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/chingling.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/chingling.avif"
        }
    },
    {
        "id": 434,
        "name": "Stunky",
        "form": null,
        "types": [
            "Poison",
            "Dark"
        ],
        "stats": {
            "total": 329,
            "hp": 63,
            "attack": 63,
            "defense": 47,
            "spAtk": 41,
            "spDef": 41,
            "speed": 74
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/stunky.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/stunky.avif"
        }
    },
    {
        "id": 435,
        "name": "Skuntank",
        "form": null,
        "types": [
            "Poison",
            "Dark"
        ],
        "stats": {
            "total": 479,
            "hp": 103,
            "attack": 93,
            "defense": 67,
            "spAtk": 71,
            "spDef": 61,
            "speed": 84
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/skuntank.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/skuntank.avif"
        }
    },
    {
        "id": 436,
        "name": "Bronzor",
        "form": null,
        "types": [
            "Steel",
            "Psychic"
        ],
        "stats": {
            "total": 300,
            "hp": 57,
            "attack": 24,
            "defense": 86,
            "spAtk": 24,
            "spDef": 86,
            "speed": 23
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bronzor.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bronzor.avif"
        }
    },
    {
        "id": 437,
        "name": "Bronzong",
        "form": null,
        "types": [
            "Steel",
            "Psychic"
        ],
        "stats": {
            "total": 500,
            "hp": 67,
            "attack": 89,
            "defense": 116,
            "spAtk": 79,
            "spDef": 116,
            "speed": 33
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bronzong.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bronzong.avif"
        }
    },
    {
        "id": 438,
        "name": "Bonsly",
        "form": null,
        "types": [
            "Rock"
        ],
        "stats": {
            "total": 290,
            "hp": 50,
            "attack": 80,
            "defense": 95,
            "spAtk": 10,
            "spDef": 45,
            "speed": 10
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bonsly.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bonsly.avif"
        }
    },
    {
        "id": 439,
        "name": "Mime Jr.",
        "form": null,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "stats": {
            "total": 310,
            "hp": 20,
            "attack": 25,
            "defense": 45,
            "spAtk": 70,
            "spDef": 90,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mime-jr.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mime-jr.avif"
        }
    },
    {
        "id": 440,
        "name": "Happiny",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 220,
            "hp": 100,
            "attack": 5,
            "defense": 5,
            "spAtk": 15,
            "spDef": 65,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/happiny.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/happiny.avif"
        }
    },
    {
        "id": 441,
        "name": "Chatot",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 411,
            "hp": 76,
            "attack": 65,
            "defense": 45,
            "spAtk": 92,
            "spDef": 42,
            "speed": 91
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/chatot.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/chatot.avif"
        }
    },
    {
        "id": 442,
        "name": "Spiritomb",
        "form": null,
        "types": [
            "Ghost",
            "Dark"
        ],
        "stats": {
            "total": 485,
            "hp": 50,
            "attack": 92,
            "defense": 108,
            "spAtk": 92,
            "spDef": 108,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/spiritomb.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/spiritomb.avif"
        }
    },
    {
        "id": 443,
        "name": "Gible",
        "form": null,
        "types": [
            "Dragon",
            "Ground"
        ],
        "stats": {
            "total": 300,
            "hp": 58,
            "attack": 70,
            "defense": 45,
            "spAtk": 40,
            "spDef": 45,
            "speed": 42
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gible.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gible.avif"
        }
    },
    {
        "id": 444,
        "name": "Gabite",
        "form": null,
        "types": [
            "Dragon",
            "Ground"
        ],
        "stats": {
            "total": 410,
            "hp": 68,
            "attack": 90,
            "defense": 65,
            "spAtk": 50,
            "spDef": 55,
            "speed": 82
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gabite.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gabite.avif"
        }
    },
    {
        "id": 445,
        "name": "Garchomp",
        "form": null,
        "types": [
            "Dragon",
            "Ground"
        ],
        "stats": {
            "total": 600,
            "hp": 108,
            "attack": 130,
            "defense": 95,
            "spAtk": 80,
            "spDef": 85,
            "speed": 102
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/garchomp.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/garchomp.avif"
        }
    },
    {
        "id": 445,
        "name": "Garchomp",
        "form": "Mega Garchomp",
        "types": [
            "Dragon",
            "Ground"
        ],
        "stats": {
            "total": 700,
            "hp": 108,
            "attack": 170,
            "defense": 115,
            "spAtk": 120,
            "spDef": 95,
            "speed": 92
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/garchomp-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/garchomp-mega.avif"
        }
    },
    {
        "id": 446,
        "name": "Munchlax",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 390,
            "hp": 135,
            "attack": 85,
            "defense": 40,
            "spAtk": 40,
            "spDef": 85,
            "speed": 5
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/munchlax.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/munchlax.avif"
        }
    },
    {
        "id": 447,
        "name": "Riolu",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 285,
            "hp": 40,
            "attack": 70,
            "defense": 40,
            "spAtk": 35,
            "spDef": 40,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/riolu.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/riolu.avif"
        }
    },
    {
        "id": 448,
        "name": "Lucario",
        "form": null,
        "types": [
            "Fighting",
            "Steel"
        ],
        "stats": {
            "total": 525,
            "hp": 70,
            "attack": 110,
            "defense": 70,
            "spAtk": 115,
            "spDef": 70,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lucario.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lucario.avif"
        }
    },
    {
        "id": 448,
        "name": "Lucario",
        "form": "Mega Lucario",
        "types": [
            "Fighting",
            "Steel"
        ],
        "stats": {
            "total": 625,
            "hp": 70,
            "attack": 145,
            "defense": 88,
            "spAtk": 140,
            "spDef": 70,
            "speed": 112
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lucario-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lucario-mega.avif"
        }
    },
    {
        "id": 449,
        "name": "Hippopotas",
        "form": null,
        "types": [
            "Ground"
        ],
        "stats": {
            "total": 330,
            "hp": 68,
            "attack": 72,
            "defense": 78,
            "spAtk": 38,
            "spDef": 42,
            "speed": 32
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/hippopotas.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/hippopotas.avif"
        }
    },
    {
        "id": 450,
        "name": "Hippowdon",
        "form": null,
        "types": [
            "Ground"
        ],
        "stats": {
            "total": 525,
            "hp": 108,
            "attack": 112,
            "defense": 118,
            "spAtk": 68,
            "spDef": 72,
            "speed": 47
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/hippowdon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/hippowdon.avif"
        }
    },
    {
        "id": 451,
        "name": "Skorupi",
        "form": null,
        "types": [
            "Poison",
            "Bug"
        ],
        "stats": {
            "total": 330,
            "hp": 40,
            "attack": 50,
            "defense": 90,
            "spAtk": 30,
            "spDef": 55,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/skorupi.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/skorupi.avif"
        }
    },
    {
        "id": 452,
        "name": "Drapion",
        "form": null,
        "types": [
            "Poison",
            "Dark"
        ],
        "stats": {
            "total": 500,
            "hp": 70,
            "attack": 90,
            "defense": 110,
            "spAtk": 60,
            "spDef": 75,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/drapion.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/drapion.avif"
        }
    },
    {
        "id": 453,
        "name": "Croagunk",
        "form": null,
        "types": [
            "Poison",
            "Fighting"
        ],
        "stats": {
            "total": 300,
            "hp": 48,
            "attack": 61,
            "defense": 40,
            "spAtk": 61,
            "spDef": 40,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/croagunk.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/croagunk.avif"
        }
    },
    {
        "id": 454,
        "name": "Toxicroak",
        "form": null,
        "types": [
            "Poison",
            "Fighting"
        ],
        "stats": {
            "total": 490,
            "hp": 83,
            "attack": 106,
            "defense": 65,
            "spAtk": 86,
            "spDef": 65,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/toxicroak.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/toxicroak.avif"
        }
    },
    {
        "id": 455,
        "name": "Carnivine",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 454,
            "hp": 74,
            "attack": 100,
            "defense": 72,
            "spAtk": 90,
            "spDef": 72,
            "speed": 46
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/carnivine.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/carnivine.avif"
        }
    },
    {
        "id": 456,
        "name": "Finneon",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 330,
            "hp": 49,
            "attack": 49,
            "defense": 56,
            "spAtk": 49,
            "spDef": 61,
            "speed": 66
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/finneon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/finneon.avif"
        }
    },
    {
        "id": 457,
        "name": "Lumineon",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 460,
            "hp": 69,
            "attack": 69,
            "defense": 76,
            "spAtk": 69,
            "spDef": 86,
            "speed": 91
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lumineon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lumineon.avif"
        }
    },
    {
        "id": 458,
        "name": "Mantyke",
        "form": null,
        "types": [
            "Water",
            "Flying"
        ],
        "stats": {
            "total": 345,
            "hp": 45,
            "attack": 20,
            "defense": 50,
            "spAtk": 60,
            "spDef": 120,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mantyke.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mantyke.avif"
        }
    },
    {
        "id": 459,
        "name": "Snover",
        "form": null,
        "types": [
            "Grass",
            "Ice"
        ],
        "stats": {
            "total": 334,
            "hp": 60,
            "attack": 62,
            "defense": 50,
            "spAtk": 62,
            "spDef": 60,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/snover.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/snover.avif"
        }
    },
    {
        "id": 460,
        "name": "Abomasnow",
        "form": null,
        "types": [
            "Grass",
            "Ice"
        ],
        "stats": {
            "total": 494,
            "hp": 90,
            "attack": 92,
            "defense": 75,
            "spAtk": 92,
            "spDef": 85,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/abomasnow.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/abomasnow.avif"
        }
    },
    {
        "id": 460,
        "name": "Abomasnow",
        "form": "Mega Abomasnow",
        "types": [
            "Grass",
            "Ice"
        ],
        "stats": {
            "total": 594,
            "hp": 90,
            "attack": 132,
            "defense": 105,
            "spAtk": 132,
            "spDef": 105,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/abomasnow-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/abomasnow-mega.avif"
        }
    },
    {
        "id": 461,
        "name": "Weavile",
        "form": null,
        "types": [
            "Dark",
            "Ice"
        ],
        "stats": {
            "total": 510,
            "hp": 70,
            "attack": 120,
            "defense": 65,
            "spAtk": 45,
            "spDef": 85,
            "speed": 125
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/weavile.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/weavile.avif"
        }
    },
    {
        "id": 462,
        "name": "Magnezone",
        "form": null,
        "types": [
            "Electric",
            "Steel"
        ],
        "stats": {
            "total": 535,
            "hp": 70,
            "attack": 70,
            "defense": 115,
            "spAtk": 130,
            "spDef": 90,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/magnezone.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/magnezone.avif"
        }
    },
    {
        "id": 463,
        "name": "Lickilicky",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 515,
            "hp": 110,
            "attack": 85,
            "defense": 95,
            "spAtk": 80,
            "spDef": 95,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lickilicky.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lickilicky.avif"
        }
    },
    {
        "id": 464,
        "name": "Rhyperior",
        "form": null,
        "types": [
            "Ground",
            "Rock"
        ],
        "stats": {
            "total": 535,
            "hp": 115,
            "attack": 140,
            "defense": 130,
            "spAtk": 55,
            "spDef": 55,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rhyperior.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rhyperior.avif"
        }
    },
    {
        "id": 465,
        "name": "Tangrowth",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 535,
            "hp": 100,
            "attack": 100,
            "defense": 125,
            "spAtk": 110,
            "spDef": 50,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tangrowth.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tangrowth.avif"
        }
    },
    {
        "id": 466,
        "name": "Electivire",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 540,
            "hp": 75,
            "attack": 123,
            "defense": 67,
            "spAtk": 95,
            "spDef": 85,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/electivire.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/electivire.avif"
        }
    },
    {
        "id": 467,
        "name": "Magmortar",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 540,
            "hp": 75,
            "attack": 95,
            "defense": 67,
            "spAtk": 125,
            "spDef": 95,
            "speed": 83
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/magmortar.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/magmortar.avif"
        }
    },
    {
        "id": 468,
        "name": "Togekiss",
        "form": null,
        "types": [
            "Fairy",
            "Flying"
        ],
        "stats": {
            "total": 545,
            "hp": 85,
            "attack": 50,
            "defense": 95,
            "spAtk": 120,
            "spDef": 115,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/togekiss.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/togekiss.avif"
        }
    },
    {
        "id": 469,
        "name": "Yanmega",
        "form": null,
        "types": [
            "Bug",
            "Flying"
        ],
        "stats": {
            "total": 515,
            "hp": 86,
            "attack": 76,
            "defense": 86,
            "spAtk": 116,
            "spDef": 56,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/yanmega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/yanmega.avif"
        }
    },
    {
        "id": 470,
        "name": "Leafeon",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 525,
            "hp": 65,
            "attack": 110,
            "defense": 130,
            "spAtk": 60,
            "spDef": 65,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/leafeon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/leafeon.avif"
        }
    },
    {
        "id": 471,
        "name": "Glaceon",
        "form": null,
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 525,
            "hp": 65,
            "attack": 60,
            "defense": 110,
            "spAtk": 130,
            "spDef": 95,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/glaceon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/glaceon.avif"
        }
    },
    {
        "id": 472,
        "name": "Gliscor",
        "form": null,
        "types": [
            "Ground",
            "Flying"
        ],
        "stats": {
            "total": 510,
            "hp": 75,
            "attack": 95,
            "defense": 125,
            "spAtk": 45,
            "spDef": 75,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gliscor.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gliscor.avif"
        }
    },
    {
        "id": 473,
        "name": "Mamoswine",
        "form": null,
        "types": [
            "Ice",
            "Ground"
        ],
        "stats": {
            "total": 530,
            "hp": 110,
            "attack": 130,
            "defense": 80,
            "spAtk": 70,
            "spDef": 60,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mamoswine.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mamoswine.avif"
        }
    },
    {
        "id": 474,
        "name": "Porygon-Z",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 535,
            "hp": 85,
            "attack": 80,
            "defense": 70,
            "spAtk": 135,
            "spDef": 75,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/porygon-z.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/porygon-z.avif"
        }
    },
    {
        "id": 475,
        "name": "Gallade",
        "form": null,
        "types": [
            "Psychic",
            "Fighting"
        ],
        "stats": {
            "total": 518,
            "hp": 68,
            "attack": 125,
            "defense": 65,
            "spAtk": 65,
            "spDef": 115,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gallade.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gallade.avif"
        }
    },
    {
        "id": 475,
        "name": "Gallade",
        "form": "Mega Gallade",
        "types": [
            "Psychic",
            "Fighting"
        ],
        "stats": {
            "total": 618,
            "hp": 68,
            "attack": 165,
            "defense": 95,
            "spAtk": 65,
            "spDef": 115,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gallade-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gallade-mega.avif"
        }
    },
    {
        "id": 476,
        "name": "Probopass",
        "form": null,
        "types": [
            "Rock",
            "Steel"
        ],
        "stats": {
            "total": 525,
            "hp": 60,
            "attack": 55,
            "defense": 145,
            "spAtk": 75,
            "spDef": 150,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/probopass.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/probopass.avif"
        }
    },
    {
        "id": 477,
        "name": "Dusknoir",
        "form": null,
        "types": [
            "Ghost"
        ],
        "stats": {
            "total": 525,
            "hp": 45,
            "attack": 100,
            "defense": 135,
            "spAtk": 65,
            "spDef": 135,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dusknoir.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dusknoir.avif"
        }
    },
    {
        "id": 478,
        "name": "Froslass",
        "form": null,
        "types": [
            "Ice",
            "Ghost"
        ],
        "stats": {
            "total": 480,
            "hp": 70,
            "attack": 80,
            "defense": 70,
            "spAtk": 80,
            "spDef": 70,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/froslass.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/froslass.avif"
        }
    },
    {
        "id": 479,
        "name": "Rotom",
        "form": null,
        "types": [
            "Electric",
            "Ghost"
        ],
        "stats": {
            "total": 440,
            "hp": 50,
            "attack": 50,
            "defense": 77,
            "spAtk": 95,
            "spDef": 77,
            "speed": 91
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rotom.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rotom.avif"
        }
    },
    {
        "id": 479,
        "name": "Rotom",
        "form": "Heat Rotom",
        "types": [
            "Electric",
            "Fire"
        ],
        "stats": {
            "total": 520,
            "hp": 50,
            "attack": 65,
            "defense": 107,
            "spAtk": 105,
            "spDef": 107,
            "speed": 86
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rotom-heat.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rotom-heat.avif"
        }
    },
    {
        "id": 479,
        "name": "Rotom",
        "form": "Wash Rotom",
        "types": [
            "Electric",
            "Water"
        ],
        "stats": {
            "total": 520,
            "hp": 50,
            "attack": 65,
            "defense": 107,
            "spAtk": 105,
            "spDef": 107,
            "speed": 86
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rotom-wash.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rotom-wash.avif"
        }
    },
    {
        "id": 479,
        "name": "Rotom",
        "form": "Frost Rotom",
        "types": [
            "Electric",
            "Ice"
        ],
        "stats": {
            "total": 520,
            "hp": 50,
            "attack": 65,
            "defense": 107,
            "spAtk": 105,
            "spDef": 107,
            "speed": 86
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rotom-frost.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rotom-frost.avif"
        }
    },
    {
        "id": 479,
        "name": "Rotom",
        "form": "Fan Rotom",
        "types": [
            "Electric",
            "Flying"
        ],
        "stats": {
            "total": 520,
            "hp": 50,
            "attack": 65,
            "defense": 107,
            "spAtk": 105,
            "spDef": 107,
            "speed": 86
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rotom-fan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rotom-fan.avif"
        }
    },
    {
        "id": 479,
        "name": "Rotom",
        "form": "Mow Rotom",
        "types": [
            "Electric",
            "Grass"
        ],
        "stats": {
            "total": 520,
            "hp": 50,
            "attack": 65,
            "defense": 107,
            "spAtk": 105,
            "spDef": 107,
            "speed": 86
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rotom-mow.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rotom-mow.avif"
        }
    },
    {
        "id": 480,
        "name": "Uxie",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 580,
            "hp": 75,
            "attack": 75,
            "defense": 130,
            "spAtk": 75,
            "spDef": 130,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/uxie.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/uxie.avif"
        }
    },
    {
        "id": 481,
        "name": "Mesprit",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 580,
            "hp": 80,
            "attack": 105,
            "defense": 105,
            "spAtk": 105,
            "spDef": 105,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mesprit.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mesprit.avif"
        }
    },
    {
        "id": 482,
        "name": "Azelf",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 580,
            "hp": 75,
            "attack": 125,
            "defense": 70,
            "spAtk": 125,
            "spDef": 70,
            "speed": 115
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/azelf.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/azelf.avif"
        }
    },
    {
        "id": 483,
        "name": "Dialga",
        "form": null,
        "types": [
            "Steel",
            "Dragon"
        ],
        "stats": {
            "total": 680,
            "hp": 100,
            "attack": 120,
            "defense": 120,
            "spAtk": 150,
            "spDef": 100,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dialga.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dialga.avif"
        }
    },
    {
        "id": 483,
        "name": "Dialga",
        "form": "Origin Forme",
        "types": [
            "Steel",
            "Dragon"
        ],
        "stats": {
            "total": 680,
            "hp": 100,
            "attack": 100,
            "defense": 120,
            "spAtk": 150,
            "spDef": 120,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dialga-origin.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dialga-origin.avif"
        }
    },
    {
        "id": 484,
        "name": "Palkia",
        "form": null,
        "types": [
            "Water",
            "Dragon"
        ],
        "stats": {
            "total": 680,
            "hp": 90,
            "attack": 120,
            "defense": 100,
            "spAtk": 150,
            "spDef": 120,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/palkia.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/palkia.avif"
        }
    },
    {
        "id": 484,
        "name": "Palkia",
        "form": "Origin Forme",
        "types": [
            "Water",
            "Dragon"
        ],
        "stats": {
            "total": 680,
            "hp": 90,
            "attack": 100,
            "defense": 100,
            "spAtk": 150,
            "spDef": 120,
            "speed": 120
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/palkia-origin.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/palkia-origin.avif"
        }
    },
    {
        "id": 485,
        "name": "Heatran",
        "form": null,
        "types": [
            "Fire",
            "Steel"
        ],
        "stats": {
            "total": 600,
            "hp": 91,
            "attack": 90,
            "defense": 106,
            "spAtk": 130,
            "spDef": 106,
            "speed": 77
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/heatran.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/heatran.avif"
        }
    },
    {
        "id": 486,
        "name": "Regigigas",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 670,
            "hp": 110,
            "attack": 160,
            "defense": 110,
            "spAtk": 80,
            "spDef": 110,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/regigigas.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/regigigas.avif"
        }
    },
    {
        "id": 487,
        "name": "Giratina",
        "form": "Altered Forme",
        "types": [
            "Ghost",
            "Dragon"
        ],
        "stats": {
            "total": 680,
            "hp": 150,
            "attack": 100,
            "defense": 120,
            "spAtk": 100,
            "spDef": 120,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/giratina-altered.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/giratina-altered.avif"
        }
    },
    {
        "id": 487,
        "name": "Giratina",
        "form": "Origin Forme",
        "types": [
            "Ghost",
            "Dragon"
        ],
        "stats": {
            "total": 680,
            "hp": 150,
            "attack": 120,
            "defense": 100,
            "spAtk": 120,
            "spDef": 100,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/giratina-origin.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/giratina-origin.avif"
        }
    },
    {
        "id": 488,
        "name": "Cresselia",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 580,
            "hp": 120,
            "attack": 70,
            "defense": 110,
            "spAtk": 75,
            "spDef": 120,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cresselia.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cresselia.avif"
        }
    },
    {
        "id": 489,
        "name": "Phione",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 480,
            "hp": 80,
            "attack": 80,
            "defense": 80,
            "spAtk": 80,
            "spDef": 80,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/phione.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/phione.avif"
        }
    },
    {
        "id": 490,
        "name": "Manaphy",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 600,
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "spAtk": 100,
            "spDef": 100,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/manaphy.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/manaphy.avif"
        }
    },
    {
        "id": 491,
        "name": "Darkrai",
        "form": null,
        "types": [
            "Dark"
        ],
        "stats": {
            "total": 600,
            "hp": 70,
            "attack": 90,
            "defense": 90,
            "spAtk": 135,
            "spDef": 90,
            "speed": 125
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/darkrai.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/darkrai.avif"
        }
    },
    {
        "id": 492,
        "name": "Shaymin",
        "form": "Land Forme",
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 600,
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "spAtk": 100,
            "spDef": 100,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/shaymin-land.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/shaymin-land.avif"
        }
    },
    {
        "id": 492,
        "name": "Shaymin",
        "form": "Sky Forme",
        "types": [
            "Grass",
            "Flying"
        ],
        "stats": {
            "total": 600,
            "hp": 100,
            "attack": 103,
            "defense": 75,
            "spAtk": 120,
            "spDef": 75,
            "speed": 127
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/shaymin-sky.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/shaymin-sky.avif"
        }
    },
    {
        "id": 493,
        "name": "Arceus",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 720,
            "hp": 120,
            "attack": 120,
            "defense": 120,
            "spAtk": 120,
            "spDef": 120,
            "speed": 120
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/arceus.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/arceus.avif"
        }
    },
    {
        "id": 494,
        "name": "Victini",
        "form": null,
        "types": [
            "Psychic",
            "Fire"
        ],
        "stats": {
            "total": 600,
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "spAtk": 100,
            "spDef": 100,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/victini.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/victini.avif"
        }
    },
    {
        "id": 495,
        "name": "Snivy",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 308,
            "hp": 45,
            "attack": 45,
            "defense": 55,
            "spAtk": 45,
            "spDef": 55,
            "speed": 63
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/snivy.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/snivy.avif"
        }
    },
    {
        "id": 496,
        "name": "Servine",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 413,
            "hp": 60,
            "attack": 60,
            "defense": 75,
            "spAtk": 60,
            "spDef": 75,
            "speed": 83
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/servine.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/servine.avif"
        }
    },
    {
        "id": 497,
        "name": "Serperior",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 528,
            "hp": 75,
            "attack": 75,
            "defense": 95,
            "spAtk": 75,
            "spDef": 95,
            "speed": 113
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/serperior.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/serperior.avif"
        }
    },
    {
        "id": 498,
        "name": "Tepig",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 308,
            "hp": 65,
            "attack": 63,
            "defense": 45,
            "spAtk": 45,
            "spDef": 45,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tepig.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tepig.avif"
        }
    },
    {
        "id": 499,
        "name": "Pignite",
        "form": null,
        "types": [
            "Fire",
            "Fighting"
        ],
        "stats": {
            "total": 418,
            "hp": 90,
            "attack": 93,
            "defense": 55,
            "spAtk": 70,
            "spDef": 55,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pignite.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pignite.avif"
        }
    },
    {
        "id": 500,
        "name": "Emboar",
        "form": null,
        "types": [
            "Fire",
            "Fighting"
        ],
        "stats": {
            "total": 528,
            "hp": 110,
            "attack": 123,
            "defense": 65,
            "spAtk": 100,
            "spDef": 65,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/emboar.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/emboar.avif"
        }
    },
    {
        "id": 501,
        "name": "Oshawott",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 308,
            "hp": 55,
            "attack": 55,
            "defense": 45,
            "spAtk": 63,
            "spDef": 45,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/oshawott.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/oshawott.avif"
        }
    },
    {
        "id": 502,
        "name": "Dewott",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 413,
            "hp": 75,
            "attack": 75,
            "defense": 60,
            "spAtk": 83,
            "spDef": 60,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dewott.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dewott.avif"
        }
    },
    {
        "id": 503,
        "name": "Samurott",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 528,
            "hp": 95,
            "attack": 100,
            "defense": 85,
            "spAtk": 108,
            "spDef": 70,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/samurott.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/samurott.avif"
        }
    },
    {
        "id": 503,
        "name": "Samurott",
        "form": "Hisuian Samurott",
        "types": [
            "Water",
            "Dark"
        ],
        "stats": {
            "total": 528,
            "hp": 90,
            "attack": 108,
            "defense": 80,
            "spAtk": 100,
            "spDef": 65,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/samurott-hisuian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/samurott-hisuian.avif"
        }
    },
    {
        "id": 504,
        "name": "Patrat",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 255,
            "hp": 45,
            "attack": 55,
            "defense": 39,
            "spAtk": 35,
            "spDef": 39,
            "speed": 42
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/patrat.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/patrat.avif"
        }
    },
    {
        "id": 505,
        "name": "Watchog",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 420,
            "hp": 60,
            "attack": 85,
            "defense": 69,
            "spAtk": 60,
            "spDef": 69,
            "speed": 77
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/watchog.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/watchog.avif"
        }
    },
    {
        "id": 506,
        "name": "Lillipup",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 275,
            "hp": 45,
            "attack": 60,
            "defense": 45,
            "spAtk": 25,
            "spDef": 45,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lillipup.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lillipup.avif"
        }
    },
    {
        "id": 507,
        "name": "Herdier",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 370,
            "hp": 65,
            "attack": 80,
            "defense": 65,
            "spAtk": 35,
            "spDef": 65,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/herdier.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/herdier.avif"
        }
    },
    {
        "id": 508,
        "name": "Stoutland",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 500,
            "hp": 85,
            "attack": 110,
            "defense": 90,
            "spAtk": 45,
            "spDef": 90,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/stoutland.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/stoutland.avif"
        }
    },
    {
        "id": 509,
        "name": "Purrloin",
        "form": null,
        "types": [
            "Dark"
        ],
        "stats": {
            "total": 281,
            "hp": 41,
            "attack": 50,
            "defense": 37,
            "spAtk": 50,
            "spDef": 37,
            "speed": 66
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/purrloin.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/purrloin.avif"
        }
    },
    {
        "id": 510,
        "name": "Liepard",
        "form": null,
        "types": [
            "Dark"
        ],
        "stats": {
            "total": 446,
            "hp": 64,
            "attack": 88,
            "defense": 50,
            "spAtk": 88,
            "spDef": 50,
            "speed": 106
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/liepard.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/liepard.avif"
        }
    },
    {
        "id": 511,
        "name": "Pansage",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 316,
            "hp": 50,
            "attack": 53,
            "defense": 48,
            "spAtk": 53,
            "spDef": 48,
            "speed": 64
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pansage.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pansage.avif"
        }
    },
    {
        "id": 512,
        "name": "Simisage",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 498,
            "hp": 75,
            "attack": 98,
            "defense": 63,
            "spAtk": 98,
            "spDef": 63,
            "speed": 101
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/simisage.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/simisage.avif"
        }
    },
    {
        "id": 513,
        "name": "Pansear",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 316,
            "hp": 50,
            "attack": 53,
            "defense": 48,
            "spAtk": 53,
            "spDef": 48,
            "speed": 64
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pansear.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pansear.avif"
        }
    },
    {
        "id": 514,
        "name": "Simisear",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 498,
            "hp": 75,
            "attack": 98,
            "defense": 63,
            "spAtk": 98,
            "spDef": 63,
            "speed": 101
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/simisear.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/simisear.avif"
        }
    },
    {
        "id": 515,
        "name": "Panpour",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 316,
            "hp": 50,
            "attack": 53,
            "defense": 48,
            "spAtk": 53,
            "spDef": 48,
            "speed": 64
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/panpour.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/panpour.avif"
        }
    },
    {
        "id": 516,
        "name": "Simipour",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 498,
            "hp": 75,
            "attack": 98,
            "defense": 63,
            "spAtk": 98,
            "spDef": 63,
            "speed": 101
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/simipour.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/simipour.avif"
        }
    },
    {
        "id": 517,
        "name": "Munna",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 292,
            "hp": 76,
            "attack": 25,
            "defense": 45,
            "spAtk": 67,
            "spDef": 55,
            "speed": 24
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/munna.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/munna.avif"
        }
    },
    {
        "id": 518,
        "name": "Musharna",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 487,
            "hp": 116,
            "attack": 55,
            "defense": 85,
            "spAtk": 107,
            "spDef": 95,
            "speed": 29
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/musharna.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/musharna.avif"
        }
    },
    {
        "id": 519,
        "name": "Pidove",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 264,
            "hp": 50,
            "attack": 55,
            "defense": 50,
            "spAtk": 36,
            "spDef": 30,
            "speed": 43
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pidove.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pidove.avif"
        }
    },
    {
        "id": 520,
        "name": "Tranquill",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 358,
            "hp": 62,
            "attack": 77,
            "defense": 62,
            "spAtk": 50,
            "spDef": 42,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tranquill.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tranquill.avif"
        }
    },
    {
        "id": 521,
        "name": "Unfezant",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 488,
            "hp": 80,
            "attack": 115,
            "defense": 80,
            "spAtk": 65,
            "spDef": 55,
            "speed": 93
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/unfezant.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/unfezant.avif"
        }
    },
    {
        "id": 522,
        "name": "Blitzle",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 295,
            "hp": 45,
            "attack": 60,
            "defense": 32,
            "spAtk": 50,
            "spDef": 32,
            "speed": 76
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/blitzle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/blitzle.avif"
        }
    },
    {
        "id": 523,
        "name": "Zebstrika",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 497,
            "hp": 75,
            "attack": 100,
            "defense": 63,
            "spAtk": 80,
            "spDef": 63,
            "speed": 116
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zebstrika.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zebstrika.avif"
        }
    },
    {
        "id": 524,
        "name": "Roggenrola",
        "form": null,
        "types": [
            "Rock"
        ],
        "stats": {
            "total": 280,
            "hp": 55,
            "attack": 75,
            "defense": 85,
            "spAtk": 25,
            "spDef": 25,
            "speed": 15
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/roggenrola.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/roggenrola.avif"
        }
    },
    {
        "id": 525,
        "name": "Boldore",
        "form": null,
        "types": [
            "Rock"
        ],
        "stats": {
            "total": 390,
            "hp": 70,
            "attack": 105,
            "defense": 105,
            "spAtk": 50,
            "spDef": 40,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/boldore.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/boldore.avif"
        }
    },
    {
        "id": 526,
        "name": "Gigalith",
        "form": null,
        "types": [
            "Rock"
        ],
        "stats": {
            "total": 515,
            "hp": 85,
            "attack": 135,
            "defense": 130,
            "spAtk": 60,
            "spDef": 80,
            "speed": 25
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gigalith.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gigalith.avif"
        }
    },
    {
        "id": 527,
        "name": "Woobat",
        "form": null,
        "types": [
            "Psychic",
            "Flying"
        ],
        "stats": {
            "total": 323,
            "hp": 65,
            "attack": 45,
            "defense": 43,
            "spAtk": 55,
            "spDef": 43,
            "speed": 72
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/woobat.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/woobat.avif"
        }
    },
    {
        "id": 528,
        "name": "Swoobat",
        "form": null,
        "types": [
            "Psychic",
            "Flying"
        ],
        "stats": {
            "total": 425,
            "hp": 67,
            "attack": 57,
            "defense": 55,
            "spAtk": 77,
            "spDef": 55,
            "speed": 114
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/swoobat.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/swoobat.avif"
        }
    },
    {
        "id": 529,
        "name": "Drilbur",
        "form": null,
        "types": [
            "Ground"
        ],
        "stats": {
            "total": 328,
            "hp": 60,
            "attack": 85,
            "defense": 40,
            "spAtk": 30,
            "spDef": 45,
            "speed": 68
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/drilbur.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/drilbur.avif"
        }
    },
    {
        "id": 530,
        "name": "Excadrill",
        "form": null,
        "types": [
            "Ground",
            "Steel"
        ],
        "stats": {
            "total": 508,
            "hp": 110,
            "attack": 135,
            "defense": 60,
            "spAtk": 50,
            "spDef": 65,
            "speed": 88
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/excadrill.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/excadrill.avif"
        }
    },
    {
        "id": 531,
        "name": "Audino",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 445,
            "hp": 103,
            "attack": 60,
            "defense": 86,
            "spAtk": 60,
            "spDef": 86,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/audino.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/audino.avif"
        }
    },
    {
        "id": 531,
        "name": "Audino",
        "form": "Mega Audino",
        "types": [
            "Normal",
            "Fairy"
        ],
        "stats": {
            "total": 545,
            "hp": 103,
            "attack": 60,
            "defense": 126,
            "spAtk": 80,
            "spDef": 126,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/audino-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/audino-mega.avif"
        }
    },
    {
        "id": 532,
        "name": "Timburr",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 305,
            "hp": 75,
            "attack": 80,
            "defense": 55,
            "spAtk": 25,
            "spDef": 35,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/timburr.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/timburr.avif"
        }
    },
    {
        "id": 533,
        "name": "Gurdurr",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 405,
            "hp": 85,
            "attack": 105,
            "defense": 85,
            "spAtk": 40,
            "spDef": 50,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gurdurr.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gurdurr.avif"
        }
    },
    {
        "id": 534,
        "name": "Conkeldurr",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 505,
            "hp": 105,
            "attack": 140,
            "defense": 95,
            "spAtk": 55,
            "spDef": 65,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/conkeldurr.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/conkeldurr.avif"
        }
    },
    {
        "id": 535,
        "name": "Tympole",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 294,
            "hp": 50,
            "attack": 50,
            "defense": 40,
            "spAtk": 50,
            "spDef": 40,
            "speed": 64
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tympole.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tympole.avif"
        }
    },
    {
        "id": 536,
        "name": "Palpitoad",
        "form": null,
        "types": [
            "Water",
            "Ground"
        ],
        "stats": {
            "total": 384,
            "hp": 75,
            "attack": 65,
            "defense": 55,
            "spAtk": 65,
            "spDef": 55,
            "speed": 69
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/palpitoad.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/palpitoad.avif"
        }
    },
    {
        "id": 537,
        "name": "Seismitoad",
        "form": null,
        "types": [
            "Water",
            "Ground"
        ],
        "stats": {
            "total": 509,
            "hp": 105,
            "attack": 95,
            "defense": 75,
            "spAtk": 85,
            "spDef": 75,
            "speed": 74
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/seismitoad.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/seismitoad.avif"
        }
    },
    {
        "id": 538,
        "name": "Throh",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 465,
            "hp": 120,
            "attack": 100,
            "defense": 85,
            "spAtk": 30,
            "spDef": 85,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/throh.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/throh.avif"
        }
    },
    {
        "id": 539,
        "name": "Sawk",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 465,
            "hp": 75,
            "attack": 125,
            "defense": 75,
            "spAtk": 30,
            "spDef": 75,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sawk.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sawk.avif"
        }
    },
    {
        "id": 540,
        "name": "Sewaddle",
        "form": null,
        "types": [
            "Bug",
            "Grass"
        ],
        "stats": {
            "total": 310,
            "hp": 45,
            "attack": 53,
            "defense": 70,
            "spAtk": 40,
            "spDef": 60,
            "speed": 42
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sewaddle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sewaddle.avif"
        }
    },
    {
        "id": 541,
        "name": "Swadloon",
        "form": null,
        "types": [
            "Bug",
            "Grass"
        ],
        "stats": {
            "total": 380,
            "hp": 55,
            "attack": 63,
            "defense": 90,
            "spAtk": 50,
            "spDef": 80,
            "speed": 42
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/swadloon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/swadloon.avif"
        }
    },
    {
        "id": 542,
        "name": "Leavanny",
        "form": null,
        "types": [
            "Bug",
            "Grass"
        ],
        "stats": {
            "total": 500,
            "hp": 75,
            "attack": 103,
            "defense": 80,
            "spAtk": 70,
            "spDef": 80,
            "speed": 92
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/leavanny.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/leavanny.avif"
        }
    },
    {
        "id": 543,
        "name": "Venipede",
        "form": null,
        "types": [
            "Bug",
            "Poison"
        ],
        "stats": {
            "total": 260,
            "hp": 30,
            "attack": 45,
            "defense": 59,
            "spAtk": 30,
            "spDef": 39,
            "speed": 57
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/venipede.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/venipede.avif"
        }
    },
    {
        "id": 544,
        "name": "Whirlipede",
        "form": null,
        "types": [
            "Bug",
            "Poison"
        ],
        "stats": {
            "total": 360,
            "hp": 40,
            "attack": 55,
            "defense": 99,
            "spAtk": 40,
            "spDef": 79,
            "speed": 47
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/whirlipede.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/whirlipede.avif"
        }
    },
    {
        "id": 545,
        "name": "Scolipede",
        "form": null,
        "types": [
            "Bug",
            "Poison"
        ],
        "stats": {
            "total": 485,
            "hp": 60,
            "attack": 100,
            "defense": 89,
            "spAtk": 55,
            "spDef": 69,
            "speed": 112
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/scolipede.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/scolipede.avif"
        }
    },
    {
        "id": 546,
        "name": "Cottonee",
        "form": null,
        "types": [
            "Grass",
            "Fairy"
        ],
        "stats": {
            "total": 280,
            "hp": 40,
            "attack": 27,
            "defense": 60,
            "spAtk": 37,
            "spDef": 50,
            "speed": 66
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cottonee.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cottonee.avif"
        }
    },
    {
        "id": 547,
        "name": "Whimsicott",
        "form": null,
        "types": [
            "Grass",
            "Fairy"
        ],
        "stats": {
            "total": 480,
            "hp": 60,
            "attack": 67,
            "defense": 85,
            "spAtk": 77,
            "spDef": 75,
            "speed": 116
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/whimsicott.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/whimsicott.avif"
        }
    },
    {
        "id": 548,
        "name": "Petilil",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 280,
            "hp": 45,
            "attack": 35,
            "defense": 50,
            "spAtk": 70,
            "spDef": 50,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/petilil.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/petilil.avif"
        }
    },
    {
        "id": 549,
        "name": "Lilligant",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 480,
            "hp": 70,
            "attack": 60,
            "defense": 75,
            "spAtk": 110,
            "spDef": 75,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lilligant.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lilligant.avif"
        }
    },
    {
        "id": 549,
        "name": "Lilligant",
        "form": "Hisuian Lilligant",
        "types": [
            "Grass",
            "Fighting"
        ],
        "stats": {
            "total": 480,
            "hp": 70,
            "attack": 105,
            "defense": 75,
            "spAtk": 50,
            "spDef": 75,
            "speed": 105
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lilligant-hisuian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lilligant-hisuian.avif"
        }
    },
    {
        "id": 550,
        "name": "Basculin",
        "form": "Red-Striped Form",
        "types": [
            "Water"
        ],
        "stats": {
            "total": 460,
            "hp": 70,
            "attack": 92,
            "defense": 65,
            "spAtk": 80,
            "spDef": 55,
            "speed": 98
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/basculin-red-striped.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/basculin-red-striped.avif"
        }
    },
    {
        "id": 550,
        "name": "Basculin",
        "form": "Blue-Striped Form",
        "types": [
            "Water"
        ],
        "stats": {
            "total": 460,
            "hp": 70,
            "attack": 92,
            "defense": 65,
            "spAtk": 80,
            "spDef": 55,
            "speed": 98
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/basculin-blue-striped.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/basculin-blue-striped.avif"
        }
    },
    {
        "id": 550,
        "name": "Basculin",
        "form": "White-Striped Form",
        "types": [
            "Water"
        ],
        "stats": {
            "total": 460,
            "hp": 70,
            "attack": 92,
            "defense": 65,
            "spAtk": 80,
            "spDef": 55,
            "speed": 98
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/basculin-white-striped.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/basculin-white-striped.avif"
        }
    },
    {
        "id": 551,
        "name": "Sandile",
        "form": null,
        "types": [
            "Ground",
            "Dark"
        ],
        "stats": {
            "total": 292,
            "hp": 50,
            "attack": 72,
            "defense": 35,
            "spAtk": 35,
            "spDef": 35,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sandile.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sandile.avif"
        }
    },
    {
        "id": 552,
        "name": "Krokorok",
        "form": null,
        "types": [
            "Ground",
            "Dark"
        ],
        "stats": {
            "total": 351,
            "hp": 60,
            "attack": 82,
            "defense": 45,
            "spAtk": 45,
            "spDef": 45,
            "speed": 74
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/krokorok.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/krokorok.avif"
        }
    },
    {
        "id": 553,
        "name": "Krookodile",
        "form": null,
        "types": [
            "Ground",
            "Dark"
        ],
        "stats": {
            "total": 519,
            "hp": 95,
            "attack": 117,
            "defense": 80,
            "spAtk": 65,
            "spDef": 70,
            "speed": 92
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/krookodile.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/krookodile.avif"
        }
    },
    {
        "id": 554,
        "name": "Darumaka",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 315,
            "hp": 70,
            "attack": 90,
            "defense": 45,
            "spAtk": 15,
            "spDef": 45,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/darumaka.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/darumaka.avif"
        }
    },
    {
        "id": 554,
        "name": "Darumaka",
        "form": "Galarian Darumaka",
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 315,
            "hp": 70,
            "attack": 90,
            "defense": 45,
            "spAtk": 15,
            "spDef": 45,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/darumaka-galarian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/darumaka-galarian.avif"
        }
    },
    {
        "id": 555,
        "name": "Darmanitan",
        "form": "Standard Mode",
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 480,
            "hp": 105,
            "attack": 140,
            "defense": 55,
            "spAtk": 30,
            "spDef": 55,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/darmanitan-standard.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/darmanitan-standard.avif"
        }
    },
    {
        "id": 555,
        "name": "Darmanitan",
        "form": "Zen Mode",
        "types": [
            "Fire",
            "Psychic"
        ],
        "stats": {
            "total": 540,
            "hp": 105,
            "attack": 30,
            "defense": 105,
            "spAtk": 140,
            "spDef": 105,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/darmanitan-zen.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/darmanitan-zen.avif"
        }
    },
    {
        "id": 555,
        "name": "Darmanitan",
        "form": "Galarian Standard Mode",
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 480,
            "hp": 105,
            "attack": 140,
            "defense": 55,
            "spAtk": 30,
            "spDef": 55,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/darmanitan-galarian-standard.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/darmanitan-galarian-standard.avif"
        }
    },
    {
        "id": 555,
        "name": "Darmanitan",
        "form": "Galarian Zen Mode",
        "types": [
            "Ice",
            "Fire"
        ],
        "stats": {
            "total": 540,
            "hp": 105,
            "attack": 160,
            "defense": 55,
            "spAtk": 30,
            "spDef": 55,
            "speed": 135
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/darmanitan-galarian-zen.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/darmanitan-galarian-zen.avif"
        }
    },
    {
        "id": 556,
        "name": "Maractus",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 461,
            "hp": 75,
            "attack": 86,
            "defense": 67,
            "spAtk": 106,
            "spDef": 67,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/maractus.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/maractus.avif"
        }
    },
    {
        "id": 557,
        "name": "Dwebble",
        "form": null,
        "types": [
            "Bug",
            "Rock"
        ],
        "stats": {
            "total": 325,
            "hp": 50,
            "attack": 65,
            "defense": 85,
            "spAtk": 35,
            "spDef": 35,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dwebble.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dwebble.avif"
        }
    },
    {
        "id": 558,
        "name": "Crustle",
        "form": null,
        "types": [
            "Bug",
            "Rock"
        ],
        "stats": {
            "total": 485,
            "hp": 70,
            "attack": 105,
            "defense": 125,
            "spAtk": 65,
            "spDef": 75,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/crustle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/crustle.avif"
        }
    },
    {
        "id": 559,
        "name": "Scraggy",
        "form": null,
        "types": [
            "Dark",
            "Fighting"
        ],
        "stats": {
            "total": 348,
            "hp": 50,
            "attack": 75,
            "defense": 70,
            "spAtk": 35,
            "spDef": 70,
            "speed": 48
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/scraggy.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/scraggy.avif"
        }
    },
    {
        "id": 560,
        "name": "Scrafty",
        "form": null,
        "types": [
            "Dark",
            "Fighting"
        ],
        "stats": {
            "total": 488,
            "hp": 65,
            "attack": 90,
            "defense": 115,
            "spAtk": 45,
            "spDef": 115,
            "speed": 58
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/scrafty.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/scrafty.avif"
        }
    },
    {
        "id": 561,
        "name": "Sigilyph",
        "form": null,
        "types": [
            "Psychic",
            "Flying"
        ],
        "stats": {
            "total": 490,
            "hp": 72,
            "attack": 58,
            "defense": 80,
            "spAtk": 103,
            "spDef": 80,
            "speed": 97
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sigilyph.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sigilyph.avif"
        }
    },
    {
        "id": 562,
        "name": "Yamask",
        "form": null,
        "types": [
            "Ghost"
        ],
        "stats": {
            "total": 303,
            "hp": 38,
            "attack": 30,
            "defense": 85,
            "spAtk": 55,
            "spDef": 65,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/yamask.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/yamask.avif"
        }
    },
    {
        "id": 562,
        "name": "Yamask",
        "form": "Galarian Yamask",
        "types": [
            "Ground",
            "Ghost"
        ],
        "stats": {
            "total": 303,
            "hp": 38,
            "attack": 55,
            "defense": 85,
            "spAtk": 30,
            "spDef": 65,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/yamask-galarian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/yamask-galarian.avif"
        }
    },
    {
        "id": 563,
        "name": "Cofagrigus",
        "form": null,
        "types": [
            "Ghost"
        ],
        "stats": {
            "total": 483,
            "hp": 58,
            "attack": 50,
            "defense": 145,
            "spAtk": 95,
            "spDef": 105,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cofagrigus.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cofagrigus.avif"
        }
    },
    {
        "id": 564,
        "name": "Tirtouga",
        "form": null,
        "types": [
            "Water",
            "Rock"
        ],
        "stats": {
            "total": 355,
            "hp": 54,
            "attack": 78,
            "defense": 103,
            "spAtk": 53,
            "spDef": 45,
            "speed": 22
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tirtouga.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tirtouga.avif"
        }
    },
    {
        "id": 565,
        "name": "Carracosta",
        "form": null,
        "types": [
            "Water",
            "Rock"
        ],
        "stats": {
            "total": 495,
            "hp": 74,
            "attack": 108,
            "defense": 133,
            "spAtk": 83,
            "spDef": 65,
            "speed": 32
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/carracosta.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/carracosta.avif"
        }
    },
    {
        "id": 566,
        "name": "Archen",
        "form": null,
        "types": [
            "Rock",
            "Flying"
        ],
        "stats": {
            "total": 401,
            "hp": 55,
            "attack": 112,
            "defense": 45,
            "spAtk": 74,
            "spDef": 45,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/archen.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/archen.avif"
        }
    },
    {
        "id": 567,
        "name": "Archeops",
        "form": null,
        "types": [
            "Rock",
            "Flying"
        ],
        "stats": {
            "total": 567,
            "hp": 75,
            "attack": 140,
            "defense": 65,
            "spAtk": 112,
            "spDef": 65,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/archeops.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/archeops.avif"
        }
    },
    {
        "id": 568,
        "name": "Trubbish",
        "form": null,
        "types": [
            "Poison"
        ],
        "stats": {
            "total": 329,
            "hp": 50,
            "attack": 50,
            "defense": 62,
            "spAtk": 40,
            "spDef": 62,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/trubbish.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/trubbish.avif"
        }
    },
    {
        "id": 569,
        "name": "Garbodor",
        "form": null,
        "types": [
            "Poison"
        ],
        "stats": {
            "total": 474,
            "hp": 80,
            "attack": 95,
            "defense": 82,
            "spAtk": 60,
            "spDef": 82,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/garbodor.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/garbodor.avif"
        }
    },
    {
        "id": 570,
        "name": "Zorua",
        "form": null,
        "types": [
            "Dark"
        ],
        "stats": {
            "total": 330,
            "hp": 40,
            "attack": 65,
            "defense": 40,
            "spAtk": 80,
            "spDef": 40,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zorua.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zorua.avif"
        }
    },
    {
        "id": 570,
        "name": "Zorua",
        "form": "Hisuian Zorua",
        "types": [
            "Normal",
            "Ghost"
        ],
        "stats": {
            "total": 330,
            "hp": 35,
            "attack": 60,
            "defense": 40,
            "spAtk": 85,
            "spDef": 40,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zorua-hisuian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zorua-hisuian.avif"
        }
    },
    {
        "id": 571,
        "name": "Zoroark",
        "form": null,
        "types": [
            "Dark"
        ],
        "stats": {
            "total": 510,
            "hp": 60,
            "attack": 105,
            "defense": 60,
            "spAtk": 120,
            "spDef": 60,
            "speed": 105
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zoroark.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zoroark.avif"
        }
    },
    {
        "id": 571,
        "name": "Zoroark",
        "form": "Hisuian Zoroark",
        "types": [
            "Normal",
            "Ghost"
        ],
        "stats": {
            "total": 510,
            "hp": 55,
            "attack": 100,
            "defense": 60,
            "spAtk": 125,
            "spDef": 60,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zoroark-hisuian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zoroark-hisuian.avif"
        }
    },
    {
        "id": 572,
        "name": "Minccino",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 300,
            "hp": 55,
            "attack": 50,
            "defense": 40,
            "spAtk": 40,
            "spDef": 40,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/minccino.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/minccino.avif"
        }
    },
    {
        "id": 573,
        "name": "Cinccino",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 470,
            "hp": 75,
            "attack": 95,
            "defense": 60,
            "spAtk": 65,
            "spDef": 60,
            "speed": 115
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cinccino.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cinccino.avif"
        }
    },
    {
        "id": 574,
        "name": "Gothita",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 290,
            "hp": 45,
            "attack": 30,
            "defense": 50,
            "spAtk": 55,
            "spDef": 65,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gothita.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gothita.avif"
        }
    },
    {
        "id": 575,
        "name": "Gothorita",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 390,
            "hp": 60,
            "attack": 45,
            "defense": 70,
            "spAtk": 75,
            "spDef": 85,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gothorita.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gothorita.avif"
        }
    },
    {
        "id": 576,
        "name": "Gothitelle",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 490,
            "hp": 70,
            "attack": 55,
            "defense": 95,
            "spAtk": 95,
            "spDef": 110,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gothitelle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gothitelle.avif"
        }
    },
    {
        "id": 577,
        "name": "Solosis",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 290,
            "hp": 45,
            "attack": 30,
            "defense": 40,
            "spAtk": 105,
            "spDef": 50,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/solosis.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/solosis.avif"
        }
    },
    {
        "id": 578,
        "name": "Duosion",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 370,
            "hp": 65,
            "attack": 40,
            "defense": 50,
            "spAtk": 125,
            "spDef": 60,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/duosion.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/duosion.avif"
        }
    },
    {
        "id": 579,
        "name": "Reuniclus",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 490,
            "hp": 110,
            "attack": 65,
            "defense": 75,
            "spAtk": 125,
            "spDef": 85,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/reuniclus.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/reuniclus.avif"
        }
    },
    {
        "id": 580,
        "name": "Ducklett",
        "form": null,
        "types": [
            "Water",
            "Flying"
        ],
        "stats": {
            "total": 305,
            "hp": 62,
            "attack": 44,
            "defense": 50,
            "spAtk": 44,
            "spDef": 50,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ducklett.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ducklett.avif"
        }
    },
    {
        "id": 581,
        "name": "Swanna",
        "form": null,
        "types": [
            "Water",
            "Flying"
        ],
        "stats": {
            "total": 473,
            "hp": 75,
            "attack": 87,
            "defense": 63,
            "spAtk": 87,
            "spDef": 63,
            "speed": 98
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/swanna.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/swanna.avif"
        }
    },
    {
        "id": 582,
        "name": "Vanillite",
        "form": null,
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 305,
            "hp": 36,
            "attack": 50,
            "defense": 50,
            "spAtk": 65,
            "spDef": 60,
            "speed": 44
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/vanillite.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/vanillite.avif"
        }
    },
    {
        "id": 583,
        "name": "Vanillish",
        "form": null,
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 395,
            "hp": 51,
            "attack": 65,
            "defense": 65,
            "spAtk": 80,
            "spDef": 75,
            "speed": 59
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/vanillish.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/vanillish.avif"
        }
    },
    {
        "id": 584,
        "name": "Vanilluxe",
        "form": null,
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 535,
            "hp": 71,
            "attack": 95,
            "defense": 85,
            "spAtk": 110,
            "spDef": 95,
            "speed": 79
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/vanilluxe.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/vanilluxe.avif"
        }
    },
    {
        "id": 585,
        "name": "Deerling",
        "form": null,
        "types": [
            "Normal",
            "Grass"
        ],
        "stats": {
            "total": 335,
            "hp": 60,
            "attack": 60,
            "defense": 50,
            "spAtk": 40,
            "spDef": 50,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/deerling.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/deerling.avif"
        }
    },
    {
        "id": 586,
        "name": "Sawsbuck",
        "form": null,
        "types": [
            "Normal",
            "Grass"
        ],
        "stats": {
            "total": 475,
            "hp": 80,
            "attack": 100,
            "defense": 70,
            "spAtk": 60,
            "spDef": 70,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sawsbuck.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sawsbuck.avif"
        }
    },
    {
        "id": 587,
        "name": "Emolga",
        "form": null,
        "types": [
            "Electric",
            "Flying"
        ],
        "stats": {
            "total": 428,
            "hp": 55,
            "attack": 75,
            "defense": 60,
            "spAtk": 75,
            "spDef": 60,
            "speed": 103
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/emolga.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/emolga.avif"
        }
    },
    {
        "id": 588,
        "name": "Karrablast",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 315,
            "hp": 50,
            "attack": 75,
            "defense": 45,
            "spAtk": 40,
            "spDef": 45,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/karrablast.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/karrablast.avif"
        }
    },
    {
        "id": 589,
        "name": "Escavalier",
        "form": null,
        "types": [
            "Bug",
            "Steel"
        ],
        "stats": {
            "total": 495,
            "hp": 70,
            "attack": 135,
            "defense": 105,
            "spAtk": 60,
            "spDef": 105,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/escavalier.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/escavalier.avif"
        }
    },
    {
        "id": 590,
        "name": "Foongus",
        "form": null,
        "types": [
            "Grass",
            "Poison"
        ],
        "stats": {
            "total": 294,
            "hp": 69,
            "attack": 55,
            "defense": 45,
            "spAtk": 55,
            "spDef": 55,
            "speed": 15
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/foongus.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/foongus.avif"
        }
    },
    {
        "id": 591,
        "name": "Amoonguss",
        "form": null,
        "types": [
            "Grass",
            "Poison"
        ],
        "stats": {
            "total": 464,
            "hp": 114,
            "attack": 85,
            "defense": 70,
            "spAtk": 85,
            "spDef": 80,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/amoonguss.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/amoonguss.avif"
        }
    },
    {
        "id": 592,
        "name": "Frillish",
        "form": null,
        "types": [
            "Water",
            "Ghost"
        ],
        "stats": {
            "total": 335,
            "hp": 55,
            "attack": 40,
            "defense": 50,
            "spAtk": 65,
            "spDef": 85,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/frillish.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/frillish.avif"
        }
    },
    {
        "id": 593,
        "name": "Jellicent",
        "form": null,
        "types": [
            "Water",
            "Ghost"
        ],
        "stats": {
            "total": 480,
            "hp": 100,
            "attack": 60,
            "defense": 70,
            "spAtk": 85,
            "spDef": 105,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/jellicent.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/jellicent.avif"
        }
    },
    {
        "id": 594,
        "name": "Alomomola",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 470,
            "hp": 165,
            "attack": 75,
            "defense": 80,
            "spAtk": 40,
            "spDef": 45,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/alomomola.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/alomomola.avif"
        }
    },
    {
        "id": 595,
        "name": "Joltik",
        "form": null,
        "types": [
            "Bug",
            "Electric"
        ],
        "stats": {
            "total": 319,
            "hp": 50,
            "attack": 47,
            "defense": 50,
            "spAtk": 57,
            "spDef": 50,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/joltik.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/joltik.avif"
        }
    },
    {
        "id": 596,
        "name": "Galvantula",
        "form": null,
        "types": [
            "Bug",
            "Electric"
        ],
        "stats": {
            "total": 472,
            "hp": 70,
            "attack": 77,
            "defense": 60,
            "spAtk": 97,
            "spDef": 60,
            "speed": 108
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/galvantula.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/galvantula.avif"
        }
    },
    {
        "id": 597,
        "name": "Ferroseed",
        "form": null,
        "types": [
            "Grass",
            "Steel"
        ],
        "stats": {
            "total": 305,
            "hp": 44,
            "attack": 50,
            "defense": 91,
            "spAtk": 24,
            "spDef": 86,
            "speed": 10
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ferroseed.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ferroseed.avif"
        }
    },
    {
        "id": 598,
        "name": "Ferrothorn",
        "form": null,
        "types": [
            "Grass",
            "Steel"
        ],
        "stats": {
            "total": 489,
            "hp": 74,
            "attack": 94,
            "defense": 131,
            "spAtk": 54,
            "spDef": 116,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ferrothorn.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ferrothorn.avif"
        }
    },
    {
        "id": 599,
        "name": "Klink",
        "form": null,
        "types": [
            "Steel"
        ],
        "stats": {
            "total": 300,
            "hp": 40,
            "attack": 55,
            "defense": 70,
            "spAtk": 45,
            "spDef": 60,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/klink.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/klink.avif"
        }
    },
    {
        "id": 600,
        "name": "Klang",
        "form": null,
        "types": [
            "Steel"
        ],
        "stats": {
            "total": 440,
            "hp": 60,
            "attack": 80,
            "defense": 95,
            "spAtk": 70,
            "spDef": 85,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/klang.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/klang.avif"
        }
    },
    {
        "id": 601,
        "name": "Klinklang",
        "form": null,
        "types": [
            "Steel"
        ],
        "stats": {
            "total": 520,
            "hp": 60,
            "attack": 100,
            "defense": 115,
            "spAtk": 70,
            "spDef": 85,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/klinklang.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/klinklang.avif"
        }
    },
    {
        "id": 602,
        "name": "Tynamo",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 275,
            "hp": 35,
            "attack": 55,
            "defense": 40,
            "spAtk": 45,
            "spDef": 40,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tynamo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tynamo.avif"
        }
    },
    {
        "id": 603,
        "name": "Eelektrik",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 405,
            "hp": 65,
            "attack": 85,
            "defense": 70,
            "spAtk": 75,
            "spDef": 70,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/eelektrik.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/eelektrik.avif"
        }
    },
    {
        "id": 604,
        "name": "Eelektross",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 515,
            "hp": 85,
            "attack": 115,
            "defense": 80,
            "spAtk": 105,
            "spDef": 80,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/eelektross.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/eelektross.avif"
        }
    },
    {
        "id": 605,
        "name": "Elgyem",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 335,
            "hp": 55,
            "attack": 55,
            "defense": 55,
            "spAtk": 85,
            "spDef": 55,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/elgyem.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/elgyem.avif"
        }
    },
    {
        "id": 606,
        "name": "Beheeyem",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 485,
            "hp": 75,
            "attack": 75,
            "defense": 75,
            "spAtk": 125,
            "spDef": 95,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/beheeyem.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/beheeyem.avif"
        }
    },
    {
        "id": 607,
        "name": "Litwick",
        "form": null,
        "types": [
            "Ghost",
            "Fire"
        ],
        "stats": {
            "total": 275,
            "hp": 50,
            "attack": 30,
            "defense": 55,
            "spAtk": 65,
            "spDef": 55,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/litwick.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/litwick.avif"
        }
    },
    {
        "id": 608,
        "name": "Lampent",
        "form": null,
        "types": [
            "Ghost",
            "Fire"
        ],
        "stats": {
            "total": 370,
            "hp": 60,
            "attack": 40,
            "defense": 60,
            "spAtk": 95,
            "spDef": 60,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lampent.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lampent.avif"
        }
    },
    {
        "id": 609,
        "name": "Chandelure",
        "form": null,
        "types": [
            "Ghost",
            "Fire"
        ],
        "stats": {
            "total": 520,
            "hp": 60,
            "attack": 55,
            "defense": 90,
            "spAtk": 145,
            "spDef": 90,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/chandelure.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/chandelure.avif"
        }
    },
    {
        "id": 610,
        "name": "Axew",
        "form": null,
        "types": [
            "Dragon"
        ],
        "stats": {
            "total": 320,
            "hp": 46,
            "attack": 87,
            "defense": 60,
            "spAtk": 30,
            "spDef": 40,
            "speed": 57
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/axew.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/axew.avif"
        }
    },
    {
        "id": 611,
        "name": "Fraxure",
        "form": null,
        "types": [
            "Dragon"
        ],
        "stats": {
            "total": 410,
            "hp": 66,
            "attack": 117,
            "defense": 70,
            "spAtk": 40,
            "spDef": 50,
            "speed": 67
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/fraxure.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/fraxure.avif"
        }
    },
    {
        "id": 612,
        "name": "Haxorus",
        "form": null,
        "types": [
            "Dragon"
        ],
        "stats": {
            "total": 540,
            "hp": 76,
            "attack": 147,
            "defense": 90,
            "spAtk": 60,
            "spDef": 70,
            "speed": 97
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/haxorus.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/haxorus.avif"
        }
    },
    {
        "id": 613,
        "name": "Cubchoo",
        "form": null,
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 305,
            "hp": 55,
            "attack": 70,
            "defense": 40,
            "spAtk": 60,
            "spDef": 40,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cubchoo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cubchoo.avif"
        }
    },
    {
        "id": 614,
        "name": "Beartic",
        "form": null,
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 505,
            "hp": 95,
            "attack": 130,
            "defense": 80,
            "spAtk": 70,
            "spDef": 80,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/beartic.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/beartic.avif"
        }
    },
    {
        "id": 615,
        "name": "Cryogonal",
        "form": null,
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 515,
            "hp": 80,
            "attack": 50,
            "defense": 50,
            "spAtk": 95,
            "spDef": 135,
            "speed": 105
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cryogonal.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cryogonal.avif"
        }
    },
    {
        "id": 616,
        "name": "Shelmet",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 305,
            "hp": 50,
            "attack": 40,
            "defense": 85,
            "spAtk": 40,
            "spDef": 65,
            "speed": 25
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/shelmet.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/shelmet.avif"
        }
    },
    {
        "id": 617,
        "name": "Accelgor",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 495,
            "hp": 80,
            "attack": 70,
            "defense": 40,
            "spAtk": 100,
            "spDef": 60,
            "speed": 145
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/accelgor.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/accelgor.avif"
        }
    },
    {
        "id": 618,
        "name": "Stunfisk",
        "form": null,
        "types": [
            "Ground",
            "Electric"
        ],
        "stats": {
            "total": 471,
            "hp": 109,
            "attack": 66,
            "defense": 84,
            "spAtk": 81,
            "spDef": 99,
            "speed": 32
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/stunfisk.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/stunfisk.avif"
        }
    },
    {
        "id": 618,
        "name": "Stunfisk",
        "form": "Galarian Stunfisk",
        "types": [
            "Ground",
            "Steel"
        ],
        "stats": {
            "total": 471,
            "hp": 109,
            "attack": 81,
            "defense": 99,
            "spAtk": 66,
            "spDef": 84,
            "speed": 32
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/stunfisk-galarian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/stunfisk-galarian.avif"
        }
    },
    {
        "id": 619,
        "name": "Mienfoo",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 350,
            "hp": 45,
            "attack": 85,
            "defense": 50,
            "spAtk": 55,
            "spDef": 50,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mienfoo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mienfoo.avif"
        }
    },
    {
        "id": 620,
        "name": "Mienshao",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 510,
            "hp": 65,
            "attack": 125,
            "defense": 60,
            "spAtk": 95,
            "spDef": 60,
            "speed": 105
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mienshao.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mienshao.avif"
        }
    },
    {
        "id": 621,
        "name": "Druddigon",
        "form": null,
        "types": [
            "Dragon"
        ],
        "stats": {
            "total": 485,
            "hp": 77,
            "attack": 120,
            "defense": 90,
            "spAtk": 60,
            "spDef": 90,
            "speed": 48
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/druddigon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/druddigon.avif"
        }
    },
    {
        "id": 622,
        "name": "Golett",
        "form": null,
        "types": [
            "Ground",
            "Ghost"
        ],
        "stats": {
            "total": 303,
            "hp": 59,
            "attack": 74,
            "defense": 50,
            "spAtk": 35,
            "spDef": 50,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/golett.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/golett.avif"
        }
    },
    {
        "id": 623,
        "name": "Golurk",
        "form": null,
        "types": [
            "Ground",
            "Ghost"
        ],
        "stats": {
            "total": 483,
            "hp": 89,
            "attack": 124,
            "defense": 80,
            "spAtk": 55,
            "spDef": 80,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/golurk.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/golurk.avif"
        }
    },
    {
        "id": 624,
        "name": "Pawniard",
        "form": null,
        "types": [
            "Dark",
            "Steel"
        ],
        "stats": {
            "total": 340,
            "hp": 45,
            "attack": 85,
            "defense": 70,
            "spAtk": 40,
            "spDef": 40,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pawniard.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pawniard.avif"
        }
    },
    {
        "id": 625,
        "name": "Bisharp",
        "form": null,
        "types": [
            "Dark",
            "Steel"
        ],
        "stats": {
            "total": 490,
            "hp": 65,
            "attack": 125,
            "defense": 100,
            "spAtk": 60,
            "spDef": 70,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bisharp.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bisharp.avif"
        }
    },
    {
        "id": 626,
        "name": "Bouffalant",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 490,
            "hp": 95,
            "attack": 110,
            "defense": 95,
            "spAtk": 40,
            "spDef": 95,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bouffalant.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bouffalant.avif"
        }
    },
    {
        "id": 627,
        "name": "Rufflet",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 350,
            "hp": 70,
            "attack": 83,
            "defense": 50,
            "spAtk": 37,
            "spDef": 50,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rufflet.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rufflet.avif"
        }
    },
    {
        "id": 628,
        "name": "Braviary",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 510,
            "hp": 100,
            "attack": 123,
            "defense": 75,
            "spAtk": 57,
            "spDef": 75,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/braviary.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/braviary.avif"
        }
    },
    {
        "id": 628,
        "name": "Braviary",
        "form": "Hisuian Braviary",
        "types": [
            "Psychic",
            "Flying"
        ],
        "stats": {
            "total": 510,
            "hp": 110,
            "attack": 83,
            "defense": 70,
            "spAtk": 112,
            "spDef": 70,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/braviary-hisuian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/braviary-hisuian.avif"
        }
    },
    {
        "id": 629,
        "name": "Vullaby",
        "form": null,
        "types": [
            "Dark",
            "Flying"
        ],
        "stats": {
            "total": 370,
            "hp": 70,
            "attack": 55,
            "defense": 75,
            "spAtk": 45,
            "spDef": 65,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/vullaby.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/vullaby.avif"
        }
    },
    {
        "id": 630,
        "name": "Mandibuzz",
        "form": null,
        "types": [
            "Dark",
            "Flying"
        ],
        "stats": {
            "total": 510,
            "hp": 110,
            "attack": 65,
            "defense": 105,
            "spAtk": 55,
            "spDef": 95,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mandibuzz.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mandibuzz.avif"
        }
    },
    {
        "id": 631,
        "name": "Heatmor",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 484,
            "hp": 85,
            "attack": 97,
            "defense": 66,
            "spAtk": 105,
            "spDef": 66,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/heatmor.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/heatmor.avif"
        }
    },
    {
        "id": 632,
        "name": "Durant",
        "form": null,
        "types": [
            "Bug",
            "Steel"
        ],
        "stats": {
            "total": 484,
            "hp": 58,
            "attack": 109,
            "defense": 112,
            "spAtk": 48,
            "spDef": 48,
            "speed": 109
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/durant.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/durant.avif"
        }
    },
    {
        "id": 633,
        "name": "Deino",
        "form": null,
        "types": [
            "Dark",
            "Dragon"
        ],
        "stats": {
            "total": 300,
            "hp": 52,
            "attack": 65,
            "defense": 50,
            "spAtk": 45,
            "spDef": 50,
            "speed": 38
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/deino.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/deino.avif"
        }
    },
    {
        "id": 634,
        "name": "Zweilous",
        "form": null,
        "types": [
            "Dark",
            "Dragon"
        ],
        "stats": {
            "total": 420,
            "hp": 72,
            "attack": 85,
            "defense": 70,
            "spAtk": 65,
            "spDef": 70,
            "speed": 58
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zweilous.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zweilous.avif"
        }
    },
    {
        "id": 635,
        "name": "Hydreigon",
        "form": null,
        "types": [
            "Dark",
            "Dragon"
        ],
        "stats": {
            "total": 600,
            "hp": 92,
            "attack": 105,
            "defense": 90,
            "spAtk": 125,
            "spDef": 90,
            "speed": 98
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/hydreigon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/hydreigon.avif"
        }
    },
    {
        "id": 636,
        "name": "Larvesta",
        "form": null,
        "types": [
            "Bug",
            "Fire"
        ],
        "stats": {
            "total": 360,
            "hp": 55,
            "attack": 85,
            "defense": 55,
            "spAtk": 50,
            "spDef": 55,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/larvesta.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/larvesta.avif"
        }
    },
    {
        "id": 637,
        "name": "Volcarona",
        "form": null,
        "types": [
            "Bug",
            "Fire"
        ],
        "stats": {
            "total": 550,
            "hp": 85,
            "attack": 60,
            "defense": 65,
            "spAtk": 135,
            "spDef": 105,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/volcarona.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/volcarona.avif"
        }
    },
    {
        "id": 638,
        "name": "Cobalion",
        "form": null,
        "types": [
            "Steel",
            "Fighting"
        ],
        "stats": {
            "total": 580,
            "hp": 91,
            "attack": 90,
            "defense": 129,
            "spAtk": 90,
            "spDef": 72,
            "speed": 108
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cobalion.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cobalion.avif"
        }
    },
    {
        "id": 639,
        "name": "Terrakion",
        "form": null,
        "types": [
            "Rock",
            "Fighting"
        ],
        "stats": {
            "total": 580,
            "hp": 91,
            "attack": 129,
            "defense": 90,
            "spAtk": 72,
            "spDef": 90,
            "speed": 108
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/terrakion.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/terrakion.avif"
        }
    },
    {
        "id": 640,
        "name": "Virizion",
        "form": null,
        "types": [
            "Grass",
            "Fighting"
        ],
        "stats": {
            "total": 580,
            "hp": 91,
            "attack": 90,
            "defense": 72,
            "spAtk": 90,
            "spDef": 129,
            "speed": 108
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/virizion.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/virizion.avif"
        }
    },
    {
        "id": 641,
        "name": "Tornadus",
        "form": "Incarnate Forme",
        "types": [
            "Flying"
        ],
        "stats": {
            "total": 580,
            "hp": 79,
            "attack": 115,
            "defense": 70,
            "spAtk": 125,
            "spDef": 80,
            "speed": 111
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tornadus-incarnate.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tornadus-incarnate.avif"
        }
    },
    {
        "id": 641,
        "name": "Tornadus",
        "form": "Therian Forme",
        "types": [
            "Flying"
        ],
        "stats": {
            "total": 580,
            "hp": 79,
            "attack": 100,
            "defense": 80,
            "spAtk": 110,
            "spDef": 90,
            "speed": 121
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tornadus-therian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tornadus-therian.avif"
        }
    },
    {
        "id": 642,
        "name": "Thundurus",
        "form": "Incarnate Forme",
        "types": [
            "Electric",
            "Flying"
        ],
        "stats": {
            "total": 580,
            "hp": 79,
            "attack": 115,
            "defense": 70,
            "spAtk": 125,
            "spDef": 80,
            "speed": 111
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/thundurus-incarnate.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/thundurus-incarnate.avif"
        }
    },
    {
        "id": 642,
        "name": "Thundurus",
        "form": "Therian Forme",
        "types": [
            "Electric",
            "Flying"
        ],
        "stats": {
            "total": 580,
            "hp": 79,
            "attack": 105,
            "defense": 70,
            "spAtk": 145,
            "spDef": 80,
            "speed": 101
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/thundurus-therian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/thundurus-therian.avif"
        }
    },
    {
        "id": 643,
        "name": "Reshiram",
        "form": null,
        "types": [
            "Dragon",
            "Fire"
        ],
        "stats": {
            "total": 680,
            "hp": 100,
            "attack": 120,
            "defense": 100,
            "spAtk": 150,
            "spDef": 120,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/reshiram.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/reshiram.avif"
        }
    },
    {
        "id": 644,
        "name": "Zekrom",
        "form": null,
        "types": [
            "Dragon",
            "Electric"
        ],
        "stats": {
            "total": 680,
            "hp": 100,
            "attack": 150,
            "defense": 120,
            "spAtk": 120,
            "spDef": 100,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zekrom.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zekrom.avif"
        }
    },
    {
        "id": 645,
        "name": "Landorus",
        "form": "Incarnate Forme",
        "types": [
            "Ground",
            "Flying"
        ],
        "stats": {
            "total": 600,
            "hp": 89,
            "attack": 125,
            "defense": 90,
            "spAtk": 115,
            "spDef": 80,
            "speed": 101
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/landorus-incarnate.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/landorus-incarnate.avif"
        }
    },
    {
        "id": 645,
        "name": "Landorus",
        "form": "Therian Forme",
        "types": [
            "Ground",
            "Flying"
        ],
        "stats": {
            "total": 600,
            "hp": 89,
            "attack": 145,
            "defense": 90,
            "spAtk": 105,
            "spDef": 80,
            "speed": 91
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/landorus-therian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/landorus-therian.avif"
        }
    },
    {
        "id": 646,
        "name": "Kyurem",
        "form": null,
        "types": [
            "Dragon",
            "Ice"
        ],
        "stats": {
            "total": 660,
            "hp": 125,
            "attack": 130,
            "defense": 90,
            "spAtk": 130,
            "spDef": 90,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kyurem.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kyurem.avif"
        }
    },
    {
        "id": 646,
        "name": "Kyurem",
        "form": "White Kyurem",
        "types": [
            "Dragon",
            "Ice"
        ],
        "stats": {
            "total": 700,
            "hp": 125,
            "attack": 120,
            "defense": 90,
            "spAtk": 170,
            "spDef": 100,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kyurem-white.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kyurem-white.avif"
        }
    },
    {
        "id": 646,
        "name": "Kyurem",
        "form": "Black Kyurem",
        "types": [
            "Dragon",
            "Ice"
        ],
        "stats": {
            "total": 700,
            "hp": 125,
            "attack": 170,
            "defense": 100,
            "spAtk": 120,
            "spDef": 90,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kyurem-black.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kyurem-black.avif"
        }
    },
    {
        "id": 647,
        "name": "Keldeo",
        "form": "Ordinary Form",
        "types": [
            "Water",
            "Fighting"
        ],
        "stats": {
            "total": 580,
            "hp": 91,
            "attack": 72,
            "defense": 90,
            "spAtk": 129,
            "spDef": 90,
            "speed": 108
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/keldeo-ordinary.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/keldeo-ordinary.avif"
        }
    },
    {
        "id": 647,
        "name": "Keldeo",
        "form": "Resolute Form",
        "types": [
            "Water",
            "Fighting"
        ],
        "stats": {
            "total": 580,
            "hp": 91,
            "attack": 72,
            "defense": 90,
            "spAtk": 129,
            "spDef": 90,
            "speed": 108
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/keldeo-resolute.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/keldeo-resolute.avif"
        }
    },
    {
        "id": 648,
        "name": "Meloetta",
        "form": "Aria Forme",
        "types": [
            "Normal",
            "Psychic"
        ],
        "stats": {
            "total": 600,
            "hp": 100,
            "attack": 77,
            "defense": 77,
            "spAtk": 128,
            "spDef": 128,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/meloetta-aria.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/meloetta-aria.avif"
        }
    },
    {
        "id": 648,
        "name": "Meloetta",
        "form": "Pirouette Forme",
        "types": [
            "Normal",
            "Fighting"
        ],
        "stats": {
            "total": 600,
            "hp": 100,
            "attack": 128,
            "defense": 90,
            "spAtk": 77,
            "spDef": 77,
            "speed": 128
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/meloetta-pirouette.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/meloetta-pirouette.avif"
        }
    },
    {
        "id": 649,
        "name": "Genesect",
        "form": null,
        "types": [
            "Bug",
            "Steel"
        ],
        "stats": {
            "total": 600,
            "hp": 71,
            "attack": 120,
            "defense": 95,
            "spAtk": 120,
            "spDef": 95,
            "speed": 99
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/genesect.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/genesect.avif"
        }
    },
    {
        "id": 650,
        "name": "Chespin",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 313,
            "hp": 56,
            "attack": 61,
            "defense": 65,
            "spAtk": 48,
            "spDef": 45,
            "speed": 38
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/chespin.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/chespin.avif"
        }
    },
    {
        "id": 651,
        "name": "Quilladin",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 405,
            "hp": 61,
            "attack": 78,
            "defense": 95,
            "spAtk": 56,
            "spDef": 58,
            "speed": 57
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/quilladin.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/quilladin.avif"
        }
    },
    {
        "id": 652,
        "name": "Chesnaught",
        "form": null,
        "types": [
            "Grass",
            "Fighting"
        ],
        "stats": {
            "total": 530,
            "hp": 88,
            "attack": 107,
            "defense": 122,
            "spAtk": 74,
            "spDef": 75,
            "speed": 64
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/chesnaught.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/chesnaught.avif"
        }
    },
    {
        "id": 653,
        "name": "Fennekin",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 307,
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "spAtk": 62,
            "spDef": 60,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/fennekin.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/fennekin.avif"
        }
    },
    {
        "id": 654,
        "name": "Braixen",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 409,
            "hp": 59,
            "attack": 59,
            "defense": 58,
            "spAtk": 90,
            "spDef": 70,
            "speed": 73
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/braixen.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/braixen.avif"
        }
    },
    {
        "id": 655,
        "name": "Delphox",
        "form": null,
        "types": [
            "Fire",
            "Psychic"
        ],
        "stats": {
            "total": 534,
            "hp": 75,
            "attack": 69,
            "defense": 72,
            "spAtk": 114,
            "spDef": 100,
            "speed": 104
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/delphox.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/delphox.avif"
        }
    },
    {
        "id": 656,
        "name": "Froakie",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 314,
            "hp": 41,
            "attack": 56,
            "defense": 40,
            "spAtk": 62,
            "spDef": 44,
            "speed": 71
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/froakie.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/froakie.avif"
        }
    },
    {
        "id": 657,
        "name": "Frogadier",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 405,
            "hp": 54,
            "attack": 63,
            "defense": 52,
            "spAtk": 83,
            "spDef": 56,
            "speed": 97
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/frogadier.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/frogadier.avif"
        }
    },
    {
        "id": 658,
        "name": "Greninja",
        "form": null,
        "types": [
            "Water",
            "Dark"
        ],
        "stats": {
            "total": 530,
            "hp": 72,
            "attack": 95,
            "defense": 67,
            "spAtk": 103,
            "spDef": 71,
            "speed": 122
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/greninja.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/greninja.avif"
        }
    },
    {
        "id": 658,
        "name": "Greninja",
        "form": "Ash-Greninja",
        "types": [
            "Water",
            "Dark"
        ],
        "stats": {
            "total": 640,
            "hp": 72,
            "attack": 145,
            "defense": 67,
            "spAtk": 153,
            "spDef": 71,
            "speed": 132
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/greninja-ash.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/greninja-ash.avif"
        }
    },
    {
        "id": 659,
        "name": "Bunnelby",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 237,
            "hp": 38,
            "attack": 36,
            "defense": 38,
            "spAtk": 32,
            "spDef": 36,
            "speed": 57
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bunnelby.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bunnelby.avif"
        }
    },
    {
        "id": 660,
        "name": "Diggersby",
        "form": null,
        "types": [
            "Normal",
            "Ground"
        ],
        "stats": {
            "total": 423,
            "hp": 85,
            "attack": 56,
            "defense": 77,
            "spAtk": 50,
            "spDef": 77,
            "speed": 78
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/diggersby.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/diggersby.avif"
        }
    },
    {
        "id": 661,
        "name": "Fletchling",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 278,
            "hp": 45,
            "attack": 50,
            "defense": 43,
            "spAtk": 40,
            "spDef": 38,
            "speed": 62
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/fletchling.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/fletchling.avif"
        }
    },
    {
        "id": 662,
        "name": "Fletchinder",
        "form": null,
        "types": [
            "Fire",
            "Flying"
        ],
        "stats": {
            "total": 382,
            "hp": 62,
            "attack": 73,
            "defense": 55,
            "spAtk": 56,
            "spDef": 52,
            "speed": 84
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/fletchinder.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/fletchinder.avif"
        }
    },
    {
        "id": 663,
        "name": "Talonflame",
        "form": null,
        "types": [
            "Fire",
            "Flying"
        ],
        "stats": {
            "total": 499,
            "hp": 78,
            "attack": 81,
            "defense": 71,
            "spAtk": 74,
            "spDef": 69,
            "speed": 126
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/talonflame.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/talonflame.avif"
        }
    },
    {
        "id": 664,
        "name": "Scatterbug",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 200,
            "hp": 38,
            "attack": 35,
            "defense": 40,
            "spAtk": 27,
            "spDef": 25,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/scatterbug.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/scatterbug.avif"
        }
    },
    {
        "id": 665,
        "name": "Spewpa",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 213,
            "hp": 45,
            "attack": 22,
            "defense": 60,
            "spAtk": 27,
            "spDef": 30,
            "speed": 29
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/spewpa.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/spewpa.avif"
        }
    },
    {
        "id": 666,
        "name": "Vivillon",
        "form": null,
        "types": [
            "Bug",
            "Flying"
        ],
        "stats": {
            "total": 411,
            "hp": 80,
            "attack": 52,
            "defense": 50,
            "spAtk": 90,
            "spDef": 50,
            "speed": 89
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/vivillon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/vivillon.avif"
        }
    },
    {
        "id": 667,
        "name": "Litleo",
        "form": null,
        "types": [
            "Fire",
            "Normal"
        ],
        "stats": {
            "total": 369,
            "hp": 62,
            "attack": 50,
            "defense": 58,
            "spAtk": 73,
            "spDef": 54,
            "speed": 72
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/litleo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/litleo.avif"
        }
    },
    {
        "id": 668,
        "name": "Pyroar",
        "form": null,
        "types": [
            "Fire",
            "Normal"
        ],
        "stats": {
            "total": 507,
            "hp": 86,
            "attack": 68,
            "defense": 72,
            "spAtk": 109,
            "spDef": 66,
            "speed": 106
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pyroar.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pyroar.avif"
        }
    },
    {
        "id": 669,
        "name": "Flabébé",
        "form": null,
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 303,
            "hp": 44,
            "attack": 38,
            "defense": 39,
            "spAtk": 61,
            "spDef": 79,
            "speed": 42
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/flabebe.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/flabebe.avif"
        }
    },
    {
        "id": 670,
        "name": "Floette",
        "form": null,
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 371,
            "hp": 54,
            "attack": 45,
            "defense": 47,
            "spAtk": 75,
            "spDef": 98,
            "speed": 52
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/floette.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/floette.avif"
        }
    },
    {
        "id": 671,
        "name": "Florges",
        "form": null,
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 552,
            "hp": 78,
            "attack": 65,
            "defense": 68,
            "spAtk": 112,
            "spDef": 154,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/florges.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/florges.avif"
        }
    },
    {
        "id": 672,
        "name": "Skiddo",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 350,
            "hp": 66,
            "attack": 65,
            "defense": 48,
            "spAtk": 62,
            "spDef": 57,
            "speed": 52
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/skiddo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/skiddo.avif"
        }
    },
    {
        "id": 673,
        "name": "Gogoat",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 531,
            "hp": 123,
            "attack": 100,
            "defense": 62,
            "spAtk": 97,
            "spDef": 81,
            "speed": 68
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gogoat.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gogoat.avif"
        }
    },
    {
        "id": 674,
        "name": "Pancham",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 348,
            "hp": 67,
            "attack": 82,
            "defense": 62,
            "spAtk": 46,
            "spDef": 48,
            "speed": 43
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pancham.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pancham.avif"
        }
    },
    {
        "id": 675,
        "name": "Pangoro",
        "form": null,
        "types": [
            "Fighting",
            "Dark"
        ],
        "stats": {
            "total": 495,
            "hp": 95,
            "attack": 124,
            "defense": 78,
            "spAtk": 69,
            "spDef": 71,
            "speed": 58
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pangoro.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pangoro.avif"
        }
    },
    {
        "id": 676,
        "name": "Furfrou",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 472,
            "hp": 75,
            "attack": 80,
            "defense": 60,
            "spAtk": 65,
            "spDef": 90,
            "speed": 102
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/furfrou.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/furfrou.avif"
        }
    },
    {
        "id": 677,
        "name": "Espurr",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 355,
            "hp": 62,
            "attack": 48,
            "defense": 54,
            "spAtk": 63,
            "spDef": 60,
            "speed": 68
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/espurr.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/espurr.avif"
        }
    },
    {
        "id": 678,
        "name": "Meowstic",
        "form": "Male",
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 466,
            "hp": 74,
            "attack": 48,
            "defense": 76,
            "spAtk": 83,
            "spDef": 81,
            "speed": 104
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/meowstic-male.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/meowstic-male.avif"
        }
    },
    {
        "id": 678,
        "name": "Meowstic",
        "form": "Female",
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 466,
            "hp": 74,
            "attack": 48,
            "defense": 76,
            "spAtk": 83,
            "spDef": 81,
            "speed": 104
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/meowstic-female.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/meowstic-female.avif"
        }
    },
    {
        "id": 679,
        "name": "Honedge",
        "form": null,
        "types": [
            "Steel",
            "Ghost"
        ],
        "stats": {
            "total": 325,
            "hp": 45,
            "attack": 80,
            "defense": 100,
            "spAtk": 35,
            "spDef": 37,
            "speed": 28
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/honedge.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/honedge.avif"
        }
    },
    {
        "id": 680,
        "name": "Doublade",
        "form": null,
        "types": [
            "Steel",
            "Ghost"
        ],
        "stats": {
            "total": 448,
            "hp": 59,
            "attack": 110,
            "defense": 150,
            "spAtk": 45,
            "spDef": 49,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/doublade.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/doublade.avif"
        }
    },
    {
        "id": 681,
        "name": "Aegislash",
        "form": "Shield Forme",
        "types": [
            "Steel",
            "Ghost"
        ],
        "stats": {
            "total": 500,
            "hp": 60,
            "attack": 50,
            "defense": 140,
            "spAtk": 50,
            "spDef": 140,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/aegislash-shield.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/aegislash-shield.avif"
        }
    },
    {
        "id": 681,
        "name": "Aegislash",
        "form": "Blade Forme",
        "types": [
            "Steel",
            "Ghost"
        ],
        "stats": {
            "total": 500,
            "hp": 60,
            "attack": 140,
            "defense": 50,
            "spAtk": 140,
            "spDef": 50,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/aegislash-blade.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/aegislash-blade.avif"
        }
    },
    {
        "id": 682,
        "name": "Spritzee",
        "form": null,
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 341,
            "hp": 78,
            "attack": 52,
            "defense": 60,
            "spAtk": 63,
            "spDef": 65,
            "speed": 23
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/spritzee.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/spritzee.avif"
        }
    },
    {
        "id": 683,
        "name": "Aromatisse",
        "form": null,
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 462,
            "hp": 101,
            "attack": 72,
            "defense": 72,
            "spAtk": 99,
            "spDef": 89,
            "speed": 29
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/aromatisse.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/aromatisse.avif"
        }
    },
    {
        "id": 684,
        "name": "Swirlix",
        "form": null,
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 341,
            "hp": 62,
            "attack": 48,
            "defense": 66,
            "spAtk": 59,
            "spDef": 57,
            "speed": 49
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/swirlix.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/swirlix.avif"
        }
    },
    {
        "id": 685,
        "name": "Slurpuff",
        "form": null,
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 480,
            "hp": 82,
            "attack": 80,
            "defense": 86,
            "spAtk": 85,
            "spDef": 75,
            "speed": 72
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/slurpuff.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/slurpuff.avif"
        }
    },
    {
        "id": 686,
        "name": "Inkay",
        "form": null,
        "types": [
            "Dark",
            "Psychic"
        ],
        "stats": {
            "total": 288,
            "hp": 53,
            "attack": 54,
            "defense": 53,
            "spAtk": 37,
            "spDef": 46,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/inkay.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/inkay.avif"
        }
    },
    {
        "id": 687,
        "name": "Malamar",
        "form": null,
        "types": [
            "Dark",
            "Psychic"
        ],
        "stats": {
            "total": 482,
            "hp": 86,
            "attack": 92,
            "defense": 88,
            "spAtk": 68,
            "spDef": 75,
            "speed": 73
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/malamar.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/malamar.avif"
        }
    },
    {
        "id": 687,
        "name": "Malamar",
        "form": "Mega Malamar",
        "types": [
            "Dark",
            "Psychic"
        ],
        "stats": {
            "total": 582,
            "hp": 86,
            "attack": 102,
            "defense": 88,
            "spAtk": 98,
            "spDef": 120,
            "speed": 88
        },
        "images": {
            "icon": "https://img.pokemondb.net/s.png",
            "avif": null
        }
    },
    {
        "id": 688,
        "name": "Binacle",
        "form": null,
        "types": [
            "Rock",
            "Water"
        ],
        "stats": {
            "total": 306,
            "hp": 42,
            "attack": 52,
            "defense": 67,
            "spAtk": 39,
            "spDef": 56,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/binacle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/binacle.avif"
        }
    },
    {
        "id": 689,
        "name": "Barbaracle",
        "form": null,
        "types": [
            "Rock",
            "Water"
        ],
        "stats": {
            "total": 500,
            "hp": 72,
            "attack": 105,
            "defense": 115,
            "spAtk": 54,
            "spDef": 86,
            "speed": 68
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/barbaracle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/barbaracle.avif"
        }
    },
    {
        "id": 690,
        "name": "Skrelp",
        "form": null,
        "types": [
            "Poison",
            "Water"
        ],
        "stats": {
            "total": 320,
            "hp": 50,
            "attack": 60,
            "defense": 60,
            "spAtk": 60,
            "spDef": 60,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/skrelp.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/skrelp.avif"
        }
    },
    {
        "id": 691,
        "name": "Dragalge",
        "form": null,
        "types": [
            "Poison",
            "Dragon"
        ],
        "stats": {
            "total": 494,
            "hp": 65,
            "attack": 75,
            "defense": 90,
            "spAtk": 97,
            "spDef": 123,
            "speed": 44
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dragalge.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dragalge.avif"
        }
    },
    {
        "id": 692,
        "name": "Clauncher",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 330,
            "hp": 50,
            "attack": 53,
            "defense": 62,
            "spAtk": 58,
            "spDef": 63,
            "speed": 44
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/clauncher.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/clauncher.avif"
        }
    },
    {
        "id": 693,
        "name": "Clawitzer",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 500,
            "hp": 71,
            "attack": 73,
            "defense": 88,
            "spAtk": 120,
            "spDef": 89,
            "speed": 59
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/clawitzer.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/clawitzer.avif"
        }
    },
    {
        "id": 694,
        "name": "Helioptile",
        "form": null,
        "types": [
            "Electric",
            "Normal"
        ],
        "stats": {
            "total": 289,
            "hp": 44,
            "attack": 38,
            "defense": 33,
            "spAtk": 61,
            "spDef": 43,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/helioptile.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/helioptile.avif"
        }
    },
    {
        "id": 695,
        "name": "Heliolisk",
        "form": null,
        "types": [
            "Electric",
            "Normal"
        ],
        "stats": {
            "total": 481,
            "hp": 62,
            "attack": 55,
            "defense": 52,
            "spAtk": 109,
            "spDef": 94,
            "speed": 109
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/heliolisk.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/heliolisk.avif"
        }
    },
    {
        "id": 696,
        "name": "Tyrunt",
        "form": null,
        "types": [
            "Rock",
            "Dragon"
        ],
        "stats": {
            "total": 362,
            "hp": 58,
            "attack": 89,
            "defense": 77,
            "spAtk": 45,
            "spDef": 45,
            "speed": 48
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tyrunt.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tyrunt.avif"
        }
    },
    {
        "id": 697,
        "name": "Tyrantrum",
        "form": null,
        "types": [
            "Rock",
            "Dragon"
        ],
        "stats": {
            "total": 521,
            "hp": 82,
            "attack": 121,
            "defense": 119,
            "spAtk": 69,
            "spDef": 59,
            "speed": 71
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tyrantrum.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tyrantrum.avif"
        }
    },
    {
        "id": 698,
        "name": "Amaura",
        "form": null,
        "types": [
            "Rock",
            "Ice"
        ],
        "stats": {
            "total": 362,
            "hp": 77,
            "attack": 59,
            "defense": 50,
            "spAtk": 67,
            "spDef": 63,
            "speed": 46
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/amaura.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/amaura.avif"
        }
    },
    {
        "id": 699,
        "name": "Aurorus",
        "form": null,
        "types": [
            "Rock",
            "Ice"
        ],
        "stats": {
            "total": 521,
            "hp": 123,
            "attack": 77,
            "defense": 72,
            "spAtk": 99,
            "spDef": 92,
            "speed": 58
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/aurorus.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/aurorus.avif"
        }
    },
    {
        "id": 700,
        "name": "Sylveon",
        "form": null,
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 525,
            "hp": 95,
            "attack": 65,
            "defense": 65,
            "spAtk": 110,
            "spDef": 130,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sylveon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sylveon.avif"
        }
    },
    {
        "id": 701,
        "name": "Hawlucha",
        "form": null,
        "types": [
            "Fighting",
            "Flying"
        ],
        "stats": {
            "total": 500,
            "hp": 78,
            "attack": 92,
            "defense": 75,
            "spAtk": 74,
            "spDef": 63,
            "speed": 118
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/hawlucha.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/hawlucha.avif"
        }
    },
    {
        "id": 701,
        "name": "Hawlucha",
        "form": "Mega Hawlucha",
        "types": [
            "Fighting",
            "Flying"
        ],
        "stats": {
            "total": 600,
            "hp": 78,
            "attack": 137,
            "defense": 100,
            "spAtk": 74,
            "spDef": 93,
            "speed": 118
        },
        "images": {
            "icon": "https://img.pokemondb.net/s.png",
            "avif": null
        }
    },
    {
        "id": 702,
        "name": "Dedenne",
        "form": null,
        "types": [
            "Electric",
            "Fairy"
        ],
        "stats": {
            "total": 431,
            "hp": 67,
            "attack": 58,
            "defense": 57,
            "spAtk": 81,
            "spDef": 67,
            "speed": 101
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dedenne.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dedenne.avif"
        }
    },
    {
        "id": 703,
        "name": "Carbink",
        "form": null,
        "types": [
            "Rock",
            "Fairy"
        ],
        "stats": {
            "total": 500,
            "hp": 50,
            "attack": 50,
            "defense": 150,
            "spAtk": 50,
            "spDef": 150,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/carbink.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/carbink.avif"
        }
    },
    {
        "id": 704,
        "name": "Goomy",
        "form": null,
        "types": [
            "Dragon"
        ],
        "stats": {
            "total": 300,
            "hp": 45,
            "attack": 50,
            "defense": 35,
            "spAtk": 55,
            "spDef": 75,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/goomy.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/goomy.avif"
        }
    },
    {
        "id": 705,
        "name": "Sliggoo",
        "form": null,
        "types": [
            "Dragon"
        ],
        "stats": {
            "total": 452,
            "hp": 68,
            "attack": 75,
            "defense": 53,
            "spAtk": 83,
            "spDef": 113,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sliggoo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sliggoo.avif"
        }
    },
    {
        "id": 705,
        "name": "Sliggoo",
        "form": "Hisuian Sliggoo",
        "types": [
            "Steel",
            "Dragon"
        ],
        "stats": {
            "total": 452,
            "hp": 58,
            "attack": 75,
            "defense": 83,
            "spAtk": 83,
            "spDef": 113,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sliggoo-hisuian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sliggoo-hisuian.avif"
        }
    },
    {
        "id": 706,
        "name": "Goodra",
        "form": null,
        "types": [
            "Dragon"
        ],
        "stats": {
            "total": 600,
            "hp": 90,
            "attack": 100,
            "defense": 70,
            "spAtk": 110,
            "spDef": 150,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/goodra.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/goodra.avif"
        }
    },
    {
        "id": 706,
        "name": "Goodra",
        "form": "Hisuian Goodra",
        "types": [
            "Steel",
            "Dragon"
        ],
        "stats": {
            "total": 600,
            "hp": 80,
            "attack": 100,
            "defense": 100,
            "spAtk": 110,
            "spDef": 150,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/goodra-hisuian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/goodra-hisuian.avif"
        }
    },
    {
        "id": 707,
        "name": "Klefki",
        "form": null,
        "types": [
            "Steel",
            "Fairy"
        ],
        "stats": {
            "total": 470,
            "hp": 57,
            "attack": 80,
            "defense": 91,
            "spAtk": 80,
            "spDef": 87,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/klefki.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/klefki.avif"
        }
    },
    {
        "id": 708,
        "name": "Phantump",
        "form": null,
        "types": [
            "Ghost",
            "Grass"
        ],
        "stats": {
            "total": 309,
            "hp": 43,
            "attack": 70,
            "defense": 48,
            "spAtk": 50,
            "spDef": 60,
            "speed": 38
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/phantump.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/phantump.avif"
        }
    },
    {
        "id": 709,
        "name": "Trevenant",
        "form": null,
        "types": [
            "Ghost",
            "Grass"
        ],
        "stats": {
            "total": 474,
            "hp": 85,
            "attack": 110,
            "defense": 76,
            "spAtk": 65,
            "spDef": 82,
            "speed": 56
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/trevenant.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/trevenant.avif"
        }
    },
    {
        "id": 710,
        "name": "Pumpkaboo",
        "form": "Average Size",
        "types": [
            "Ghost",
            "Grass"
        ],
        "stats": {
            "total": 335,
            "hp": 49,
            "attack": 66,
            "defense": 70,
            "spAtk": 44,
            "spDef": 55,
            "speed": 51
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pumpkaboo-average.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pumpkaboo-average.avif"
        }
    },
    {
        "id": 710,
        "name": "Pumpkaboo",
        "form": "Small Size",
        "types": [
            "Ghost",
            "Grass"
        ],
        "stats": {
            "total": 335,
            "hp": 44,
            "attack": 66,
            "defense": 70,
            "spAtk": 44,
            "spDef": 55,
            "speed": 56
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pumpkaboo-small.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pumpkaboo-small.avif"
        }
    },
    {
        "id": 710,
        "name": "Pumpkaboo",
        "form": "Large Size",
        "types": [
            "Ghost",
            "Grass"
        ],
        "stats": {
            "total": 335,
            "hp": 54,
            "attack": 66,
            "defense": 70,
            "spAtk": 44,
            "spDef": 55,
            "speed": 46
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pumpkaboo-large.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pumpkaboo-large.avif"
        }
    },
    {
        "id": 710,
        "name": "Pumpkaboo",
        "form": "Super Size",
        "types": [
            "Ghost",
            "Grass"
        ],
        "stats": {
            "total": 335,
            "hp": 59,
            "attack": 66,
            "defense": 70,
            "spAtk": 44,
            "spDef": 55,
            "speed": 41
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pumpkaboo-super.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pumpkaboo-super.avif"
        }
    },
    {
        "id": 711,
        "name": "Gourgeist",
        "form": "Average Size",
        "types": [
            "Ghost",
            "Grass"
        ],
        "stats": {
            "total": 494,
            "hp": 65,
            "attack": 90,
            "defense": 122,
            "spAtk": 58,
            "spDef": 75,
            "speed": 84
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gourgeist-average.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gourgeist-average.avif"
        }
    },
    {
        "id": 711,
        "name": "Gourgeist",
        "form": "Small Size",
        "types": [
            "Ghost",
            "Grass"
        ],
        "stats": {
            "total": 494,
            "hp": 55,
            "attack": 85,
            "defense": 122,
            "spAtk": 58,
            "spDef": 75,
            "speed": 99
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gourgeist-small.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gourgeist-small.avif"
        }
    },
    {
        "id": 711,
        "name": "Gourgeist",
        "form": "Large Size",
        "types": [
            "Ghost",
            "Grass"
        ],
        "stats": {
            "total": 494,
            "hp": 75,
            "attack": 95,
            "defense": 122,
            "spAtk": 58,
            "spDef": 75,
            "speed": 69
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gourgeist-large.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gourgeist-large.avif"
        }
    },
    {
        "id": 711,
        "name": "Gourgeist",
        "form": "Super Size",
        "types": [
            "Ghost",
            "Grass"
        ],
        "stats": {
            "total": 494,
            "hp": 85,
            "attack": 100,
            "defense": 122,
            "spAtk": 58,
            "spDef": 75,
            "speed": 54
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gourgeist-super.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gourgeist-super.avif"
        }
    },
    {
        "id": 712,
        "name": "Bergmite",
        "form": null,
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 304,
            "hp": 55,
            "attack": 69,
            "defense": 85,
            "spAtk": 32,
            "spDef": 35,
            "speed": 28
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bergmite.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bergmite.avif"
        }
    },
    {
        "id": 713,
        "name": "Avalugg",
        "form": null,
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 514,
            "hp": 95,
            "attack": 117,
            "defense": 184,
            "spAtk": 44,
            "spDef": 46,
            "speed": 28
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avalugg.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/avalugg.avif"
        }
    },
    {
        "id": 713,
        "name": "Avalugg",
        "form": "Hisuian Avalugg",
        "types": [
            "Ice",
            "Rock"
        ],
        "stats": {
            "total": 514,
            "hp": 95,
            "attack": 127,
            "defense": 184,
            "spAtk": 34,
            "spDef": 36,
            "speed": 38
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avalugg-hisuian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/avalugg-hisuian.avif"
        }
    },
    {
        "id": 714,
        "name": "Noibat",
        "form": null,
        "types": [
            "Flying",
            "Dragon"
        ],
        "stats": {
            "total": 245,
            "hp": 40,
            "attack": 30,
            "defense": 35,
            "spAtk": 45,
            "spDef": 40,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/noibat.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/noibat.avif"
        }
    },
    {
        "id": 715,
        "name": "Noivern",
        "form": null,
        "types": [
            "Flying",
            "Dragon"
        ],
        "stats": {
            "total": 535,
            "hp": 85,
            "attack": 70,
            "defense": 80,
            "spAtk": 97,
            "spDef": 80,
            "speed": 123
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/noivern.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/noivern.avif"
        }
    },
    {
        "id": 716,
        "name": "Xerneas",
        "form": null,
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 680,
            "hp": 126,
            "attack": 131,
            "defense": 95,
            "spAtk": 131,
            "spDef": 98,
            "speed": 99
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/xerneas.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/xerneas.avif"
        }
    },
    {
        "id": 717,
        "name": "Yveltal",
        "form": null,
        "types": [
            "Dark",
            "Flying"
        ],
        "stats": {
            "total": 680,
            "hp": 126,
            "attack": 131,
            "defense": 95,
            "spAtk": 131,
            "spDef": 98,
            "speed": 99
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/yveltal.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/yveltal.avif"
        }
    },
    {
        "id": 718,
        "name": "Zygarde",
        "form": "50% Forme",
        "types": [
            "Dragon",
            "Ground"
        ],
        "stats": {
            "total": 600,
            "hp": 108,
            "attack": 100,
            "defense": 121,
            "spAtk": 81,
            "spDef": 95,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zygarde-50.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zygarde-50.avif"
        }
    },
    {
        "id": 718,
        "name": "Zygarde",
        "form": "10% Forme",
        "types": [
            "Dragon",
            "Ground"
        ],
        "stats": {
            "total": 486,
            "hp": 54,
            "attack": 100,
            "defense": 71,
            "spAtk": 61,
            "spDef": 85,
            "speed": 115
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zygarde-10.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zygarde-10.avif"
        }
    },
    {
        "id": 718,
        "name": "Zygarde",
        "form": "Complete Forme",
        "types": [
            "Dragon",
            "Ground"
        ],
        "stats": {
            "total": 708,
            "hp": 216,
            "attack": 100,
            "defense": 121,
            "spAtk": 91,
            "spDef": 95,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zygarde-complete.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zygarde-complete.avif"
        }
    },
    {
        "id": 719,
        "name": "Diancie",
        "form": null,
        "types": [
            "Rock",
            "Fairy"
        ],
        "stats": {
            "total": 600,
            "hp": 50,
            "attack": 100,
            "defense": 150,
            "spAtk": 100,
            "spDef": 150,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/diancie.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/diancie.avif"
        }
    },
    {
        "id": 719,
        "name": "Diancie",
        "form": "Mega Diancie",
        "types": [
            "Rock",
            "Fairy"
        ],
        "stats": {
            "total": 700,
            "hp": 50,
            "attack": 160,
            "defense": 110,
            "spAtk": 160,
            "spDef": 110,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/diancie-mega.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/diancie-mega.avif"
        }
    },
    {
        "id": 720,
        "name": "Hoopa",
        "form": "Hoopa Confined",
        "types": [
            "Psychic",
            "Ghost"
        ],
        "stats": {
            "total": 600,
            "hp": 80,
            "attack": 110,
            "defense": 60,
            "spAtk": 150,
            "spDef": 130,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/hoopa-confined.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/hoopa-confined.avif"
        }
    },
    {
        "id": 720,
        "name": "Hoopa",
        "form": "Hoopa Unbound",
        "types": [
            "Psychic",
            "Dark"
        ],
        "stats": {
            "total": 680,
            "hp": 80,
            "attack": 160,
            "defense": 60,
            "spAtk": 170,
            "spDef": 130,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/hoopa-unbound.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/hoopa-unbound.avif"
        }
    },
    {
        "id": 721,
        "name": "Volcanion",
        "form": null,
        "types": [
            "Fire",
            "Water"
        ],
        "stats": {
            "total": 600,
            "hp": 80,
            "attack": 110,
            "defense": 120,
            "spAtk": 130,
            "spDef": 90,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/volcanion.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/volcanion.avif"
        }
    },
    {
        "id": 722,
        "name": "Rowlet",
        "form": null,
        "types": [
            "Grass",
            "Flying"
        ],
        "stats": {
            "total": 320,
            "hp": 68,
            "attack": 55,
            "defense": 55,
            "spAtk": 50,
            "spDef": 50,
            "speed": 42
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rowlet.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rowlet.avif"
        }
    },
    {
        "id": 723,
        "name": "Dartrix",
        "form": null,
        "types": [
            "Grass",
            "Flying"
        ],
        "stats": {
            "total": 420,
            "hp": 78,
            "attack": 75,
            "defense": 75,
            "spAtk": 70,
            "spDef": 70,
            "speed": 52
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dartrix.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dartrix.avif"
        }
    },
    {
        "id": 724,
        "name": "Decidueye",
        "form": null,
        "types": [
            "Grass",
            "Ghost"
        ],
        "stats": {
            "total": 530,
            "hp": 78,
            "attack": 107,
            "defense": 75,
            "spAtk": 100,
            "spDef": 100,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/decidueye.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/decidueye.avif"
        }
    },
    {
        "id": 724,
        "name": "Decidueye",
        "form": "Hisuian Decidueye",
        "types": [
            "Grass",
            "Fighting"
        ],
        "stats": {
            "total": 530,
            "hp": 88,
            "attack": 112,
            "defense": 80,
            "spAtk": 95,
            "spDef": 95,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/decidueye-hisuian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/decidueye-hisuian.avif"
        }
    },
    {
        "id": 725,
        "name": "Litten",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 320,
            "hp": 45,
            "attack": 65,
            "defense": 40,
            "spAtk": 60,
            "spDef": 40,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/litten.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/litten.avif"
        }
    },
    {
        "id": 726,
        "name": "Torracat",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 420,
            "hp": 65,
            "attack": 85,
            "defense": 50,
            "spAtk": 80,
            "spDef": 50,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/torracat.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/torracat.avif"
        }
    },
    {
        "id": 727,
        "name": "Incineroar",
        "form": null,
        "types": [
            "Fire",
            "Dark"
        ],
        "stats": {
            "total": 530,
            "hp": 95,
            "attack": 115,
            "defense": 90,
            "spAtk": 80,
            "spDef": 90,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/incineroar.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/incineroar.avif"
        }
    },
    {
        "id": 728,
        "name": "Popplio",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 320,
            "hp": 50,
            "attack": 54,
            "defense": 54,
            "spAtk": 66,
            "spDef": 56,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/popplio.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/popplio.avif"
        }
    },
    {
        "id": 729,
        "name": "Brionne",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 420,
            "hp": 60,
            "attack": 69,
            "defense": 69,
            "spAtk": 91,
            "spDef": 81,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/brionne.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/brionne.avif"
        }
    },
    {
        "id": 730,
        "name": "Primarina",
        "form": null,
        "types": [
            "Water",
            "Fairy"
        ],
        "stats": {
            "total": 530,
            "hp": 80,
            "attack": 74,
            "defense": 74,
            "spAtk": 126,
            "spDef": 116,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/primarina.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/primarina.avif"
        }
    },
    {
        "id": 731,
        "name": "Pikipek",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 265,
            "hp": 35,
            "attack": 75,
            "defense": 30,
            "spAtk": 30,
            "spDef": 30,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pikipek.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pikipek.avif"
        }
    },
    {
        "id": 732,
        "name": "Trumbeak",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 355,
            "hp": 55,
            "attack": 85,
            "defense": 50,
            "spAtk": 40,
            "spDef": 50,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/trumbeak.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/trumbeak.avif"
        }
    },
    {
        "id": 733,
        "name": "Toucannon",
        "form": null,
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 485,
            "hp": 80,
            "attack": 120,
            "defense": 75,
            "spAtk": 75,
            "spDef": 75,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/toucannon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/toucannon.avif"
        }
    },
    {
        "id": 734,
        "name": "Yungoos",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 253,
            "hp": 48,
            "attack": 70,
            "defense": 30,
            "spAtk": 30,
            "spDef": 30,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/yungoos.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/yungoos.avif"
        }
    },
    {
        "id": 735,
        "name": "Gumshoos",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 418,
            "hp": 88,
            "attack": 110,
            "defense": 60,
            "spAtk": 55,
            "spDef": 60,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gumshoos.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gumshoos.avif"
        }
    },
    {
        "id": 736,
        "name": "Grubbin",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 300,
            "hp": 47,
            "attack": 62,
            "defense": 45,
            "spAtk": 55,
            "spDef": 45,
            "speed": 46
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/grubbin.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/grubbin.avif"
        }
    },
    {
        "id": 737,
        "name": "Charjabug",
        "form": null,
        "types": [
            "Bug",
            "Electric"
        ],
        "stats": {
            "total": 400,
            "hp": 57,
            "attack": 82,
            "defense": 95,
            "spAtk": 55,
            "spDef": 75,
            "speed": 36
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/charjabug.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/charjabug.avif"
        }
    },
    {
        "id": 738,
        "name": "Vikavolt",
        "form": null,
        "types": [
            "Bug",
            "Electric"
        ],
        "stats": {
            "total": 500,
            "hp": 77,
            "attack": 70,
            "defense": 90,
            "spAtk": 145,
            "spDef": 75,
            "speed": 43
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/vikavolt.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/vikavolt.avif"
        }
    },
    {
        "id": 739,
        "name": "Crabrawler",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 338,
            "hp": 47,
            "attack": 82,
            "defense": 57,
            "spAtk": 42,
            "spDef": 47,
            "speed": 63
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/crabrawler.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/crabrawler.avif"
        }
    },
    {
        "id": 740,
        "name": "Crabominable",
        "form": null,
        "types": [
            "Fighting",
            "Ice"
        ],
        "stats": {
            "total": 478,
            "hp": 97,
            "attack": 132,
            "defense": 77,
            "spAtk": 62,
            "spDef": 67,
            "speed": 43
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/crabominable.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/crabominable.avif"
        }
    },
    {
        "id": 741,
        "name": "Oricorio",
        "form": "Baile Style",
        "types": [
            "Fire",
            "Flying"
        ],
        "stats": {
            "total": 476,
            "hp": 75,
            "attack": 70,
            "defense": 70,
            "spAtk": 98,
            "spDef": 70,
            "speed": 93
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/oricorio-baile.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/oricorio-baile.avif"
        }
    },
    {
        "id": 741,
        "name": "Oricorio",
        "form": "Pom-Pom Style",
        "types": [
            "Electric",
            "Flying"
        ],
        "stats": {
            "total": 476,
            "hp": 75,
            "attack": 70,
            "defense": 70,
            "spAtk": 98,
            "spDef": 70,
            "speed": 93
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/oricorio-pom-pom.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/oricorio-pom-pom.avif"
        }
    },
    {
        "id": 741,
        "name": "Oricorio",
        "form": "Pa'u Style",
        "types": [
            "Psychic",
            "Flying"
        ],
        "stats": {
            "total": 476,
            "hp": 75,
            "attack": 70,
            "defense": 70,
            "spAtk": 98,
            "spDef": 70,
            "speed": 93
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/oricorio-pau.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/oricorio-pau.avif"
        }
    },
    {
        "id": 741,
        "name": "Oricorio",
        "form": "Sensu Style",
        "types": [
            "Ghost",
            "Flying"
        ],
        "stats": {
            "total": 476,
            "hp": 75,
            "attack": 70,
            "defense": 70,
            "spAtk": 98,
            "spDef": 70,
            "speed": 93
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/oricorio-sensu.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/oricorio-sensu.avif"
        }
    },
    {
        "id": 742,
        "name": "Cutiefly",
        "form": null,
        "types": [
            "Bug",
            "Fairy"
        ],
        "stats": {
            "total": 304,
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "spAtk": 55,
            "spDef": 40,
            "speed": 84
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cutiefly.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cutiefly.avif"
        }
    },
    {
        "id": 743,
        "name": "Ribombee",
        "form": null,
        "types": [
            "Bug",
            "Fairy"
        ],
        "stats": {
            "total": 464,
            "hp": 60,
            "attack": 55,
            "defense": 60,
            "spAtk": 95,
            "spDef": 70,
            "speed": 124
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ribombee.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ribombee.avif"
        }
    },
    {
        "id": 744,
        "name": "Rockruff",
        "form": null,
        "types": [
            "Rock"
        ],
        "stats": {
            "total": 280,
            "hp": 45,
            "attack": 65,
            "defense": 40,
            "spAtk": 30,
            "spDef": 40,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rockruff.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rockruff.avif"
        }
    },
    {
        "id": 744,
        "name": "Rockruff",
        "form": "Own Tempo Rockruff",
        "types": [
            "Rock"
        ],
        "stats": {
            "total": 280,
            "hp": 45,
            "attack": 65,
            "defense": 40,
            "spAtk": 30,
            "spDef": 40,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rockruff-own-tempo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rockruff-own-tempo.avif"
        }
    },
    {
        "id": 745,
        "name": "Lycanroc",
        "form": "Midday Form",
        "types": [
            "Rock"
        ],
        "stats": {
            "total": 487,
            "hp": 75,
            "attack": 115,
            "defense": 65,
            "spAtk": 55,
            "spDef": 65,
            "speed": 112
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lycanroc-midday.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lycanroc-midday.avif"
        }
    },
    {
        "id": 745,
        "name": "Lycanroc",
        "form": "Midnight Form",
        "types": [
            "Rock"
        ],
        "stats": {
            "total": 487,
            "hp": 85,
            "attack": 115,
            "defense": 75,
            "spAtk": 55,
            "spDef": 75,
            "speed": 82
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lycanroc-midnight.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lycanroc-midnight.avif"
        }
    },
    {
        "id": 745,
        "name": "Lycanroc",
        "form": "Dusk Form",
        "types": [
            "Rock"
        ],
        "stats": {
            "total": 487,
            "hp": 75,
            "attack": 117,
            "defense": 65,
            "spAtk": 55,
            "spDef": 65,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lycanroc-dusk.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lycanroc-dusk.avif"
        }
    },
    {
        "id": 746,
        "name": "Wishiwashi",
        "form": "Solo Form",
        "types": [
            "Water"
        ],
        "stats": {
            "total": 175,
            "hp": 45,
            "attack": 20,
            "defense": 20,
            "spAtk": 25,
            "spDef": 25,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wishiwashi-solo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wishiwashi-solo.avif"
        }
    },
    {
        "id": 746,
        "name": "Wishiwashi",
        "form": "School Form",
        "types": [
            "Water"
        ],
        "stats": {
            "total": 620,
            "hp": 45,
            "attack": 140,
            "defense": 130,
            "spAtk": 140,
            "spDef": 135,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wishiwashi-school.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wishiwashi-school.avif"
        }
    },
    {
        "id": 747,
        "name": "Mareanie",
        "form": null,
        "types": [
            "Poison",
            "Water"
        ],
        "stats": {
            "total": 305,
            "hp": 50,
            "attack": 53,
            "defense": 62,
            "spAtk": 43,
            "spDef": 52,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mareanie.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mareanie.avif"
        }
    },
    {
        "id": 748,
        "name": "Toxapex",
        "form": null,
        "types": [
            "Poison",
            "Water"
        ],
        "stats": {
            "total": 495,
            "hp": 50,
            "attack": 63,
            "defense": 152,
            "spAtk": 53,
            "spDef": 142,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/toxapex.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/toxapex.avif"
        }
    },
    {
        "id": 749,
        "name": "Mudbray",
        "form": null,
        "types": [
            "Ground"
        ],
        "stats": {
            "total": 385,
            "hp": 70,
            "attack": 100,
            "defense": 70,
            "spAtk": 45,
            "spDef": 55,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mudbray.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mudbray.avif"
        }
    },
    {
        "id": 750,
        "name": "Mudsdale",
        "form": null,
        "types": [
            "Ground"
        ],
        "stats": {
            "total": 500,
            "hp": 100,
            "attack": 125,
            "defense": 100,
            "spAtk": 55,
            "spDef": 85,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mudsdale.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mudsdale.avif"
        }
    },
    {
        "id": 751,
        "name": "Dewpider",
        "form": null,
        "types": [
            "Water",
            "Bug"
        ],
        "stats": {
            "total": 269,
            "hp": 38,
            "attack": 40,
            "defense": 52,
            "spAtk": 40,
            "spDef": 72,
            "speed": 27
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dewpider.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dewpider.avif"
        }
    },
    {
        "id": 752,
        "name": "Araquanid",
        "form": null,
        "types": [
            "Water",
            "Bug"
        ],
        "stats": {
            "total": 454,
            "hp": 68,
            "attack": 70,
            "defense": 92,
            "spAtk": 50,
            "spDef": 132,
            "speed": 42
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/araquanid.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/araquanid.avif"
        }
    },
    {
        "id": 753,
        "name": "Fomantis",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 250,
            "hp": 40,
            "attack": 55,
            "defense": 35,
            "spAtk": 50,
            "spDef": 35,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/fomantis.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/fomantis.avif"
        }
    },
    {
        "id": 754,
        "name": "Lurantis",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 480,
            "hp": 70,
            "attack": 105,
            "defense": 90,
            "spAtk": 80,
            "spDef": 90,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lurantis.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lurantis.avif"
        }
    },
    {
        "id": 755,
        "name": "Morelull",
        "form": null,
        "types": [
            "Grass",
            "Fairy"
        ],
        "stats": {
            "total": 285,
            "hp": 40,
            "attack": 35,
            "defense": 55,
            "spAtk": 65,
            "spDef": 75,
            "speed": 15
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/morelull.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/morelull.avif"
        }
    },
    {
        "id": 756,
        "name": "Shiinotic",
        "form": null,
        "types": [
            "Grass",
            "Fairy"
        ],
        "stats": {
            "total": 405,
            "hp": 60,
            "attack": 45,
            "defense": 80,
            "spAtk": 90,
            "spDef": 100,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/shiinotic.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/shiinotic.avif"
        }
    },
    {
        "id": 757,
        "name": "Salandit",
        "form": null,
        "types": [
            "Poison",
            "Fire"
        ],
        "stats": {
            "total": 320,
            "hp": 48,
            "attack": 44,
            "defense": 40,
            "spAtk": 71,
            "spDef": 40,
            "speed": 77
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/salandit.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/salandit.avif"
        }
    },
    {
        "id": 758,
        "name": "Salazzle",
        "form": null,
        "types": [
            "Poison",
            "Fire"
        ],
        "stats": {
            "total": 480,
            "hp": 68,
            "attack": 64,
            "defense": 60,
            "spAtk": 111,
            "spDef": 60,
            "speed": 117
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/salazzle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/salazzle.avif"
        }
    },
    {
        "id": 759,
        "name": "Stufful",
        "form": null,
        "types": [
            "Normal",
            "Fighting"
        ],
        "stats": {
            "total": 340,
            "hp": 70,
            "attack": 75,
            "defense": 50,
            "spAtk": 45,
            "spDef": 50,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/stufful.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/stufful.avif"
        }
    },
    {
        "id": 760,
        "name": "Bewear",
        "form": null,
        "types": [
            "Normal",
            "Fighting"
        ],
        "stats": {
            "total": 500,
            "hp": 120,
            "attack": 125,
            "defense": 80,
            "spAtk": 55,
            "spDef": 60,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bewear.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bewear.avif"
        }
    },
    {
        "id": 761,
        "name": "Bounsweet",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 210,
            "hp": 42,
            "attack": 30,
            "defense": 38,
            "spAtk": 30,
            "spDef": 38,
            "speed": 32
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bounsweet.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bounsweet.avif"
        }
    },
    {
        "id": 762,
        "name": "Steenee",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 290,
            "hp": 52,
            "attack": 40,
            "defense": 48,
            "spAtk": 40,
            "spDef": 48,
            "speed": 62
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/steenee.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/steenee.avif"
        }
    },
    {
        "id": 763,
        "name": "Tsareena",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 510,
            "hp": 72,
            "attack": 120,
            "defense": 98,
            "spAtk": 50,
            "spDef": 98,
            "speed": 72
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tsareena.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tsareena.avif"
        }
    },
    {
        "id": 764,
        "name": "Comfey",
        "form": null,
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 485,
            "hp": 51,
            "attack": 52,
            "defense": 90,
            "spAtk": 82,
            "spDef": 110,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/comfey.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/comfey.avif"
        }
    },
    {
        "id": 765,
        "name": "Oranguru",
        "form": null,
        "types": [
            "Normal",
            "Psychic"
        ],
        "stats": {
            "total": 490,
            "hp": 90,
            "attack": 60,
            "defense": 80,
            "spAtk": 90,
            "spDef": 110,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/oranguru.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/oranguru.avif"
        }
    },
    {
        "id": 766,
        "name": "Passimian",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 490,
            "hp": 100,
            "attack": 120,
            "defense": 90,
            "spAtk": 40,
            "spDef": 60,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/passimian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/passimian.avif"
        }
    },
    {
        "id": 767,
        "name": "Wimpod",
        "form": null,
        "types": [
            "Bug",
            "Water"
        ],
        "stats": {
            "total": 230,
            "hp": 25,
            "attack": 35,
            "defense": 40,
            "spAtk": 20,
            "spDef": 30,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wimpod.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wimpod.avif"
        }
    },
    {
        "id": 768,
        "name": "Golisopod",
        "form": null,
        "types": [
            "Bug",
            "Water"
        ],
        "stats": {
            "total": 530,
            "hp": 75,
            "attack": 125,
            "defense": 140,
            "spAtk": 60,
            "spDef": 90,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/golisopod.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/golisopod.avif"
        }
    },
    {
        "id": 769,
        "name": "Sandygast",
        "form": null,
        "types": [
            "Ghost",
            "Ground"
        ],
        "stats": {
            "total": 320,
            "hp": 55,
            "attack": 55,
            "defense": 80,
            "spAtk": 70,
            "spDef": 45,
            "speed": 15
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sandygast.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sandygast.avif"
        }
    },
    {
        "id": 770,
        "name": "Palossand",
        "form": null,
        "types": [
            "Ghost",
            "Ground"
        ],
        "stats": {
            "total": 480,
            "hp": 85,
            "attack": 75,
            "defense": 110,
            "spAtk": 100,
            "spDef": 75,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/palossand.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/palossand.avif"
        }
    },
    {
        "id": 771,
        "name": "Pyukumuku",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 410,
            "hp": 55,
            "attack": 60,
            "defense": 130,
            "spAtk": 30,
            "spDef": 130,
            "speed": 5
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pyukumuku.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pyukumuku.avif"
        }
    },
    {
        "id": 772,
        "name": "Type: Null",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 534,
            "hp": 95,
            "attack": 95,
            "defense": 95,
            "spAtk": 95,
            "spDef": 95,
            "speed": 59
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/type-null.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/type-null.avif"
        }
    },
    {
        "id": 773,
        "name": "Silvally",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 570,
            "hp": 95,
            "attack": 95,
            "defense": 95,
            "spAtk": 95,
            "spDef": 95,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/silvally.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/silvally.avif"
        }
    },
    {
        "id": 774,
        "name": "Minior",
        "form": "Meteor Form",
        "types": [
            "Rock",
            "Flying"
        ],
        "stats": {
            "total": 440,
            "hp": 60,
            "attack": 60,
            "defense": 100,
            "spAtk": 60,
            "spDef": 100,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/minior-meteor.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/minior-meteor.avif"
        }
    },
    {
        "id": 774,
        "name": "Minior",
        "form": "Core Form",
        "types": [
            "Rock",
            "Flying"
        ],
        "stats": {
            "total": 500,
            "hp": 60,
            "attack": 100,
            "defense": 60,
            "spAtk": 100,
            "spDef": 60,
            "speed": 120
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/minior-core.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/minior-core.avif"
        }
    },
    {
        "id": 775,
        "name": "Komala",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 480,
            "hp": 65,
            "attack": 115,
            "defense": 65,
            "spAtk": 75,
            "spDef": 95,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/komala.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/komala.avif"
        }
    },
    {
        "id": 776,
        "name": "Turtonator",
        "form": null,
        "types": [
            "Fire",
            "Dragon"
        ],
        "stats": {
            "total": 485,
            "hp": 60,
            "attack": 78,
            "defense": 135,
            "spAtk": 91,
            "spDef": 85,
            "speed": 36
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/turtonator.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/turtonator.avif"
        }
    },
    {
        "id": 777,
        "name": "Togedemaru",
        "form": null,
        "types": [
            "Electric",
            "Steel"
        ],
        "stats": {
            "total": 435,
            "hp": 65,
            "attack": 98,
            "defense": 63,
            "spAtk": 40,
            "spDef": 73,
            "speed": 96
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/togedemaru.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/togedemaru.avif"
        }
    },
    {
        "id": 778,
        "name": "Mimikyu",
        "form": null,
        "types": [
            "Ghost",
            "Fairy"
        ],
        "stats": {
            "total": 476,
            "hp": 55,
            "attack": 90,
            "defense": 80,
            "spAtk": 50,
            "spDef": 105,
            "speed": 96
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mimikyu.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mimikyu.avif"
        }
    },
    {
        "id": 779,
        "name": "Bruxish",
        "form": null,
        "types": [
            "Water",
            "Psychic"
        ],
        "stats": {
            "total": 475,
            "hp": 68,
            "attack": 105,
            "defense": 70,
            "spAtk": 70,
            "spDef": 70,
            "speed": 92
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bruxish.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bruxish.avif"
        }
    },
    {
        "id": 780,
        "name": "Drampa",
        "form": null,
        "types": [
            "Normal",
            "Dragon"
        ],
        "stats": {
            "total": 485,
            "hp": 78,
            "attack": 60,
            "defense": 85,
            "spAtk": 135,
            "spDef": 91,
            "speed": 36
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/drampa.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/drampa.avif"
        }
    },
    {
        "id": 781,
        "name": "Dhelmise",
        "form": null,
        "types": [
            "Ghost",
            "Grass"
        ],
        "stats": {
            "total": 517,
            "hp": 70,
            "attack": 131,
            "defense": 100,
            "spAtk": 86,
            "spDef": 90,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dhelmise.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dhelmise.avif"
        }
    },
    {
        "id": 782,
        "name": "Jangmo-o",
        "form": null,
        "types": [
            "Dragon"
        ],
        "stats": {
            "total": 300,
            "hp": 45,
            "attack": 55,
            "defense": 65,
            "spAtk": 45,
            "spDef": 45,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/jangmo-o.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/jangmo-o.avif"
        }
    },
    {
        "id": 783,
        "name": "Hakamo-o",
        "form": null,
        "types": [
            "Dragon",
            "Fighting"
        ],
        "stats": {
            "total": 420,
            "hp": 55,
            "attack": 75,
            "defense": 90,
            "spAtk": 65,
            "spDef": 70,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/hakamo-o.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/hakamo-o.avif"
        }
    },
    {
        "id": 784,
        "name": "Kommo-o",
        "form": null,
        "types": [
            "Dragon",
            "Fighting"
        ],
        "stats": {
            "total": 600,
            "hp": 75,
            "attack": 110,
            "defense": 125,
            "spAtk": 100,
            "spDef": 105,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kommo-o.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kommo-o.avif"
        }
    },
    {
        "id": 785,
        "name": "Tapu Koko",
        "form": null,
        "types": [
            "Electric",
            "Fairy"
        ],
        "stats": {
            "total": 570,
            "hp": 70,
            "attack": 115,
            "defense": 85,
            "spAtk": 95,
            "spDef": 75,
            "speed": 130
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tapu-koko.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tapu-koko.avif"
        }
    },
    {
        "id": 786,
        "name": "Tapu Lele",
        "form": null,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "stats": {
            "total": 570,
            "hp": 70,
            "attack": 85,
            "defense": 75,
            "spAtk": 130,
            "spDef": 115,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tapu-lele.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tapu-lele.avif"
        }
    },
    {
        "id": 787,
        "name": "Tapu Bulu",
        "form": null,
        "types": [
            "Grass",
            "Fairy"
        ],
        "stats": {
            "total": 570,
            "hp": 70,
            "attack": 130,
            "defense": 115,
            "spAtk": 85,
            "spDef": 95,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tapu-bulu.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tapu-bulu.avif"
        }
    },
    {
        "id": 788,
        "name": "Tapu Fini",
        "form": null,
        "types": [
            "Water",
            "Fairy"
        ],
        "stats": {
            "total": 570,
            "hp": 70,
            "attack": 75,
            "defense": 115,
            "spAtk": 95,
            "spDef": 130,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tapu-fini.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tapu-fini.avif"
        }
    },
    {
        "id": 789,
        "name": "Cosmog",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 200,
            "hp": 43,
            "attack": 29,
            "defense": 31,
            "spAtk": 29,
            "spDef": 31,
            "speed": 37
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cosmog.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cosmog.avif"
        }
    },
    {
        "id": 790,
        "name": "Cosmoem",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 400,
            "hp": 43,
            "attack": 29,
            "defense": 131,
            "spAtk": 29,
            "spDef": 131,
            "speed": 37
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cosmoem.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cosmoem.avif"
        }
    },
    {
        "id": 791,
        "name": "Solgaleo",
        "form": null,
        "types": [
            "Psychic",
            "Steel"
        ],
        "stats": {
            "total": 680,
            "hp": 137,
            "attack": 137,
            "defense": 107,
            "spAtk": 113,
            "spDef": 89,
            "speed": 97
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/solgaleo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/solgaleo.avif"
        }
    },
    {
        "id": 792,
        "name": "Lunala",
        "form": null,
        "types": [
            "Psychic",
            "Ghost"
        ],
        "stats": {
            "total": 680,
            "hp": 137,
            "attack": 113,
            "defense": 89,
            "spAtk": 137,
            "spDef": 107,
            "speed": 97
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lunala.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lunala.avif"
        }
    },
    {
        "id": 793,
        "name": "Nihilego",
        "form": null,
        "types": [
            "Rock",
            "Poison"
        ],
        "stats": {
            "total": 570,
            "hp": 109,
            "attack": 53,
            "defense": 47,
            "spAtk": 127,
            "spDef": 131,
            "speed": 103
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/nihilego.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/nihilego.avif"
        }
    },
    {
        "id": 794,
        "name": "Buzzwole",
        "form": null,
        "types": [
            "Bug",
            "Fighting"
        ],
        "stats": {
            "total": 570,
            "hp": 107,
            "attack": 139,
            "defense": 139,
            "spAtk": 53,
            "spDef": 53,
            "speed": 79
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/buzzwole.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/buzzwole.avif"
        }
    },
    {
        "id": 795,
        "name": "Pheromosa",
        "form": null,
        "types": [
            "Bug",
            "Fighting"
        ],
        "stats": {
            "total": 570,
            "hp": 71,
            "attack": 137,
            "defense": 37,
            "spAtk": 137,
            "spDef": 37,
            "speed": 151
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pheromosa.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pheromosa.avif"
        }
    },
    {
        "id": 796,
        "name": "Xurkitree",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 570,
            "hp": 83,
            "attack": 89,
            "defense": 71,
            "spAtk": 173,
            "spDef": 71,
            "speed": 83
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/xurkitree.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/xurkitree.avif"
        }
    },
    {
        "id": 797,
        "name": "Celesteela",
        "form": null,
        "types": [
            "Steel",
            "Flying"
        ],
        "stats": {
            "total": 570,
            "hp": 97,
            "attack": 101,
            "defense": 103,
            "spAtk": 107,
            "spDef": 101,
            "speed": 61
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/celesteela.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/celesteela.avif"
        }
    },
    {
        "id": 798,
        "name": "Kartana",
        "form": null,
        "types": [
            "Grass",
            "Steel"
        ],
        "stats": {
            "total": 570,
            "hp": 59,
            "attack": 181,
            "defense": 131,
            "spAtk": 59,
            "spDef": 31,
            "speed": 109
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kartana.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kartana.avif"
        }
    },
    {
        "id": 799,
        "name": "Guzzlord",
        "form": null,
        "types": [
            "Dark",
            "Dragon"
        ],
        "stats": {
            "total": 570,
            "hp": 223,
            "attack": 101,
            "defense": 53,
            "spAtk": 97,
            "spDef": 53,
            "speed": 43
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/guzzlord.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/guzzlord.avif"
        }
    },
    {
        "id": 800,
        "name": "Necrozma",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 600,
            "hp": 97,
            "attack": 107,
            "defense": 101,
            "spAtk": 127,
            "spDef": 89,
            "speed": 79
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/necrozma.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/necrozma.avif"
        }
    },
    {
        "id": 800,
        "name": "Necrozma",
        "form": "Dusk Mane Necrozma",
        "types": [
            "Psychic",
            "Steel"
        ],
        "stats": {
            "total": 680,
            "hp": 97,
            "attack": 157,
            "defense": 127,
            "spAtk": 113,
            "spDef": 109,
            "speed": 77
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/necrozma-dusk-mane.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/necrozma-dusk-mane.avif"
        }
    },
    {
        "id": 800,
        "name": "Necrozma",
        "form": "Dawn Wings Necrozma",
        "types": [
            "Psychic",
            "Ghost"
        ],
        "stats": {
            "total": 680,
            "hp": 97,
            "attack": 113,
            "defense": 109,
            "spAtk": 157,
            "spDef": 127,
            "speed": 77
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/necrozma-dawn-wings.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/necrozma-dawn-wings.avif"
        }
    },
    {
        "id": 800,
        "name": "Necrozma",
        "form": "Ultra Necrozma",
        "types": [
            "Psychic",
            "Dragon"
        ],
        "stats": {
            "total": 754,
            "hp": 97,
            "attack": 167,
            "defense": 97,
            "spAtk": 167,
            "spDef": 97,
            "speed": 129
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/necrozma-ultra.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/necrozma-ultra.avif"
        }
    },
    {
        "id": 801,
        "name": "Magearna",
        "form": null,
        "types": [
            "Steel",
            "Fairy"
        ],
        "stats": {
            "total": 600,
            "hp": 80,
            "attack": 95,
            "defense": 115,
            "spAtk": 130,
            "spDef": 115,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/magearna.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/magearna.avif"
        }
    },
    {
        "id": 802,
        "name": "Marshadow",
        "form": null,
        "types": [
            "Fighting",
            "Ghost"
        ],
        "stats": {
            "total": 600,
            "hp": 90,
            "attack": 125,
            "defense": 80,
            "spAtk": 90,
            "spDef": 90,
            "speed": 125
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/marshadow.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/marshadow.avif"
        }
    },
    {
        "id": 803,
        "name": "Poipole",
        "form": null,
        "types": [
            "Poison"
        ],
        "stats": {
            "total": 420,
            "hp": 67,
            "attack": 73,
            "defense": 67,
            "spAtk": 73,
            "spDef": 67,
            "speed": 73
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/poipole.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/poipole.avif"
        }
    },
    {
        "id": 804,
        "name": "Naganadel",
        "form": null,
        "types": [
            "Poison",
            "Dragon"
        ],
        "stats": {
            "total": 540,
            "hp": 73,
            "attack": 73,
            "defense": 73,
            "spAtk": 127,
            "spDef": 73,
            "speed": 121
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/naganadel.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/naganadel.avif"
        }
    },
    {
        "id": 805,
        "name": "Stakataka",
        "form": null,
        "types": [
            "Rock",
            "Steel"
        ],
        "stats": {
            "total": 570,
            "hp": 61,
            "attack": 131,
            "defense": 211,
            "spAtk": 53,
            "spDef": 101,
            "speed": 13
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/stakataka.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/stakataka.avif"
        }
    },
    {
        "id": 806,
        "name": "Blacephalon",
        "form": null,
        "types": [
            "Fire",
            "Ghost"
        ],
        "stats": {
            "total": 570,
            "hp": 53,
            "attack": 127,
            "defense": 53,
            "spAtk": 151,
            "spDef": 79,
            "speed": 107
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/blacephalon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/blacephalon.avif"
        }
    },
    {
        "id": 807,
        "name": "Zeraora",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 600,
            "hp": 88,
            "attack": 112,
            "defense": 75,
            "spAtk": 102,
            "spDef": 80,
            "speed": 143
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zeraora.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zeraora.avif"
        }
    },
    {
        "id": 808,
        "name": "Meltan",
        "form": null,
        "types": [
            "Steel"
        ],
        "stats": {
            "total": 300,
            "hp": 46,
            "attack": 65,
            "defense": 65,
            "spAtk": 55,
            "spDef": 35,
            "speed": 34
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/meltan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/meltan.avif"
        }
    },
    {
        "id": 809,
        "name": "Melmetal",
        "form": null,
        "types": [
            "Steel"
        ],
        "stats": {
            "total": 600,
            "hp": 135,
            "attack": 143,
            "defense": 143,
            "spAtk": 80,
            "spDef": 65,
            "speed": 34
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/melmetal.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/melmetal.avif"
        }
    },
    {
        "id": 810,
        "name": "Grookey",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 310,
            "hp": 50,
            "attack": 65,
            "defense": 50,
            "spAtk": 40,
            "spDef": 40,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/grookey.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/grookey.avif"
        }
    },
    {
        "id": 811,
        "name": "Thwackey",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 420,
            "hp": 70,
            "attack": 85,
            "defense": 70,
            "spAtk": 55,
            "spDef": 60,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/thwackey.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/thwackey.avif"
        }
    },
    {
        "id": 812,
        "name": "Rillaboom",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 530,
            "hp": 100,
            "attack": 125,
            "defense": 90,
            "spAtk": 60,
            "spDef": 70,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rillaboom.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rillaboom.avif"
        }
    },
    {
        "id": 813,
        "name": "Scorbunny",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 310,
            "hp": 50,
            "attack": 71,
            "defense": 40,
            "spAtk": 40,
            "spDef": 40,
            "speed": 69
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/scorbunny.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/scorbunny.avif"
        }
    },
    {
        "id": 814,
        "name": "Raboot",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 420,
            "hp": 65,
            "attack": 86,
            "defense": 60,
            "spAtk": 55,
            "spDef": 60,
            "speed": 94
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/raboot.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/raboot.avif"
        }
    },
    {
        "id": 815,
        "name": "Cinderace",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 530,
            "hp": 80,
            "attack": 116,
            "defense": 75,
            "spAtk": 65,
            "spDef": 75,
            "speed": 119
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cinderace.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cinderace.avif"
        }
    },
    {
        "id": 816,
        "name": "Sobble",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 310,
            "hp": 50,
            "attack": 40,
            "defense": 40,
            "spAtk": 70,
            "spDef": 40,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sobble.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sobble.avif"
        }
    },
    {
        "id": 817,
        "name": "Drizzile",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 420,
            "hp": 65,
            "attack": 60,
            "defense": 55,
            "spAtk": 95,
            "spDef": 55,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/drizzile.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/drizzile.avif"
        }
    },
    {
        "id": 818,
        "name": "Inteleon",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 530,
            "hp": 70,
            "attack": 85,
            "defense": 65,
            "spAtk": 125,
            "spDef": 65,
            "speed": 120
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/inteleon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/inteleon.avif"
        }
    },
    {
        "id": 819,
        "name": "Skwovet",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 275,
            "hp": 70,
            "attack": 55,
            "defense": 55,
            "spAtk": 35,
            "spDef": 35,
            "speed": 25
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/skwovet.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/skwovet.avif"
        }
    },
    {
        "id": 820,
        "name": "Greedent",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 460,
            "hp": 120,
            "attack": 95,
            "defense": 95,
            "spAtk": 55,
            "spDef": 75,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/greedent.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/greedent.avif"
        }
    },
    {
        "id": 821,
        "name": "Rookidee",
        "form": null,
        "types": [
            "Flying"
        ],
        "stats": {
            "total": 245,
            "hp": 38,
            "attack": 47,
            "defense": 35,
            "spAtk": 33,
            "spDef": 35,
            "speed": 57
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rookidee.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rookidee.avif"
        }
    },
    {
        "id": 822,
        "name": "Corvisquire",
        "form": null,
        "types": [
            "Flying"
        ],
        "stats": {
            "total": 365,
            "hp": 68,
            "attack": 67,
            "defense": 55,
            "spAtk": 43,
            "spDef": 55,
            "speed": 77
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/corvisquire.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/corvisquire.avif"
        }
    },
    {
        "id": 823,
        "name": "Corviknight",
        "form": null,
        "types": [
            "Flying",
            "Steel"
        ],
        "stats": {
            "total": 495,
            "hp": 98,
            "attack": 87,
            "defense": 105,
            "spAtk": 53,
            "spDef": 85,
            "speed": 67
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/corviknight.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/corviknight.avif"
        }
    },
    {
        "id": 824,
        "name": "Blipbug",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 180,
            "hp": 25,
            "attack": 20,
            "defense": 20,
            "spAtk": 25,
            "spDef": 45,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/blipbug.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/blipbug.avif"
        }
    },
    {
        "id": 825,
        "name": "Dottler",
        "form": null,
        "types": [
            "Bug",
            "Psychic"
        ],
        "stats": {
            "total": 335,
            "hp": 50,
            "attack": 35,
            "defense": 80,
            "spAtk": 50,
            "spDef": 90,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dottler.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dottler.avif"
        }
    },
    {
        "id": 826,
        "name": "Orbeetle",
        "form": null,
        "types": [
            "Bug",
            "Psychic"
        ],
        "stats": {
            "total": 505,
            "hp": 60,
            "attack": 45,
            "defense": 110,
            "spAtk": 80,
            "spDef": 120,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/orbeetle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/orbeetle.avif"
        }
    },
    {
        "id": 827,
        "name": "Nickit",
        "form": null,
        "types": [
            "Dark"
        ],
        "stats": {
            "total": 245,
            "hp": 40,
            "attack": 28,
            "defense": 28,
            "spAtk": 47,
            "spDef": 52,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/nickit.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/nickit.avif"
        }
    },
    {
        "id": 828,
        "name": "Thievul",
        "form": null,
        "types": [
            "Dark"
        ],
        "stats": {
            "total": 455,
            "hp": 70,
            "attack": 58,
            "defense": 58,
            "spAtk": 87,
            "spDef": 92,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/thievul.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/thievul.avif"
        }
    },
    {
        "id": 829,
        "name": "Gossifleur",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 250,
            "hp": 40,
            "attack": 40,
            "defense": 60,
            "spAtk": 40,
            "spDef": 60,
            "speed": 10
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gossifleur.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gossifleur.avif"
        }
    },
    {
        "id": 830,
        "name": "Eldegoss",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 460,
            "hp": 60,
            "attack": 50,
            "defense": 90,
            "spAtk": 80,
            "spDef": 120,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/eldegoss.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/eldegoss.avif"
        }
    },
    {
        "id": 831,
        "name": "Wooloo",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 270,
            "hp": 42,
            "attack": 40,
            "defense": 55,
            "spAtk": 40,
            "spDef": 45,
            "speed": 48
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wooloo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wooloo.avif"
        }
    },
    {
        "id": 832,
        "name": "Dubwool",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 490,
            "hp": 72,
            "attack": 80,
            "defense": 100,
            "spAtk": 60,
            "spDef": 90,
            "speed": 88
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dubwool.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dubwool.avif"
        }
    },
    {
        "id": 833,
        "name": "Chewtle",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 284,
            "hp": 50,
            "attack": 64,
            "defense": 50,
            "spAtk": 38,
            "spDef": 38,
            "speed": 44
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/chewtle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/chewtle.avif"
        }
    },
    {
        "id": 834,
        "name": "Drednaw",
        "form": null,
        "types": [
            "Water",
            "Rock"
        ],
        "stats": {
            "total": 485,
            "hp": 90,
            "attack": 115,
            "defense": 90,
            "spAtk": 48,
            "spDef": 68,
            "speed": 74
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/drednaw.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/drednaw.avif"
        }
    },
    {
        "id": 835,
        "name": "Yamper",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 270,
            "hp": 59,
            "attack": 45,
            "defense": 50,
            "spAtk": 40,
            "spDef": 50,
            "speed": 26
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/yamper.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/yamper.avif"
        }
    },
    {
        "id": 836,
        "name": "Boltund",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 490,
            "hp": 69,
            "attack": 90,
            "defense": 60,
            "spAtk": 90,
            "spDef": 60,
            "speed": 121
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/boltund.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/boltund.avif"
        }
    },
    {
        "id": 837,
        "name": "Rolycoly",
        "form": null,
        "types": [
            "Rock"
        ],
        "stats": {
            "total": 240,
            "hp": 30,
            "attack": 40,
            "defense": 50,
            "spAtk": 40,
            "spDef": 50,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rolycoly.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rolycoly.avif"
        }
    },
    {
        "id": 838,
        "name": "Carkol",
        "form": null,
        "types": [
            "Rock",
            "Fire"
        ],
        "stats": {
            "total": 410,
            "hp": 80,
            "attack": 60,
            "defense": 90,
            "spAtk": 60,
            "spDef": 70,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/carkol.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/carkol.avif"
        }
    },
    {
        "id": 839,
        "name": "Coalossal",
        "form": null,
        "types": [
            "Rock",
            "Fire"
        ],
        "stats": {
            "total": 510,
            "hp": 110,
            "attack": 80,
            "defense": 120,
            "spAtk": 80,
            "spDef": 90,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/coalossal.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/coalossal.avif"
        }
    },
    {
        "id": 840,
        "name": "Applin",
        "form": null,
        "types": [
            "Grass",
            "Dragon"
        ],
        "stats": {
            "total": 260,
            "hp": 40,
            "attack": 40,
            "defense": 80,
            "spAtk": 40,
            "spDef": 40,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/applin.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/applin.avif"
        }
    },
    {
        "id": 841,
        "name": "Flapple",
        "form": null,
        "types": [
            "Grass",
            "Dragon"
        ],
        "stats": {
            "total": 485,
            "hp": 70,
            "attack": 110,
            "defense": 80,
            "spAtk": 95,
            "spDef": 60,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/flapple.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/flapple.avif"
        }
    },
    {
        "id": 842,
        "name": "Appletun",
        "form": null,
        "types": [
            "Grass",
            "Dragon"
        ],
        "stats": {
            "total": 485,
            "hp": 110,
            "attack": 85,
            "defense": 80,
            "spAtk": 100,
            "spDef": 80,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/appletun.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/appletun.avif"
        }
    },
    {
        "id": 843,
        "name": "Silicobra",
        "form": null,
        "types": [
            "Ground"
        ],
        "stats": {
            "total": 315,
            "hp": 52,
            "attack": 57,
            "defense": 75,
            "spAtk": 35,
            "spDef": 50,
            "speed": 46
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/silicobra.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/silicobra.avif"
        }
    },
    {
        "id": 844,
        "name": "Sandaconda",
        "form": null,
        "types": [
            "Ground"
        ],
        "stats": {
            "total": 510,
            "hp": 72,
            "attack": 107,
            "defense": 125,
            "spAtk": 65,
            "spDef": 70,
            "speed": 71
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sandaconda.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sandaconda.avif"
        }
    },
    {
        "id": 845,
        "name": "Cramorant",
        "form": null,
        "types": [
            "Flying",
            "Water"
        ],
        "stats": {
            "total": 475,
            "hp": 70,
            "attack": 85,
            "defense": 55,
            "spAtk": 85,
            "spDef": 95,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cramorant.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cramorant.avif"
        }
    },
    {
        "id": 846,
        "name": "Arrokuda",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 280,
            "hp": 41,
            "attack": 63,
            "defense": 40,
            "spAtk": 40,
            "spDef": 30,
            "speed": 66
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/arrokuda.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/arrokuda.avif"
        }
    },
    {
        "id": 847,
        "name": "Barraskewda",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 490,
            "hp": 61,
            "attack": 123,
            "defense": 60,
            "spAtk": 60,
            "spDef": 50,
            "speed": 136
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/barraskewda.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/barraskewda.avif"
        }
    },
    {
        "id": 848,
        "name": "Toxel",
        "form": null,
        "types": [
            "Electric",
            "Poison"
        ],
        "stats": {
            "total": 242,
            "hp": 40,
            "attack": 38,
            "defense": 35,
            "spAtk": 54,
            "spDef": 35,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/toxel.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/toxel.avif"
        }
    },
    {
        "id": 849,
        "name": "Toxtricity",
        "form": "Amped Form",
        "types": [
            "Electric",
            "Poison"
        ],
        "stats": {
            "total": 502,
            "hp": 75,
            "attack": 98,
            "defense": 70,
            "spAtk": 114,
            "spDef": 70,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/toxtricity-amped.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/toxtricity-amped.avif"
        }
    },
    {
        "id": 849,
        "name": "Toxtricity",
        "form": "Low Key Form",
        "types": [
            "Electric",
            "Poison"
        ],
        "stats": {
            "total": 502,
            "hp": 75,
            "attack": 98,
            "defense": 70,
            "spAtk": 114,
            "spDef": 70,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/toxtricity-low-key.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/toxtricity-low-key.avif"
        }
    },
    {
        "id": 850,
        "name": "Sizzlipede",
        "form": null,
        "types": [
            "Fire",
            "Bug"
        ],
        "stats": {
            "total": 305,
            "hp": 50,
            "attack": 65,
            "defense": 45,
            "spAtk": 50,
            "spDef": 50,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sizzlipede.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sizzlipede.avif"
        }
    },
    {
        "id": 851,
        "name": "Centiskorch",
        "form": null,
        "types": [
            "Fire",
            "Bug"
        ],
        "stats": {
            "total": 525,
            "hp": 100,
            "attack": 115,
            "defense": 65,
            "spAtk": 90,
            "spDef": 90,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/centiskorch.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/centiskorch.avif"
        }
    },
    {
        "id": 852,
        "name": "Clobbopus",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 310,
            "hp": 50,
            "attack": 68,
            "defense": 60,
            "spAtk": 50,
            "spDef": 50,
            "speed": 32
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/clobbopus.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/clobbopus.avif"
        }
    },
    {
        "id": 853,
        "name": "Grapploct",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 480,
            "hp": 80,
            "attack": 118,
            "defense": 90,
            "spAtk": 70,
            "spDef": 80,
            "speed": 42
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/grapploct.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/grapploct.avif"
        }
    },
    {
        "id": 854,
        "name": "Sinistea",
        "form": null,
        "types": [
            "Ghost"
        ],
        "stats": {
            "total": 308,
            "hp": 40,
            "attack": 45,
            "defense": 45,
            "spAtk": 74,
            "spDef": 54,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sinistea.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sinistea.avif"
        }
    },
    {
        "id": 855,
        "name": "Polteageist",
        "form": null,
        "types": [
            "Ghost"
        ],
        "stats": {
            "total": 508,
            "hp": 60,
            "attack": 65,
            "defense": 65,
            "spAtk": 134,
            "spDef": 114,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/polteageist.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/polteageist.avif"
        }
    },
    {
        "id": 856,
        "name": "Hatenna",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 265,
            "hp": 42,
            "attack": 30,
            "defense": 45,
            "spAtk": 56,
            "spDef": 53,
            "speed": 39
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/hatenna.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/hatenna.avif"
        }
    },
    {
        "id": 857,
        "name": "Hattrem",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 370,
            "hp": 57,
            "attack": 40,
            "defense": 65,
            "spAtk": 86,
            "spDef": 73,
            "speed": 49
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/hattrem.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/hattrem.avif"
        }
    },
    {
        "id": 858,
        "name": "Hatterene",
        "form": null,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "stats": {
            "total": 510,
            "hp": 57,
            "attack": 90,
            "defense": 95,
            "spAtk": 136,
            "spDef": 103,
            "speed": 29
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/hatterene.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/hatterene.avif"
        }
    },
    {
        "id": 859,
        "name": "Impidimp",
        "form": null,
        "types": [
            "Dark",
            "Fairy"
        ],
        "stats": {
            "total": 265,
            "hp": 45,
            "attack": 45,
            "defense": 30,
            "spAtk": 55,
            "spDef": 40,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/impidimp.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/impidimp.avif"
        }
    },
    {
        "id": 860,
        "name": "Morgrem",
        "form": null,
        "types": [
            "Dark",
            "Fairy"
        ],
        "stats": {
            "total": 370,
            "hp": 65,
            "attack": 60,
            "defense": 45,
            "spAtk": 75,
            "spDef": 55,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/morgrem.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/morgrem.avif"
        }
    },
    {
        "id": 861,
        "name": "Grimmsnarl",
        "form": null,
        "types": [
            "Dark",
            "Fairy"
        ],
        "stats": {
            "total": 510,
            "hp": 95,
            "attack": 120,
            "defense": 65,
            "spAtk": 95,
            "spDef": 75,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/grimmsnarl.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/grimmsnarl.avif"
        }
    },
    {
        "id": 862,
        "name": "Obstagoon",
        "form": null,
        "types": [
            "Dark",
            "Normal"
        ],
        "stats": {
            "total": 520,
            "hp": 93,
            "attack": 90,
            "defense": 101,
            "spAtk": 60,
            "spDef": 81,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/obstagoon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/obstagoon.avif"
        }
    },
    {
        "id": 863,
        "name": "Perrserker",
        "form": null,
        "types": [
            "Steel"
        ],
        "stats": {
            "total": 440,
            "hp": 70,
            "attack": 110,
            "defense": 100,
            "spAtk": 50,
            "spDef": 60,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/perrserker.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/perrserker.avif"
        }
    },
    {
        "id": 864,
        "name": "Cursola",
        "form": null,
        "types": [
            "Ghost"
        ],
        "stats": {
            "total": 510,
            "hp": 60,
            "attack": 95,
            "defense": 50,
            "spAtk": 145,
            "spDef": 130,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cursola.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cursola.avif"
        }
    },
    {
        "id": 865,
        "name": "Sirfetch'd",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 507,
            "hp": 62,
            "attack": 135,
            "defense": 95,
            "spAtk": 68,
            "spDef": 82,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sirfetchd.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sirfetchd.avif"
        }
    },
    {
        "id": 866,
        "name": "Mr. Rime",
        "form": null,
        "types": [
            "Ice",
            "Psychic"
        ],
        "stats": {
            "total": 520,
            "hp": 80,
            "attack": 85,
            "defense": 75,
            "spAtk": 110,
            "spDef": 100,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mr-rime.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mr-rime.avif"
        }
    },
    {
        "id": 867,
        "name": "Runerigus",
        "form": null,
        "types": [
            "Ground",
            "Ghost"
        ],
        "stats": {
            "total": 483,
            "hp": 58,
            "attack": 95,
            "defense": 145,
            "spAtk": 50,
            "spDef": 105,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/runerigus.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/runerigus.avif"
        }
    },
    {
        "id": 868,
        "name": "Milcery",
        "form": null,
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 270,
            "hp": 45,
            "attack": 40,
            "defense": 40,
            "spAtk": 50,
            "spDef": 61,
            "speed": 34
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/milcery.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/milcery.avif"
        }
    },
    {
        "id": 869,
        "name": "Alcremie",
        "form": null,
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 495,
            "hp": 65,
            "attack": 60,
            "defense": 75,
            "spAtk": 110,
            "spDef": 121,
            "speed": 64
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/alcremie.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/alcremie.avif"
        }
    },
    {
        "id": 870,
        "name": "Falinks",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 470,
            "hp": 65,
            "attack": 100,
            "defense": 100,
            "spAtk": 70,
            "spDef": 60,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/falinks.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/falinks.avif"
        }
    },
    {
        "id": 871,
        "name": "Pincurchin",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 435,
            "hp": 48,
            "attack": 101,
            "defense": 95,
            "spAtk": 91,
            "spDef": 85,
            "speed": 15
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pincurchin.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pincurchin.avif"
        }
    },
    {
        "id": 872,
        "name": "Snom",
        "form": null,
        "types": [
            "Ice",
            "Bug"
        ],
        "stats": {
            "total": 185,
            "hp": 30,
            "attack": 25,
            "defense": 35,
            "spAtk": 45,
            "spDef": 30,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/snom.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/snom.avif"
        }
    },
    {
        "id": 873,
        "name": "Frosmoth",
        "form": null,
        "types": [
            "Ice",
            "Bug"
        ],
        "stats": {
            "total": 475,
            "hp": 70,
            "attack": 65,
            "defense": 60,
            "spAtk": 125,
            "spDef": 90,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/frosmoth.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/frosmoth.avif"
        }
    },
    {
        "id": 874,
        "name": "Stonjourner",
        "form": null,
        "types": [
            "Rock"
        ],
        "stats": {
            "total": 470,
            "hp": 100,
            "attack": 125,
            "defense": 135,
            "spAtk": 20,
            "spDef": 20,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/stonjourner.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/stonjourner.avif"
        }
    },
    {
        "id": 875,
        "name": "Eiscue",
        "form": "Ice Face",
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 470,
            "hp": 75,
            "attack": 80,
            "defense": 110,
            "spAtk": 65,
            "spDef": 90,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/eiscue-ice.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/eiscue-ice.avif"
        }
    },
    {
        "id": 875,
        "name": "Eiscue",
        "form": "Noice Face",
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 470,
            "hp": 75,
            "attack": 80,
            "defense": 70,
            "spAtk": 65,
            "spDef": 50,
            "speed": 130
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/eiscue-noice.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/eiscue-noice.avif"
        }
    },
    {
        "id": 876,
        "name": "Indeedee",
        "form": "Male",
        "types": [
            "Psychic",
            "Normal"
        ],
        "stats": {
            "total": 475,
            "hp": 60,
            "attack": 65,
            "defense": 55,
            "spAtk": 105,
            "spDef": 95,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/indeedee-male.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/indeedee-male.avif"
        }
    },
    {
        "id": 876,
        "name": "Indeedee",
        "form": "Female",
        "types": [
            "Psychic",
            "Normal"
        ],
        "stats": {
            "total": 475,
            "hp": 70,
            "attack": 55,
            "defense": 65,
            "spAtk": 95,
            "spDef": 105,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/indeedee-female.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/indeedee-female.avif"
        }
    },
    {
        "id": 877,
        "name": "Morpeko",
        "form": "Full Belly Mode",
        "types": [
            "Electric",
            "Dark"
        ],
        "stats": {
            "total": 436,
            "hp": 58,
            "attack": 95,
            "defense": 58,
            "spAtk": 70,
            "spDef": 58,
            "speed": 97
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/morpeko-full-belly.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/morpeko-full-belly.avif"
        }
    },
    {
        "id": 877,
        "name": "Morpeko",
        "form": "Hangry Mode",
        "types": [
            "Electric",
            "Dark"
        ],
        "stats": {
            "total": 436,
            "hp": 58,
            "attack": 95,
            "defense": 58,
            "spAtk": 70,
            "spDef": 58,
            "speed": 97
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/morpeko-hangry.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/morpeko-hangry.avif"
        }
    },
    {
        "id": 878,
        "name": "Cufant",
        "form": null,
        "types": [
            "Steel"
        ],
        "stats": {
            "total": 330,
            "hp": 72,
            "attack": 80,
            "defense": 49,
            "spAtk": 40,
            "spDef": 49,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cufant.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cufant.avif"
        }
    },
    {
        "id": 879,
        "name": "Copperajah",
        "form": null,
        "types": [
            "Steel"
        ],
        "stats": {
            "total": 500,
            "hp": 122,
            "attack": 130,
            "defense": 69,
            "spAtk": 80,
            "spDef": 69,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/copperajah.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/copperajah.avif"
        }
    },
    {
        "id": 880,
        "name": "Dracozolt",
        "form": null,
        "types": [
            "Electric",
            "Dragon"
        ],
        "stats": {
            "total": 505,
            "hp": 90,
            "attack": 100,
            "defense": 90,
            "spAtk": 80,
            "spDef": 70,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dracozolt.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dracozolt.avif"
        }
    },
    {
        "id": 881,
        "name": "Arctozolt",
        "form": null,
        "types": [
            "Electric",
            "Ice"
        ],
        "stats": {
            "total": 505,
            "hp": 90,
            "attack": 100,
            "defense": 90,
            "spAtk": 90,
            "spDef": 80,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/arctozolt.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/arctozolt.avif"
        }
    },
    {
        "id": 882,
        "name": "Dracovish",
        "form": null,
        "types": [
            "Water",
            "Dragon"
        ],
        "stats": {
            "total": 505,
            "hp": 90,
            "attack": 90,
            "defense": 100,
            "spAtk": 70,
            "spDef": 80,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dracovish.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dracovish.avif"
        }
    },
    {
        "id": 883,
        "name": "Arctovish",
        "form": null,
        "types": [
            "Water",
            "Ice"
        ],
        "stats": {
            "total": 505,
            "hp": 90,
            "attack": 90,
            "defense": 100,
            "spAtk": 80,
            "spDef": 90,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/arctovish.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/arctovish.avif"
        }
    },
    {
        "id": 884,
        "name": "Duraludon",
        "form": null,
        "types": [
            "Steel",
            "Dragon"
        ],
        "stats": {
            "total": 535,
            "hp": 70,
            "attack": 95,
            "defense": 115,
            "spAtk": 120,
            "spDef": 50,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/duraludon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/duraludon.avif"
        }
    },
    {
        "id": 885,
        "name": "Dreepy",
        "form": null,
        "types": [
            "Dragon",
            "Ghost"
        ],
        "stats": {
            "total": 270,
            "hp": 28,
            "attack": 60,
            "defense": 30,
            "spAtk": 40,
            "spDef": 30,
            "speed": 82
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dreepy.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dreepy.avif"
        }
    },
    {
        "id": 886,
        "name": "Drakloak",
        "form": null,
        "types": [
            "Dragon",
            "Ghost"
        ],
        "stats": {
            "total": 410,
            "hp": 68,
            "attack": 80,
            "defense": 50,
            "spAtk": 60,
            "spDef": 50,
            "speed": 102
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/drakloak.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/drakloak.avif"
        }
    },
    {
        "id": 887,
        "name": "Dragapult",
        "form": null,
        "types": [
            "Dragon",
            "Ghost"
        ],
        "stats": {
            "total": 600,
            "hp": 88,
            "attack": 120,
            "defense": 75,
            "spAtk": 100,
            "spDef": 75,
            "speed": 142
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dragapult.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dragapult.avif"
        }
    },
    {
        "id": 888,
        "name": "Zacian",
        "form": "Hero of Many Battles",
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 660,
            "hp": 92,
            "attack": 120,
            "defense": 115,
            "spAtk": 80,
            "spDef": 115,
            "speed": 138
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zacian-hero.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zacian-hero.avif"
        }
    },
    {
        "id": 888,
        "name": "Zacian",
        "form": "Crowned Sword",
        "types": [
            "Fairy",
            "Steel"
        ],
        "stats": {
            "total": 700,
            "hp": 92,
            "attack": 150,
            "defense": 115,
            "spAtk": 80,
            "spDef": 115,
            "speed": 148
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zacian-crowned.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zacian-crowned.avif"
        }
    },
    {
        "id": 889,
        "name": "Zamazenta",
        "form": "Hero of Many Battles",
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 660,
            "hp": 92,
            "attack": 120,
            "defense": 115,
            "spAtk": 80,
            "spDef": 115,
            "speed": 138
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zamazenta-hero.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zamazenta-hero.avif"
        }
    },
    {
        "id": 889,
        "name": "Zamazenta",
        "form": "Crowned Shield",
        "types": [
            "Fighting",
            "Steel"
        ],
        "stats": {
            "total": 700,
            "hp": 92,
            "attack": 120,
            "defense": 140,
            "spAtk": 80,
            "spDef": 140,
            "speed": 128
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zamazenta-crowned.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zamazenta-crowned.avif"
        }
    },
    {
        "id": 890,
        "name": "Eternatus",
        "form": null,
        "types": [
            "Poison",
            "Dragon"
        ],
        "stats": {
            "total": 690,
            "hp": 140,
            "attack": 85,
            "defense": 95,
            "spAtk": 145,
            "spDef": 95,
            "speed": 130
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/eternatus.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/eternatus.avif"
        }
    },
    {
        "id": 890,
        "name": "Eternatus",
        "form": "Eternamax",
        "types": [
            "Poison",
            "Dragon"
        ],
        "stats": {
            "total": 1125,
            "hp": 255,
            "attack": 115,
            "defense": 250,
            "spAtk": 125,
            "spDef": 250,
            "speed": 130
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/eternatus-eternamax.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/eternatus-eternamax.avif"
        }
    },
    {
        "id": 891,
        "name": "Kubfu",
        "form": null,
        "types": [
            "Fighting"
        ],
        "stats": {
            "total": 385,
            "hp": 60,
            "attack": 90,
            "defense": 60,
            "spAtk": 53,
            "spDef": 50,
            "speed": 72
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kubfu.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kubfu.avif"
        }
    },
    {
        "id": 892,
        "name": "Urshifu",
        "form": "Single Strike Style",
        "types": [
            "Fighting",
            "Dark"
        ],
        "stats": {
            "total": 550,
            "hp": 100,
            "attack": 130,
            "defense": 100,
            "spAtk": 63,
            "spDef": 60,
            "speed": 97
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/urshifu-single-strike.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/urshifu-single-strike.avif"
        }
    },
    {
        "id": 892,
        "name": "Urshifu",
        "form": "Rapid Strike Style",
        "types": [
            "Fighting",
            "Water"
        ],
        "stats": {
            "total": 550,
            "hp": 100,
            "attack": 130,
            "defense": 100,
            "spAtk": 63,
            "spDef": 60,
            "speed": 97
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/urshifu-rapid-strike.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/urshifu-rapid-strike.avif"
        }
    },
    {
        "id": 893,
        "name": "Zarude",
        "form": null,
        "types": [
            "Dark",
            "Grass"
        ],
        "stats": {
            "total": 600,
            "hp": 105,
            "attack": 120,
            "defense": 105,
            "spAtk": 70,
            "spDef": 95,
            "speed": 105
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/zarude.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/zarude.avif"
        }
    },
    {
        "id": 894,
        "name": "Regieleki",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 580,
            "hp": 80,
            "attack": 100,
            "defense": 50,
            "spAtk": 100,
            "spDef": 50,
            "speed": 200
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/regieleki.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/regieleki.avif"
        }
    },
    {
        "id": 895,
        "name": "Regidrago",
        "form": null,
        "types": [
            "Dragon"
        ],
        "stats": {
            "total": 580,
            "hp": 200,
            "attack": 100,
            "defense": 50,
            "spAtk": 100,
            "spDef": 50,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/regidrago.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/regidrago.avif"
        }
    },
    {
        "id": 896,
        "name": "Glastrier",
        "form": null,
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 580,
            "hp": 100,
            "attack": 145,
            "defense": 130,
            "spAtk": 65,
            "spDef": 110,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/glastrier.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/glastrier.avif"
        }
    },
    {
        "id": 897,
        "name": "Spectrier",
        "form": null,
        "types": [
            "Ghost"
        ],
        "stats": {
            "total": 580,
            "hp": 100,
            "attack": 65,
            "defense": 60,
            "spAtk": 145,
            "spDef": 80,
            "speed": 130
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/spectrier.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/spectrier.avif"
        }
    },
    {
        "id": 898,
        "name": "Calyrex",
        "form": null,
        "types": [
            "Psychic",
            "Grass"
        ],
        "stats": {
            "total": 500,
            "hp": 100,
            "attack": 80,
            "defense": 80,
            "spAtk": 80,
            "spDef": 80,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/calyrex.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/calyrex.avif"
        }
    },
    {
        "id": 898,
        "name": "Calyrex",
        "form": "Ice Rider",
        "types": [
            "Psychic",
            "Ice"
        ],
        "stats": {
            "total": 680,
            "hp": 100,
            "attack": 165,
            "defense": 150,
            "spAtk": 85,
            "spDef": 130,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/calyrex-ice-rider.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/calyrex-ice-rider.avif"
        }
    },
    {
        "id": 898,
        "name": "Calyrex",
        "form": "Shadow Rider",
        "types": [
            "Psychic",
            "Ghost"
        ],
        "stats": {
            "total": 680,
            "hp": 100,
            "attack": 85,
            "defense": 80,
            "spAtk": 165,
            "spDef": 100,
            "speed": 150
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/calyrex-shadow-rider.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/calyrex-shadow-rider.avif"
        }
    },
    {
        "id": 899,
        "name": "Wyrdeer",
        "form": null,
        "types": [
            "Normal",
            "Psychic"
        ],
        "stats": {
            "total": 525,
            "hp": 103,
            "attack": 105,
            "defense": 72,
            "spAtk": 105,
            "spDef": 75,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wyrdeer.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wyrdeer.avif"
        }
    },
    {
        "id": 900,
        "name": "Kleavor",
        "form": null,
        "types": [
            "Bug",
            "Rock"
        ],
        "stats": {
            "total": 500,
            "hp": 70,
            "attack": 135,
            "defense": 95,
            "spAtk": 45,
            "spDef": 70,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kleavor.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kleavor.avif"
        }
    },
    {
        "id": 901,
        "name": "Ursaluna",
        "form": null,
        "types": [
            "Ground",
            "Normal"
        ],
        "stats": {
            "total": 550,
            "hp": 130,
            "attack": 140,
            "defense": 105,
            "spAtk": 45,
            "spDef": 80,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ursaluna.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ursaluna.avif"
        }
    },
    {
        "id": 901,
        "name": "Ursaluna",
        "form": "Bloodmoon",
        "types": [
            "Ground",
            "Normal"
        ],
        "stats": {
            "total": 555,
            "hp": 113,
            "attack": 70,
            "defense": 120,
            "spAtk": 135,
            "spDef": 65,
            "speed": 52
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ursaluna-bloodmoon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ursaluna-bloodmoon.avif"
        }
    },
    {
        "id": 902,
        "name": "Basculegion",
        "form": "Male",
        "types": [
            "Water",
            "Ghost"
        ],
        "stats": {
            "total": 530,
            "hp": 120,
            "attack": 112,
            "defense": 65,
            "spAtk": 80,
            "spDef": 75,
            "speed": 78
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/basculegion-male.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/basculegion-male.avif"
        }
    },
    {
        "id": 902,
        "name": "Basculegion",
        "form": "Female",
        "types": [
            "Water",
            "Ghost"
        ],
        "stats": {
            "total": 530,
            "hp": 120,
            "attack": 92,
            "defense": 65,
            "spAtk": 100,
            "spDef": 75,
            "speed": 78
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/basculegion-female.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/basculegion-female.avif"
        }
    },
    {
        "id": 903,
        "name": "Sneasler",
        "form": null,
        "types": [
            "Fighting",
            "Poison"
        ],
        "stats": {
            "total": 510,
            "hp": 80,
            "attack": 130,
            "defense": 60,
            "spAtk": 40,
            "spDef": 80,
            "speed": 120
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sneasler.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sneasler.avif"
        }
    },
    {
        "id": 904,
        "name": "Overqwil",
        "form": null,
        "types": [
            "Dark",
            "Poison"
        ],
        "stats": {
            "total": 510,
            "hp": 85,
            "attack": 115,
            "defense": 95,
            "spAtk": 65,
            "spDef": 65,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/overqwil.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/overqwil.avif"
        }
    },
    {
        "id": 905,
        "name": "Enamorus",
        "form": "Incarnate Forme",
        "types": [
            "Fairy",
            "Flying"
        ],
        "stats": {
            "total": 580,
            "hp": 74,
            "attack": 115,
            "defense": 70,
            "spAtk": 135,
            "spDef": 80,
            "speed": 106
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/enamorus-incarnate.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/enamorus-incarnate.avif"
        }
    },
    {
        "id": 905,
        "name": "Enamorus",
        "form": "Therian Forme",
        "types": [
            "Fairy",
            "Flying"
        ],
        "stats": {
            "total": 580,
            "hp": 74,
            "attack": 115,
            "defense": 110,
            "spAtk": 135,
            "spDef": 100,
            "speed": 46
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/enamorus-therian.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/enamorus-therian.avif"
        }
    },
    {
        "id": 906,
        "name": "Sprigatito",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 310,
            "hp": 40,
            "attack": 61,
            "defense": 54,
            "spAtk": 45,
            "spDef": 45,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sprigatito.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sprigatito.avif"
        }
    },
    {
        "id": 907,
        "name": "Floragato",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 410,
            "hp": 61,
            "attack": 80,
            "defense": 63,
            "spAtk": 60,
            "spDef": 63,
            "speed": 83
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/floragato.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/floragato.avif"
        }
    },
    {
        "id": 908,
        "name": "Meowscarada",
        "form": null,
        "types": [
            "Grass",
            "Dark"
        ],
        "stats": {
            "total": 530,
            "hp": 76,
            "attack": 110,
            "defense": 70,
            "spAtk": 81,
            "spDef": 70,
            "speed": 123
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/meowscarada.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/meowscarada.avif"
        }
    },
    {
        "id": 909,
        "name": "Fuecoco",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 310,
            "hp": 67,
            "attack": 45,
            "defense": 59,
            "spAtk": 63,
            "spDef": 40,
            "speed": 36
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/fuecoco.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/fuecoco.avif"
        }
    },
    {
        "id": 910,
        "name": "Crocalor",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 411,
            "hp": 81,
            "attack": 55,
            "defense": 78,
            "spAtk": 90,
            "spDef": 58,
            "speed": 49
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/crocalor.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/crocalor.avif"
        }
    },
    {
        "id": 911,
        "name": "Skeledirge",
        "form": null,
        "types": [
            "Fire",
            "Ghost"
        ],
        "stats": {
            "total": 530,
            "hp": 104,
            "attack": 75,
            "defense": 100,
            "spAtk": 110,
            "spDef": 75,
            "speed": 66
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/skeledirge.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/skeledirge.avif"
        }
    },
    {
        "id": 912,
        "name": "Quaxly",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 310,
            "hp": 55,
            "attack": 65,
            "defense": 45,
            "spAtk": 50,
            "spDef": 45,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/quaxly.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/quaxly.avif"
        }
    },
    {
        "id": 913,
        "name": "Quaxwell",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 410,
            "hp": 70,
            "attack": 85,
            "defense": 65,
            "spAtk": 65,
            "spDef": 60,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/quaxwell.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/quaxwell.avif"
        }
    },
    {
        "id": 914,
        "name": "Quaquaval",
        "form": null,
        "types": [
            "Water",
            "Fighting"
        ],
        "stats": {
            "total": 530,
            "hp": 85,
            "attack": 120,
            "defense": 80,
            "spAtk": 85,
            "spDef": 75,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/quaquaval.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/quaquaval.avif"
        }
    },
    {
        "id": 915,
        "name": "Lechonk",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 254,
            "hp": 54,
            "attack": 45,
            "defense": 40,
            "spAtk": 35,
            "spDef": 45,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lechonk.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lechonk.avif"
        }
    },
    {
        "id": 916,
        "name": "Oinkologne",
        "form": "Male",
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 489,
            "hp": 110,
            "attack": 100,
            "defense": 75,
            "spAtk": 59,
            "spDef": 80,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/oinkologne-male.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/oinkologne-male.avif"
        }
    },
    {
        "id": 916,
        "name": "Oinkologne",
        "form": "Female",
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 489,
            "hp": 115,
            "attack": 90,
            "defense": 70,
            "spAtk": 59,
            "spDef": 90,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/oinkologne-female.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/oinkologne-female.avif"
        }
    },
    {
        "id": 917,
        "name": "Tarountula",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 210,
            "hp": 35,
            "attack": 41,
            "defense": 45,
            "spAtk": 29,
            "spDef": 40,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tarountula.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tarountula.avif"
        }
    },
    {
        "id": 918,
        "name": "Spidops",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 404,
            "hp": 60,
            "attack": 79,
            "defense": 92,
            "spAtk": 52,
            "spDef": 86,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/spidops.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/spidops.avif"
        }
    },
    {
        "id": 919,
        "name": "Nymble",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 210,
            "hp": 33,
            "attack": 46,
            "defense": 40,
            "spAtk": 21,
            "spDef": 25,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/nymble.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/nymble.avif"
        }
    },
    {
        "id": 920,
        "name": "Lokix",
        "form": null,
        "types": [
            "Bug",
            "Dark"
        ],
        "stats": {
            "total": 450,
            "hp": 71,
            "attack": 102,
            "defense": 78,
            "spAtk": 52,
            "spDef": 55,
            "speed": 92
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/lokix.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/lokix.avif"
        }
    },
    {
        "id": 921,
        "name": "Pawmi",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 240,
            "hp": 45,
            "attack": 50,
            "defense": 20,
            "spAtk": 40,
            "spDef": 25,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pawmi.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pawmi.avif"
        }
    },
    {
        "id": 922,
        "name": "Pawmo",
        "form": null,
        "types": [
            "Electric",
            "Fighting"
        ],
        "stats": {
            "total": 350,
            "hp": 60,
            "attack": 75,
            "defense": 40,
            "spAtk": 50,
            "spDef": 40,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pawmo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pawmo.avif"
        }
    },
    {
        "id": 923,
        "name": "Pawmot",
        "form": null,
        "types": [
            "Electric",
            "Fighting"
        ],
        "stats": {
            "total": 490,
            "hp": 70,
            "attack": 115,
            "defense": 70,
            "spAtk": 70,
            "spDef": 60,
            "speed": 105
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pawmot.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pawmot.avif"
        }
    },
    {
        "id": 924,
        "name": "Tandemaus",
        "form": null,
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 305,
            "hp": 50,
            "attack": 50,
            "defense": 45,
            "spAtk": 40,
            "spDef": 45,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tandemaus.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tandemaus.avif"
        }
    },
    {
        "id": 925,
        "name": "Maushold",
        "form": "Family of Four",
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 470,
            "hp": 74,
            "attack": 75,
            "defense": 70,
            "spAtk": 65,
            "spDef": 75,
            "speed": 111
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/maushold-family4.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/maushold-family4.avif"
        }
    },
    {
        "id": 925,
        "name": "Maushold",
        "form": "Family of Three",
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 470,
            "hp": 74,
            "attack": 75,
            "defense": 70,
            "spAtk": 65,
            "spDef": 75,
            "speed": 111
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/maushold-family3.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/maushold-family3.avif"
        }
    },
    {
        "id": 926,
        "name": "Fidough",
        "form": null,
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 312,
            "hp": 37,
            "attack": 55,
            "defense": 70,
            "spAtk": 30,
            "spDef": 55,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/fidough.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/fidough.avif"
        }
    },
    {
        "id": 927,
        "name": "Dachsbun",
        "form": null,
        "types": [
            "Fairy"
        ],
        "stats": {
            "total": 477,
            "hp": 57,
            "attack": 80,
            "defense": 115,
            "spAtk": 50,
            "spDef": 80,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dachsbun.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dachsbun.avif"
        }
    },
    {
        "id": 928,
        "name": "Smoliv",
        "form": null,
        "types": [
            "Grass",
            "Normal"
        ],
        "stats": {
            "total": 260,
            "hp": 41,
            "attack": 35,
            "defense": 45,
            "spAtk": 58,
            "spDef": 51,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/smoliv.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/smoliv.avif"
        }
    },
    {
        "id": 929,
        "name": "Dolliv",
        "form": null,
        "types": [
            "Grass",
            "Normal"
        ],
        "stats": {
            "total": 354,
            "hp": 52,
            "attack": 53,
            "defense": 60,
            "spAtk": 78,
            "spDef": 78,
            "speed": 33
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dolliv.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dolliv.avif"
        }
    },
    {
        "id": 930,
        "name": "Arboliva",
        "form": null,
        "types": [
            "Grass",
            "Normal"
        ],
        "stats": {
            "total": 510,
            "hp": 78,
            "attack": 69,
            "defense": 90,
            "spAtk": 125,
            "spDef": 109,
            "speed": 39
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/arboliva.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/arboliva.avif"
        }
    },
    {
        "id": 931,
        "name": "Squawkabilly",
        "form": "Green Plumage",
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 417,
            "hp": 82,
            "attack": 96,
            "defense": 51,
            "spAtk": 45,
            "spDef": 51,
            "speed": 92
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/squawkabilly-green.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/squawkabilly-green.avif"
        }
    },
    {
        "id": 931,
        "name": "Squawkabilly",
        "form": "Blue Plumage",
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 417,
            "hp": 82,
            "attack": 96,
            "defense": 51,
            "spAtk": 45,
            "spDef": 51,
            "speed": 92
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/squawkabilly-blue.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/squawkabilly-blue.avif"
        }
    },
    {
        "id": 931,
        "name": "Squawkabilly",
        "form": "Yellow Plumage",
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 417,
            "hp": 82,
            "attack": 96,
            "defense": 51,
            "spAtk": 45,
            "spDef": 51,
            "speed": 92
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/squawkabilly-yellow.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/squawkabilly-yellow.avif"
        }
    },
    {
        "id": 931,
        "name": "Squawkabilly",
        "form": "White Plumage",
        "types": [
            "Normal",
            "Flying"
        ],
        "stats": {
            "total": 417,
            "hp": 82,
            "attack": 96,
            "defense": 51,
            "spAtk": 45,
            "spDef": 51,
            "speed": 92
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/squawkabilly-white.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/squawkabilly-white.avif"
        }
    },
    {
        "id": 932,
        "name": "Nacli",
        "form": null,
        "types": [
            "Rock"
        ],
        "stats": {
            "total": 280,
            "hp": 55,
            "attack": 55,
            "defense": 75,
            "spAtk": 35,
            "spDef": 35,
            "speed": 25
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/nacli.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/nacli.avif"
        }
    },
    {
        "id": 933,
        "name": "Naclstack",
        "form": null,
        "types": [
            "Rock"
        ],
        "stats": {
            "total": 355,
            "hp": 60,
            "attack": 60,
            "defense": 100,
            "spAtk": 35,
            "spDef": 65,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/naclstack.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/naclstack.avif"
        }
    },
    {
        "id": 934,
        "name": "Garganacl",
        "form": null,
        "types": [
            "Rock"
        ],
        "stats": {
            "total": 500,
            "hp": 100,
            "attack": 100,
            "defense": 130,
            "spAtk": 45,
            "spDef": 90,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/garganacl.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/garganacl.avif"
        }
    },
    {
        "id": 935,
        "name": "Charcadet",
        "form": null,
        "types": [
            "Fire"
        ],
        "stats": {
            "total": 255,
            "hp": 40,
            "attack": 50,
            "defense": 40,
            "spAtk": 50,
            "spDef": 40,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/charcadet.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/charcadet.avif"
        }
    },
    {
        "id": 936,
        "name": "Armarouge",
        "form": null,
        "types": [
            "Fire",
            "Psychic"
        ],
        "stats": {
            "total": 525,
            "hp": 85,
            "attack": 60,
            "defense": 100,
            "spAtk": 125,
            "spDef": 80,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/armarouge.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/armarouge.avif"
        }
    },
    {
        "id": 937,
        "name": "Ceruledge",
        "form": null,
        "types": [
            "Fire",
            "Ghost"
        ],
        "stats": {
            "total": 525,
            "hp": 75,
            "attack": 125,
            "defense": 80,
            "spAtk": 60,
            "spDef": 100,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ceruledge.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ceruledge.avif"
        }
    },
    {
        "id": 938,
        "name": "Tadbulb",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 272,
            "hp": 61,
            "attack": 31,
            "defense": 41,
            "spAtk": 59,
            "spDef": 35,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tadbulb.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tadbulb.avif"
        }
    },
    {
        "id": 939,
        "name": "Bellibolt",
        "form": null,
        "types": [
            "Electric"
        ],
        "stats": {
            "total": 495,
            "hp": 109,
            "attack": 64,
            "defense": 91,
            "spAtk": 103,
            "spDef": 83,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bellibolt.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bellibolt.avif"
        }
    },
    {
        "id": 940,
        "name": "Wattrel",
        "form": null,
        "types": [
            "Electric",
            "Flying"
        ],
        "stats": {
            "total": 280,
            "hp": 40,
            "attack": 40,
            "defense": 35,
            "spAtk": 55,
            "spDef": 40,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wattrel.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wattrel.avif"
        }
    },
    {
        "id": 941,
        "name": "Kilowattrel",
        "form": null,
        "types": [
            "Electric",
            "Flying"
        ],
        "stats": {
            "total": 490,
            "hp": 70,
            "attack": 70,
            "defense": 60,
            "spAtk": 105,
            "spDef": 60,
            "speed": 125
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kilowattrel.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kilowattrel.avif"
        }
    },
    {
        "id": 942,
        "name": "Maschiff",
        "form": null,
        "types": [
            "Dark"
        ],
        "stats": {
            "total": 340,
            "hp": 60,
            "attack": 78,
            "defense": 60,
            "spAtk": 40,
            "spDef": 51,
            "speed": 51
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/maschiff.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/maschiff.avif"
        }
    },
    {
        "id": 943,
        "name": "Mabosstiff",
        "form": null,
        "types": [
            "Dark"
        ],
        "stats": {
            "total": 505,
            "hp": 80,
            "attack": 120,
            "defense": 90,
            "spAtk": 60,
            "spDef": 70,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/mabosstiff.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/mabosstiff.avif"
        }
    },
    {
        "id": 944,
        "name": "Shroodle",
        "form": null,
        "types": [
            "Poison",
            "Normal"
        ],
        "stats": {
            "total": 290,
            "hp": 40,
            "attack": 65,
            "defense": 35,
            "spAtk": 40,
            "spDef": 35,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/shroodle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/shroodle.avif"
        }
    },
    {
        "id": 945,
        "name": "Grafaiai",
        "form": null,
        "types": [
            "Poison",
            "Normal"
        ],
        "stats": {
            "total": 485,
            "hp": 63,
            "attack": 95,
            "defense": 65,
            "spAtk": 80,
            "spDef": 72,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/grafaiai.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/grafaiai.avif"
        }
    },
    {
        "id": 946,
        "name": "Bramblin",
        "form": null,
        "types": [
            "Grass",
            "Ghost"
        ],
        "stats": {
            "total": 275,
            "hp": 40,
            "attack": 65,
            "defense": 30,
            "spAtk": 45,
            "spDef": 35,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bramblin.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bramblin.avif"
        }
    },
    {
        "id": 947,
        "name": "Brambleghast",
        "form": null,
        "types": [
            "Grass",
            "Ghost"
        ],
        "stats": {
            "total": 480,
            "hp": 55,
            "attack": 115,
            "defense": 70,
            "spAtk": 80,
            "spDef": 70,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/brambleghast.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/brambleghast.avif"
        }
    },
    {
        "id": 948,
        "name": "Toedscool",
        "form": null,
        "types": [
            "Ground",
            "Grass"
        ],
        "stats": {
            "total": 335,
            "hp": 40,
            "attack": 40,
            "defense": 35,
            "spAtk": 50,
            "spDef": 100,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/toedscool.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/toedscool.avif"
        }
    },
    {
        "id": 949,
        "name": "Toedscruel",
        "form": null,
        "types": [
            "Ground",
            "Grass"
        ],
        "stats": {
            "total": 515,
            "hp": 80,
            "attack": 70,
            "defense": 65,
            "spAtk": 80,
            "spDef": 120,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/toedscruel.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/toedscruel.avif"
        }
    },
    {
        "id": 950,
        "name": "Klawf",
        "form": null,
        "types": [
            "Rock"
        ],
        "stats": {
            "total": 450,
            "hp": 70,
            "attack": 100,
            "defense": 115,
            "spAtk": 35,
            "spDef": 55,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/klawf.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/klawf.avif"
        }
    },
    {
        "id": 951,
        "name": "Capsakid",
        "form": null,
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 304,
            "hp": 50,
            "attack": 62,
            "defense": 40,
            "spAtk": 62,
            "spDef": 40,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/capsakid.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/capsakid.avif"
        }
    },
    {
        "id": 952,
        "name": "Scovillain",
        "form": null,
        "types": [
            "Grass",
            "Fire"
        ],
        "stats": {
            "total": 486,
            "hp": 65,
            "attack": 108,
            "defense": 65,
            "spAtk": 108,
            "spDef": 65,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/scovillain.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/scovillain.avif"
        }
    },
    {
        "id": 953,
        "name": "Rellor",
        "form": null,
        "types": [
            "Bug"
        ],
        "stats": {
            "total": 270,
            "hp": 41,
            "attack": 50,
            "defense": 60,
            "spAtk": 31,
            "spDef": 58,
            "speed": 30
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rellor.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rellor.avif"
        }
    },
    {
        "id": 954,
        "name": "Rabsca",
        "form": null,
        "types": [
            "Bug",
            "Psychic"
        ],
        "stats": {
            "total": 470,
            "hp": 75,
            "attack": 50,
            "defense": 85,
            "spAtk": 115,
            "spDef": 100,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/rabsca.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rabsca.avif"
        }
    },
    {
        "id": 955,
        "name": "Flittle",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 255,
            "hp": 30,
            "attack": 35,
            "defense": 30,
            "spAtk": 55,
            "spDef": 30,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/flittle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/flittle.avif"
        }
    },
    {
        "id": 956,
        "name": "Espathra",
        "form": null,
        "types": [
            "Psychic"
        ],
        "stats": {
            "total": 481,
            "hp": 95,
            "attack": 60,
            "defense": 60,
            "spAtk": 101,
            "spDef": 60,
            "speed": 105
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/espathra.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/espathra.avif"
        }
    },
    {
        "id": 957,
        "name": "Tinkatink",
        "form": null,
        "types": [
            "Fairy",
            "Steel"
        ],
        "stats": {
            "total": 297,
            "hp": 50,
            "attack": 45,
            "defense": 45,
            "spAtk": 35,
            "spDef": 64,
            "speed": 58
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tinkatink.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tinkatink.avif"
        }
    },
    {
        "id": 958,
        "name": "Tinkatuff",
        "form": null,
        "types": [
            "Fairy",
            "Steel"
        ],
        "stats": {
            "total": 380,
            "hp": 65,
            "attack": 55,
            "defense": 55,
            "spAtk": 45,
            "spDef": 82,
            "speed": 78
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tinkatuff.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tinkatuff.avif"
        }
    },
    {
        "id": 959,
        "name": "Tinkaton",
        "form": null,
        "types": [
            "Fairy",
            "Steel"
        ],
        "stats": {
            "total": 506,
            "hp": 85,
            "attack": 75,
            "defense": 77,
            "spAtk": 70,
            "spDef": 105,
            "speed": 94
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tinkaton.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tinkaton.avif"
        }
    },
    {
        "id": 960,
        "name": "Wiglett",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 245,
            "hp": 10,
            "attack": 55,
            "defense": 25,
            "spAtk": 35,
            "spDef": 25,
            "speed": 95
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wiglett.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wiglett.avif"
        }
    },
    {
        "id": 961,
        "name": "Wugtrio",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 425,
            "hp": 35,
            "attack": 100,
            "defense": 50,
            "spAtk": 50,
            "spDef": 70,
            "speed": 120
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wugtrio.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wugtrio.avif"
        }
    },
    {
        "id": 962,
        "name": "Bombirdier",
        "form": null,
        "types": [
            "Flying",
            "Dark"
        ],
        "stats": {
            "total": 485,
            "hp": 70,
            "attack": 103,
            "defense": 85,
            "spAtk": 60,
            "spDef": 85,
            "speed": 82
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/bombirdier.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/bombirdier.avif"
        }
    },
    {
        "id": 963,
        "name": "Finizen",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 315,
            "hp": 70,
            "attack": 45,
            "defense": 40,
            "spAtk": 45,
            "spDef": 40,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/finizen.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/finizen.avif"
        }
    },
    {
        "id": 964,
        "name": "Palafin",
        "form": "Zero Form",
        "types": [
            "Water"
        ],
        "stats": {
            "total": 457,
            "hp": 100,
            "attack": 70,
            "defense": 72,
            "spAtk": 53,
            "spDef": 62,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/palafin-zero.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/palafin-zero.avif"
        }
    },
    {
        "id": 964,
        "name": "Palafin",
        "form": "Hero Form",
        "types": [
            "Water"
        ],
        "stats": {
            "total": 650,
            "hp": 100,
            "attack": 160,
            "defense": 97,
            "spAtk": 106,
            "spDef": 87,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/palafin-hero.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/palafin-hero.avif"
        }
    },
    {
        "id": 965,
        "name": "Varoom",
        "form": null,
        "types": [
            "Steel",
            "Poison"
        ],
        "stats": {
            "total": 300,
            "hp": 45,
            "attack": 70,
            "defense": 63,
            "spAtk": 30,
            "spDef": 45,
            "speed": 47
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/varoom.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/varoom.avif"
        }
    },
    {
        "id": 966,
        "name": "Revavroom",
        "form": null,
        "types": [
            "Steel",
            "Poison"
        ],
        "stats": {
            "total": 500,
            "hp": 80,
            "attack": 119,
            "defense": 90,
            "spAtk": 54,
            "spDef": 67,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/revavroom.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/revavroom.avif"
        }
    },
    {
        "id": 967,
        "name": "Cyclizar",
        "form": null,
        "types": [
            "Dragon",
            "Normal"
        ],
        "stats": {
            "total": 501,
            "hp": 70,
            "attack": 95,
            "defense": 65,
            "spAtk": 85,
            "spDef": 65,
            "speed": 121
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cyclizar.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cyclizar.avif"
        }
    },
    {
        "id": 968,
        "name": "Orthworm",
        "form": null,
        "types": [
            "Steel"
        ],
        "stats": {
            "total": 480,
            "hp": 70,
            "attack": 85,
            "defense": 145,
            "spAtk": 60,
            "spDef": 55,
            "speed": 65
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/orthworm.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/orthworm.avif"
        }
    },
    {
        "id": 969,
        "name": "Glimmet",
        "form": null,
        "types": [
            "Rock",
            "Poison"
        ],
        "stats": {
            "total": 350,
            "hp": 48,
            "attack": 35,
            "defense": 42,
            "spAtk": 105,
            "spDef": 60,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/glimmet.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/glimmet.avif"
        }
    },
    {
        "id": 970,
        "name": "Glimmora",
        "form": null,
        "types": [
            "Rock",
            "Poison"
        ],
        "stats": {
            "total": 525,
            "hp": 83,
            "attack": 55,
            "defense": 90,
            "spAtk": 130,
            "spDef": 81,
            "speed": 86
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/glimmora.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/glimmora.avif"
        }
    },
    {
        "id": 971,
        "name": "Greavard",
        "form": null,
        "types": [
            "Ghost"
        ],
        "stats": {
            "total": 290,
            "hp": 50,
            "attack": 61,
            "defense": 60,
            "spAtk": 30,
            "spDef": 55,
            "speed": 34
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/greavard.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/greavard.avif"
        }
    },
    {
        "id": 972,
        "name": "Houndstone",
        "form": null,
        "types": [
            "Ghost"
        ],
        "stats": {
            "total": 488,
            "hp": 72,
            "attack": 101,
            "defense": 100,
            "spAtk": 50,
            "spDef": 97,
            "speed": 68
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/houndstone.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/houndstone.avif"
        }
    },
    {
        "id": 973,
        "name": "Flamigo",
        "form": null,
        "types": [
            "Flying",
            "Fighting"
        ],
        "stats": {
            "total": 500,
            "hp": 82,
            "attack": 115,
            "defense": 74,
            "spAtk": 75,
            "spDef": 64,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/flamigo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/flamigo.avif"
        }
    },
    {
        "id": 974,
        "name": "Cetoddle",
        "form": null,
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 334,
            "hp": 108,
            "attack": 68,
            "defense": 45,
            "spAtk": 30,
            "spDef": 40,
            "speed": 43
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cetoddle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cetoddle.avif"
        }
    },
    {
        "id": 975,
        "name": "Cetitan",
        "form": null,
        "types": [
            "Ice"
        ],
        "stats": {
            "total": 521,
            "hp": 170,
            "attack": 113,
            "defense": 65,
            "spAtk": 45,
            "spDef": 55,
            "speed": 73
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/cetitan.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/cetitan.avif"
        }
    },
    {
        "id": 976,
        "name": "Veluza",
        "form": null,
        "types": [
            "Water",
            "Psychic"
        ],
        "stats": {
            "total": 478,
            "hp": 90,
            "attack": 102,
            "defense": 73,
            "spAtk": 78,
            "spDef": 65,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/veluza.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/veluza.avif"
        }
    },
    {
        "id": 977,
        "name": "Dondozo",
        "form": null,
        "types": [
            "Water"
        ],
        "stats": {
            "total": 530,
            "hp": 150,
            "attack": 100,
            "defense": 115,
            "spAtk": 65,
            "spDef": 65,
            "speed": 35
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dondozo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dondozo.avif"
        }
    },
    {
        "id": 978,
        "name": "Tatsugiri",
        "form": "Curly Form",
        "types": [
            "Dragon",
            "Water"
        ],
        "stats": {
            "total": 475,
            "hp": 68,
            "attack": 50,
            "defense": 60,
            "spAtk": 120,
            "spDef": 95,
            "speed": 82
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tatsugiri-curly.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tatsugiri-curly.avif"
        }
    },
    {
        "id": 978,
        "name": "Tatsugiri",
        "form": "Droopy Form",
        "types": [
            "Dragon",
            "Water"
        ],
        "stats": {
            "total": 475,
            "hp": 68,
            "attack": 50,
            "defense": 60,
            "spAtk": 120,
            "spDef": 95,
            "speed": 82
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tatsugiri-droopy.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tatsugiri-droopy.avif"
        }
    },
    {
        "id": 978,
        "name": "Tatsugiri",
        "form": "Stretchy Form",
        "types": [
            "Dragon",
            "Water"
        ],
        "stats": {
            "total": 475,
            "hp": 68,
            "attack": 50,
            "defense": 60,
            "spAtk": 120,
            "spDef": 95,
            "speed": 82
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/tatsugiri-stretchy.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/tatsugiri-stretchy.avif"
        }
    },
    {
        "id": 979,
        "name": "Annihilape",
        "form": null,
        "types": [
            "Fighting",
            "Ghost"
        ],
        "stats": {
            "total": 535,
            "hp": 110,
            "attack": 115,
            "defense": 80,
            "spAtk": 50,
            "spDef": 90,
            "speed": 90
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/annihilape.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/annihilape.avif"
        }
    },
    {
        "id": 980,
        "name": "Clodsire",
        "form": null,
        "types": [
            "Poison",
            "Ground"
        ],
        "stats": {
            "total": 430,
            "hp": 130,
            "attack": 75,
            "defense": 60,
            "spAtk": 45,
            "spDef": 100,
            "speed": 20
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/clodsire.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/clodsire.avif"
        }
    },
    {
        "id": 981,
        "name": "Farigiraf",
        "form": null,
        "types": [
            "Normal",
            "Psychic"
        ],
        "stats": {
            "total": 520,
            "hp": 120,
            "attack": 90,
            "defense": 70,
            "spAtk": 110,
            "spDef": 70,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/farigiraf.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/farigiraf.avif"
        }
    },
    {
        "id": 982,
        "name": "Dudunsparce",
        "form": "Two-Segment Form",
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 520,
            "hp": 125,
            "attack": 100,
            "defense": 80,
            "spAtk": 85,
            "spDef": 75,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dudunsparce-two-segment.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dudunsparce-two-segment.avif"
        }
    },
    {
        "id": 982,
        "name": "Dudunsparce",
        "form": "Three-Segment Form",
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 520,
            "hp": 125,
            "attack": 100,
            "defense": 80,
            "spAtk": 85,
            "spDef": 75,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dudunsparce-three-segment.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dudunsparce-three-segment.avif"
        }
    },
    {
        "id": 983,
        "name": "Kingambit",
        "form": null,
        "types": [
            "Dark",
            "Steel"
        ],
        "stats": {
            "total": 550,
            "hp": 100,
            "attack": 135,
            "defense": 120,
            "spAtk": 60,
            "spDef": 85,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/kingambit.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/kingambit.avif"
        }
    },
    {
        "id": 984,
        "name": "Great Tusk",
        "form": null,
        "types": [
            "Ground",
            "Fighting"
        ],
        "stats": {
            "total": 570,
            "hp": 115,
            "attack": 131,
            "defense": 131,
            "spAtk": 53,
            "spDef": 53,
            "speed": 87
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/great-tusk.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/great-tusk.avif"
        }
    },
    {
        "id": 985,
        "name": "Scream Tail",
        "form": null,
        "types": [
            "Fairy",
            "Psychic"
        ],
        "stats": {
            "total": 570,
            "hp": 115,
            "attack": 65,
            "defense": 99,
            "spAtk": 65,
            "spDef": 115,
            "speed": 111
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/scream-tail.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/scream-tail.avif"
        }
    },
    {
        "id": 986,
        "name": "Brute Bonnet",
        "form": null,
        "types": [
            "Grass",
            "Dark"
        ],
        "stats": {
            "total": 570,
            "hp": 111,
            "attack": 127,
            "defense": 99,
            "spAtk": 79,
            "spDef": 99,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/brute-bonnet.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/brute-bonnet.avif"
        }
    },
    {
        "id": 987,
        "name": "Flutter Mane",
        "form": null,
        "types": [
            "Ghost",
            "Fairy"
        ],
        "stats": {
            "total": 570,
            "hp": 55,
            "attack": 55,
            "defense": 55,
            "spAtk": 135,
            "spDef": 135,
            "speed": 135
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/flutter-mane.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/flutter-mane.avif"
        }
    },
    {
        "id": 988,
        "name": "Slither Wing",
        "form": null,
        "types": [
            "Bug",
            "Fighting"
        ],
        "stats": {
            "total": 570,
            "hp": 85,
            "attack": 135,
            "defense": 79,
            "spAtk": 85,
            "spDef": 105,
            "speed": 81
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/slither-wing.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/slither-wing.avif"
        }
    },
    {
        "id": 989,
        "name": "Sandy Shocks",
        "form": null,
        "types": [
            "Electric",
            "Ground"
        ],
        "stats": {
            "total": 570,
            "hp": 85,
            "attack": 81,
            "defense": 97,
            "spAtk": 121,
            "spDef": 85,
            "speed": 101
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sandy-shocks.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sandy-shocks.avif"
        }
    },
    {
        "id": 990,
        "name": "Iron Treads",
        "form": null,
        "types": [
            "Ground",
            "Steel"
        ],
        "stats": {
            "total": 570,
            "hp": 90,
            "attack": 112,
            "defense": 120,
            "spAtk": 72,
            "spDef": 70,
            "speed": 106
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/iron-treads.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/iron-treads.avif"
        }
    },
    {
        "id": 991,
        "name": "Iron Bundle",
        "form": null,
        "types": [
            "Ice",
            "Water"
        ],
        "stats": {
            "total": 570,
            "hp": 56,
            "attack": 80,
            "defense": 114,
            "spAtk": 124,
            "spDef": 60,
            "speed": 136
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/iron-bundle.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/iron-bundle.avif"
        }
    },
    {
        "id": 992,
        "name": "Iron Hands",
        "form": null,
        "types": [
            "Fighting",
            "Electric"
        ],
        "stats": {
            "total": 570,
            "hp": 154,
            "attack": 140,
            "defense": 108,
            "spAtk": 50,
            "spDef": 68,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/iron-hands.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/iron-hands.avif"
        }
    },
    {
        "id": 993,
        "name": "Iron Jugulis",
        "form": null,
        "types": [
            "Dark",
            "Flying"
        ],
        "stats": {
            "total": 570,
            "hp": 94,
            "attack": 80,
            "defense": 86,
            "spAtk": 122,
            "spDef": 80,
            "speed": 108
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/iron-jugulis.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/iron-jugulis.avif"
        }
    },
    {
        "id": 994,
        "name": "Iron Moth",
        "form": null,
        "types": [
            "Fire",
            "Poison"
        ],
        "stats": {
            "total": 570,
            "hp": 80,
            "attack": 70,
            "defense": 60,
            "spAtk": 140,
            "spDef": 110,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/iron-moth.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/iron-moth.avif"
        }
    },
    {
        "id": 995,
        "name": "Iron Thorns",
        "form": null,
        "types": [
            "Rock",
            "Electric"
        ],
        "stats": {
            "total": 570,
            "hp": 100,
            "attack": 134,
            "defense": 110,
            "spAtk": 70,
            "spDef": 84,
            "speed": 72
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/iron-thorns.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/iron-thorns.avif"
        }
    },
    {
        "id": 996,
        "name": "Frigibax",
        "form": null,
        "types": [
            "Dragon",
            "Ice"
        ],
        "stats": {
            "total": 320,
            "hp": 65,
            "attack": 75,
            "defense": 45,
            "spAtk": 35,
            "spDef": 45,
            "speed": 55
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/frigibax.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/frigibax.avif"
        }
    },
    {
        "id": 997,
        "name": "Arctibax",
        "form": null,
        "types": [
            "Dragon",
            "Ice"
        ],
        "stats": {
            "total": 423,
            "hp": 90,
            "attack": 95,
            "defense": 66,
            "spAtk": 45,
            "spDef": 65,
            "speed": 62
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/arctibax.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/arctibax.avif"
        }
    },
    {
        "id": 998,
        "name": "Baxcalibur",
        "form": null,
        "types": [
            "Dragon",
            "Ice"
        ],
        "stats": {
            "total": 600,
            "hp": 115,
            "attack": 145,
            "defense": 92,
            "spAtk": 75,
            "spDef": 86,
            "speed": 87
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/baxcalibur.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/baxcalibur.avif"
        }
    },
    {
        "id": 999,
        "name": "Gimmighoul",
        "form": "Chest Form",
        "types": [
            "Ghost"
        ],
        "stats": {
            "total": 300,
            "hp": 45,
            "attack": 30,
            "defense": 70,
            "spAtk": 75,
            "spDef": 70,
            "speed": 10
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gimmighoul-chest.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gimmighoul-chest.avif"
        }
    },
    {
        "id": 999,
        "name": "Gimmighoul",
        "form": "Roaming Form",
        "types": [
            "Ghost"
        ],
        "stats": {
            "total": 300,
            "hp": 45,
            "attack": 30,
            "defense": 25,
            "spAtk": 75,
            "spDef": 45,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gimmighoul-roaming.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gimmighoul-roaming.avif"
        }
    },
    {
        "id": 1000,
        "name": "Gholdengo",
        "form": null,
        "types": [
            "Steel",
            "Ghost"
        ],
        "stats": {
            "total": 550,
            "hp": 87,
            "attack": 60,
            "defense": 95,
            "spAtk": 133,
            "spDef": 91,
            "speed": 84
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gholdengo.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gholdengo.avif"
        }
    },
    {
        "id": 1001,
        "name": "Wo-Chien",
        "form": null,
        "types": [
            "Dark",
            "Grass"
        ],
        "stats": {
            "total": 570,
            "hp": 85,
            "attack": 85,
            "defense": 100,
            "spAtk": 95,
            "spDef": 135,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/wo-chien.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/wo-chien.avif"
        }
    },
    {
        "id": 1002,
        "name": "Chien-Pao",
        "form": null,
        "types": [
            "Dark",
            "Ice"
        ],
        "stats": {
            "total": 570,
            "hp": 80,
            "attack": 120,
            "defense": 80,
            "spAtk": 90,
            "spDef": 65,
            "speed": 135
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/chien-pao.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/chien-pao.avif"
        }
    },
    {
        "id": 1003,
        "name": "Ting-Lu",
        "form": null,
        "types": [
            "Dark",
            "Ground"
        ],
        "stats": {
            "total": 570,
            "hp": 155,
            "attack": 110,
            "defense": 125,
            "spAtk": 55,
            "spDef": 80,
            "speed": 45
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ting-lu.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ting-lu.avif"
        }
    },
    {
        "id": 1004,
        "name": "Chi-Yu",
        "form": null,
        "types": [
            "Dark",
            "Fire"
        ],
        "stats": {
            "total": 570,
            "hp": 55,
            "attack": 80,
            "defense": 80,
            "spAtk": 135,
            "spDef": 120,
            "speed": 100
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/chi-yu.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/chi-yu.avif"
        }
    },
    {
        "id": 1005,
        "name": "Roaring Moon",
        "form": null,
        "types": [
            "Dragon",
            "Dark"
        ],
        "stats": {
            "total": 590,
            "hp": 105,
            "attack": 139,
            "defense": 71,
            "spAtk": 55,
            "spDef": 101,
            "speed": 119
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/roaring-moon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/roaring-moon.avif"
        }
    },
    {
        "id": 1006,
        "name": "Iron Valiant",
        "form": null,
        "types": [
            "Fairy",
            "Fighting"
        ],
        "stats": {
            "total": 590,
            "hp": 74,
            "attack": 130,
            "defense": 90,
            "spAtk": 120,
            "spDef": 60,
            "speed": 116
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/iron-valiant.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/iron-valiant.avif"
        }
    },
    {
        "id": 1007,
        "name": "Koraidon",
        "form": null,
        "types": [
            "Fighting",
            "Dragon"
        ],
        "stats": {
            "total": 670,
            "hp": 100,
            "attack": 135,
            "defense": 115,
            "spAtk": 85,
            "spDef": 100,
            "speed": 135
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/koraidon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/koraidon.avif"
        }
    },
    {
        "id": 1008,
        "name": "Miraidon",
        "form": null,
        "types": [
            "Electric",
            "Dragon"
        ],
        "stats": {
            "total": 670,
            "hp": 100,
            "attack": 85,
            "defense": 100,
            "spAtk": 135,
            "spDef": 115,
            "speed": 135
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/miraidon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/miraidon.avif"
        }
    },
    {
        "id": 1009,
        "name": "Walking Wake",
        "form": null,
        "types": [
            "Water",
            "Dragon"
        ],
        "stats": {
            "total": 590,
            "hp": 99,
            "attack": 83,
            "defense": 91,
            "spAtk": 125,
            "spDef": 83,
            "speed": 109
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/walking-wake.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/walking-wake.avif"
        }
    },
    {
        "id": 1010,
        "name": "Iron Leaves",
        "form": null,
        "types": [
            "Grass",
            "Psychic"
        ],
        "stats": {
            "total": 590,
            "hp": 90,
            "attack": 130,
            "defense": 88,
            "spAtk": 70,
            "spDef": 108,
            "speed": 104
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/iron-leaves.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/iron-leaves.avif"
        }
    },
    {
        "id": 1011,
        "name": "Dipplin",
        "form": null,
        "types": [
            "Grass",
            "Dragon"
        ],
        "stats": {
            "total": 485,
            "hp": 80,
            "attack": 80,
            "defense": 110,
            "spAtk": 95,
            "spDef": 80,
            "speed": 40
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/dipplin.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/dipplin.avif"
        }
    },
    {
        "id": 1012,
        "name": "Poltchageist",
        "form": null,
        "types": [
            "Grass",
            "Ghost"
        ],
        "stats": {
            "total": 308,
            "hp": 40,
            "attack": 45,
            "defense": 45,
            "spAtk": 74,
            "spDef": 54,
            "speed": 50
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/poltchageist.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/poltchageist.avif"
        }
    },
    {
        "id": 1013,
        "name": "Sinistcha",
        "form": null,
        "types": [
            "Grass",
            "Ghost"
        ],
        "stats": {
            "total": 508,
            "hp": 71,
            "attack": 60,
            "defense": 106,
            "spAtk": 121,
            "spDef": 80,
            "speed": 70
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/sinistcha.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/sinistcha.avif"
        }
    },
    {
        "id": 1014,
        "name": "Okidogi",
        "form": null,
        "types": [
            "Poison",
            "Fighting"
        ],
        "stats": {
            "total": 555,
            "hp": 88,
            "attack": 128,
            "defense": 115,
            "spAtk": 58,
            "spDef": 86,
            "speed": 80
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/okidogi.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/okidogi.avif"
        }
    },
    {
        "id": 1015,
        "name": "Munkidori",
        "form": null,
        "types": [
            "Poison",
            "Psychic"
        ],
        "stats": {
            "total": 555,
            "hp": 88,
            "attack": 75,
            "defense": 66,
            "spAtk": 130,
            "spDef": 90,
            "speed": 106
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/munkidori.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/munkidori.avif"
        }
    },
    {
        "id": 1016,
        "name": "Fezandipiti",
        "form": null,
        "types": [
            "Poison",
            "Fairy"
        ],
        "stats": {
            "total": 555,
            "hp": 88,
            "attack": 91,
            "defense": 82,
            "spAtk": 70,
            "spDef": 125,
            "speed": 99
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/fezandipiti.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/fezandipiti.avif"
        }
    },
    {
        "id": 1017,
        "name": "Ogerpon",
        "form": "Teal Mask",
        "types": [
            "Grass"
        ],
        "stats": {
            "total": 550,
            "hp": 80,
            "attack": 120,
            "defense": 84,
            "spAtk": 60,
            "spDef": 96,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ogerpon-teal.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ogerpon-teal.avif"
        }
    },
    {
        "id": 1017,
        "name": "Ogerpon",
        "form": "Wellspring Mask",
        "types": [
            "Grass",
            "Water"
        ],
        "stats": {
            "total": 550,
            "hp": 80,
            "attack": 120,
            "defense": 84,
            "spAtk": 60,
            "spDef": 96,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ogerpon-wellspring.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ogerpon-wellspring.avif"
        }
    },
    {
        "id": 1017,
        "name": "Ogerpon",
        "form": "Hearthflame Mask",
        "types": [
            "Grass",
            "Fire"
        ],
        "stats": {
            "total": 550,
            "hp": 80,
            "attack": 120,
            "defense": 84,
            "spAtk": 60,
            "spDef": 96,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ogerpon-hearthflame.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ogerpon-hearthflame.avif"
        }
    },
    {
        "id": 1017,
        "name": "Ogerpon",
        "form": "Cornerstone Mask",
        "types": [
            "Grass",
            "Rock"
        ],
        "stats": {
            "total": 550,
            "hp": 80,
            "attack": 120,
            "defense": 84,
            "spAtk": 60,
            "spDef": 96,
            "speed": 110
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/ogerpon-cornerstone.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ogerpon-cornerstone.avif"
        }
    },
    {
        "id": 1018,
        "name": "Archaludon",
        "form": null,
        "types": [
            "Steel",
            "Dragon"
        ],
        "stats": {
            "total": 600,
            "hp": 90,
            "attack": 105,
            "defense": 130,
            "spAtk": 125,
            "spDef": 65,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/archaludon.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/archaludon.avif"
        }
    },
    {
        "id": 1019,
        "name": "Hydrapple",
        "form": null,
        "types": [
            "Grass",
            "Dragon"
        ],
        "stats": {
            "total": 540,
            "hp": 106,
            "attack": 80,
            "defense": 110,
            "spAtk": 120,
            "spDef": 80,
            "speed": 44
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/hydrapple.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/hydrapple.avif"
        }
    },
    {
        "id": 1020,
        "name": "Gouging Fire",
        "form": null,
        "types": [
            "Fire",
            "Dragon"
        ],
        "stats": {
            "total": 590,
            "hp": 105,
            "attack": 115,
            "defense": 121,
            "spAtk": 65,
            "spDef": 93,
            "speed": 91
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/gouging-fire.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gouging-fire.avif"
        }
    },
    {
        "id": 1021,
        "name": "Raging Bolt",
        "form": null,
        "types": [
            "Electric",
            "Dragon"
        ],
        "stats": {
            "total": 590,
            "hp": 125,
            "attack": 73,
            "defense": 91,
            "spAtk": 137,
            "spDef": 89,
            "speed": 75
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/raging-bolt.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/raging-bolt.avif"
        }
    },
    {
        "id": 1022,
        "name": "Iron Boulder",
        "form": null,
        "types": [
            "Rock",
            "Psychic"
        ],
        "stats": {
            "total": 590,
            "hp": 90,
            "attack": 120,
            "defense": 80,
            "spAtk": 68,
            "spDef": 108,
            "speed": 124
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/iron-boulder.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/iron-boulder.avif"
        }
    },
    {
        "id": 1023,
        "name": "Iron Crown",
        "form": null,
        "types": [
            "Steel",
            "Psychic"
        ],
        "stats": {
            "total": 590,
            "hp": 90,
            "attack": 72,
            "defense": 100,
            "spAtk": 122,
            "spDef": 108,
            "speed": 98
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/iron-crown.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/iron-crown.avif"
        }
    },
    {
        "id": 1024,
        "name": "Terapagos",
        "form": "Normal Form",
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 450,
            "hp": 90,
            "attack": 65,
            "defense": 85,
            "spAtk": 65,
            "spDef": 85,
            "speed": 60
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/terapagos-normal.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/terapagos-normal.avif"
        }
    },
    {
        "id": 1024,
        "name": "Terapagos",
        "form": "Terastal Form",
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 600,
            "hp": 95,
            "attack": 95,
            "defense": 110,
            "spAtk": 105,
            "spDef": 110,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/terapagos-terastal.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/terapagos-terastal.avif"
        }
    },
    {
        "id": 1024,
        "name": "Terapagos",
        "form": "Stellar Form",
        "types": [
            "Normal"
        ],
        "stats": {
            "total": 700,
            "hp": 160,
            "attack": 105,
            "defense": 110,
            "spAtk": 130,
            "spDef": 110,
            "speed": 85
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/terapagos-stellar.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/terapagos-stellar.avif"
        }
    },
    {
        "id": 1025,
        "name": "Pecharunt",
        "form": null,
        "types": [
            "Poison",
            "Ghost"
        ],
        "stats": {
            "total": 600,
            "hp": 88,
            "attack": 88,
            "defense": 160,
            "spAtk": 88,
            "spDef": 88,
            "speed": 88
        },
        "images": {
            "icon": "https://img.pokemondb.net/sprites/scarlet-violet/icon/pecharunt.png",
            "avif": "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/pecharunt.avif"
        }
    }
];