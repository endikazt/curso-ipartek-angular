import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemonService } from './Ipokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements IPokemonService{

  constructor(private http: HttpClient) {

    console.trace('PokemonService.constructor');

   }

   getPokemon( nombre: string ): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;
    console.trace('PokemonService getPokemon ' + url);
    return this.http.get(url);
  }

  getHabilidad(nombre: string): Observable<any> {
    const url = `https://pokeapi.co/api/v2/ability/${nombre}/`;
    console.trace('PokemonService getHabilidad ' + url);
    return this.http.get(url);
  }

  getCaracteristicas(id: number): Observable<any> {
    throw new Error("Method not implemented.");
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
