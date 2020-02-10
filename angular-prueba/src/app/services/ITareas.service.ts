import { Observable } from "rxjs";
import { Tarea } from '../model/tarea';

export interface ITareasService {

    listar(): Observable<Array<Tarea>>;

    detalle ( id : number): Observable<Tarea>;

    /**
     * Crear una nueva tarea
     * @param tarea tarea a dar de alta, sin id
     * @return un Observable con la tarea de alta e ID actulizado
     */

    crear ( tarea : Tarea ): Observable<Tarea>;

    modificar ( tarea : Tarea ): Observable<Tarea>;

    eliminar ( id : number ): Observable<Tarea>;

}