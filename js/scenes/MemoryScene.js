class MemoryScene extends Phaser.Scene {
  constructor() { super({ key: 'MemoryScene' }); }

  init() {
    this._totalCartas = GameState.memoryCartas || 10;
    this._totalPares = this._totalCartas / 2;

    this._cards = [];
    this._seleccionadas = [];
    this._puedeClick = true;
    this._aciertos = 0;
    this._intentos = 0;
  }

  create() {
    const W = FIELD_CONFIG.largo * FIELD_CONFIG.escala;
    const H = FIELD_CONFIG.ancho * FIELD_CONFIG.escala;

    this.add.rectangle(W / 2, H / 2, W, H, 0x111111);

    this.add.text(W / 2, 18, 'Bonus: Memory', {
      fontSize: '18px',
      fill: '#ffcc00'
    }).setOrigin(0.5);

    this._txtInfo = this.add.text(W / 2, 42, '', {
      fontSize: '12px',
      fill: '#ffffff'
    }).setOrigin(0.5);

    this._crearCartas(W, H);
    this._actualizarInfo();

    this.input.keyboard.once('keydown-ESC', () => {
      this.scene.start('MenuScene');
    });
  }

  _crearCartas(W, H) {
    const pokemons = Phaser.Utils.Array.Shuffle([...PokemonCatalog.seleccionables()])
      .slice(0, this._totalPares);

    const mazo = Phaser.Utils.Array.Shuffle([...pokemons, ...pokemons]);

    const columnas = this._columnasPara(this._totalCartas);
    const filas = Math.ceil(this._totalCartas / columnas);

    const cardW = Math.min(74, Math.floor((W - 60) / columnas));
    const cardH = Math.min(88, Math.floor((H - 100) / filas));

    const startX = W / 2 - ((columnas - 1) * cardW) / 2;
    const startY = 92;

    for (let i = 0; i < mazo.length; i++) {
      const pokemon = mazo[i];
      const col = i % columnas;
      const row = Math.floor(i / columnas);
      const x = startX + col * cardW;
      const y = startY + row * cardH;

      const cont = this.add.container(x, y);
      const bg = this.add.rectangle(0, 0, cardW - 8, cardH - 8, 0x333333)
        .setStrokeStyle(2, 0xffffff, 0.4);

// --- NEW CODE ---
// Define how much of the card the image should occupy (e.g., 65% of card width)
const imgSize = (cardW - 8) * 0.95; 
const verticalOffset = -10; // Adjust this value to move the image up or down

const icon = this.add.image(0, verticalOffset, PokemonCatalog.assetKey(pokemon)) // 🟢 Centered at Y: 0
  .setDisplaySize(imgSize, imgSize) // 🟢 Dynamically sized
  .setVisible(false);

const texto = this.add.text(0, 0, '?', { // 🟢 Centered at Y: 0 when hidden
  fontSize: `${Math.floor(cardH * 0.35)}px`, // 🟢 Text scale based on card height
  fill: '#ffcc00'
}).setOrigin(0.5);


      cont.add([bg, icon, texto]);
      cont.setSize(cardW - 8, cardH - 8);
      cont.setInteractive();

      cont.pokemon = pokemon;
      cont.bg = bg;
      cont.icon = icon;
      cont.texto = texto;
      cont.volteada = false;
      cont.resuelta = false;

      cont.on('pointerdown', () => this._voltear(cont));

      this._cards.push(cont);
    }
  }

  _columnasPara(total) {
    if (total <= 10) return 5;
    if (total <= 20) return 5;
    if (total <= 30) return 6;
    return 8;
  }

  _voltear(card) {
    if (!this._puedeClick) return;
    if (card.volteada || card.resuelta) return;

    this._mostrar(card);
    this._seleccionadas.push(card);

    if (this._seleccionadas.length === 2) {
      this._comprobar();
    }
  }

  _mostrar(card) {
    card.volteada = true;
    card.bg.setFillStyle(0xffffff);
    card.icon.setVisible(true);
    card.texto.setText('');
  }

  _ocultar(card) {
    card.volteada = false;
    card.bg.setFillStyle(0x333333);
    card.icon.setVisible(false);
    card.texto.setText('?');
  }

  _comprobar() {
    this._puedeClick = false;
    this._intentos++;

    const [a, b] = this._seleccionadas;

    if (a.pokemon.id === b.pokemon.id) {
      a.resuelta = true;
      b.resuelta = true;
      a.bg.setStrokeStyle(2, 0x88ff88, 1);
      b.bg.setStrokeStyle(2, 0x88ff88, 1);

      this._aciertos++;
      this._seleccionadas = [];
      this._puedeClick = true;
      this._actualizarInfo();

      if (this._aciertos === this._totalPares) {
        this._ganar();
      }

      return;
    }

    this.time.delayedCall(800, () => {
      this._ocultar(a);
      this._ocultar(b);
      this._seleccionadas = [];
      this._puedeClick = true;
      this._actualizarInfo();
    });
  }

  _actualizarInfo() {
    this._txtInfo.setText(
      'Cartas: ' + this._totalCartas +
      '   Parejas: ' + this._aciertos + '/' + this._totalPares +
      '   Intentos: ' + this._intentos +
      '   ESC: menú'
    );
  }

  _ganar() {
    const W = FIELD_CONFIG.largo * FIELD_CONFIG.escala;
    const H = FIELD_CONFIG.ancho * FIELD_CONFIG.escala;

    this.add.rectangle(W / 2, H / 2, 280, 110, 0x000000, 0.85)
      .setDepth(50);

    this.add.text(W / 2, H / 2 - 18, '¡GANASTE!', {
      fontSize: '28px',
      fill: '#ffcc00'
    }).setOrigin(0.5).setDepth(51);

    this.add.text(W / 2, H / 2 + 22, 'Click para volver al menú', {
      fontSize: '13px',
      fill: '#ffffff'
    }).setOrigin(0.5).setDepth(51);

    this.input.once('pointerdown', () => {
      this.scene.start('MenuScene');
    });
  }
}