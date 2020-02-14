import { Color } from './color.model';

export class Fruta {

    id : number;
    nombre : string;
    precio : number;
    imagen : string;
    colores : Array<Color>;

    constructor(nombre?: string) {

        this.id = 0;
        this.nombre = (nombre) ? nombre : '';
        this.precio = 0;
        this.imagen = "assets/images/pokemonuhoh.jpg";
        this.colores = new Array();

    }

}