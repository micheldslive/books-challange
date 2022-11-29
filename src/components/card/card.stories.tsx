import { Story, Meta } from '@storybook/react'
import { Card } from '.'
import { book } from '@/core/mocks'
import { CardProps } from '@/core/types'

export default {
  title: 'Layout/Card',
  component: Card,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta

export const Default: Story<CardProps> = (args) => (
  <div
    style={{
      maxWidth: 400,
      minWidth: 280,
      width: '100%',
    }}
  >
    <Card {...args} />
  </div>
)

Default.args = book
