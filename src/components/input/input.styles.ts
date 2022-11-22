import styled, { css } from 'styled-components'
import { InputProps } from '@/core/types'

type WrapperProps = Pick<InputProps, 'disabled'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme }) => css`
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    border: 0;
    border-radius: ${theme.border.radius.md};
    display: flex;
    justify-content: space-between;
    height: 6rem;
    padding: 0 ${theme.spacings.xs};

    &:focus-within {
      outline: 0.2rem solid ${theme.colors.caramel};
      outline-offset: 0.2rem;
    }
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    flex: 1;
    padding-right: ${theme.spacings.xs};

    input:focus > label {
      transform: translate(16px, 4px) scale(0.75);
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    background: transparent;
    border: 0;
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.lg};
    margin-top: 0.4rem;
    outline: none;

    &::placeholder {
      color: ${theme.colors.white};
    }

    &:focus + label,
    :hover + label,
    :not(:placeholder-shown) + label {
      transform: translate(0, -12px) scale(0.75);
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    position: absolute;
    pointer-events: none;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.lg};
    transform: translate(0, 0) scale(1);
    transform-origin: top left;
    transition: all 0.1s ease-in-out;
    left: 0;
    opacity: 0.6;
    cursor: pointer;
  `}
`
