import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {

    console.trace('PokemonService.constructor');

   }

   getPokemon(){

    let url = "https://pokeapi.co/api/v2/pokemon/1";

    console.trace('PokemonService.constructor ' + url);

    return this.http.get(url);

   }
}
