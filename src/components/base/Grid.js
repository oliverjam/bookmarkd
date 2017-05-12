import styled from 'styled-components';

export const Grid = styled.ul`
  margin-top: -${props => props.theme.spaceS};
  margin-left: -${props => props.theme.spaceS};
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 40em) {
    margin-top: -${props => props.theme.spaceM};
    margin-left: -${props => props.theme.spaceM};
  }
`;

export const GridItem = styled.li`
  padding-top: ${props => props.theme.spaceS};
  padding-left: ${props => props.theme.spaceS};
  flex: 0 0 50%
  height: 14em;
  @media (min-width: 40em) {
    padding-top: ${props => props.theme.spaceM};
    padding-left: ${props => props.theme.spaceM};
    flex-basis: 33%;
  }
  @media (min-width: 55em) {
    flex-basis: 25%;
  }
  @media (min-width: 70em) {
    flex-basis: 20%;
  }
  @media (min-width: 85em) {
    flex-basis: 16.6666%;
  }
`;
