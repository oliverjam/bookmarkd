import React from 'react';
import { NavLink } from 'react-router-dom';

import { Nav, NavList, NavItem } from './base/Nav';

function SiteNav() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink exact to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/browse">Browse</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/library">Library</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default SiteNav;
