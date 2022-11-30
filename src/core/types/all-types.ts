import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'
import { theme } from '@/styles'
import { SignInParams } from './user-types'
import { FieldName, UseFormRegister } from 'react-hook-form'

export type ChildrenProps = {
  children: React.ReactNode
}

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  isLoading?: boolean
} & ButtonTypes &
  ChildrenProps

export type LogoProps = {
  color?: 'black' | 'white'
}

export type TooltipProps = {
  error: string
}

export interface StyleProps {
  theme: typeof theme
}

export type ModalProps = {
  open: boolean
  close?(): void
}

export type WrapperProps = {
  active: boolean
}

export type InputProps = {
  button?: string
  label?: string
  isLoading?: boolean
  name: FieldName<SignInParams>
  onClick?: () => void
  register: UseFormRegister<SignInParams>
} & InputHTMLAttributes<HTMLInputElement>

export type LoadingProps = {
  width: number
  height: number
  border?: number
}
