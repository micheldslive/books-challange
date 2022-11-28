import { theme } from '@/styles/theme'

import { Button } from '.'
import { renderWithTheme } from '@/core/utils/tests'

describe('<Button />', () => {
  const render = () => renderWithTheme(<Button>Entrar</Button>)
  it('should render a button', () => {
    const { getByRole } = render()

    const color = theme.colors.accent
    const fontSize = theme.font.sizes.lg

    expect(getByRole('button', { name: /entrar/i })).toHaveStyle({
      color,
      height: '3.6rem',
      fontSize,
    })
  })
})
