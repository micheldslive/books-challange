import { ButtonHTMLAttributes } from 'react'
import { theme } from '@/styles/theme'

export type ChildrenProps = {
  children: React.ReactNode
}

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children: React.ReactNode
} & ButtonTypes

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
