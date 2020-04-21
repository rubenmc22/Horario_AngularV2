import { Injectable } from '@angular/core';
import { Users } from '../entities/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  public userLogged: Users;
  private currentUserSubject: BehaviorSubject<Users>;
  public currentUser: Observable<Users>;
  public url: string;

  constructor(
    public http: HttpClient
  ) {
    this.isUserLoggedIn = false;
    this.currentUserSubject = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.url = Global.url;


  }
  public get currentUserValue(): Users {
    return this.currentUserSubject.value;
  }

  setUserLoggedIn(user: Users) {
    this.isUserLoggedIn = true;
    this.userLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));

  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  postUser(user: Users) {
    const json = JSON.stringify(user);
    const params = json;
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    });
    return this.http.post<Users>(this.url + '/api/v1/usuarios',
      params, {
      headers
    });
  }
}
