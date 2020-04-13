import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Nav from './components/Nav'
import ClassBase from './components/ClassBase'
import FuncClass from './components/FuncClass'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
    <div>
     <Nav />

      <Switch>
      <Route exact path="/">
          <Home />
      </Route>

        <Route path="/classbase">
          <ClassBase />
        </Route>

        <Route path="/function">
          <FuncClass />
        </Route>
      
      </Switch>
      <Footer />
    </div>
  </Router>
    
  );
}

export default App;