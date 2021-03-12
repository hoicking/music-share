import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './pages/home'
import Author from './pages/author'
import Navigator from './pages/navigator'

import { AuthorProvider } from './context/authorContext'
import { initialState, reducer } from './reducer/userReducer'

import { navigatorReducer, navigatorState } from './reducer/navigatorReducer'
import { NavigatorProvider } from './context/navigatorContext'
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

          <Route path='/navigator'>
            <NavigatorProvider initialState={navigatorState} reducer={navigatorReducer}>
              <Navigator />
            </NavigatorProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
