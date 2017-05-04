import React from 'react';
import styled from 'styled-components';

const Nav = styled.header`
  background: ${props => (props.green ? 'green' : 'skyblue')};
  width: 100%;
  
`;
const BottomNav = styled(Nav)`
  width: 50%;
`;

const Header = () => <BottomNav> A Header</BottomNav>;

export default Header;
