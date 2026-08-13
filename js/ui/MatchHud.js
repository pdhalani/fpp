class MatchHud {
  constructor(scene, width, height) {
    this._scene = scene;
    scene.add.rectangle(width / 2, height / 2, width, height, 0x111111).setDepth(19);

    this.marcador = scene.add.text(width / 2, 5, '0 — 0', {
      fontSize: '16px', fill: '#ffffff', fontStyle: 'bold'
    }).setOrigin(0.5, 0).setDepth(20);

    this.tiempo = scene.add.text(width / 2, 25, '', {
      fontSize: '12px', fill: '#cccccc'
    }).setOrigin(0.5, 0).setDepth(20);

    this.activo = scene.add.text(8, 45, '', {
      fontSize: '10px', fill: '#ffcc00'
    }).setDepth(20);

    this.mensajeCentro = scene.add.text(width / 2, 46, '', {
      fontSize: '15px', fill: '#ffffff', fontStyle: 'bold'
    }).setOrigin(0.5).setAlpha(0).setDepth(20);
  }

  actualizar({ parte, tiempoMs, marcador, equipoLocal, equipoVisitante, jugadorActivo }) {
    const segundos = Math.ceil(tiempoMs / 1000);
    const minutos = Math.floor(segundos / 60);
    const restoSegundos = segundos % 60;
    const nombreLocal = equipoLocal.equipacion
      ? equipoLocal.equipacion.icono + ' ' + equipoLocal.equipacion.nombre
      : 'Local';
    const nombreVisitante = equipoVisitante.equipacion
      ? equipoVisitante.equipacion.icono + ' ' + equipoVisitante.equipacion.nombre
      : 'Visitante';

    this.marcador.setText(nombreLocal + '  ' + marcador.local + ' — ' + marcador.visitante + '  ' + nombreVisitante);
    this.tiempo.setText('Parte ' + parte + '  |  ' + minutos + ':' + String(restoSegundos).padStart(2, '0'));
    this.activo.setText('▶ ' + (jugadorActivo.pokemon ? jugadorActivo.pokemon.nombre : '?'));
  }

  mostrarMensaje(texto) {
    this._scene.tweens.killTweensOf(this.mensajeCentro);
    this.mensajeCentro.setText(texto).setAlpha(1);
  }

  ocultarMensaje(duracion) {
    this._scene.time.delayedCall(duracion, () => {
      this._scene.tweens.add({ targets: this.mensajeCentro, alpha: 0, duration: 300 });
    });
  }
}
