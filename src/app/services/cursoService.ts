import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Componentes
import { Curso } from '../entities/cursos';
import { Global } from './global';
import { Observable } from 'rxjs';
import { Horario } from "../entities/horarios";

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

  getCursoId(id) {
    return this.http.get<Curso[]>(
      this.url + '/api/v1/cursos/' + id, {
      observe: 'response',
      responseType: 'json',
    });
  }

  getHorarioByCurso(id: number) {
    return this.http.get<Horario[]>(
      this.url, {}
    )
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

  updateCurso(id, infoCursos) {
    const json = JSON.stringify(infoCursos);
    const params = json;
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    });
    return this.http.put<Curso>(this.url + '/api/v1/cursos/' + id,
      params, {
      headers
    });
  }

  getDeleteId(id): Observable<Curso> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    });
    return this.http.delete<Curso>(this.url + '/api/v1/cursos/' + id);
  }
}

/*-------------------------------------------------------------------------------------------------------
------------------------------------Finish CRUD Hibernate----------------------------------------------
-------------------------------------------------------------------------------------------------------*/



