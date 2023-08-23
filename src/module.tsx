import { IComponent } from './types'
import { Children, ReactElement, useState } from 'react'
import { Item } from './components/Item'

export const Component = ({ children }: IComponent) => {
  const childItems = Children.toArray(children)

  const [state, setState] = useState(
    childItems.map((item: ReactElement, i: number) => ({
      isOpen: i === 0 ? true : false,
    }))
  )

  function handleOpen(index: number) {
    const newState = state.map((item, i) => ({
      isOpen: i === index,
    }))
    setState(newState)
  }

  return childItems.map((item: ReactElement, i: number) => (
    <Item
      {...item.props}
      key={item.key}
      isOpen={state[i].isOpen}
      handleOpen={() => handleOpen(i)}
    />
  ))
}
