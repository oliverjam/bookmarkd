import React from 'react';
// import { NavAnchor } from 'react-router-dom';

import { Nav, NavList, NavItem, NavAnchor } from './base/Nav';

function SiteNav() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavAnchor exact to="/">Home</NavAnchor>
        </NavItem>
        <NavItem>
          <NavAnchor to="/browse">Browse</NavAnchor>
        </NavItem>
        <NavItem>
          <NavAnchor to="/library">Library</NavAnchor>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default SiteNav;
