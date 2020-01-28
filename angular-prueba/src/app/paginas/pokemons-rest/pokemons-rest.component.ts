import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons-rest',
  templateUrl: './pokemons-rest.component.html',
  styleUrls: ['./pokemons-rest.component.scss']
})
export class PokemonsRestComponent implements OnInit {

  pokemon : Pokemon;

  constructor(private pokemonService: PokemonService) { 
    console.trace('PokemonRestComponente contructor');
    this.pokemon = new Pokemon(1,'','https://i.etsystatic.com/12696278/r/il/bb21a8/1868980486/il_570xN.1868980486_d6zs.jpg');
    console.debug(this.pokemon);
  }

  ngOnInit() {
    console.trace('PokemonRestComponente ngOnInit');

    //Llamadas a los serivcios

    //Cuando llamamos a un observable tenemos 3 posibles metodos
    //Solo 1 es obligatorio
    // A un observable nos tenemos que suscribir

    this.pokemonService.getPokemon('pikachu').subscribe(
      data =>{
        console.debug('Peticion correcta data %o', data)
        //Mapear de JSON a pokemon

        this.pokemon.nombre = data.name;
        this.pokemon.imagen = data.sprites.front_default;
        
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
