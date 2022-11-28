import { Button } from '@/components'
import { InputProps } from '@/core/types'
import * as S from './input.styles'

export const Input = ({
  button,
  label,
  name,
  value,
  register,
  isLoading,
  ...props
}: InputProps) => {
  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.Input
          {...props}
          {...register(name, { required: true })}
          value={value}
          aria-label={name}
        />
        {label && <S.Label htmlFor={name}>{label}</S.Label>}
      </S.InputWrapper>

      {button && (
        <Button type='submit' isLoading={isLoading}>
          {button}
        </Button>
      )}
    </S.Wrapper>
  )
}
