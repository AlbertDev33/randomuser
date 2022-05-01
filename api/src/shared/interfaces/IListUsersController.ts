import { IRequest, IResponse } from './IHttpRequests';

export interface IListUsersController {
  handle(request: IRequest, response: IResponse): Promise<IResponse>;
}
