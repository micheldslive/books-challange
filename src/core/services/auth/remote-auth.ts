import {
  InvalidCredentialsError,
  UnexpectedError,
} from '@/core/services/errors'
import {
  BooksParams,
  HttpPost,
  HttpResponse,
  HttpStatusCode,
  SignInParams,
} from '@/core/types'

export class RemoteAuth {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPost,
  ) {}

  async auth(params: SignInParams): Promise<HttpResponse> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    })

    switch (httpResponse.status) {
      case HttpStatusCode.ok:
        return httpResponse
      case HttpStatusCode.badRequest:
        throw new UnexpectedError(httpResponse.statusText)
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }

  async get(params: BooksParams): Promise<HttpResponse> {
    const httpResponse = await this.httpPostClient.get({
      url: this.url,
      body: { params },
    })

    switch (httpResponse.status) {
      case HttpStatusCode.ok:
        return httpResponse
      case HttpStatusCode.badRequest:
        throw new UnexpectedError(httpResponse.statusText)
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }
}
