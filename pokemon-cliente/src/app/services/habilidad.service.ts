import { Injectable } from '@angular/core';
import { IHabilidadService } from './Ihabilidad.service';
import { Observable } from 'rxjs';
import { API_URL } from '../../global';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService implements IHabilidadService {

  constructor(private http: HttpClient) {

    console.trace('HabilidadService.constructor');

   }

  getAll(): Observable<any> {
    const url = API_URL + `habilidad/`;
    console.trace('HabilidadService getAll ' + url);
    return this.http.get(url);
  }

}
