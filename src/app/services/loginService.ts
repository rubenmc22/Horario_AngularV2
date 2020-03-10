import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Global} from '../services/global';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Base URL
  private baseUrl = Global.url;

  constructor(private http: HttpClient, private router: Router) {
  }

  /*login(usuario: number, pass: string) {
    const url = this.baseUrl + 'login';
    return this.http.post<{ access_token: string }>(url, {usuario, pass}).pipe(tap(res => {
      localStorage.setItem('access_token', res.access_token);
    }));
  }*/

  login(user: number, pass: string) {
    return this.http.post(this.baseUrl + '/', {
     cedula: user,
     password : pass,
    });
  }

 /* register(usuario: any, pass: string, rPass: string) {
    const url = this.baseUrl + 'register';
    return this.http.post<{ access_token; string }>(url, {usuario, pass, rPass}).pipe(tap(res => {
      this.login(usuario, pass);
    }));
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }*/
}
