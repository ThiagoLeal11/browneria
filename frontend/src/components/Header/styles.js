import styled from 'styled-components';
import { animated } from "react-spring"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #FFFCF0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  margin: 0 auto;
  position: relative;
  display: inline-block;
`;

export const Title = styled.h1`
  display: inline-block;
  color: #372623;
  font-family: 'Playfair Display', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15vw;
  margin: 24px 0;
`;

export const Subtitle = styled.p`
  color: #372623;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 2vw;
  text-align: end;
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 30vw;
  margin: 0;
`;

export const Brownie = styled(animated.div)`
  position: absolute;
  border-radius: 5px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  will-change: transform;
  background-image: url(${props => props.image});
`;

export const Brownie1 = styled(Brownie)`
  width: 23vw;
  height: 23vw;
  top: 23vh;
  left: 5vw;
  background-image: url(${props => props.image});
`;

export const Brownie2 = styled(Brownie)`
  width: 26vw;
  height: 26vw;
  top: -21vh;
  left: 28vw;
`;

export const Brownie3 = styled(Brownie)`
  width: 22vw;
  height: 22vw;
  top: 35vh;
  left: 55vw;
  transform: rotate(90deg);
`;
