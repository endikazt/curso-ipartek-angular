import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalesFiltro'
})
export class AnimalesPipe implements PipeTransform {

  transform(datos: any, busqueda : string, tipo : string): any {
    console.debug("------------------------------");
    console.debug(datos);
    console.debug(busqueda);
    console.debug(tipo);
    console.debug("------------------------------");

    let resultado = datos;

    // filtrar por tipo
    if ( tipo && tipo !== 'TODOS' ) {
      //TODO arreglar esto para que funcione el filtro por tipo
      resultado = resultado.filter( (el) => el.Tipo === tipo.toUpperCase());
    }

    // filtrar por nombre
    if ( busqueda && '' !== busqueda.trim() ) {

      busqueda = busqueda.toUpperCase();
      resultado = resultado.filter( (el) => {
        console.debug(el);
        const nombre = el.Nombre.toUpperCase();
        return nombre.includes(busqueda);
      });
    }

    return resultado;

  }

}
