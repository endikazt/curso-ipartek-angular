import { Component, OnInit } from '@angular/core';

const TIEMPO_LIMITE = 5000;

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  jugador : string;
  puntos : number;
  ranking : Map<String, Number>;
  disable : boolean;
  rankingOrdenado : Array<Number>;

  constructor() { 
    console.trace('JuegoComponent contructor');
    this.jugador = "";
    this.puntos = 0;
    this.disable = false;

    this.ranking = new Map<String, Number>();
    this.rankingOrdenado = new Array<Number>();

    this.ranking.set("Endika",9999);
    this.ranking.set("Prueba",15);

    this.rankingOrdenado = this.orderByValue(this.ranking);

  }

  ngOnInit() {
    console.trace('JuegoComponent ngOnInit');
  }

  empezarJuego(){
    console.trace('JuegoComponent empezarJuego');
    this.disable = true;
    
    setTimeout(()=>{
      this.disable = false;
      this.ranking.set(this.jugador, this.puntos);
      this.puntos = 0;
      this.jugador = "";
    }, TIEMPO_LIMITE);

  }

  contarClicks() {
    console.trace('JuegoComponent contarClicks');
    this.puntos++;

  }

  orderByValue(data : Map<String, Number>){
    let ordenados = new Array<Number>();
    Object.values(data).sort().forEach(function(value) {
      ordenados[value] = data[value];
    });

    return ordenados;
  }

}
