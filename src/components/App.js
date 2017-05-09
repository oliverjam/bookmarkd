import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { snackbarMessage } from '../actions/snackbarActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from './Home';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import Reader from './Reader';
import Snackbar from './Snackbar';

const mapStateToProps = state => ({
  message: state.message,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ snackbarMessage }, dispatch);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNav />
          <Route exact path="/" component={Home} />
          <Route
            path="/reader/:slug"
            render={({ match }) => {
              return <Reader slug={match.params.slug} />;
            }}
          />
          <Snackbar />
          <BottomNav />
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
