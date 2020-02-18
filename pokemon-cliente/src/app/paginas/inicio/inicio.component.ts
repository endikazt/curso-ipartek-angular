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
  habilidades : Array<Habilidad>;
  habilidadesFiltro : Array<any>;
  habilidadesFinal : Array<any>;


  constructor(private pokemonService: PokemonService, private habilidaService : HabilidadService) {
    this.listaPokemon = new Array<Pokemon>();
    this.habilidades = new Array<Habilidad>();
    this.habilidadesFiltro = new Array();
    this.habilidadesFinal = new Array();
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
      this.habilidades = datos;
      this.habilidadesFiltro = this.habilidades.map( el => { 
          return {name: el.nombre, value : el.nombre, checked: false};
        });
      });

  }

  selecionarPokemon = function( pokemon ) {
    console.debug('hemos hecho click %o ', pokemon );
    this.pokemonSeleccionado = pokemon;
  };

  actualizarHabilidades(habilidades2 : Array<any>) {

    this.habilidadesFinal = habilidades2.filter( el => el.checked);

  }// buscar

}
