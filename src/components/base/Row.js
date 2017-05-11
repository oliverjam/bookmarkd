import styled from 'styled-components';

export const Row = styled.ul`
  margin-top: -${props => props.theme.spaceS};
  margin-left: -${props => props.theme.spaceS};
  display: flex;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
`;

export const RowItem = styled.li`
  flex: 0 0 11em;
  min-width: 11em;
  height: 14em;
  padding-top: ${props => props.theme.spaceS};
  padding-left: ${props => props.theme.spaceS};
`;
