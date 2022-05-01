import { User } from '@entities/User';
import { IApiResults } from '@shared/interfaces/IListUsers';
import { IListUsersGateway } from '@shared/interfaces/IListUsersGateway';
import { IHttpRequests } from '@shared/interfaces/IRequests';

const LANGUAGE = 'br';

export class ListUsersGateway implements IListUsersGateway {
  constructor(private request: IHttpRequests) {}

  public async list({ query }: IApiResults): Promise<User> {
    try {
      const { results } = query;
      const uri = `?results=${Number(results)}&nat=${LANGUAGE}`;
      const { data } = await this.request.get<User>(
        `${process.env.API_URL}${uri}`,
      );
      return data;
    } catch (err) {
      return err;
    }
  }
}
