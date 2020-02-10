import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITareasService } from './ITareas.service';
import { Observable } from "rxjs";
import { Tarea } from '../model/tarea';
import { API_URL } from '../../global';

@Injectable({
  providedIn: 'root'
})

export class TareasService implements ITareasService{

  constructor(private http: HttpClient) {

   } // TareasService Contructor 

   listar(): Observable<Tarea[]> {
    console.trace('TareasService listar()');
    return this.http.get<Array<Tarea>>(API_URL);
  }
  detalle(id: number): Observable<Tarea> {
    const url = API_URL + `${id}/`;
    console.trace('TareasService detalle ' + url);
    return this.http.get<Tarea>(url)
  }
  crear(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(API_URL, tarea);
  }
  modificar(tarea: Tarea): Observable<Tarea> {
    const url = API_URL + `${tarea.id}/`;
    return this.http.put<Tarea>(url, tarea);
  }
  eliminar(id: number): Observable<Tarea> {
    const url = API_URL + `${id}/`;
    console.trace('TareasService eliminar ' + url);
    return this.http.delete<Tarea>(url)
  }

} // TareasService
