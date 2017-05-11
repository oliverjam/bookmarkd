import styled from 'styled-components';

export const Row = styled.ul`
  width: 100%;
  margin: ${-1 * ((props => props.theme.spaceS) / 2)};
  display:flex;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  @media (min-width: 40em) {
    margin: ${props => props.theme.spaceS};
  }
`;

export const RowItem = styled.li`
  width: 11em;
  height: 14em;
  padding: ${(props => props.theme.spaceS) / 2};
  @media (min-width: 40em) {
    padding: ${props => props.theme.spaceS};
  }
`;
