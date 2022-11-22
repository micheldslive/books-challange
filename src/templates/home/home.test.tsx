import { renderWithTheme } from '@/core/utils/tests/helpers'

import { Home } from '.'

describe('<Home />', () => {
  it('should render the Home template', () => {
    const { container } = renderWithTheme(<Home />)

    expect(!!container.firstChild).toBe(true)
  })
})
