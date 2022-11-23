import { Story, Meta } from '@storybook/react'
import { Modal } from '.'
import { ChildrenProps, ModalProps } from '@/core/types'
import { FullCard } from '../full-card'
import { fullBook } from '@/core/mocks'

export default {
  title: 'Modal/Default',
  component: Modal,
  argTypes: {
    close: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta

export const Default: Story<ModalProps & ChildrenProps> = (args) => (
  <Modal {...args} />
)

Default.args = {
  open: true,
  children: <FullCard {...fullBook} />,
}
