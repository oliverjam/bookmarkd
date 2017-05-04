import React from 'react';
import styled from 'styled-components';

import Nav from './utilities/Nav';

const TopNavigation = styled(Nav)`
  color: blue;
`;

function TopNav() {
  return <TopNavigation>Bookmarkd</TopNavigation>;
}

export default TopNav;
