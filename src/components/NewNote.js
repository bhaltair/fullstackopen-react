import React from 'react'
import { useDispatch } from 'react-redux'
import { createNewNote } from '../reducers/noteReducer'
import noteService from '../services/notes'

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

const NewNote = (props) => {
  const dispatch = useDispatch()

  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''

    const newNote = await noteService.create({
      content,
      important: false,
      id: generateId()
    })

    dispatch(createNewNote(newNote))
  }

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  )
}

export default NewNote
