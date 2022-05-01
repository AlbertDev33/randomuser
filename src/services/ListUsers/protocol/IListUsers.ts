import { User } from '@entities/User';

export interface IListUsers {
  execute(): Promise<User[]>;
}
