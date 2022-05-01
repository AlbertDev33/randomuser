/* eslint-disable no-promise-executor-return */
import { User } from '@entities/User';
import { IListUsersGateway } from '@gateways/ListUsersGateway/protocol/IListUsersGateway';
import { ListUsers } from '@services/ListUsers/ListUsers';

type SutType = {
  stub: ListUsers;
};

class ListUsersGatewayStub implements IListUsersGateway {
  private users = [
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
  ];
  async list(): Promise<User[]> {
    const promise = new Promise<User[]>(resolve => resolve(this.users));
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

    const users = await stub.execute();
    const { length } = users;

    expect(users.length).toEqual(length);
  });
});
