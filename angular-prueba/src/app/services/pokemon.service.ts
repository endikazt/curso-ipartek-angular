import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {

    console.trace('PokemonService.constructor');

   }

   getPokemon( nombre: string ): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;
    console.trace('PokemonService getPokemon ' + url);
    return this.http.get(url);
  }

  getAll() {
    throw new Error("Method not implemented.");
  }
  getById( id: number ) {
    throw new Error("Method not implemented.");
  }

  getByName( nombre: string) {
    throw new Error("Method not implemented.");
  }

}
