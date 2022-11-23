import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { transparentize } from 'polished'
import { ModalProps } from '@/core/types'

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
  `,
}

export const Wrapper = styled.div<ModalProps>`
  ${({ theme, open }) => css`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    transition: opacity 250ms ease-in;
    width: 100%;
    z-index: ${theme.layers.modal};

    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}

    ${open && modalModifiers.open()}
    ${!open && modalModifiers.close()}
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: ${transparentize(0.1, theme.colors.black)};
    height: 100%;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    transition: opacity 250ms ease-in;
    width: 100%;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 72rem;
    margin: ${theme.spacings.sm};
    margin-top: 24rem;
    width: 100%;
    z-index: ${theme.layers.modal};

    ${media.greaterThan('medium')`
      margin-top: 0;
    `}
  `}
`
