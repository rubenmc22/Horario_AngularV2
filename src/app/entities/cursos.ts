import { CursosInterface } from './interfaces/cursosInterface';

export class Curso implements CursosInterface {

  public id: number;

  constructor(
    public nombre: string,
    public descripcion: string,
    public dias: number[],
    public status: string
  ) {
    this.nombre = '';
    this.descripcion = '';
    this.dias = [];
    this.status = '';
  }

}
