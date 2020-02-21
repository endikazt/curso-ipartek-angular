import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { HabilidadService } from 'src/app/services/habilidad.service';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Mensaje } from 'src/app/model/mensaje';
=======
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, Form } from '@angular/forms';
>>>>>>> formulario-habilidades

@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.scss']
})
export class PrivadoComponent implements OnInit {

  listaPokemon : Array<Pokemon>;
  listaPokemonOriginal : Array<Pokemon>;
  mensaje : Mensaje;
  pokemonSeleccionado : Pokemon;
  habilidades : Array<any>;
  formulario : FormGroup;
  formHabilidades: FormArray;
  habilidadesDatos: any;


  constructor(private pokemonService: PokemonService, 
              private habilidaService : HabilidadService,
              private builder : FormBuilder) {

    this.listaPokemon = new Array<Pokemon>();
    this.habilidades = new Array<any>();
    this.pokemonSeleccionado = new Pokemon();
<<<<<<< HEAD
    this.options = [];
    this.mensaje = new Mensaje();
=======
    this.mensaje = ""
>>>>>>> formulario-habilidades

    this.formulario = this.builder.group({
      
      id: new FormControl( 0 ),
      nombre : new FormControl ('', [Validators.required, Validators.minLength(3),Validators.maxLength(150)]),
      imagen : new FormControl ('', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]),
      habilidades : this.builder.array( [], [Validators.required, Validators.minLength(1)])
    });

    this.formHabilidades = this.formulario.get('habilidades') as FormArray;

   }

  ngOnInit() {

    this.cargarPokemmons();
    this.cargarHabilidades();

    this.listaPokemonOriginal = this.listaPokemon.slice();

  }

  cargarPokemmons(): void {

    this.pokemonService.getAll().subscribe(datos => {
       this.listaPokemon = datos;
      });

  }

  cargarHabilidades(): void {

    this.habilidaService.getAll().subscribe(datos => {
      this.habilidades = datos.map( el => { 
          return {id: el.id, value : el.nombre, checked: false};
        });

        this.habilidadesOriginal = this.habilidades.slice();

      });

  }

  private crearFormGroupHabilidad(): FormGroup {
    return this.builder.group({
              id: new FormControl(0),
              nombre: new FormControl('')
            });
  }

  checkCambiado( option: any ) {

    option.checked = !option.checked;
    console.debug('checkCambiado %o', option);

    if(option.checked){

      const habilidad = this.crearFormGroupHabilidad();
      habilidad.get('id').setValue( option.id );
      habilidad.get('nombre').setValue( option.value );

      this.formHabilidades.push(habilidad);

    } else {

      const arrayValues = this.formHabilidades.value;
      const posicion = arrayValues.findIndex(el => el.id === option.id);

      this.formHabilidades.removeAt(posicion);

    }


  }// checkCambiado

  selecionarPokemon = function( pokemon ) {
    console.debug('hemos hecho click %o ', pokemon );

    this.pokemonSeleccionado = pokemon;
    this.formulario.get('id').setValue(this.pokemonSeleccionado.id);
    this.formulario.get('nombre').setValue(this.pokemonSeleccionado.nombre);
    this.formulario.get('imagen').setValue(this.pokemonSeleccionado.imagen);
    this.resetFormArray(this.formulario.get('habilidades'));

    this.habilidades.forEach(habi => habi.checked = false);

    if(pokemon.habilidades.length > 0) {

      pokemon.habilidades.forEach(poke => {

        const habilidad = this.crearFormGroupHabilidad();
        habilidad.get('id').setValue( poke.id );
        habilidad.get('nombre').setValue( poke.nombre );
    
        this.formHabilidades.push(habilidad);

        this.habilidades.forEach(habi => {

          if(poke.id === habi.id){

            habi.checked = true;

          }

        });

      });
    }

  };

  restablecerValores() {

    console.debug('Se restablecen los valores del formulario de registro');

    this.habilidades.forEach(habi => habi.checked = false);

    this.pokemonSeleccionado = new Pokemon();
    this.formulario.get('id').setValue(0);
    this.formulario.get('nombre').setValue("");
    this.formulario.get('imagen').setValue("");
    this.resetFormArray(this.formulario.get('habilidades'))

  }

  resetFormArray = (formArray: FormArray) => {
    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }
  }

  enviar( formData ) {
    console.debug('click en enviar %o', formData);

    if(this.pokemonSeleccionado.id != 0){

      let pokemonModificado = this.pokemonSeleccionado;

      pokemonModificado.nombre= formData.nombre;
      pokemonModificado.imagen = formData.imagen;
      pokemonModificado.habilidades = formData.habilidades;

      console.debug(pokemonModificado);

      this.pokemonService.modificar(pokemonModificado).subscribe( data => {
        console.trace('Pokemon modificado %o . Se reinicia valores', data);
        this.mensaje.tipo = "success";
        this.mensaje.contenido = "Pokemon " + pokemonModificado.id + "'" + pokemonModificado.nombre + "'" + "modificado." ;
        this.restablecerValores();
        this.cargarPokemmons();
      },
      error =>{
        console.warn('Peticion erronea data %o', error)
        this.mensaje.tipo = "danger";
        this.mensaje.contenido = "No se ha podido completar la solicitud. Error -> " + error;
      },
      () =>{
        console.trace('esto se hace siempre');
      }
      );

    } else {

        let nuevoPokemon = new Pokemon();
        let nombrePokemonNuevo = formData.nombre;
        let imagenPokemonNuevo = formData.imagen;

        nuevoPokemon.nombre = nombrePokemonNuevo;
        nuevoPokemon.imagen = imagenPokemonNuevo;
        nuevoPokemon.habilidades = formData.habilidades;

        console.debug('datos nuevoPokemon %o', nuevoPokemon);

        this.pokemonService.crear(nuevoPokemon).subscribe( data => {
          console.trace('Nuevo pokemon creado %o . Se reinicia valores', data);
          this.mensaje.tipo = "success";
          this.mensaje.contenido = "Pokemon '" + nuevoPokemon.nombre + "'" + "creado." ;
          this.restablecerValores();
          this.cargarPokemmons();
        },
        error =>{
          console.warn('Peticion erronea data %o', error)
          this.mensaje.tipo = "danger";
          this.mensaje.contenido = "No se ha podido completar la solicitud. Error -> " + error;
        },
        () =>{
          console.trace('esto se hace siempre');
        }
        );
      }
    }

  eliminarPokemon(pokemon : Pokemon) {

    console.debug('click %o', pokemon);

    if(confirm('¿Estad seguro?')){

      console.trace('Confirmada eliminacion de ' + pokemon.id);

      this.pokemonService.eliminar(pokemon.id).subscribe( data => {
        
        this.mensaje.tipo = "success";
        this.mensaje.contenido = 'Pokemon ' + pokemon.id + ' "' + pokemon.nombre + '" eliminado.';
        
        this.cargarPokemmons();
        this.restablecerValores();
      
      });

    } else {

      console.trace('Cancelada eliminacion de ' + pokemon.id);

    }

  }

}
