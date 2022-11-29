import { AxiosResponse } from "axios"

export type AxiosErrorProps = {
  response: {
    data: {
      errors: {
        message: string | undefined
      }
    }
  }
}

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  notFound = 404,
  serverError = 500,
}

export interface HttpResponse extends AxiosResponse {
  status: HttpStatusCode
}

export type HttpRequestParams = {
  url: string
  body?: object
}

export interface HttpPost {
  post(params: HttpRequestParams): Promise<HttpResponse>
  get(params: HttpRequestParams): Promise<HttpResponse>
}
