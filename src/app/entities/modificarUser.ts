import { ModificarUsuarioInterface } from './interfaces/modificarUserInterface';

export class ModificarUsuario implements ModificarUsuarioInterface {

    public id: number;

    constructor(
        public usuario: number,
        public contraseña: string,
        public verificarContraseña: string,
        public status: boolean
    ) {
        this.usuario = 0;
        this.contraseña = '';
        this.verificarContraseña = '';

    }

}
