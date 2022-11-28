import { setCookie as set } from 'nookies'

const maxAge = Number(process.env.MAX_AGE)

export const setCookie = (name: string, value: string) =>
  set(undefined, name, value, {
    maxAge,
  })
