import { renderWithTheme } from '@/core/utils/tests/helpers'

import { Tooltip } from '.'

describe('<Tooltip />', () => {
  it('should render correctly', () => {
    const { container, getByText } = renderWithTheme(<Tooltip error='Error' />)

    expect(getByText('Error')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
