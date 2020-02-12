import { Usuario } from '../model/usuario';

export interface IUsuarioService {

    estaLogeado(): boolean;

    /**
     * Comprueba que exista el usuario
     * @param nombre 
     * @param password 
     * @returns Usuario con datos si existen, undefined si no existe
     */
    login(nombre : string, password : string) : Usuario;


    cerrarSesion(id : number) ;
}