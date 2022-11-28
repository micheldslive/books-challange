import { renderWithTheme } from '@/core/utils/tests'

import { Tooltip } from '.'

describe('<Tooltip />', () => {
  const render = () => renderWithTheme(<Tooltip error='Error' />)

  it('should render correctly', () => {
    const { getByText, container } = render()

    expect(getByText('Error')).toBeInTheDocument()
  })
})
