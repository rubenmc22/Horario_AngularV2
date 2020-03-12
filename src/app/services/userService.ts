import {Injectable} from '@angular/core';
import {Users} from '../entities/user';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  public userLogged: Users;
  private currentUserSubject: BehaviorSubject<Users>;
  public currentUser: Observable<Users>;

  constructor() {
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

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
