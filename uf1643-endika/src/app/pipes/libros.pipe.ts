import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'librosFiltro'
})
export class LibrosPipe implements PipeTransform {

  transform(libros: any, busqueda: string): any {

    let resultadoBusqueda = libros;
  
    console.debug('busqueda ', busqueda);

    if ( busqueda && '' !== busqueda) {

    busqueda = busqueda.toLowerCase();

    resultadoBusqueda = resultadoBusqueda.filter( (el) => {
        const encontrar = (el.title + el.isbn ).toLowerCase();
        return encontrar.includes(busqueda);
    });

  }

    return resultadoBusqueda;
  }

}
