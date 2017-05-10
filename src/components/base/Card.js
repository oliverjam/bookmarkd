import styled from 'styled-components';

const Card = styled.article`
  width: 100%;
  padding: ${props => props.theme.spaceM};
  background-color: ${props => props.theme.bgLight};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
`;

export default Card;
