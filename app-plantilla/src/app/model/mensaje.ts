export interface IMensaje {

    tipo : string;
    contenido : string;


}

export class Mensaje implements IMensaje{


    tipo: string;
    contenido : string;

    constructor(){

        this.tipo = "primary";
        this.contenido = "";

    }


}