import { ProfesorInterface } from './interfaces/profesorInterface';

export class Profesor implements ProfesorInterface {

    public id: number;

    constructor(
        public nombre: string,
        public apellido: string,
        public cedula: number,
        public telefono: number,
        public email: string,
        public status: boolean,
    ) {
        this.nombre = '';
        this.apellido = '';
        this.cedula = null;
        this.telefono = null;
        this.email = '';
        this.status = true;
    }
}


