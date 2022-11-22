import { renderWithTheme } from '@/core/utils/tests/helpers'

import { Login } from '.'

describe('<Login />', () => {
  const render = () => renderWithTheme(<Login />)

  it('should render form', () => {
    const { getByLabelText, getByRole } = render()

    expect(getByLabelText(/email/i)).toBeInTheDocument()
    expect(getByLabelText(/password/i)).toBeInTheDocument()
    expect(getByRole('button', { name: /Entrar/i })).toBeInTheDocument()
  })

  it('should render a logo', () => {
    const { getByLabelText } = render()

    expect(getByLabelText(/ioasys logo/i)).toBeInTheDocument()
  })
})
