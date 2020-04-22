import { LoginObjectInterface } from './interfaces/loginObjectInterface';

export class LoginObject implements LoginObjectInterface {

  public username: string;
  public password: string;

  constructor(object: any) {
    this.username = (object.username) ? object.username : null;
    this.password = (object.password) ? object.password : null;
  }
}
