import { Users } from '../../entities/user';

export interface SessionInterface {
  token: string;
  user: Users;
}
