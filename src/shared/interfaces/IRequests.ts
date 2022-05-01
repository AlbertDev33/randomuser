import { IRequestConfig, IRequestResponse } from '@shared/providers/Requests';

export interface IHttpRequests {
  get<T>(url: string, config?: IRequestConfig): Promise<IRequestResponse<T>>;
}
