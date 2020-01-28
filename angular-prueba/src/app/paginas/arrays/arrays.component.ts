import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {

  frutas: any;
  total: number;
  totalDescuento: number;
  soloNombres: Array<string>;
  frutasConDescuento: Array<string>;
  frutasAmarillas: Array<string>;
  precioTotalAmarillas: number;
  primeraVerde: string;
  colores: Array<string>;

  constructor() { 
    console.trace('ArraysComponent constructor');
    this.total = 0;
    this.totalDescuento = 0;
    this.frutas = [
      {"nombre":"fresa", "precio": 2.45, "descuento":0, "colores":['roja']},
      {"nombre":"pera", "precio": 3.5,"descuento":10, "colores":['amarillo', 'verde']},
      {"nombre":"manzana", "precio": 1.99, "descuento":50, "colores": ['amarillo', 'verde', 'roja']}
    ];

  
  }

  ngOnInit() {
    console.trace('ArraysComponent ngOnInit');

    // Precio total mediante map y reduce
    this.total = this.frutas.map(el => el.precio).reduce((c,p) => c + p);

    this.totalDescuento = this.frutas.reduce((p,c) => p + (c.precio - (c.precio * c.descuento)/100),0);

    // Recuperar solo el nombre de las frutas
    this.soloNombres = this.frutas.map(el => el.nombre);

    // Buscar todas la frutas que tengan descuento
    this.frutasConDescuento = this.frutas.filter(fruta => fruta.descuento > 0).map(el => el.nombre);

    this.frutasAmarillas = this.frutas.filter(fruta => fruta.colores.includes('amarillo')).map(el => el.nombre);

    this.precioTotalAmarillas = this.frutas.filter(fruta => fruta.colores.includes('amarillo')).reduce((p,c) => p + c.precio, 0);

    this.primeraVerde = this.frutas.filter(fruta => fruta.colores.includes('verde')).shift();

    this.colores = this.frutas.reduce( (p, c) => {return [p, ...c.colores];
    }, [] );

  }

}
