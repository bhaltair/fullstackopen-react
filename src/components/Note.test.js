import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
//import { prettyDOM } from '@testing-library/dom'
import Note from './Note'

test('renders content', () => {
  const note = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  const component = render(
    <Note note={note} />
  )

  // component.debug()

  expect(component.container).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )
})

test('renders not important content', () => {
  const note = {
    content: 'Component testing is done with react-testing-library',
    important: false
  }

  const component = render(
    <Note note={note} />
  )

  expect(component.container).toHaveTextContent(
    'make important'
  )
})

test('clicking the button calls event handler once', async () => {
  const note = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  const mockHandler = jest.fn()

  const { getByText } = render(
    <Note note={note} toggleImportance={mockHandler} />
  )

  const button = getByText('make not important')
  fireEvent.click(button)

  expect(mockHandler.mock.calls.length).toBe(1)
})