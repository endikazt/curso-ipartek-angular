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

  formulario: FormGroup;

  constructor( private router: Router,
               private builder: FormBuilder,
               private usuarioService: UsuarioService
             ) {

    console.trace('LoginComponent constructor');

    // construir formulario
    this.formulario = this.builder.group({

       // definir los FormControl == inputs [ value, validaciones ]
      nombre : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100) ]],
      pass: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8) ]]

    });


  }// constructor

  ngOnInit() {
      console.trace('LoginComponent ngOnInit');

  }// ngOnInit


  enviar( values: any ) {
    console.trace('Submit formulario %o', values);

    const nombre = values.nombre;
    const password = values.pass;
    const uLogeado = this.usuarioService.login(nombre, password);

    if ( uLogeado ) {
      console.trace('Usuario logeado con exito %o', uLogeado);
      this.router.navigate(['privado']);
    } else {
      console.warn('Usuario NO logeado');
      // TODO cambiar alert
      alert('Por favor prueba de nuevo a logearte');
    }


  }// enviar

}// LoginComponent