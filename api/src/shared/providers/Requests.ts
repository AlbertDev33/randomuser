import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { IHttpRequests } from '@shared/interfaces/IRequests';

export interface IRequestResponse<T = unknown> extends AxiosResponse<T> {}
export interface IRequestConfig extends AxiosRequestConfig {}

export class Requests implements IHttpRequests {
  constructor(private request = axios) {}

  public async get<T>(
    url: string,
    config?: IRequestConfig,
  ): Promise<IRequestResponse<T>> {
    return this.request.get<T, IRequestResponse<T>>(url, config);
  }
}
