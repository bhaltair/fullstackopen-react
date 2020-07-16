import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import './index.css';
import App from './App.reducer';
import * as serviceWorker from './serviceWorker';
import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'
// import noteService from './services/notes'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})
const store = createStore(reducer, composeWithDevTools())

// noteService.getAll().then(notes =>
//   store.dispatch(initializeNotes(notes))
// )

// store.dispatch(filterChange('IMPORTANT'))
// store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))


console.log(store.getState())

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderApp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

store.subscribe(() => {
  const storeNow = store.getState()
  console.log(storeNow)
  // renderApp()
})