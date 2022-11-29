import { Story, Meta } from '@storybook/react/types-6-0'
import { ListBooks } from '.'
import { books } from '@/core/mocks'
import { ListBooksProps } from '@/core/types'

export default {
  title: 'Layout/ListBooks',
  component: ListBooks,
  args: {
    books,
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {},
  },
} as Meta

export const Default: Story<ListBooksProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <ListBooks {...args} />
  </div>
)
