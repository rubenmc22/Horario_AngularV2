import { CargaAcademicaInterface } from './interfaces/cargaAcademicaInterface'

export class CargaAcademica implements CargaAcademicaInterface {

    public id: number;

    constructor(
        public materia: string,
        public nombreProfesor: string,
        public apellidoProfesor: string,
        public horasAcademicas: number,
        public status: boolean
    ) {
        this.materia = '';
        this.nombreProfesor = '';
        this.apellidoProfesor = '';
        this.horasAcademicas = 0;
        this.status = true;
    }

}
