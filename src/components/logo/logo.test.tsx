import { act, screen } from '@testing-library/react'
import { renderWithTheme } from '@/core/utils/tests'
import { theme } from '@/styles'

import { Logo } from '.'

describe('<Logo />', () => {
  it('should render a white logo default', () => {
    renderWithTheme(<Logo color='white' />)

    expect(screen.getByLabelText(/ioasys-logo/i).parentElement).toHaveStyle({
      color: theme.colors.white,
    })
  })

  it('should render a black logo', () => {
    renderWithTheme(<Logo color='black' />)

    expect(screen.getByLabelText(/ioasys-logo/i).parentElement).toHaveStyle({
      color: theme.colors.black,
    })
  })
})
