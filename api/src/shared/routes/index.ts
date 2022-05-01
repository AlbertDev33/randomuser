import { Route } from '@shared/interfaces/IHttpRequests';

import { listRouter } from './ListUsersRoute';

export const router = Route();

router.use('/list', listRouter);
