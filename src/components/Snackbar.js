import React from 'react';
import styled from 'styled-components';

const SnackBarContainer = styled.div`
  background-color: ${props => props.theme.bgDark};
  position: absolute;
  color: white;
  opacity: ${props => (props.message === '' ? '0' : '1')};
  transition: opacity 0.3s ease-in;
  bottom: 0;
  height: auto;
  width: 100%;
  text-align: center;
  padding: ${props => props.theme.spaceS}
  z-index: ${props => (props.message === '' ? '-100' : '10')};
  @media(min-width:40em) {
    bottom: 0;
  }
`;
function Snackbar(props) {
  return (
    <SnackBarContainer message={props.message}>
      <p>{props.message}</p>
    </SnackBarContainer>
  );
}

export default Snackbar;
