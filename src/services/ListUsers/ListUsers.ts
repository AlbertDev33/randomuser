import { User } from '@entities/User';
import { IListUsersGateway } from '@gateways/ListUsersGateway/protocol/IListUsersGateway';

import { IListUsers } from './protocol/IListUsers';

export class ListUsers implements IListUsers {
  constructor(private listUsers: IListUsersGateway) {}

  public async execute(): Promise<User[]> {
    const users = await this.listUsers.list();
    return users;
  }
}
