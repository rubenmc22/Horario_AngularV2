import {Injectable} from '@angular/core';
import {Users} from '../entities/user';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  public userLogged: Users;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user: Users) {
    this.isUserLoggedIn = true;
    this.userLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));

  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

}
