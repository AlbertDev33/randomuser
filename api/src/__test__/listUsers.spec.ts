/* eslint-disable no-promise-executor-return */
import { User } from '@entities/User';
import { ListUsers } from '@services/ListUsers/ListUsers';
import { IApiResults } from '@shared/interfaces/IListUsers';
import { IListUsersGateway } from '@shared/interfaces/IListUsersGateway';

type SutType = {
  stub: ListUsers;
};

class ListUsersGatewayStub implements IListUsersGateway {
  private users = {
    results: [
      {
        gender: '',
        name: {
          first: '',
          last: '',
        },
        location: {
          street: '',
          city: '',
          state: '',
          postcode: '',
          coordinates: {
            latitude: '',
            longitude: '',
          },
        },
        email: '',
        login: {
          uuid: '',
          username: '',
          password: '',
        },
        dob: {
          date: new Date(),
          age: 17,
        },
        registered: {
          date: new Date(),
          age: 17,
        },
        phone: '',
        cell: '',
        id: {
          name: '',
          value: '',
        },
        picture: {
          large: '',
          medium: '',
          thumbnail: '',
        },
        nat: '',
      },
    ],
  };
  async list(): Promise<User> {
    const promise = new Promise<User>(resolve => resolve(this.users as User));
    return promise;
  }
}

const sut = (): SutType => {
  const listUserStub = new ListUsersGatewayStub();
  const stub = new ListUsers(listUserStub);

  return {
    stub,
  };
};

describe('List Users', () => {
  it('should list users', async () => {
    const { stub } = sut();

    const results: IApiResults = {
      query: {
        results: '10',
      },
    };
    const users = await stub.execute({ query: results.query });
    const length = users.results.length > 0;

    expect(length).toBe(true);
  });
});
