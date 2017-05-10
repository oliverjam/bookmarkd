import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${props => props.theme.textLight};
  background-color: ${props => props.theme.primary};
  padding: ${props => props.theme.spaceM};
  @media (min-width: 40em) {
    padding-left: ${props => props.theme.spaceL} ;
    padding-right: ${props => props.theme.spaceL} ;
  }
`;

export default Header;
