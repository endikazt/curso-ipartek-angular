import { Observable } from "rxjs";

export interface INoticiasService {

    /**
     * Recuperamons los datos deen JSON de una noticia por su id
     * @param id: String id de la noticia
     * @see GET  http://localhost:3000/noticias/{id}
     */
    getNoticia(id:string): Observable<any>;

    /**
     *  Recuperamons todas las noticas de la base de datos
     */

    getAll() : Observable<any>;

    /**
     * Metodo para crear una noticia
     * @param noticia objeto con los datos de la noticia
     */

    crear(noticia: any): Observable<any> ;

}