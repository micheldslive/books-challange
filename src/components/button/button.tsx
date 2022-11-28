import { ButtonProps } from '@/core/types'
import * as S from './button.styles'

export const Button = ({ children, isLoading, ...props }: ButtonProps) => {
  return (
    <S.ButtonWrapper {...props}>
      {isLoading ? <S.ButtonLoading /> : <span>{children}</span>}
    </S.ButtonWrapper>
  )
}
