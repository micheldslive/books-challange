import { renderWithTheme } from '@/core/utils/tests'
import { theme } from '@/styles/theme'

import { fullBook } from '@/core/mocks'
import { FullCard } from '.'

describe('<FullCard />', () => {
  const render = () => renderWithTheme(<FullCard {...fullBook} />)

  it('should render the full card correctly', () => {
    const { getByRole } = render()

    expect(getByRole('heading', { name: /Aut/i })).toBeInTheDocument()
  })

  it('should render the data correctly', () => {
    const { getByRole } = render()

    const fontSize = theme.font.sizes.xl

    expect(getByRole('img')).toBeInTheDocument()
    expect(getByRole('heading', { name: /Aut/i })).toHaveStyle({
      'font-size': fontSize,
    })
  })
})
