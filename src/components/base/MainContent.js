import styled from 'styled-components';

export const MainContent = styled.main`
padding: ${props => props.theme.spaceM};
@media (min-width: 40em) {
  padding: ${props => props.theme.spaceL};
}
`;

export const MainTitle = styled.h1`
  margin-bottom: ${props => props.theme.spaceM};
`;
