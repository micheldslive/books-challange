import { Story, Meta } from '@storybook/react'
import { Logo } from '.'
import { LogoProps } from '@/core/types'

export default {
  title: 'Brand/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
} as Meta

export const Default: Story<LogoProps> = (args) => (
  <div style={{ width: 200 }}>
    <Logo {...args} />
  </div>
)
