import { HttpRequestParams } from '@/core/types'
import { api } from '@/core/api'

export class PostClient {
  async post({ url, body }: HttpRequestParams) {
    return await api.post(url, body)
  }

  async get({ url, body }: HttpRequestParams) {
    return await api.get(url, body)
  }
}
