import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Componentes
import { Horario } from '../entities/horarios';
import { Global } from './global';
import { Curso } from '../entities/cursos';

@Injectable()
export class HorarioService {
    public url: string;

    constructor(
        public http: HttpClient,
    ) {
        this.url = Global.url;
    }

    /*-------------------------------------------------------------------------------------------------------
    ------------------------------------Metodos CRUD Hibernate----------------------------------------------
    -------------------------------------------------------------------------------------------------------*/

    // CRUD Hibernate
    getHorario() {
        return this.http.get<Horario[]>(
            this.url + '/api/v1/horarios', {
            observe: 'response',
            responseType: 'json',
        });
    }

    getHorarioId(id) {
        return this.http.get<Horario[]>(
            this.url + '/api/v1/horarios/' + id, {
            observe: 'response',
            responseType: 'json',
        });
    }

    getHorarioPorCurso(id) {
        return this.http.get<Horario[]>(
            this.url + '/api/v1/horarios/curso/' + id, {
            observe: 'response',
            responseType: 'json',
        });
    }

    postHorario(horario: Horario) {
        const json = JSON.stringify(horario);
        const params = json;
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
        return this.http.post<Horario>(this.url + '/api/v1/horarios',
            params, {
            headers
        });
    }

    postHorarioPorCurso(id) {
        /* const json = JSON.stringify(horario);
         const params = json;*/
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
        return this.http.post<Horario>(this.url + '/api/v1/horarios/generar/' + id,
            headers, {
        });
    }

    updateHorario() {

    }

    deleteHorario() {

    }
}

/*-------------------------------------------------------------------------------------------------------
------------------------------------Finish CRUD Hibernate----------------------------------------------
-------------------------------------------------------------------------------------------------------*/



