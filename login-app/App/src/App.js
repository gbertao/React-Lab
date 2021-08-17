import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Dashboard from './components/Dashboard'
import Preferences from './components/Preferences'
import Login from './components/Login'

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken))
}

function getToken() {
  const tokenStr = sessionStorage.getItem('token')
  const userToken = JSON.parse(tokenStr)
  return userToken?.token
}

function App() {
  const token = getToken()

  if (!token) {
    return <Login setToken={setToken}/>
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <Router>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
