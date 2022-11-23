import { fireEvent } from '@testing-library/react'
import { renderWithTheme } from '@/core/utils/tests/helpers'

import { Pagination } from '.'

const pagination = {
  page: 2,
  totalPages: 5,
  nextPage: false,
  prevPage: false,
  onNextPage: jest.fn(),
  onPrevPage: jest.fn(),
}

const render = () => renderWithTheme(<Pagination {...pagination} />)

describe('<Pagination />', () => {
  it('should render correctly', () => {
    const { getByLabelText, getByText } = render()

    const button = getByLabelText('Avançar')
    expect(button).toBeInTheDocument()

    expect(getByText(/página/i)).toBeInTheDocument()
  })

  it('should render a button to advance to next page and call the method if clicked', () => {
    const { getByLabelText } = render()

    const button = getByLabelText(/avançar/i)
    fireEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(pagination.onNextPage).toHaveBeenCalled()
  })

  it('should render a button to advance to prev page and call the method if clicked', () => {
    const { getByLabelText } = render()

    const button = getByLabelText(/voltar/i)
    fireEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(pagination.onPrevPage).toHaveBeenCalled()
  })
})
