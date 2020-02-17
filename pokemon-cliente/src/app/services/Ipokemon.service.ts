import { Observable } from "rxjs";
import { Pokemon } from '../model/pokemon';

export interface IPokemonService {

    /**
     * Recuperamons los datos deen JSON de un Pokemon por su nombre
     * @param nombre: String nombre del pokemon
     * @see GET  /api/v2/pokemon/{nombre}
     */
    getPokemon(nombre:string): Observable<any>;

    /**
     * Recuepra un json con las caracteristicas de un pokemon
     * @param id Numben id del pokemon
     * @see GET  /api/v2/characteristic/{id}
     */
    getCaracteristicas(id:number): Observable<Pokemon>;

    crear ( pokemon : Pokemon): Observable<Pokemon>;

    modificar ( pokemon : Pokemon ): Observable<Pokemon>;

    eliminar ( id : number ): Observable<Pokemon>;


}