import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import { renderWithTheme } from '@/core/utils/tests'

import { Pagination } from '.'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactNode } from 'react'

const pagination = {
  books: {
    data: undefined,
    page: 4,
    totalItems: 500,
    totalPages: 42,
  },
  handleNextPage: jest.fn(),
  handlePrevPage: jest.fn(),
}

describe('<Pagination />', () => {
  const queryClient = new QueryClient()

  const useCustomHook = () => {
    return useQuery({
      queryKey: ['customHook'],
      queryFn: () => <Pagination {...pagination} />,
    })
  }

  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )

  const render = () =>
    renderWithTheme(
      <QueryClientProvider client={queryClient}>
        <Pagination {...pagination} />
      </QueryClientProvider>,
    )

  it('should render isSucess', async () => {
    const { result } = renderHook(() => useCustomHook(), { wrapper })

    await waitFor(() => result.current.isSuccess)

    expect(result.current.isSuccess).toBe(false)
  })

  it('should render correctly', () => {
    const { getByLabelText, getByText } = render()

    const button = getByLabelText(/avançar/i)
    expect(button).toBeInTheDocument()

    expect(getByText(/página/i)).toBeInTheDocument()
  })

  it('should render a button to advance to next page and call the method if clicked', async () => {
    const { getByLabelText } = render()

    const button = getByLabelText(/avançar/i)
    await waitFor(() => fireEvent.click(button))

    expect(button).toBeInTheDocument()
    expect(pagination.handleNextPage).toHaveBeenCalled()
  })

  it('should render a button to advance to prev page and call the method if clicked', async () => {
    const { getByLabelText } = render()

    const button = getByLabelText(/voltar/i)
    await waitFor(() => fireEvent.click(button))

    expect(button).toBeInTheDocument()
    expect(pagination.handlePrevPage).toHaveBeenCalled()
  })
})
