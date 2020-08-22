import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/navbar.component.js'
import TitlesList from './components/titles-list.component.js'
import EditTitle from './components/edit-title.component.js'
import CreateTitle from './components/create-title.component.js'
import CreateUser from './components/create-user.component.js'


const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
      </div>
      <div>
        <Route path="/" exact component={TitlesList} />
        <Route path="/edit/:id" exact component={EditTitle} />
        <Route path="/create" exact component={CreateTitle} />
        <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  );
};

export default App;
