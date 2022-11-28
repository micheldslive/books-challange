import { InputHTMLAttributes } from 'react'
import { UseFormRegister, FieldName } from 'react-hook-form'
import { AxiosResponse } from 'axios'

export type UserProps = {
  id: string
  name: string
  email: string
  birthdate: string
  gender: 'M' | 'F'
}

export type SignInParams = {
  email: string
  password: string
}

export type BooksParams = {
  page: number
  amount?: number
}

export type InputProps = {
  button?: string
  label?: string
  isLoading?: boolean
  name: FieldName<SignInParams>
  onClick?: () => void
  register: UseFormRegister<SignInParams>
} & InputHTMLAttributes<HTMLInputElement>

export type useAuthProps = {
  user: UserProps | undefined
  setUser(user: UserProps | undefined): void
  error: string
  setError(error: string): void
  loading: boolean
  setLoading(loading: boolean): void
  signIn(userData: SignInParams): Promise<void>
  signOut(): Promise<void>
}

export interface LoginStore {
  data?: UserProps
  error?: string
  setError(error?: string): void
  signIn(data: UserProps): void
  signOut(): void
}

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
