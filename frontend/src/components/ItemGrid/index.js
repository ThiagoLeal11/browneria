import React from 'react';

import { Container, Item, Image, Title, Close, Message } from "./styles"
import api from "../../services/api";

export default function ItemGrid({ data, isAuthenticated, onDelete }) {
  return (
    <>
      {data && data?.length > 0 ? (
        <Container>
          {data?.map(product => (
            <Item key={product.id}>
              {isAuthenticated ? <Close onClick={() => onDelete(product.id)}/> : null}
              <Image src="https://img.itdg.com.br/tdg/images/recipes/000/121/717/289288/289288_original.jpg?mode=crop&width=710&height=400"/>
              <Title>{product.title}</Title>
            </Item>
          ))}
        </Container>
      ) : (
        <Message>Sem produtos cadastrados ainda</Message>
      )}

    </>
  )
}