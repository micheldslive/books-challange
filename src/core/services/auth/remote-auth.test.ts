import { faker } from '@faker-js/faker'

import { InvalidCredentialsError , UnexpectedError } from '@/core/services/errors'
import { HttpStatusCode } from '@/core/types'
import { mockAuth } from '@/core/mocks/auth.mock'
import { HttpPostClient } from '@/core/mocks/post-client.mock'
import { RemoteAuth } from '.'

type SutType = {
  httpPostClient: HttpPostClient
  sut: RemoteAuth
}

const makeSut = (url: string = faker.internet.url()): SutType => {
  const httpPostClient = new HttpPostClient()
  const sut = new RemoteAuth(url, httpPostClient)
  return {
    httpPostClient,
    sut,
  }
}

describe('RemoteAuth', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClient } = makeSut(url)
    await sut.auth(mockAuth())
    expect(httpPostClient.url).toBe(url)
  })

  test('Should call HttpPostClient with correct body', async () => {
    const { sut, httpPostClient } = makeSut()
    const authenticationParams = mockAuth()
    await sut.auth(authenticationParams)
    expect(httpPostClient.body).toEqual(authenticationParams)
  })

  test('Should throw invalidCredentialsError if HttpPostClient returns 401', async () => {
    const { sut, httpPostClient } = makeSut()
    httpPostClient.response.status = HttpStatusCode.unauthorized
    const authenticationParams = mockAuth()
    const promise = sut.auth(authenticationParams)
    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClient } = makeSut()
    httpPostClient.response.status = HttpStatusCode.badRequest
    const authenticationParams = mockAuth()
    const promise = sut.auth(authenticationParams)
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 404', async () => {
    const { sut, httpPostClient } = makeSut()
    httpPostClient.response.status = HttpStatusCode.notFound

    const authenticationParams = mockAuth()
    const promise = sut.auth(authenticationParams)
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClient } = makeSut()
    httpPostClient.response.status = HttpStatusCode.serverError
    const authenticationParams = mockAuth()
    const promise = sut.auth(authenticationParams)
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
