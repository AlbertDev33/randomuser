import { IRequest, IResponse } from '@shared/interfaces/IHttpRequests';
import { IListUsers } from '@shared/interfaces/IListUsers';
import { IListUsersController } from '@shared/interfaces/IListUsersController';

export class ListUsersController implements IListUsersController {
  constructor(private listUsers: IListUsers) {}
  public async handle(_: IRequest, response: IResponse): Promise<IResponse> {
    const users = await this.listUsers.execute();
    const { statusCode } = response;
    return response.status(statusCode).json({ users });
  }
}
