import { renderWithTheme } from '@/core/utils/tests'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Home } from '.'

describe('<Home />', () => {
  const queryClient = new QueryClient()

  const render = () =>
    renderWithTheme(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>,
    )

  it('should render the Home template', () => {
    const { container } = render()

    expect(!!container.firstChild).toBe(true)
  })
})
