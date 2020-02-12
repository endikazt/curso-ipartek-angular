import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  listaPokemon : Array<Pokemon>;
  mensaje : string;
  pokemonSeleccionado : Pokemon;


  constructor(private pokemonService: PokemonService) {
    this.listaPokemon = new Array<Pokemon>();
    this.pokemonSeleccionado = new Pokemon();
    this.mensaje = "Binnvenido a la app de Pokemons."
   }

  ngOnInit() {

    this.cargarPokemmons();

  }

  cargarPokemmons(): void {

    this.pokemonService.getAll().subscribe(datos => {
       this.listaPokemon = datos;
      });

  }

  selecionarPokemon = function( pokemon ) {
    console.debug('hemos hecho click %o ', pokemon );
    this.pokemonSeleccionado = pokemon;
  };

}
