import styled from 'styled-components';

const Header = styled.header`
  position: relative;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  color: ${props => props.theme.textLight};
  background-color: ${props => props.theme.primary};
  padding: ${props => props.theme.spaceM};
  z-index: 10;
  @media (min-width: 40em) {
    padding-left: ${props => props.theme.spaceL} ;
    padding-right: ${props => props.theme.spaceL} ;
  }
`;

export default Header;
