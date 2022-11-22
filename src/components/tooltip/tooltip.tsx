import { TooltipProps } from '@/core/types'
import * as S from './tooltip.styles'

export const Tooltip = ({ error }: TooltipProps) => (
  <S.Wrapper active={!!error}>{error}</S.Wrapper>
)
