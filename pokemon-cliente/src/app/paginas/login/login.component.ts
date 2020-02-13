import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario : FormGroup;

  constructor(private _builder : FormBuilder, 
              private usuarioService: UsuariosService,
              private router : Router) { 

    this.formulario = this._builder.group({

      nombre : ['', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]],
      passwd : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]]

    });

  }

  ngOnInit() {
  }

  enviar( values: any) {

    console.trace('Submit formulario %o', values);

    const nombre = values.nombre;
    const passwd = values.passwd;
    const uLogeado = this.usuarioService.login(nombre, passwd);

    if(uLogeado) {

      console.trace("usuario logeado con exito %o", uLogeado);
      this.router.navigate(['privado']);

    } else {
      //TODO cambiar alert
      console.warn("Usuario no loegeado");
      alert('Por favor prueba de nuevo a logearte');

    }

  }

}
