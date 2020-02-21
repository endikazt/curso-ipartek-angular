import { Injectable } from '@angular/core';
import { INoticiasService } from './Inoticias.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { API_URL } from "../../global";

@Injectable({
  providedIn: 'root'
})

export class NoticiasService implements INoticiasService{

  constructor(private http: HttpClient) { }  
  
  getNoticia(id: string): Observable<any> {
    const url = API_URL + id;
    console.trace('NoticiasService getNoticia ' + url);
    return this.http.get(url);
  }

  getAll() : Observable<any> {
    const url = API_URL;
    console.trace('NoticiasService getAll ' + url);
    return this.http.get(url);
  }

  crear(noticia: any): Observable<any> {
    const url = API_URL ;
    return this.http.post<any>(url, noticia);
  }
}
