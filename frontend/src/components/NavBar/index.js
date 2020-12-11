import React from 'react';
import { Link } from "react-router-dom";

import { Nav, Container, Logo, List, Item } from "./styles"

export default function NavBar() {
  return (
    <Nav>
      <Container>
        <Link to="/"><Logo>&lt;Browneria!&gt;</Logo></Link>
        <List>
          <Item href='/sobre'>Sobre</Item>
          <Item href='https://facebook.com/'>Redes Sociais</Item>
          <Item href='/login'>Login</Item>
        </List>
      </Container>
    </Nav>
  )
}