import { Component, OnInit } from '@angular/core';
import { RUTAS } from '../../../rutas';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  rutas : Array<any>;

  constructor(private usuarioService : UsuariosService,
              private router: Router) {

    console.trace('NavbarComponente constructo()');

    this.rutas = RUTAS;

   }

  ngOnInit() {
    console.trace('NavbarComponente ngOnInit()');
  }

  cerrarSesion(){
    console.trace('NavbarComponente cerrarSesion()');

    const mensaje = "¿Esta seguro de que quiere cerrar la sesion?";

    if(confirm(mensaje)){
      this.usuarioService.cerrarSesion();
      this.router.navigate(['/']); //ir a inicio 
    }

  }

}
