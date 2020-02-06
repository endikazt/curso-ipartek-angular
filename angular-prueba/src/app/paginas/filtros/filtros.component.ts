import { Component, OnInit } from '@angular/core';
import { ANIMALES } from '../../model/animales';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  coche : any;
  animales : Array<any>;
  tipos: Map<string, string>;
  tipo : string;

  constructor() { 
    console.trace("FiltrosComponent constructor");
    this.coche = ({
                    "nombre": "Audi R8",
                    "color": "blanco",
                    "isDiesel": false,
                    "precio": 100000.95
                 });
    this.animales = ANIMALES;

    this.tipos = new Map();

    this.animales.forEach(element => {
      this.tipos.set(element.Tipo.toLowerCase(), element.Tipo);
    });

  }

  ngOnInit() {
    console.trace("FiltrosComponent ngOnInit");
  }

}
