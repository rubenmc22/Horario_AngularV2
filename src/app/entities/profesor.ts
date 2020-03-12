import { ProfesorInterface } from './interfaces/profesorInterface';

export class Profesor implements ProfesorInterface {

  public id: number;
  public nombre: string;
  public apellido: string;
  public cedula: number;
  public telefono: number;
  public status: boolean;

  constructor(public correo: string) {
    this.nombre = '';
    this.apellido = '';
    this.cedula = null;
    this.telefono = null;
    this.correo = '';
    this.status = true;
  }
}


