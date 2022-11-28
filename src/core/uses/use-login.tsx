import { useMutation } from 'react-query'
import { useRouter } from 'next/router'
import { RemoteAuth } from '@/core/services/auth'
import { PostClient } from '@/core/services/post-client'
import { useLoginStore } from '@/core/stores'
import { AxiosErrorProps, HttpResponse, SignInParams } from '@/core/types'
import { setCookie } from '@/core/utils/cookies'
import { api } from '@/core/api'

export const useLogin = () => {
  const { push } = useRouter()
  const { signIn, signOut, error, setError, data } = useLoginStore()
  const remoteAuth = new RemoteAuth('/auth/sign-in', new PostClient())

  const { mutate, isLoading } = useMutation(
    async (values: SignInParams) => {
      const response: HttpResponse = await remoteAuth.auth({ ...values })

      const { data, headers } = response
      const userCookie = JSON.stringify(data)
      const token = headers.authorization
      const refreshToken = headers['refresh-token']

      setCookie('@ioasys:user', userCookie)
      setCookie('@ioasys:token', token)
      setCookie('@ioasys:refresh-token', refreshToken)

      signIn(data)

      api.defaults.headers.common.Authorization = `Bearer ${token}`

      push('/books')
    },
    {
      onError: ({ response }: AxiosErrorProps) => {
        setError(response.data.errors.message)
      },
    },
  )

  return {
    user: data,
    signOut,
    mutate,
    isLoading,
    error,
  }
}
