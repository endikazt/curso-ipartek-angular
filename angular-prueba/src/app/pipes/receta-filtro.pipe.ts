import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recetaFiltro'
})
export class RecetaFiltroPipe implements PipeTransform {

  /**
   * 
   * @param recetas 
   * @param checkGluten 
   * @param busqueda 
   */
  transform(recetas: any, checkGluten: boolean , busqueda: string): any {

    let resultado = recetas;

    console.debug('checkGluten ', checkGluten);
    console.debug('busqueda ', busqueda);

    // filtrar recetas sin gluten
    if ( checkGluten ) {
      resultado = resultado.filter( (el) => el.isGlutenFree );
    }

    // filtrar por nombre receta o nombre cocinero o ingredientes
    if ( busqueda && '' !== busqueda) {

      busqueda = busqueda.toLowerCase();

      resultado = resultado.filter( (el) => {
          const ingredientes = el.ingredientes.reduce( (c, p) => c + p , '');
          const encontrar = (el.nombre + el.cocinero + ingredientes ).toLowerCase();
          return encontrar.includes(busqueda);
      });

    }

    return resultado;
  }

}