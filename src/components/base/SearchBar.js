import styled from 'styled-components';
import { visuallyHidden as vh } from './style-utils';

export const SearchBar = styled.div`
  width: 100%;
  max-width: 40em;
  display: flex;
  color: ${props => props.theme.textDark};
  background-color: ${props => props.theme.bgLight};
  border-radius: 4px;
  overflow: hidden;
`;

export const SearchLabel = styled.label`
  ${vh()};
`;

export const SearchInput = styled.input`
  padding: ${props => props.theme.spaceS} ${props => props.theme.spaceM};
  padding-left: 0;
  width: 100%;
  flex: 1;
`;

export const MenuButton = styled.button`
  padding: ${props => props.theme.spaceS} ${props => props.theme.spaceM};
`;
