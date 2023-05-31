import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

import { login as loginAPI} from "../../services/api";

import Title from "../../components/Title";
import Form from "./Form";
import LinksToLoginOrRegister from "../../components/LinksToLoginOrRegister";

function Login({setUserLogged}){

  const navigate = useNavigate()
  const [resp, setResp] = useState()
  const [loading, setLoading] = useState(false);

  const login = async (password, email, isChecked) => {
    if(!password || !email){
      setResp("Preencha os campos necessários")
      return
    }

    const data = {
      email,
      password
    }

    setLoading(true)
    const [code, userData] = await loginAPI(data)
    setLoading(false)

    if(code === 200){
      await localStorage.setItem("user", JSON.stringify(userData))

      if(isChecked){
        localStorage.setItem("userLogged", true)
      } else {
        localStorage.removeItem("userLogged")
      }

      setUserLogged(true)
      navigate("/user")
      return
    }

    if(code === 400) {
      setResp("Senha e/ou email inválidos.")
      return
    }

    setResp("Usuário não cadastrado.")
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
      <Title text="Login" />
      <span>{resp}</span>
      <Form login={login} />
      <LinksToLoginOrRegister text="Ainda não possui uma conta?" textLink="Registrer-se" link="/register"/>
    </Container>

  );
};

Login.propTypes = {
  setUserLogged: PropTypes.func.isRequired,
};

export default Login;
