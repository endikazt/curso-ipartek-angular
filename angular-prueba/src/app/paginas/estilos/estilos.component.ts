import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.component.html',
  styleUrls: ['./estilos.component.scss']
})
export class EstilosComponent implements OnInit {

  numeroClicks: number;
  jugador : string;
  visible = false;

  constructor() { 
    console.trace("EstilosComponent contructor");
    this.numeroClicks = 0;
    this.visible = false;
    this.jugador = '';

  } // constructor

  ngOnInit() {

    console.trace("EstilosComponent ngOnInit");

  } //ngOnInit

  contarClicks() {

    console.trace("contarClicks");
    this.numeroClicks++;

  } // contarClicks

  decirAdios() {

    console.trace("decirAdios");
    this.visible = true;

  }

} // EstilosComponent
