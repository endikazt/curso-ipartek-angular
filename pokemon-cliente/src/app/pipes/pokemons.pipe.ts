import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonsFiltro'
})
export class PokemonsPipe implements PipeTransform {

  transform(pokemons: any, busqueda : string, habilidad: string): any {

    let resultado = pokemons;

    console.debug('habilidad ', habilidad);
    console.debug('busqueda ', busqueda);

    // filtrar recetas sin gluten
    // if ( habilidad ) {
    //   resultado = resultado.filter( (el) => el.isGlutenFree );
    // }

    // filtrar por nombre receta o nombre cocinero o ingredientes
    if ( busqueda && '' !== busqueda) {

      busqueda = busqueda.toUpperCase();

      resultado = resultado.filter( (el) => {
          const encontrar = (el.nombre).toUpperCase();
          return encontrar.includes(busqueda);
      });

    }

    return resultado;
  }

}
