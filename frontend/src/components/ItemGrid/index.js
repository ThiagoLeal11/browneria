import React from 'react';

import { Container, Item, Image, Title, Close } from "./styles"
import api from "../../services/api";

export default function ItemGrid({ data, isAuthenticated }) {

  async function del(uuid) {
    try {
      await api.delete(`/api/product/detail/${uuid}/`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {data && data?.length > 0 ? (
        <Container>
          {data?.map(product => (
            <Item key={product.id}>
              {isAuthenticated ? <Close onClick={() => del(product.id)}/> : null}
              <Image src="https://img.itdg.com.br/tdg/images/recipes/000/121/717/289288/289288_original.jpg?mode=crop&width=710&height=400"/>
              <Title>{product.title}</Title>
            </Item>
          ))}
        </Container>
      ) : (
        <p>Sem produtos cadastrados ainda</p>
      )}

    </>
  )
}