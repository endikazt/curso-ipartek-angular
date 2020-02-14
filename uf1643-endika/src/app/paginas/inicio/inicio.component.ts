import { Component, OnInit } from '@angular/core';
import { LIBROS } from '../../../libros';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  defaultImage : string;
  libros : Array<any>;
  libroSeleccionado : any;
  busqueda: string;

  constructor() {

    console.trace('InicioComponent constructor');

    this.libros =  LIBROS;
    this.busqueda = "";
    this.defaultImage = "assets/images/book-default.png";

   } // Constructor

  ngOnInit() {

    console.trace('InicioComponent ngOnInit');
    
  } // ngOnInit

  /**
   * Esta funcion reemplaza el valor de "libroSeleccionado" por el valor del libro en el que
   * se ha hecho click en la lsita de libros
   * @param libro seleccionado en la lista
   */

  seleccionarLibro(libro : any){

    console.trace('InicioComponent seleccionarLibro %o', libro);

    this.libroSeleccionado = libro;

  } // seleccionarLibro

}
