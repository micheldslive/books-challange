import { InputHTMLAttributes } from 'react'
import { UseFormRegister, FieldName } from 'react-hook-form'

export type UserProps = {
  id: string
  name: string
  email: string
  birthdate: string
  gender: 'M' | 'F'
}

export type SignInData = {
  email: string
  password: string
}

export type InputProps = {
  button?: string
  label?: string
  name: FieldName<SignInData>
  onClick?: () => void
  register: UseFormRegister<SignInData>
} & InputHTMLAttributes<HTMLInputElement>

export type useAuthProps = {
  user: UserProps | undefined
  setUser(user: UserProps | undefined): void
  error: string
  setError(error: string): void
  signIn(userData: SignInData): Promise<void>
  signOut(): Promise<void>
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
