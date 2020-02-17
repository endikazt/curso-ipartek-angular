import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { HabilidadService } from 'src/app/services/habilidad.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.scss']
})
export class PrivadoComponent implements OnInit {

  listaPokemon : Array<Pokemon>;
  listaPokemonOriginal : Array<Pokemon>;
  mensaje : string;
  pokemonSeleccionado : Pokemon;
  options : Array<any>;
  habilidades : Array<string>;
  formulario : FormGroup;


  constructor(private pokemonService: PokemonService, 
              private habilidaService : HabilidadService,
              private builder : FormBuilder) {

    this.listaPokemon = new Array<Pokemon>();
    this.habilidades = [];
    this.pokemonSeleccionado = new Pokemon();
    this.options = [];
    this.mensaje = ""

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

    let nuevoPokemon = new Pokemon();

    nuevoPokemon.nombre = formData.nombre;
    nuevoPokemon.imagen = formData.imagen;

    console.debug('datos nuevoPokemon %o', nuevoPokemon);

    this.pokemonService.crear(nuevoPokemon).subscribe( data => {
      console.trace('Nuevo pokemon creado %o . Se reinicia valores', data);
      this.restablecerValores();
      this.cargarPokemmons();
    },
    error =>{
      console.warn('Peticion erronea data %o', error)
      this.mensaje = "No existe el pokemon %o"
    },
    () =>{
      console.trace('esto se hace siempre');
    }
    );
    }

  eliminarPokemon(pokemon : Pokemon) {

    console.debug('click %o', pokemon);

    if(confirm('¿Estad seguro?')){

      console.trace('Confirmada eliminacion de ' + pokemon.id);

      this.pokemonService.eliminar(pokemon.id).subscribe( data => {
        
        this.mensaje = 'Pookemon ' + pokemon.id + ' "' + pokemon.nombre + '" eliminada';
        
        this.cargarPokemmons()});

    } else {

      console.trace('Cancelada eliminacion de ' + pokemon.id);

    }

  }

}
