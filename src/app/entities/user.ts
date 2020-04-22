import { UserInterface } from './interfaces/userInterface';

export class Users implements UserInterface {

  public id: number;
  public nombre: string;
  public apellido: string;
  public email: string;
  public username: string;
  public password: string;
  public rPassword: string;
  public token: string;

  constructor() { }
}
