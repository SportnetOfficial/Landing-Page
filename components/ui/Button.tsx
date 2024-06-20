import React, { ReactNode, MouseEventHandler } from 'react'

type PrimaryButtonProps = {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

type LinkButtonProps = {
  children: ReactNode
  href: string
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, className }) => {
  return (
    <button className={'bg-primary hover:bg-ui-primary/90 text-black py-2 ' + className}>
      {children}
    </button>
  )
}

const SecondaryButton: React.FC<PrimaryButtonProps> = ({ children, className }) => {
  return (
    <button
      className={'bg-secondary hover:bg-ui-secondary/90 text-white py-3 px-6 rounded ' + className}
    >
      {children}
    </button>
  )
}

export { PrimaryButton, SecondaryButton }
