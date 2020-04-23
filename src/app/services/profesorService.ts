import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Componentes
import { Profesor } from '../entities/profesor';
import { Global } from './global';
import { Observable } from 'rxjs';

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
      this.url + '/api/v1/docentes', {
      observe: 'response',
      responseType: 'json',
    });
  }

  getProfesorId(id) {
    return this.http.get<Profesor[]>(
      this.url + '/api/v1/docentes/ ' + id, {
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
    return this.http.post<Profesor>(this.url + '/api/v1/docentes',
      params, {
      headers
    });
  }

  updateProfesor(id, infoProfesor) {
    const json = JSON.stringify(infoProfesor);
    const params = json;
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    });
    return this.http.put<Profesor>(this.url + '/api/v1/docentes/' + id,
      params, {
      headers
    });
  }

  getDeleteId(id): Observable<Profesor> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    });
    return this.http.delete<Profesor>(this.url + '/api/v1/docentes/' + id);
  }

}

/*-------------------------------------------------------------------------------------------------------
------------------------------------Finish CRUD Hibernate----------------------------------------------
-------------------------------------------------------------------------------------------------------*/
