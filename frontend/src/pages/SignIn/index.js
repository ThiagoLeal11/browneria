import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";
import { login } from "../../services/auth";

import { Form, Container, Logo } from "./styles";
import NavBar from "../../components/NavBar"


class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/api/token/", { email, password });
        login(response.data);
        this.props.history.push("/");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. :c"
        });
      }
    }
  };

  render() {
    return [
      <NavBar />,
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <Logo>&lt;Browneria!&gt;</Logo>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/cadastro">Criar conta grátis</Link>
        </Form>
      </Container>
    ];
  }
}

export default withRouter(SignIn);