import { BloqueHorarioInterface } from './interfaces/bloqueHorariosInterface';

export class BloqueHorarios implements BloqueHorarioInterface {

  public id: number;
  public bloqueHorario: number;
  public inicioBloque: string;
  public finBloque: string;
  public status: boolean;

  constructor() {
    this.bloqueHorario = 0;
    this.inicioBloque = '';
    this.finBloque = '';
    this.status = true;
  }
}



