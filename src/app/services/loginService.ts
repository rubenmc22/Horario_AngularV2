import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Global } from '../services/global';
import { Users } from '../entities/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Base URL
  private baseUrl = Global.url;
  private currentUserSubject: BehaviorSubject<Users>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('access_token')));
  }

  login2(user: string, pass: string) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    });

    const url = this.baseUrl + '/api/v1/login';
    return this.http.post<{ access_token: string }>(url, { cedula: user, password: pass, headers }).pipe(tap(
      res => {
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('cedula: ' + user, 'password: ' + pass);
      }));
  }

  public get currentUserValue(): Users {
    return this.currentUserSubject.value;
  }

  login(user: string, pass: string) {

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    });
    return this.http.post<{ access_token: string }>(this.baseUrl + '/api/v1/login', {
      cedula: user,
      password: pass,
      headers
    }).pipe(tap(
      res => {
        localStorage.setItem('access_token', res.access_token);
      }));
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  logout2() {
    localStorage.removeItem('access_token');
    localStorage.clear();
    this.currentUserSubject.next(null);
    // this.router.navigate(['/login']);

  }
}
