import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/model/mensaje';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  mensaje : Mensaje;

  constructor() {

    this.mensaje = new Mensaje();
    this.mensaje.contenido = "Bienvenido a la pagina :)"

   }

  ngOnInit(): void {
  }

}
