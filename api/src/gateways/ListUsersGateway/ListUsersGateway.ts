import { User } from '@entities/User';
import { IListUsersGateway } from '@shared/interfaces/IListUsersGateway';
import { IHttpRequests } from '@shared/interfaces/IRequests';

export class ListUsersGateway implements IListUsersGateway {
  constructor(private request: IHttpRequests) {}

  public async list(): Promise<User> {
    try {
      const { data } = await this.request.get<User>(process.env.API_URL);
      return data;
    } catch (err) {
      return err;
    }
  }
}
