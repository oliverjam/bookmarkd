import styled from 'styled-components';

const Card = styled.article`
  width: 10rem;
  height: 10rem;
  padding: ${props => props.theme.spaceS};
  background-color: ${props => props.theme.bgLight};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  margin: ${props => props.theme.spaceS};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Card;
