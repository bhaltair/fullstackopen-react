import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Switch, Route,
  useRouteMatch
} from 'react-router-dom'

import NewNote from './components/NewNote'
import Notes from './components/Notes'
import Note from './components/Note.router'
import VisibilityFilter from './components/VisibilityFilter'
import { initializeNotes } from './reducers/noteReducer'
import noteService from './services/notes'

const Home = () => {
  return (
    <>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </>
  )
}

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    noteService.getAll().then(notes => dispatch(initializeNotes(notes)))
  }, [dispatch])

  const notes = useSelector(state => state.notes)
  const match = useRouteMatch('/notes/:id')
  const note = match
    ? notes.find(note => note.id === Number(match.params.id))
    : null

  return (
    <div>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/notes/:id">
          <Note note={note}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App