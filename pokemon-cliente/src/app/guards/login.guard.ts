import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {


  constructor(private  router : Router, private usuarioService : UsuariosService){

  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    //TODO si el usuario no se ha logeado false, en caso contrario true
    //TODO crear provider

    const logeado : boolean = this.usuarioService.estaLogeado();

    if(!logeado){

      this.router.navigate(['login']);
    }

    return logeado;
  }

}
