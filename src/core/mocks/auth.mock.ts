import { faker } from '@faker-js/faker'
import { SignInParams } from '@/core/types'

export const mockAuth = (): SignInParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
})
