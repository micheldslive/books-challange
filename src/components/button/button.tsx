import { ButtonProps } from '@/core/types'
import { useUsers } from '@/core/zustand'
import * as S from './button.styles'

export const Button = ({ children, ...props }: ButtonProps) => {
  const { loading } = useUsers()

  return (
    <S.ButtonWrapper {...props}>
      {loading ? <S.ButtonLoading /> : <span>{children}</span>}
    </S.ButtonWrapper>
  )
}
