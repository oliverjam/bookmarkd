import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './base/Header';
import IconBack from './icons/IconBack';

class ReaderHeader extends Component {
  render() {
    return (
      <Header>
        <Link to="/">
          <IconBack description="Go back to the homepage" />
        </Link>
      </Header>
    );
  }
}

export default ReaderHeader;
