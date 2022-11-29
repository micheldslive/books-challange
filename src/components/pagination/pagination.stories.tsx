import { Story, Meta } from '@storybook/react'
import { Pagination } from '.'
import { PaginationProps } from '@/core/types'

export default {
  title: 'Navigation/Pagination',
  component: Pagination,
  argTypes: {
    handleNextPage: { action: 'clicked' },
    handlePrevPage: { action: 'clicked' },
  },
  parameters: {
    backgrounds: {
      default: 'white',
    },
    layout: 'centered',
  },
} as Meta

export const Default: Story<PaginationProps> = (args) => (
  <Pagination {...args} />
)

Default.args = {
  books: {
    data: undefined,
    page: 1,
    totalPages: 42,
  },
}
