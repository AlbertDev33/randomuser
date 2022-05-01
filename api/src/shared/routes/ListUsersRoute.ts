import { makeListUsers } from '@main/makeListUsers';
import { IRequest, IResponse, Route } from '@shared/interfaces/IHttpRequests';

const listRouter = Route();

listRouter.get('/', async (_: IRequest, response: IResponse) => {
  await makeListUsers().handle(_, response);
});

export { listRouter };
