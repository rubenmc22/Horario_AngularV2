import { CargaAcademicaInterface } from './interfaces/cargaAcademicaInterface'

export class CargaAcademica implements CargaAcademicaInterface {

    public id: number;

    constructor(
        public asignatura: number,
        public detalleAsignatura: string,
        public docente: number,
        public detalleDocente: string,
        public curso: number,
        public detalleCurso: string,
        public horas: number,
        public estatus: string
    ) {
        this.asignatura = 0;
        this.detalleAsignatura = '';
        this.docente = 0;
        this.detalleDocente = '';
        this.curso = 0;
        this.detalleCurso = '';
        this.horas = 1;
        this.estatus = '';
    }

}
