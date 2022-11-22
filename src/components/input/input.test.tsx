import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '@/core/utils/tests/helpers'

import { Input } from '.'

describe('<Input />', () => {
  const register = () =>
    jest.mock('react-hook-form', () => ({
      ...jest.requireActual('react-hook-form'),
      Controller: () => <></>,
      useForm: () => ({
        register: () => ({ email: '', password: '' }),
      }),
    })) as never

  const render = () =>
    renderWithTheme(
      <Input
        placeholder='micheldslive@gmail.com'
        type='email'
        label='E-mail'
        name='email'
        button='Entrar'
        register={register}
      />,
    )

  it('should render with label', () => {
    render()

    expect(screen.getByText('E-mail')).toBeInTheDocument()
  })

  it('should render without label', () => {
    render()

    expect(screen.queryByLabelText('E-mail')).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    render()

    expect(
      screen.getByPlaceholderText('micheldslive@gmail.com'),
    ).toBeInTheDocument()
  })

  it('should render with a button', () => {
    render()

    expect(screen.getByRole('button', { name: /Entrar/i })).toBeInTheDocument()
  })

  it('should change value when typing', async () => {
    render()

    const input = screen.getByLabelText('email')
    const email = 'micheldslive@gmail.com'
    userEvent.type(input, email)

    await waitFor(() => {
      expect(input).toHaveValue(email)
    })
  })
})
