import styled, {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
  keyframes,
} from 'styled-components'
import { LoadingProps, StyleProps } from '@/core/types'

interface GlobalStyleProps extends StyleProps {
  noBackground?: boolean
}

export const GlobalStyles: GlobalStyleComponent<
  GlobalStyleProps,
  DefaultTheme
> = createGlobalStyle`
  @font-face {
    font-family: 'Heebo';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: local('Hebbo Regular'),
          url('/fonts/heebo-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Heebo';
    font-style: normal;
    font-display: swap;
    font-weight: 500;
    src: local('Hebbo Medium'),
          url('/fonts/heebo-500.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }

    #__next {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  }


  input[type='text'],
  input[type='email'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }


  ${({ theme, noBackground }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      color: ${theme.colors.gray};
      background-color: ${theme.colors.caramel};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.sm};
      line-height: ${theme.leading.normal};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: ${theme.font.weight.bold};
    }

    ${!noBackground &&
    css`
      background-color: ${theme.colors.black};
    `}
  `}
`

export const loadingSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

export const LoadingContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Loading = styled.span<LoadingProps>`
  ${({ width, height, border }) => css`
    border: ${border || 4}px rgba(0, 0, 0, 0.25) solid;
    border-top: ${border || 4}px rgba(0, 0, 0, 1) solid;
    border-radius: 50%;
    -webkit-animation: ${loadingSpin} 0.6s infinite linear;
    animation: ${loadingSpin} 0.6s infinite linear;
    width: ${width}px;
    height: ${height}px;
    display: block;
  `}
`
