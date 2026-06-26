// js/utils/PokemonCatalog.js

const PokemonCatalog = {

  getById(id, form) {
    const matches = LISTA_DE_POKEMONS.filter(p => Number(p.id) === Number(id));

    if (form) {
      const byForm = matches.find(p => p.form === form);
      if (byForm) return byForm;
    }

    return matches.find(p => p.form === null) || matches[0] || null;
  },

  seleccionables() {
    return POKEMONS
      .map(ref => this.getById(ref.id, ref.form))
      .filter(Boolean)
      .map(p => this.normalizar(p));
  },

  normalizar(p) {
    const tipo = p.types && p.types.length > 0 ? p.types[0] : 'Unknown';

    return {
      id: p.id,
      nombre: p.form ? `${p.name} (${p.form})` : p.name,
      name: p.name,
      form: p.form,
      tipo,
      tipos: p.types || [],
      stats: p.stats || {},
      imagen: `assets/icon/${this.assetName(p)}`
    };
  },

assetName(pokemon) {
  return `${pokemon.id}.png`;
},

 assetKey(pokemon) {
  return `pokemon-${pokemon.id}`;
},

  speedMultiplier(pokemon) {
    const speed = pokemon?.stats?.speed ?? 100;

    // Limita entre 55% y 135%
    return Math.max(0.55, Math.min(speed / 100, 1.35));
  }

};

console.log('Pokémon seleccionables:', PokemonCatalog.seleccionables());