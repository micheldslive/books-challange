import { ButtonHTMLAttributes } from 'react'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children: React.ReactNode
} & ButtonTypes

export type LogoProps = {
  color?: string
}

export type TooltipProps = {
  error: string
}
