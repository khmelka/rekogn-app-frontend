import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';

import Login from './components/auth/login'
import Signup from './components/auth/signup'

function App() {
  return (
    <div>
       <Router>
          <Route path="/login" component={Login} ></Route>
          <Route path="/signup" component={Signup} ></Route>
        </Router>
    </div>
  )
}

export default App;