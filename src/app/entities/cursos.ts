import {CursosInterface} from './interfaces/cursosInterface';

export class Curso implements CursosInterface {

  public id: number;

  constructor(
    public nombre: string,
    public descripcion: string,
    public diasAcademicos: string[],
    public status: boolean
  ) {
    this.nombre = '';
    this.descripcion = '';
    this.diasAcademicos = ['x', 'y', 'z', 'w', 'r', 's', 't'];
    this.status = true;
  }

}
