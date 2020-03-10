import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Componentes
import { ModificarUsuario } from '../entities/modificarUser';
import { Global } from './global';

@Injectable()
export class ModificarUsuarioService {
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
    getModificarUsuario() {
        return this.http.get<ModificarUsuario[]>(
            this.url + '/', {
            observe: 'response',
            responseType: 'json',
        });
    }

    getModificarUsuarioId() {
        return this.http.get<ModificarUsuario[]>(
            this.url + '//{id}', {
            observe: 'response',
            responseType: 'json',
        });
    }

    postModificarUsuario(modificarUsuario: ModificarUsuario) {
        const json = JSON.stringify(modificarUsuario);
        const params = json;
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
        return this.http.post<ModificarUsuario>(this.url + '/',
            params, {
            headers
        });
    }

    updateModificarUsuario() {

    }

    deleteModificarUsuario() {

    }
}
    /*-------------------------------------------------------------------------------------------------------
------------------------------------Finish CRUD Hibernate----------------------------------------------
-------------------------------------------------------------------------------------------------------*/



