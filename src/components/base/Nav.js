import styled from 'styled-components';

const Nav = styled.header`
  display: flex;
  color: ${props => props.theme.textLight};
  background-color: ${props => props.theme.primary};
  width: 100%;
  padding: 0.3rem 0;
`;

export default Nav;
