import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { HabilidadService } from 'src/app/services/habilidad.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Habilidad } from 'src/app/model/habilidad';
import { Mensaje } from 'src/app/model/mensaje';

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
  options : Array<any>;
  habilidades : Array<string>;
  formulario : FormGroup;


  constructor(private pokemonService: PokemonService, 
              private habilidaService : HabilidadService,
              private builder : FormBuilder) {

    this.listaPokemon = new Array<Pokemon>();
    this.habilidades = new Array<string>();
    this.pokemonSeleccionado = new Pokemon();
    this.options = [];
    this.mensaje = new Mensaje();

    this.formulario = this.builder.group({

      id: new FormControl( 0 ),
      nombre : new FormControl ('', [Validators.required, Validators.minLength(3),Validators.maxLength(150)]),
      imagen : new FormControl ('', [Validators.required, Validators.minLength(5), Validators.maxLength(255)])

    });

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
        datos.forEach(element => {
          this.habilidades.push(element.nombre);
        });      
      });

  }

  selecionarPokemon = function( pokemon ) {
    console.debug('hemos hecho click %o ', pokemon );
    this.pokemonSeleccionado = pokemon;
    this.formulario.get('id').setValue(this.pokemonSeleccionado.id);
    this.formulario.get('nombre').setValue(this.pokemonSeleccionado.nombre);
    this.formulario.get('imagen').setValue(this.pokemonSeleccionado.imagen);
  };

  restablecerValores() {

    console.debug('Se restablecen los valores del formulario de registro');
    this.pokemonSeleccionado = new Pokemon();
    this.formulario.get('id').setValue(0);
    this.formulario.get('nombre').setValue("");
    this.formulario.get('imagen').setValue("");

  }

  enviar( formData ) {
    console.debug('click en enviar %o', formData);

    if(this.pokemonSeleccionado.id != 0){

      let pokemonModificado = this.pokemonSeleccionado;

      pokemonModificado.nombre= formData.nombre;
      pokemonModificado.imagen = formData.imagen;

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
