import React from 'react';
import styled from 'styled-components';

// bottom: ${props => props.theme.spaceS}
const SnackBarContainer = styled.div`
  background-color: ${props => props.theme.bgDark};
  position: absolute;
  color: white;
  opacity: ${props => (props.message === '' ? '0' : '1')};
  transition: opacity 0.3s ease-in;
  bottom: 0;
  height: 2.5rem;
  width: 100%;
  text-align: center;
  padding: ${props => props.theme.spaceS}
  z-index: 10;
`;
function Snackbar(props) {
  console.log('props', props.message);
  return (
    <SnackBarContainer message={props.message}>
      <p>{props.message}</p>
    </SnackBarContainer>
  );
}

export default Snackbar;
