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
  mensaje : string;

  constructor(private pokemonService: PokemonService) { 
    console.trace('PokemonRestComponente contructor');
    this.pokemon = new Pokemon();
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
        
        this.mensaje = "Pokemon cargado desde https://pokeapi.co"

        //Conseguir su habilidad

        this.pokemon.habilidad = data.abilities[0].ability.name;

        this.pokemonService.getHabilidad(this.pokemon.habilidad).subscribe(
          data_habilidad => {
            console.debug('Peticion correcta data %o', data_habilidad)
            this.pokemon.habilidad = data_habilidad.names.filter(el => el.language === "es").name;
          },
          error_habilidad => {
            console.warn('Peticion erronea data %o', error_habilidad)
          },
          () =>{
            console.trace('esto se hace siempre');
          }
        );

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

}
