import { Input, Logo, Tooltip } from '@/components'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useUsers } from '@/core/zustand'
import * as S from './login.styles'
import { SignInData } from '@/core/types'

export const Login = () => {
  const { register, handleSubmit } = useForm<SignInData>()

  const { error, signIn } = useUsers()

  const onSubmit: SubmitHandler<SignInData> = async (data) => {
    await signIn(data)
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type='email'
            name='email'
            label='E-mail'
            placeholder=' '
            register={register}
          />
          <Input
            type='password'
            name='password'
            label='Senha'
            placeholder=' '
            button='Entrar'
            register={register}
          />
          {!!error && <Tooltip error={error} />}
        </S.Form>
      </S.Container>
    </S.Wrapper>
  )
}
