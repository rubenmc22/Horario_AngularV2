import { HorarioInterface } from './interfaces/horariosInterface';

export class Horario implements HorarioInterface {

    public id: number;

    constructor(
        public profesor: String,
        public materia: String,
        public dia: String,
        public hora: String,
        public status: boolean,
    ) {
        this.profesor = '';
        this.materia = '';
        this.dia = '';
        this.hora = '';
        this.status = true;
    }
}



