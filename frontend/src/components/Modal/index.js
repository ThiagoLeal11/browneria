import React, { useState } from 'react';
import { Overlay, Modal, Button, Input, Title, ButtonWhite } from './styles';
import api from "../../services/api";

export default function Dialog({
  body,
  acceptLabel,
  visible,
  onAccept,
  onCancel,
}) {
  const [state, setState] = useState({title: "", error:""})

  const handleCreate = async e => {
    e.preventDefault();
    const { title } = state;
    if (!title) {
      setState({ error: "Preencha o título para continuar!" });
    } else {
      try {
        const response = await api.post("/api/product/", { title });
        setState({error: ""});
        onAccept(response.data.product)
      } catch (err) {
        setState({
          error:
            "Houve um problema com o cadastro, tente recarregar a página ou logar novamente. :c"
        });
      }
    }
  }

  return (
    <Overlay show={visible}>
      <Modal onSubmit={handleCreate}>
        <Title>Cadastrar novo Brownie</Title>
        {state.error && <p>{state.error}</p>}
        <Input
          type="title"
          placeholder="Título do Brownie"
          onChange={e => setState({ title: e.target.value })}
          value={state.title || ''}
        />
        <Button type="submit">Cadastrar</Button>
        <ButtonWhite type="cancel" onClick={onCancel}>Cancelar</ButtonWhite>
      </Modal>
    </Overlay>
  );
}
