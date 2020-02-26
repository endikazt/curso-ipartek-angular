import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public usuarioService : UsuariosService,
    private router: Router) { }

  ngOnInit() {
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
