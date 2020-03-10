import { ModificarUsuarioInterface } from './interfaces/modificarUserInterface';

export class ModificarUsuario implements ModificarUsuarioInterface {

    public id: number;

    constructor(
        public usuario: number,
        public pass: string,
        public rPass: string,
        public status: boolean
    ) {
        this.usuario = 0;
        this.pass = '';
        this.rPass = '';
        this.status = true;

    }

}
