import router from 'next/router'
import { destroyCookie } from 'nookies'
import create from 'zustand'
import { LoginStore } from '@/core/types'

export const useLoginStore = create<LoginStore>()((set) => ({
  data: undefined,
  error: undefined,
  setError: (error) => {
    set(() => ({ error }))
  },
  signIn: (data) => set(() => ({ data })),
  signOut: async () => {
    destroyCookie(undefined, '@ioasys:user')
    destroyCookie(undefined, '@ioasys:token')
    destroyCookie(undefined, '@ioasys:refresh-token')
    router.push('/')
  },
}))
