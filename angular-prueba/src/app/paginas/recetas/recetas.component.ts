import { Component, OnInit } from '@angular/core';
import { RECETAS } from 'src/recetas';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {

  recetas: Array<any>;
  recetaSeleccionada: any;
  checkGluten: boolean;
  busqueda: string;


  constructor() {
    console.trace('RecetasComponent constructor');
    this.recetas = RECETAS;
    this.checkGluten = false;
    this.busqueda = '';
   }// constructor

  ngOnInit() {
    console.trace('RecetasComponent ngOnInit');
  }// ngOnInit

}// RecetasComponent
