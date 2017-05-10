import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  ${/* height: ${props => props.theme.spaceL}; */ ''}
  height: 2.5rem;
  padding: ${props => props.theme.spaceS};
  display: flex;
  align-items: center;
  color: ${props => props.theme.textDark};
  background-color: ${props => props.theme.bgLight};
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.4);
  @media (min-width: 40em) {
    position: static;
    width: auto;
    height: auto;
    margin-left: auto;
    padding: 0;
    color: inherit;
    background-color: transparent;
    box-shadow: none;
  }
`;

export const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media (min-width: 40em) {
    justify-content: flex-start;
  }
`;

export const NavItem = styled.li`
  @media (min-width: 40em) {
    margin-left: ${props => props.theme.spaceM};
  }
`;
