import { Injectable } from '@angular/core';
import { IUsuarioService } from './IUsuario.service';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService implements IUsuarioService{

  private isLogged: boolean;
  private usuario : Usuario;

  constructor() { 

    this.isLogged = false;
    this.usuario = undefined;

  }

  estaLogeado(): boolean {
    return this.isLogged;
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

      this.isLogged = true

    } else {

      this.isLogged = false;

    }

    return usuarioBuscar;
  }
  cerrarSesion(): boolean {
    return this.isLogged = false;
  }
}
