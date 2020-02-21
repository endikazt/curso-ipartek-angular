import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario : FormGroup;
  noticiaNueva : any;

  constructor(private notciasService : NoticiasService,  
              private builder : FormBuilder,
              private router : Router) { 

    this.noticiaNueva = {
      "titulo": "",
      "imagen": "",
      "fecha": "",
      "textoCorto": "",
      "textoNoticia": ""
   }

    this.formulario = this.builder.group({
      
      id: new FormControl( 0 ),
      titulo : new FormControl ('', [Validators.required, Validators.minLength(3),Validators.maxLength(150)]),
      imagen : new FormControl ('', [Validators.required, Validators.minLength(3),Validators.maxLength(150)]),
      fecha : new FormControl ('', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]),
      textoCorto : new FormControl ('', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]),
      textoNoticia : new FormControl ('', [Validators.required, Validators.minLength(5), Validators.maxLength(255)])
    });


  }

  ngOnInit() {
  }

  enviar( formData ) {
    console.debug('click en enviar %o', formData);

      this.noticiaNueva.titulo= formData.titulo;
      this.noticiaNueva.imagen= formData.imagen;
      this.noticiaNueva.fecha= formData.fecha;
      this.noticiaNueva.textoCorto= formData.textoCorto;
      this.noticiaNueva.textoNoticia= formData.textoNoticia;
        console.debug('datos nuevoPokemon %o', this.noticiaNueva);

      this.notciasService.crear(this.noticiaNueva).subscribe( data => {
        console.trace('Nueva noticia creada %o', data);
        this.router.navigate(['']);
      },
      error =>{
        console.warn('Peticion erronea data %o', error)
      },
      () =>{
        console.trace('esto se hace siempre');
      }
      );
    }

}
