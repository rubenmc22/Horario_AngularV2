import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Componentes
import { Curso } from '../entities/cursos';
import { Global } from './global';

@Injectable()
export class CursoService {
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
    getCursos() {
        return this.http.get<Curso[]>(
            this.url + '/api/v1/cursos', {
            observe: 'response',
            responseType: 'json',
        });
    }

    getCursoId() {
        return this.http.get<Curso[]>(
            this.url + '/api/v1/cursos/{id}', {
            observe: 'response',
            responseType: 'json',
        });
    }

    postCurso(curso: Curso) {
        const json = JSON.stringify(curso);
        const params = json;
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
        return this.http.post<Curso>(this.url + '/api/v1/cursos',
            params, {
            headers
        });
    }

    updateCurso() {

    }

    deleteCurso() {

    }
}
    /*-------------------------------------------------------------------------------------------------------
------------------------------------Finish CRUD Hibernate----------------------------------------------
-------------------------------------------------------------------------------------------------------*/



