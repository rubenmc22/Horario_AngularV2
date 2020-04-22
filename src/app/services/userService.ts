import { Injectable } from '@angular/core';
import { Users } from '../entities/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  public userLogged: Users;
  private currentUserSubject: BehaviorSubject<Users>;
  public currentUser: Observable<Users>;
  private baseUrl = Global.url;

  constructor(
    public http: HttpClient,
    private router: Router
  ) {
    this.isUserLoggedIn = false;
    this.currentUserSubject = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  }

  public get currentUserValue(): Users {
    return this.currentUserSubject.value;
  }

  setUserLoggedIn(user: Users) {
    this.isUserLoggedIn = true;
    this.userLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));

  }

  getAll() {
    return this.http.get<Users[]>(this.baseUrl + '/api/v1/usuarios');
  }

  register(user: Users) {
    const json = JSON.stringify(user);
    const params = json;
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    });
    return this.http.post<Users>(this.baseUrl + '/api/v1/usuarios',
      params, {
      headers
    });
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/api/v1/usuarios/' + id);
  }

  logout() {

  }
}
