import { User } from '@entities/User';

export interface IListUsersGateway {
  list(): Promise<User>;
}
