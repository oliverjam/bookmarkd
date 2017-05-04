import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
// import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" component={Home}/>
          {/* <Route path="/library" component={Library}/> */}
        </div>
      </Router>
    );
  }
}

export default App;
