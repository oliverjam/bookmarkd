import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
// import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNav />
          <Route path="/" component={Home} />
          {/* <Route path="/library" component={Library}/> */}
          <BottomNav />
        </div>
      </Router>
    );
  }
}

export default App;
