import React, { useState } from "react";

import { Container } from "./style";

import { register as registerAPI } from "../../services/api";

import Title from "../../components/Title";
import Form from "./Form";
import LinksToLoginOrRegister from "../../components/LinksToLoginOrRegister";

function Register(){

  const [loading, setLoaging] = useState(false);
  const [resp, setResp] = useState();

  const register = async (name, email, password, confirmPassword) => {
    if(!name || !email || !password || !confirmPassword) {
      setResp("Preencha todos os campos.")
      return
    }
    if(!(password === confirmPassword)) {
      setResp("As senhas não combinam.")
      return
    }

    const data = {
      name,
      email,
      password,
    }

    setLoaging(true)

    const code = await registerAPI(data);
    
    if(code === 400) {
      setResp("Email já cadastrado.")
      setLoaging(false)
      return
    }

    setResp("Registrado com sucesso.")
    setLoaging(false)
  }

  if(loading) {
    return (
      <Container>
        Carregando...
      </Container>
    )
  }

  return (

    <Container>
      <Title text="Registrar" />
      <span>{resp}</span>
      <Form register={register} />
      <LinksToLoginOrRegister text="Já possui uma conta?" textLink="Login" link="/"/>
    </Container>

  );
};

export default Register;
