import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonsFiltro'
})
export class PokemonsPipe implements PipeTransform {

  transform(pokemons: any, busqueda : string, arrayHabilidad: Array<any>): any {

    let resultado = pokemons;

    console.debug('arrayHabilidad ', arrayHabilidad);
    console.debug('busqueda ', busqueda);


    if ( busqueda && '' !== busqueda) {

      busqueda = busqueda.toUpperCase();

      resultado = resultado.filter( (el) => {
          const encontrar = (el.nombre).toUpperCase();
          return encontrar.includes(busqueda);
      });

    }

    if(arrayHabilidad.length > 0){
      arrayHabilidad = arrayHabilidad.map(el => el.name);

      console.debug(resultado)

      resultado = resultado.filter(el => el.habilidades.find(el => arrayHabilidad.indexOf(el.nombre)!==-1))

    }

    return resultado;
  }

}
