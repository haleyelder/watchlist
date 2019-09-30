import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import CreateTodo from './components/create-todo.js'
import EditTodo from './components/edit-todo.js'
import TodosList from './components/todos-list.js'

// import logo from 'https://via.placeholder.com/30.png'

class App extends Component {
  render() {
      return (
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="/" target="_blank">
                <img src="https://via.placeholder.com/30.png" width="30" height="30" alt="logo-placeholder"/>
              </a>

              <Link to="/" className="navbar-brand"> Todo test, watchlist </Link>
              <div className="collapse navbar-collapse">
                <ul className = "navbar-nav mr-auto">
                  <li className = "navbar-item">
                    <Link to="/" className="nav-link">Todos</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to='/create' className="nav-link">Create thing</Link>
                  </li>
                  </ul>
              </div>
            </nav>
            <br/>

          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" exact component={EditTodo} />
          <Route path="/create" exact component={CreateTodo} />
          
          </div>
        </Router>
       )
    }
  }

export default App;
