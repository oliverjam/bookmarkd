import styled from 'styled-components';

const Grid = styled.ul`
  max-width: 72em;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, 12em);
  grid-gap: 1em;
  justify-content: center;
`;

export default Grid;
