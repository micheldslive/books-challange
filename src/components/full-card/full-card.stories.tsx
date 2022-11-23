import { Story, Meta } from '@storybook/react'
import { FullCard, FullCardProps } from '.'
import { fullBook } from '@/core/mocks'

export default {
  title: 'Layout/FullCard',
  component: FullCard,
  parameters: { layout: 'centered' },
} as Meta

export const Default: Story<FullCardProps> = (args) => (
  <div style={{ width: '100%', maxWidth: 780, paddingTop: 20 }}>
    <FullCard {...args} />
  </div>
)

Default.args = fullBook
