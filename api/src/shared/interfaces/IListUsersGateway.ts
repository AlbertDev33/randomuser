import { User } from '@entities/User';

import { IApiResults } from './IListUsers';

export interface IListUsersGateway {
  list({ query }: IApiResults): Promise<User>;
}
