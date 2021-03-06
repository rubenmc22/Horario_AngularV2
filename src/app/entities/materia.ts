import { MateriaInterface } from './interfaces/materiaInterface';

export class Materia implements MateriaInterface {

  public id: number;

  constructor(
    public nombre: string,
    public descripcion: string,
    public status: string
  ) {
    this
      .nombre = '';
    this
      .descripcion = '';
    this
      .status = 'true';
  }

}
