import { Input, Logo, Tooltip } from '@/components'
import { useForm } from 'react-hook-form'
import { SignInParams } from '@/core/types'
import { useLogin } from '@/core/uses'
import * as S from './login.styles'

export const Login = () => {
  const { register, handleSubmit } = useForm<SignInParams>()
  const { mutate, error, isLoading } = useLogin()

  return (
    <S.Wrapper>
      <S.Container>
        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>

        <S.Form onSubmit={handleSubmit((data) => mutate(data))}>
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
            isLoading={isLoading}
            register={register}
          />
          {!!error && <Tooltip error={error} />}
        </S.Form>
      </S.Container>
    </S.Wrapper>
  )
}
