import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Componentes
import { BloqueHorarios } from '../entities/bloqueHorario';
import { Global } from './global';
import { Observable } from 'rxjs';

@Injectable()
export class BloqueHorarioService {
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

    getBloquesHorario() {
        return this.http.get<BloqueHorarios[]>(
            this.url + '/api/v1/horas', {
            observe: 'response',
            responseType: 'json',
        });
    }

    getBloqueHorarioPorId(id) {
        return this.http.get<BloqueHorarios[]>(
            this.url + '/api/v1/horas/' + id, {
            observe: 'response',
            responseType: 'json',
        });
    }

    getBloqueHorarioCursoPorDia(idCurso, dia) {
        return this.http.get<BloqueHorarios[]>(
            this.url + '/api/v1/horas/curso/' + idCurso + '/dia/' + dia, {
            observe: 'response',
            responseType: 'json',
        });
    }

    postBloqueHorario(bloqueHorario: BloqueHorarios) {
        const json = JSON.stringify(bloqueHorario);
        const params = json;
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
        return this.http.post<BloqueHorarios>(this.url + '/api/v1/horas',
            params, {
            headers
        });
    }


    updateBloqueHorario(bloqueHorario: BloqueHorarios) {
        const json = JSON.stringify(bloqueHorario);
        const params = json;
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
        return this.http.put<BloqueHorarios>(this.url + '/api/v1/horas/' + bloqueHorario.id,
            params, {
            headers
        });
    }

    deleteBloqueHorario(id): Observable<BloqueHorarios> {
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
        return this.http.delete<BloqueHorarios>(this.url + '/api/v1/horas/' + id);
    }
}
/*-------------------------------------------------------------------------------------------------------
------------------------------------Finish CRUD Hibernate----------------------------------------------
-------------------------------------------------------------------------------------------------------*/



