import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Global } from './global';
import { Users } from '../entities/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = Global.url;
  private currentUserSubject: BehaviorSubject<Users>;
  public currentUser: Observable<Users>;
  public user: Users;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.user = new Users();
  }

  public get currentUserValue(): Users {
    return this.currentUserSubject.value;
  }

  login(user, pass) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.baseUrl + '/api/v1/login', {
      cedula: user,
      password: pass,
      headers
    }).pipe(map(res => {
      localStorage.setItem('currentUser', JSON.stringify(res));
      this.currentUserSubject.next(res);
      return res;
    }));
  }

  logout() {
    // remove user from local storage and set current user to null
    this.user.token = null;
    localStorage.removeItem('currentUser');
    localStorage.clear();
    this.currentUserSubject.next(null);
  }
}






