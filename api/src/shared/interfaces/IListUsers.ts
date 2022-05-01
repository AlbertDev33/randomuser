import { ParsedQs } from 'qs';

import { User } from '@entities/User';

export interface IApiResults extends ParsedQs {
  query: {
    results: string;
  };
}

export interface IListUsers {
  execute({ query }: IApiResults): Promise<User>;
}
