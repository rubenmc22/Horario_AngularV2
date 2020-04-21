import { ModificarUsuarioInterface } from './interfaces/modificarUserInterface';

export class ModificarUsuario implements ModificarUsuarioInterface {

    public id: number;

    constructor(
        public usuario: string,
        public email: string,
        public pass: string,
        public rPass: string,
        public status: boolean
    ) {
        this.usuario = '';
        this.email = '';
        this.pass = '';
        this.rPass = '';
        this.status = true;

    }

}
