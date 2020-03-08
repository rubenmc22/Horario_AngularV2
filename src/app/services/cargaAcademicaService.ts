import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Componentes
import { CargaAcademica } from '../entities/cargaAcademica';
import { Global } from './global';

@Injectable()
export class CargaAcademicaService {
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
    getCargaAcademica() {
        return this.http.get<CargaAcademica[]>(
            this.url + '/', {
            observe: 'response',
            responseType: 'json',
        });
    }

    getCargaAcademicaId() {
        return this.http.get<CargaAcademica[]>(
            this.url + '//{id}', {
            observe: 'response',
            responseType: 'json',
        });
    }

    postCargaAcademica(cargaAcademica: CargaAcademica) {
        const json = JSON.stringify(cargaAcademica);
        const params = json;
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
        return this.http.post<CargaAcademica>(this.url + '/',
            params, {
            headers
        });
    }

    updateCargaAcademica() {

    }

    deleteCargaAcademica() {

    }
}
    /*-------------------------------------------------------------------------------------------------------
------------------------------------Finish CRUD Hibernate----------------------------------------------
-------------------------------------------------------------------------------------------------------*/



