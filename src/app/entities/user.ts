import { UserInterface } from './interfaces/userInterface';

export class Users implements UserInterface {

  public id: number;
  public email: string;
  public rPassword: string;

  constructor(
    public cedula: string,
    public password: string,
  ) {
    this.cedula = '';
    this.email = '';
    this.password = '';
    this.rPassword = '';
  }
}
