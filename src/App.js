import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'

import './App.css';

import Login from './auth/Login'
import Signup from './auth/Signup'

function App() {
  return (
    <div>
      
       <Router>
       <Navbar />
       <Home />
          <Route path="/login" component={Login} ></Route>
          <Route path="/signup" component={Signup} ></Route>
        </Router>
        
    </div>
  )
}

export default App;