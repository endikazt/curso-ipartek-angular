import { Injectable } from '@angular/core';
import { IUsuarioService } from './IUsuario.service';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';
import { exists } from 'fs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService{

  private storage : any;
  private usuario : Usuario;

  constructor(private http: HttpClient) { 

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
  
  login(nombre: string, password: string) : Observable<any> {

    let usuario = new Usuario();
    usuario.nombre = nombre;
    usuario.password = password;
    const URL_API = "http://localhost:8080/pokemon-rest/usuario/login";
    console.trace('UsuarioServices login ' + nombre);

    return this.http.post<any>(URL_API, usuario);

  }

  cerrarSesion() {
   this.storage.removeItem('usuarioStorage');
  }

}
