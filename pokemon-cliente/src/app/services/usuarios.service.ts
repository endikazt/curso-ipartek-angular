import { Injectable } from '@angular/core';
import { IUsuarioService } from './IUsuario.service';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService implements IUsuarioService{

  private storage : any;
  private usuario : Usuario;

  constructor() { 

    this.usuario = undefined;
    this.storage = window.sessionStorage;

  }

  estaLogeado(): boolean {

    if(this.storage.getItem('usuarioStorage')){
      return true;
    } else {
      return false;
    }
  }
  
  login(nombre: string, password: string): Usuario {

    const NOMBRE = 'admin';
    const PASSWD = 'admin';

    let usuarioBuscar : Usuario;

    if(NOMBRE === nombre && PASSWD === password) {

      usuarioBuscar = new Usuario();
      usuarioBuscar.nombre = nombre;
      usuarioBuscar.password = password;
      usuarioBuscar.id = 99;

     this.storage.setItem('usuarioStorage', JSON.stringify(usuarioBuscar));

    } else {

      this.storage.removeItem('usuarioStorage');

    }

    return usuarioBuscar;
  }
  cerrarSesion() {
   this.storage.removeItem('usuarioStorage');
  }
}
