import { ChildrenProps, ModalProps } from '@/core/types'
import * as S from './modal.styles'

export const Modal = ({
  children,
  open,
  close,
}: ModalProps & ChildrenProps) => {
  return (
    <S.Wrapper open={open} aria-label='modal' aria-hidden={!open}>
      <S.Content>{children}</S.Content>
      <S.Overlay onClick={close} />
    </S.Wrapper>
  )
}
