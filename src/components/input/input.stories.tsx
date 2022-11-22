import { Story, Meta } from '@storybook/react'
import { Input } from '.'
import { InputProps, SignInData } from '@/core/types'
import { useForm } from 'react-hook-form'

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    onInput: { action: 'changed' },
    onClick: { action: 'clicked' },
  },
} as Meta

export const Default: Story<InputProps> = (args) => {
  const { register } = useForm<SignInData>()
  const newArgs = { ...args, register }

  return (
    <div style={{ maxWidth: 540 }}>
      <Input {...newArgs} />
    </div>
  )
}

Default.args = {
  placeholder: ' ',
  type: 'email',
  label: 'E-mail',
  name: 'email',
}

export const WithButton: Story<InputProps> = (args) => {
  const { register } = useForm<SignInData>()
  const newArgs = { ...args, register }

  return (
    <div style={{ maxWidth: 540 }}>
      <Input {...newArgs} />
    </div>
  )
}

WithButton.args = {
  label: 'Senha',
  name: 'password',
  placeholder: ' ',
  type: 'password',
  button: 'Entrar',
}
