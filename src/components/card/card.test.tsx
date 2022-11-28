import { renderWithTheme } from '@/core/utils/tests'
import { theme } from '@/styles/theme'

import { Card } from '.'
import { book } from '@/core/mocks'

const cardProps = {
  ...book,
  onClick: jest.fn(),
}

const render = () => renderWithTheme(<Card {...cardProps} />)

describe('<Card />', () => {
  it('should render the card correctly', () => {
    const { getByRole } = render()

    expect(getByRole('heading', { name: /Aut/i })).toBeInTheDocument()
  })

  it('should render the data correctly', () => {
    const { getByRole, getByText } = render()

    expect(getByRole('img')).toBeInTheDocument()

    const mediumFontSize = theme.font.sizes.md
    expect(getByRole('heading', { name: /Aut/i })).toHaveStyle({
      'font-size': mediumFontSize,
    })

    const colorAccent = theme.colors.accent
    expect(getByText('Hugo Moraes')).toHaveStyle({
      color: colorAccent,
    })
  })
})
