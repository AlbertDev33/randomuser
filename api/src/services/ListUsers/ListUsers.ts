import { User } from '@entities/User';
import { IListUsers } from '@shared/interfaces/IListUsers';
import { IListUsersGateway } from '@shared/interfaces/IListUsersGateway';

export class ListUsers implements IListUsers {
  constructor(private listUsers: IListUsersGateway) {}

  public async execute(): Promise<User> {
    const users = await this.listUsers.list();
    return users;
  }
}
