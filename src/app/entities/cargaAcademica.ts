import { CargaAcademicaInterface } from './interfaces/cargaAcademicaInterface'

export class CargaAcademica implements CargaAcademicaInterface {

    public id: number;

    constructor(
        public nombre: string,
        public nombreProfesor: string,
        public apellidoProfesor: string,
        public horasAcademicas: number,
        public cursosAct: string,
        public status: boolean
    ) {
        this.nombre = '';
        this.nombreProfesor = '';
        this.apellidoProfesor = '';
        this.horasAcademicas = 1;
        this.cursosAct = '';
        this.status = true;
    }

}
