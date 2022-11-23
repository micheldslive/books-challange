import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/core/utils/tests/helpers'
import { theme } from '@/styles/theme'

import { Logo } from '.'

describe('<Logo />', () => {
  it('should render a white logo default', () => {
    const { container } = renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/ioasys/i).parentElement).toHaveStyle({
      color: theme.colors.white,
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a black logo', () => {
    renderWithTheme(<Logo color='black' />)

    expect(screen.getByLabelText(/ioasys/i).parentElement).toHaveStyle({
      color: theme.colors.black,
    })
  })
})
