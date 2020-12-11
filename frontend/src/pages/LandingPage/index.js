import React, { useCallback, useState, useEffect } from 'react';

import { Container, Title, Subtitle, Button } from "./styles"
import NavBar from "../../components/NavBar"
import Header from "../../components/Header"
import ItemGrid from "../../components/ItemGrid"
import Modal from "../../components/Modal"

import { isAuthenticated } from "../../services/auth"
import api from "../../services/api";

export default function LandingPage() {
  const [isModalVisible, setModelVisibility] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/api/product/")
        setProducts(response.data.products)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData();
  }, [])

  const addToList = (obj) => {
    setProducts([...products, obj])
  }

  const removeFromList = (uuid) => {
    setProducts(products.filter(item => item.id !== uuid))
  }

  const deleteProduct = async uuid => {
    try {
      await api.delete(`/api/product/detail/${uuid}/`)
      removeFromList(uuid)
    } catch (err) {
      console.log(err)
    }
  }


  return [
    <NavBar />,
    <Header />,
    <Modal 
      visible={isModalVisible}
      onCancel={() => setModelVisibility(false)}
      onAccept={(data) => {
        setModelVisibility(false)
        addToList(data)
      }}
    />,
    <Container>
      <Title>Para todos os gostos</Title>
      <Subtitle>E ai, qual vai ser o sabor de hoje?</Subtitle>
      <ItemGrid data={products} isAuthenticated={isAuthenticated()} onDelete={uuid => deleteProduct(uuid)} />
      {isAuthenticated() ? (
        <Button onClick={e => setModelVisibility(true)}>Adicionar Brownie</Button>
      ) : null}
    </Container>,
    <Container>
      <Title>Pertinho de você</Title>
      <Subtitle>A dois pulos de onde você está, é só colar</Subtitle>
      
    </Container>
  ]
}