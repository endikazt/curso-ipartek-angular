import { Component, OnInit } from '@angular/core';
import { RUTAS } from '../../../rutas';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  rutas : Array<any>;

  constructor() {

    this.rutas = RUTAS;

   }

  ngOnInit() {
  }

}
