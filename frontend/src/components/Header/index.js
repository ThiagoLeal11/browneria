import React from 'react';
import { useSpring } from "react-spring"

import { Container, TitleContainer, Title, Subtitle, Brownie1, Brownie2, Brownie3 } from "./styles"

// Brownies
import brownie1 from '../../assets/brownie_1.png'
import brownie2 from '../../assets/brownie_2.png'
import brownie3 from '../../assets/brownie_3.png'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 20}px, ${y / 20}px, 0)`
const trans2 = (x, y) => `translate3d(${x / 10}px, ${y / 10}px, 0) rotate(15deg)`
const trans3 = (x, y) => `translate3d(${x / 40}px, ${y / 40}px, 0) rotate(18deg)`

export default function Header() {
  const [props, set] = useSpring( () => ({
    xy: [0, 0], 
    config: { 
      mass: 10, 
      tension: 550, 
      friction: 140
    }
  }))

  return (
    <Container onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <TitleContainer>
        <Title>Bon Appétit!</Title>
        <Subtitle>Brownies que alimentam o corpo e adoção a alma!</Subtitle>
        <Brownie1 style={{ transform: props.xy.interpolate(trans1)}} image={brownie1}/>
        <Brownie2 style={{ transform: props.xy.interpolate(trans2)}} image={brownie2}/>
        <Brownie3 style={{ transform: props.xy.interpolate(trans3)}} image={brownie3}/>
      </TitleContainer>
    </Container>
  );
}