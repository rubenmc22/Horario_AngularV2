import {HorarioInterface} from './interfaces/horariosInterface';

export class Horario implements HorarioInterface {

  public id: number;

  constructor(
    public profesor: string,
    public materia: string,
    public dia: string,
    public hora: string,
    public status: boolean,
  ) {
    this.profesor = '';
    this.materia = '';
    this.dia = '';
    this.hora = '';
    this.status = true;
  }
}



