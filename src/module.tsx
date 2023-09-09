import { IComponent } from './types'
import { Children, ReactElement } from 'react'
import { Item } from './components/Item'

export const Component = ({ children }: IComponent) => {
  const childItems = Children.toArray(children)
  return childItems.map((item: ReactElement, i: number) => (
    <Item {...item.props} key={item.key} isOpen={i === 0} />
  ))
}
