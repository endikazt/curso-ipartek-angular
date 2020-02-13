import { Observable } from "rxjs";

export interface IHabilidadService {

    getAll(): Observable<any>;

}