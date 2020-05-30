import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component.js";
import TitlesList from "./components/titles-list.component.js";
import EditTitles from "./components/edit-titles.component.js";
import CreateTitle from "./components/create-title.component.js";
// import CreateUser from "./components/create-user.component.js";
import TitleInfo from "./components/title-info.component.js";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Route path="/" exact component={TitlesList} />
        <Route path="/edit/:id" component={EditTitles} />
        <Route path="/create" component={CreateTitle} />
        <Route path="/info" component={TitleInfo} />
        {/* <Route path="/user" component={CreateUser} /> */}
      </Router>
    </div>
  );
};

export default App;
