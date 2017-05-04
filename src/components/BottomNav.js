import React from 'react';
import styled from 'styled-components';
import { Nav } from './utilities/Nav';

const BottomNavigation = styled(Nav)`
  color: green;
`;

const BottomNav = () => <BottomNavigation>Footer</BottomNavigation>;

export default BottomNav;
