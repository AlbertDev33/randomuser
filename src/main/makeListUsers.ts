import { ListUsersGateway } from '@gateways/ListUsersGateway/ListUsersGateway';
import { ListUsers } from '@services/ListUsers/ListUsers';
import { ListUsersController } from '@shared/controllers/ListUsersController';
import { Requests } from '@shared/providers/Requests';

export const makeListUsers = (): ListUsersController => {
  const requests = new Requests();
  const listGateway = new ListUsersGateway(requests);
  const listUsers = new ListUsers(listGateway);

  return new ListUsersController(listUsers);
};
