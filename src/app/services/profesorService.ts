import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Componentes
import { Profesor } from '../entities/profesor';
import { Global } from './global';

@Injectable()
export class ProfesorService {
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
    getProfesores() {
        return this.http.get<Profesor[]>(
            this.url + '/api/v1/profesores', {
            observe: 'response',
            responseType: 'json',
        });
    }

    getProfesorId() {
        return this.http.get<Profesor[]>(
            this.url + '/api/v1/profesores/{id}', {
            observe: 'response',
            responseType: 'json',
        });
    }

    postProfesor(profesor: Profesor) {
        const json = JSON.stringify(profesor);
        const params = json;
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
        return this.http.post<Profesor>(this.url + '/api/v1/profesores',
            params, {
            headers
        });
    }

    updateMateria() {

    }

    deleteMateria() {

    }
}
    /*-------------------------------------------------------------------------------------------------------
------------------------------------Finish CRUD Hibernate----------------------------------------------
-------------------------------------------------------------------------------------------------------*/



