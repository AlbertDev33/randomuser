import cors from 'cors';
import express, { Express, NextFunction, Request, Response } from 'express';
import 'express-async-errors';

export default (app: Express): void => {
  app.use(cors({ origin: '*' }));
  app.use(express.json());

  app.use(
    async (err: IError, _: Request, response: Response, next: NextFunction) => {
      return response.status(err.statusCode).json({
        statusCode: err.statusCode,
        message: err.message,
      });
    },
  );
};
