import { User } from '@entities/User';

import { IListUsersGateway } from './protocol/IListUsersGateway';

export class ListUsersGateway implements IListUsersGateway {
  public async list(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
}
