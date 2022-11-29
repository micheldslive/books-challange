import { Story, Meta } from '@storybook/react'
import { FullCard } from '.'
import { fullBook } from '@/core/mocks'
import { BookProps } from '@/core/types'

export default {
  title: 'Layout/FullCard',
  component: FullCard,
  parameters: { layout: 'centered' },
} as Meta

export const Default: Story<BookProps> = (args) => (
  <div style={{ width: '100%', maxWidth: 780, paddingTop: 20 }}>
    <FullCard {...args} />
  </div>
)

Default.args = fullBook
