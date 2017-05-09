import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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

          {this.props.message && <Snackbar message={this.props.message} />}

          <BottomNav />
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
// THIS IS HOW TO USE showSnackbar
// export default connect(mapStateToProps, { showSnackbar })(App);
