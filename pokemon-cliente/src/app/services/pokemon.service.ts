import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemonService } from './Ipokemon.service';
import { API_URL } from '../../global';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements IPokemonService{

  constructor(private http: HttpClient) {

    console.trace('PokemonService.constructor');

   }

   getPokemon( nombre: string ): Observable<any> {
    const url = API_URL + `pokemon/${nombre}/`;
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

  getAll() : Observable<any> {
    const url = API_URL + `pokemon/`;
    console.trace('PokemonService getAll ' + url);
    return this.http.get(url);
  }
  
  getById( id: number ) : Observable<any> {
    const url = API_URL + `pokemon/${id}/`;
    console.trace('PokemonService getById ' + url);
    return this.http.get(url);
  }

  crear(pokemon: Pokemon): Observable<any> {
    const url = API_URL + `pokemon/`;
    return this.http.post<any>(url, pokemon);
  }
  modificar(pokemon: Pokemon): Observable<any> {
    const url = API_URL + `pokemon/${pokemon.id}/`;
    return this.http.put<any>(url, pokemon);
  }
  eliminar(id: number): Observable<any> {
    const url = API_URL + `pokemon/${id}/`;
    console.trace('TareasService eliminar ' + url);
    return this.http.delete<Pokemon>(url);
  }


}