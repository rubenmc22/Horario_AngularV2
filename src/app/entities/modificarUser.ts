import { ModificarUsuarioInterface } from './interfaces/modificarUserInterface';

export class ModificarUsuario implements ModificarUsuarioInterface {

    public id: number;
    public nombre: string;
    public apellido: string;
    public email: string;
    public cedula: string;
    public password: string;
    public rPassword: string;
    public status: boolean

    constructor() { }

}
