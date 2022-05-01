import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import 'express-async-errors';

import { router } from '../routes';

export default (app: Express): void => {
  app.use(cors({ origin: '*' }));
  app.use(express.json());
  app.use(router);

  app.use(async (err: IError, _: Request, response: Response) => {
    return response.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message,
    });
  });
};
