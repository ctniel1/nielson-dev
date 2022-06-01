import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import WorkHistory from './pages/WorkHistory'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div>
        <nav id="main-menu">
          <Link to="/" className="menu-item">Home</Link>
          <Link to="/about" className="menu-item">About</Link>
          <Link to="/workhistory" className="menu-item">Work History</Link>
          {/* <Link to="/projects" class="menu-item">Projects</Link> */}
          <Link to="/contact" className="menu-item">Contact</Link>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/workhistory">
            <WorkHistory />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
