import { ButtonProps } from '@/core/types'
import * as S from './button.styles'
import { Loading } from '@/styles'

export const Button = ({ children, isLoading, ...props }: ButtonProps) => {
  return (
    <S.ButtonWrapper {...props}>
      {isLoading ? (
        <Loading width={20} height={20} />
      ) : (
        <span>{children}</span>
      )}
    </S.ButtonWrapper>
  )
}
