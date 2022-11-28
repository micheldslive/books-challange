import { Story, Meta } from '@storybook/react'
import { Input } from '.'
import { InputProps, SignInParams } from '@/core/types'
import { useForm } from 'react-hook-form'

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    onInput: { action: 'changed' },
    onClick: { action: 'clicked' },
  },
} as Meta

const ParseRegister = (args: InputProps) => {
  const { register } = useForm<SignInParams>()
  const newArgs = { ...args, register }
  return newArgs
}

export const Default: Story<InputProps> = (args) => {
  const returnedArgs = ParseRegister(args)

  return (
    <div style={{ maxWidth: 540 }}>
      <Input {...returnedArgs} />
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
  const returnedArgs = ParseRegister(args)

  return (
    <div style={{ maxWidth: 540 }}>
      <Input {...returnedArgs} />
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
