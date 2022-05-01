import { User } from '@entities/User';
import { IApiResults, IListUsers } from '@shared/interfaces/IListUsers';
import { IListUsersGateway } from '@shared/interfaces/IListUsersGateway';

export class ListUsers implements IListUsers {
  constructor(private listUsers: IListUsersGateway) {}

  public async execute({ query }: IApiResults): Promise<User> {
    const users = await this.listUsers.list({ query });
    return users;
  }
}
