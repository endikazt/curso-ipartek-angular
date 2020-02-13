import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { HabilidadService } from 'src/app/services/habilidad.service';
import { Habilidad } from 'src/app/model/habilidad';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  listaPokemon : Array<Pokemon>;
  listaPokemonOriginal : Array<Pokemon>;
  mensaje : string;
  pokemonSeleccionado : Pokemon;
  options : Array<any>;
  habilidades : Array<string>;


  constructor(private pokemonService: PokemonService, private habilidaService : HabilidadService) {
    this.listaPokemon = new Array<Pokemon>();
    this.habilidades = [];
    this.pokemonSeleccionado = new Pokemon();
    this.options = [];
    this.mensaje = "Bienvenido a la app de Pokemons."
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
  };

  buscar(options) {

    console.debug('buscar %o', options);
    this.listaPokemon = this.listaPokemonOriginal.slice();
    const habilidadesSeleccionadas = this.options.filter( el => el.checked ).map( el => el.value);
    console.debug('habilidadesSeleccionadas %o', habilidadesSeleccionadas);
    if ( habilidadesSeleccionadas.length > 0 ) {  // si no hay nada cheked apra que buscar
      this.listaPokemon = this.listaPokemon.filter( el => {
        console.debug('filtrando frutas');
        return el.habilidad.find( color => habilidadesSeleccionadas.indexOf(color) !== -1 );
      });
    }

  }// buscar

}
