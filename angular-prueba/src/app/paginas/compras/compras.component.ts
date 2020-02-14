import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/frutas.model';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {

  frutas: Array<Fruta>;
  frutaSeleccionada: Fruta;

  constructor() { 

    // incializar array de frutas
    this.frutas = [];

    // datos hardcodeadeos, TODO llamar a un servicio ngOnInit
    this.frutas.push( new Fruta('pera') );
    this.frutas.push( new Fruta('manzana') );
    this.frutas.push( new Fruta('Aguacate') );


    this.frutaSeleccionada = new Fruta();

  }

  ngOnInit() {
  }

  recogerEvento(event) {

    console.debug('Soy componente padre y recibo evento %o', event);
    this.frutaSeleccionada = event;

  }

}
