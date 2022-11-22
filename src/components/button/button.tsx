import { ButtonProps } from '@/core/types'
import * as S from './button.styles'

export const Button = ({ children, ...props }: ButtonProps) => (
  <S.Wrapper {...props}>
    <span>{children}</span>
  </S.Wrapper>
)
