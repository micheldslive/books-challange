import {
  HttpPost,
  HttpRequestParams,
  HttpResponse,
  HttpStatusCode,
} from '@/core/types'

export class HttpPostClient implements HttpPost {
  url?: string
  body?: object
  response: HttpResponse = {
    status: HttpStatusCode.ok,
    data: undefined,
    statusText: '',
    headers: {},
    config: {},
  }

  async post(params: HttpRequestParams): Promise<HttpResponse> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }

  async get(params: HttpRequestParams): Promise<HttpResponse> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
