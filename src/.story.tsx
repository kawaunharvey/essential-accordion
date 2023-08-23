import type { Meta, StoryObj } from '@storybook/react'
import { Component } from './module'
import React from 'react'
import styled from 'styled-components'

const faq = [
  {
    id: 'one',
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer:
      'Proin maximus tellus purus, nec hendrerit risus luctus eu. Vivamus sed erat metus. Suspendisse a lorem nulla. Etiam porttitor dui eget placerat consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin aliquam turpis sit amet nibh aliquam, id aliquet dolor aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi malesuada, nunc non dapibus fringilla, ex quam aliquam velit, sit amet commodo risus magna sit amet tortor. Nullam mollis augue non leo rutrum scelerisque.',
  },
  {
    id: 'two',
    question: 'title',
    answer: 'answer',
  },
  {
    id: 'three',
    question: 'title',
    answer: 'answer',
  },
]

const ItemHead = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  cursor: pointer;

  [aria-expanded='true'] &,
  &:hover {
    color: #1e90ff;
  }
`

const ItemBody = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const StoryComponent = (args) => (
  <Component leaveOpen={true}>
    {faq.map((item) => (
      <Container key={item.id}>
        <ItemHead>{item.question}</ItemHead>
        <ItemBody>
          <p>{item.answer}</p>
        </ItemBody>
      </Container>
    ))}
  </Component>
)

const meta: Meta<typeof StoryComponent> = {
  title: 'Component',
  component: StoryComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export default meta

type Story = StoryObj<typeof StoryComponent>
export const Default: Story = {
  args: {
    primary: true,
  },
}
