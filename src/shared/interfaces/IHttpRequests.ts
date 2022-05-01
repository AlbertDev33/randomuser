import express, { Request, Response, Router } from 'express';

export interface IRequest extends Request {}
export interface IResponse extends Response {}
export interface IRouter extends Router {}

export const Route = (): IRouter => {
  const router = express.Router();
  return router;
};
