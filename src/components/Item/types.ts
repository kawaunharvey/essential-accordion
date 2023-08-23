import { PropsWithChildren, ReactNode } from 'react'
export interface IItem extends PropsWithChildren {
  isOpen: boolean
  children: ReactNode
  handleOpen: () => void
}
