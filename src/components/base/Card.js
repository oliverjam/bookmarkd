import styled from 'styled-components';
import randomSvg from '../../lib/randomBackground';

const Card = styled.article`
  width: 10rem;
  height: 15rem;
  padding: ${props => props.theme.spaceS};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  margin: ${props => props.theme.spaceS};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Card;
