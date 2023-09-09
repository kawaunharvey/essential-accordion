import { PropsWithChildren, ReactNode } from 'react'
export interface IItem extends PropsWithChildren {
  id: string
  isOpen: boolean
  children: ReactNode
  handleOpen: () => void
}
