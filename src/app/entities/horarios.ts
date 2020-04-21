import { HorarioInterface } from './interfaces/horariosInterface';

export class Horario implements HorarioInterface {

  public id: number;
  public cargaAcademica: string;
  public docente: string;
  public asignatura: string;
  public curso: string;
  public bloqueHorario: number;
  public inicioBloque: string;
  public finBloque: string;
  public dia: string;
  public status: boolean;

  constructor() {
    this.cargaAcademica = '';
    this.docente = '';
    this.asignatura = '';
    this.bloqueHorario = 0;
    this.finBloque = '';
    this.inicioBloque = '';
    this.dia = '';
    this.curso = '';
    this.status = true;
  }
}



