import { SessionInterface } from './interfaces/sessionInterface';
import { Users } from '../entities/user';

export class Session implements SessionInterface {

  public token: string;
  public user: Users;

  constructor() { }
}
