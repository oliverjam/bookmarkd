import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './base/Header';

class ReaderHeader extends Component {
  render() {
    return (
      <Header>
        <Link to="/">Back</Link>
        <button>Reader settings</button>
      </Header>
    );
  }
}

export default ReaderHeader;
