import create from 'zustand'
import { parseCookies } from 'nookies'
import { useEffect } from 'react'
import {
  AxiosErrorProps,
  SignInData,
  useAuthProps,
  UserProps,
} from '@/core/types'
import { api } from '@/core/api'
import { AxiosError, AxiosResponse } from 'axios'
import { destroyCookie, setCookie } from 'nookies'
import router from 'next/router'

const MAX_AGE = Number(process.env.MAX_AGE)

const useAuth = create<useAuthProps>((set) => ({
  user: undefined,
  setUser: (user) =>
    set((state) => ({
      ...state,
      user,
    })),

  error: '',
  setError: (error) =>
    set((state) => ({
      ...state,
      error,
    })),

  loading: false,
  setLoading: (loading) =>
    set((state) => ({
      ...state,
      loading,
    })),

  signIn: async ({ email, password }: SignInData) => {
    set((state) => ({
      ...state,
      loading: true,
    }))

    await api
      .post('/auth/sign-in', {
        email,
        password,
      })

      .then((response: AxiosResponse) => {
        const user: UserProps = response.data
        const userCookie = JSON.stringify(user)

        const token: string = response.headers.authorization
        const refreshToken: string = response.headers['refresh-token']

        setCookie(undefined, '@ioasys:user', userCookie, {
          maxAge: MAX_AGE,
        })

        setCookie(undefined, '@ioasys:token', token, {
          maxAge: MAX_AGE,
        })

        setCookie(undefined, '@ioasys:refresh-token', refreshToken, {
          maxAge: MAX_AGE,
        })

        set((state) => ({
          ...state,
          user,
        }))

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`

        router.push('/books')
      })
      .catch((axiosError: AxiosError & AxiosErrorProps) => {
        if (axiosError.response?.status === 401) {
          const { errors } = axiosError.response.data
          const error =
            errors?.message || 'Não Autorizado, contate um administrador'

          set((state) => ({
            ...state,
            error,
          }))
        }

        if (axiosError.response?.data) {
          const { errors } = axiosError.response.data
          const error =
            errors?.message || 'Não Autorizado, contate um administrador'

          set((state) => ({
            ...state,
            error,
          }))
        }
      })

    set((state) => ({
      ...state,
      loading: false,
    }))
  },

  signOut: async () => {
    destroyCookie(undefined, '@ioasys:user')
    destroyCookie(undefined, '@ioasys:token')
    destroyCookie(undefined, '@ioasys:refresh-token')
    router.push('/')
  },
}))

const useUsers = () => {
  const { error, user, setUser, signIn, signOut, loading } = useAuth()

  useEffect(() => {
    const { '@ioasys:token': token, '@ioasys:user': user } = parseCookies()

    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      const parseUser = JSON.parse(user)
      setUser(parseUser)
      router.push('/books')
    }
  }, [setUser])

  return {
    signIn,
    signOut,
    error,
    user,
    loading,
  }
}

export { useUsers }
