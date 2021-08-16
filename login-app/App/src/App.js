import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Dashboard from './components/Dashboard'
import Preferences from './components/Preferences'

function App() {
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
