import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import Page from "./components/Page";
import javascript from "./components/data/javascript";
import html from "./components/data/front-end";
function App() {
  return (
    <Router className='container'>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/front-end">HTML/CSS</Link>

          </li>
          <li>
          <Link to="/javascript">Javascript</Link>

          </li>

        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/front-end">
          <Page list={html}/>
        </Route>
        <Route path="/javascript">
          <Page list={javascript}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
