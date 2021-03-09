import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './pages/home'
import Author from './pages/author'

import { AuthorProvider} from './context/authorContext'
import {initialState, reducer} from './reducer/userReducer'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/author'>
            <AuthorProvider initialState={initialState} reducer={reducer}>
              <Author />
            </AuthorProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
