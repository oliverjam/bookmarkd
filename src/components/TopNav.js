import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Search';

import Nav from './utilities/Nav';

const TopNavigation = styled(Nav)`
  color: blue;
`;

function TopNav() {
  return (
    <TopNavigation>
      <Link to="/">Bookmarkd</Link>
      <Search />
    </TopNavigation>
  );
}

export default TopNav;
