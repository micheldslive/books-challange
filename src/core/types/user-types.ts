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
export interface LoginStore {
  data?: UserProps
  error?: string
  setError(error?: string): void
  signIn(data: UserProps): void
  signOut(): void
}
