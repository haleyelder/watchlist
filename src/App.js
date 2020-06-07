import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import Home from './components/pages/Home'
import TitleList from './components/titles/TitleList'
import TitleInfo from './components/titles/TitleInfo'
import TitleAdd from './components/titles/TitleAdd'
import TitleEdit from './components/titles/TitleEdit'




const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <div className="container">
          <Main/>
        </div>
      </Router>
    </div>
  )
}

const Navigation = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className='container'>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/titles">Titles</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

const Main = () => {
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/titles" component={TitleList} />
      <Route exact path="/titles/new" component={TitleAdd} />
      <Route exact path="/titles/:_id" component={TitleInfo} />
      <Route exact path="/titles/:_id/edit" component={TitleEdit} />
    </Switch>
  );
}

export default App;
