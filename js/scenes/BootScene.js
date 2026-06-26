class BootScene extends Phaser.Scene {
  constructor() { super({ key: 'BootScene' }); }

 preload() {
  const pokemons = PokemonCatalog.seleccionables();

  pokemons.forEach(pokemon => {
    this.load.image(
      PokemonCatalog.assetKey(pokemon),
      pokemon.imagen
    );
  });

  this.load.on('loaderror', file => {
    alert('No se pudo cargar: ' + file.src);
  });
}

  create() {
    const W = FIELD_CONFIG.largo * FIELD_CONFIG.escala;
    const H = FIELD_CONFIG.ancho * FIELD_CONFIG.escala;

    this.add.rectangle(W / 2, H / 2, W, H, 0x111111);

    this.add.text(W / 2, H / 2 - 60, 'FPP', {
      fontSize: '64px', fill: '#ffffff', fontStyle: 'bold'
    }).setOrigin(0.5);

    this.add.text(W / 2, H / 2 - 10, 'Fútbol para Pokémons', {
      fontSize: '20px', fill: '#ffcc00'
    }).setOrigin(0.5);

    this.add.text(W / 2, H / 2 + 40, 'Un juego de Noah para Maria', {
      fontSize: '12px', fill: '#888888'
    }).setOrigin(0.5);

    const prompt = this.add.text(W / 2, H / 2 + 90, 'Pulsa cualquier tecla para continuar', {
      fontSize: '14px', fill: '#ffffff'
    }).setOrigin(0.5);

    this.tweens.add({
      targets: prompt,
      alpha: 0,
      duration: 600,
      yoyo: true,
      repeat: -1
    });

    this.input.keyboard.once('keydown', () => this.scene.start('MenuScene'));
  }
}