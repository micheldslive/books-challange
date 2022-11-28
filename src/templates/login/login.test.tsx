import { renderWithTheme } from '@/core/utils/tests'
import { Login } from '.'
import { QueryClient, QueryClientProvider } from 'react-query'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('<Login />', () => {
  const queryClient = new QueryClient()
  const render = () =>
    renderWithTheme(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>,
    )

  it('should render form', () => {
    const { getByLabelText, getByRole } = render()

    expect(getByLabelText(/email/i)).toBeInTheDocument()
    expect(getByLabelText(/password/i)).toBeInTheDocument()
    expect(getByRole('button', { name: /Entrar/i })).toBeInTheDocument()
  })

  it('should render a logo', () => {
    const { getByLabelText } = render()

    expect(getByLabelText(/ioasys-logo/i)).toBeInTheDocument()
  })
})
