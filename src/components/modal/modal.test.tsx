import { renderWithTheme } from '@/core/utils/tests/helpers'

import { Modal } from '.'

describe('<Modal />', () => {
  it('should render the modal', () => {
    const { getByLabelText } = renderWithTheme(<Modal isOpen>Modal</Modal>)

    expect(getByLabelText('modal')).toBeInTheDocument()
  })
})
