import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: ${props => props.theme.spaceM};
  @media (min-width: 40em) {
    margin-bottom: ${props => props.theme.spaceL};
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: ${props => props.theme.spaceS};
  font-size: 1.25em;
`;
