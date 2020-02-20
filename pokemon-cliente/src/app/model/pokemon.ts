import { Habilidad } from './habilidad';

export class Pokemon {

    id: number;
    nombre: string;
    imagen: string;
    habilidades: Array<Habilidad>;

    constructor(){

        this.id = 0;
        this.nombre = "";
        this.imagen = "https://i.etsystatic.com/12696278/r/il/bb21a8/1868980486/il_570xN.1868980486_d6zs.jpg";
        this.habilidades = new Array<Habilidad>();

    }

}