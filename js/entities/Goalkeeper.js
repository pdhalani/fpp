class Goalkeeper extends Player {
  constructor(scene, x, y, equipacion, equipo, pokemon) {
    super(scene, x, y, equipacion, 'P', false, pokemon);

    this.equipo = equipo;

    const multVelocidad = this.pokemon
      ? PokemonCatalog.speedMultiplier(this.pokemon)
      : 1;

    this.velocidad =
      CONFIG.porteroVelocidad *
      FIELD_CONFIG.escala /
      60 *
      multVelocidad;

    this._colorPortero = Phaser.Display.Color.HexStringToColor(
      equipacion.color_portero
    ).color;
  }

  _dibujar() {
    const g = this.graphics;
    const y = this.y + (this.scene._campoY || 0);
    g.clear();

    g.fillStyle(this._colorPortero || 0x888888);
    g.fillCircle(this.x, y, this.radioPixels);

    g.lineStyle(
      this.esActivo ? 3 : 1,
      this.esActivo ? 0xffffff : 0x000000,
      this.esActivo ? 1 : 0.5
    );
    g.strokeCircle(this.x, y, this.radioPixels);

    if (this.icon) {
      this.icon.setPosition(this.x, y);
    }

    this.label.setPosition(this.x, y + this.radioPixels + 7);
  }

  colocar(x, y) {
    super.colocar(x, y);
    this._tienesBalonDesde = null;
  }

  estadistica(nombre) {
    const valor = super.estadistica(nombre);
    return nombre === 'defense' ? Math.round(valor * 1.5) : valor;
  }

  updateCPU(ball) {
    const S       = FIELD_CONFIG.escala;
    const H       = FIELD_CONFIG.ancho * S;
    const W       = FIELD_CONFIG.largo * S;
    const apL     = FIELD_CONFIG.area_pequena.largo * S;
    const apHW    = (FIELD_CONFIG.area_pequena.ancho / 2) * S;
    const centroY = H / 2;
    const porteriaX = this.equipo === 'local' ? 0 : W;

    if (this.tieneBalon) {
      if (!this._tienesBalonDesde) this._tienesBalonDesde = Date.now();

      if (Date.now() - this._tienesBalonDesde >= 3000) {
        this._tienesBalonDesde = null;

        const companeros = this.scene._jugadoresLocal && this.equipo === 'local'
          ? this.scene._jugadoresLocal
          : this.scene._jugadoresVisitante;

        if (companeros) {
          this.pasar(ball, companeros, this.equipo === 'local' ? 1 : -1, 0);
        }
      }

      this._dibujar();
      return;
    }

    this._tienesBalonDesde = null;

    const balonEnArea = this.equipo === 'local'
      ? ball.x >= 0 && ball.x <= apL && ball.y >= centroY - apHW && ball.y <= centroY + apHW
      : ball.x >= W - apL && ball.x <= W && ball.y >= centroY - apHW && ball.y <= centroY + apHW;

    let targetX;
    let targetY;

    if (balonEnArea) {
      targetX = ball.x;
      targetY = ball.y;
    } else {
      const dx = ball.x - porteriaX;
      const dy = ball.y - centroY;

      targetX = porteriaX + dx * 0.1;
      targetY = centroY   + dy * 0.1;
    }

    targetX = this.equipo === 'local'
      ? Phaser.Math.Clamp(targetX, this.radioPixels, apL)
      : Phaser.Math.Clamp(targetX, W - apL, W - this.radioPixels);

    targetY = Phaser.Math.Clamp(
      targetY,
      centroY - apHW + this.radioPixels,
      centroY + apHW - this.radioPixels
    );

    const mx = targetX - this.x;
    const my = targetY - this.y;
    const md = Math.sqrt(mx * mx + my * my);

    if (md > 2) {
      const vel = balonEnArea ? this.velocidad * 2 : this.velocidad;
      this.x += (mx / md) * vel;
      this.y += (my / md) * vel;
    }

    const distBalon = Phaser.Math.Distance.Between(this.x, this.y, ball.x, ball.y);

    if (
      balonEnArea &&
      ball.portador === null &&
      distBalon <= this.radioPixels + ball.radio + 4 &&
      this._cooldownBalon === 0
    ) {
      ball.portador = this;
      this.tieneBalon = true;
    }

    if (ball.portador && ball.portador !== this && balonEnArea) {
      const rival = ball.portador;
      this.intentarRobar(rival, ball);
    }

    this._dibujar();
  }
}
