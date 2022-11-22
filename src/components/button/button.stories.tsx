import { Story, Meta } from '@storybook/react'
import { Button } from '.'
import { ButtonProps } from '@/core/types'

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Entrar',
}
