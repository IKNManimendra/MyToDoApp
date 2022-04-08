import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.coponent';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/create">Create</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/index">Task list</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/edit/:id">Update</a>
                </li>
              </ul>
            </div>
            <div>
              <h1>To Do App</h1>
            </div>
          </nav>



        </div>
        <Switch>
          <Route exact path='/create' component={Create} />
          <Route exact path='/edit/:id' component={Edit} />
          <Route exact path='/index' component={Index} />
        </Switch>
      </Router >

    )
  }
}
export default App;
