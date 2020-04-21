import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Componentes
import { Materia } from '../entities/materia';
import { Global } from './global';
import { Observable } from 'rxjs';

@Injectable()
export class MateriaService {
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
  getMateria() {
    return this.http.get<Materia[]>(
      this.url + '/api/v1/asignaturas', {
      observe: 'response',
      responseType: 'json',
    });
  }

  getMateriaId(id) {
    return this.http.get<Materia[]>(
      this.url + '/api/v1/asignaturas/' + id, {
      observe: 'response',
      responseType: 'json',
    });
  }

  postMateria(materia: Materia) {
    const json = JSON.stringify(materia);
    const params = json;
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    });
    return this.http.post<Materia>(this.url + '/api/v1/asignaturas',
      params, {
      headers
    });
  }

  updateMateria(materia: Materia) {
    const json = JSON.stringify(materia);
    const params = json;
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    });
    return this.http.put<Materia>(this.url + '/api/v1/asignaturas' + materia.id,
      params, {
      headers
    });
  }

  getDeleteId(id): Observable<Materia> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    });
    return this.http.delete<Materia>(this.url + '/api/v1/asignaturas/' + id);
  }
}

/*-------------------------------------------------------------------------------------------------------
------------------------------------Finish CRUD Hibernate----------------------------------------------
-------------------------------------------------------------------------------------------------------*/



