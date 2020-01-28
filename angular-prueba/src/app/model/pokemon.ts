export class Pokemon {

    private _id: number;
    private _nombre: string;
    private _imagen: string;

    constructor(id: number, nombre: string, imagen: string){

        this._id = id;
        this.nombre = nombre;
        this._imagen = imagen;

    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = (value !== undefined && value !== '')?  value : 'sin nombre';
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = (value !== undefined && value !== '')?  value : 'https://i.etsystatic.com/12696278/r/il/bb21a8/1868980486/il_570xN.1868980486_d6zs.jpg';
    }

}
