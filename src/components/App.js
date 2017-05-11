import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider, injectGlobal } from 'styled-components';
import theme from '../theme';

import Home from './Home';
import Browse from './Browse';
import Reader from './Reader';
import Snackbar from './Snackbar';
import MyLibrary from './MyLibrary';

// eslint-disable-next-line
injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 112.5%;
  }

  input,
  button,
  label,
  textarea {
    font-family: inherit;
    font-size: 100%;
    color: inherit;
    background: none;
    border: none;
  }

  body,
  ul,
  h1,
  h2,
  h3,
  p,
  figure {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3 {
    font-weight: 400;
  }

  ul {
    list-style-type: none;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: ${theme.textDark};
    background-color: ${theme.bgLight};
  }

  a {
  color: inherit;
  text-decoration: none;
}
`;

const mapStateToProps = state => ({
  message: state.message,
});

export class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/browse" component={Browse} />
            <Route path="/library" component={MyLibrary} />
            <Route
              path="/reader/:slug"
              render={({ match }) => {
                return <Reader slug={match.params.slug} />;
              }}
            />

            <Snackbar message={this.props.message} />
            {/*{this.props.message && <Snackbar message={this.props.message} />} */}
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
