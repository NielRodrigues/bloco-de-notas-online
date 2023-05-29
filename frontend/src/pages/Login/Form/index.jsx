import React, { useState, useRef } from 'react';
import PropTypes from "prop-types";

import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { Container, InputsDiv, Text, FieldInput, Input, ShowPassword, Button, SaveLogin, CheckBox, LabelCheckBox } from "../../../components/Form/style";


function Form({ login }) {

  const Password = useRef()

  const [showPassword , setShowPassword ] = useState(false);
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [isChecked, setIsChecked] = useState(false)

  const funcShowPassword = () => {
    if(!showPassword){
      Password.current.type = 'text'
      setShowPassword(true)
      return true
    }
    Password.current.type = 'password'
    setShowPassword(false)
    return false
  }

  async function loginProp() {
    login(password, email, isChecked)
  }

  return (
    <Container onSubmit={(event) => event.preventDefault()}>
      <InputsDiv>
        <Text>E-mail:</Text>
        <FieldInput>
          <MdEmail />
          <Input type="email" onChange={(event) => setEmail(event.target.value)} name="email" id="email" required/>
        </FieldInput>
      </InputsDiv>

      <InputsDiv>
        <Text>Senha:</Text>
        <FieldInput>
          <RiLockPasswordFill />
          <Input ref={Password} type="password" onChange={(event) => setPassword(event.target.value)} name="password" id="password" required/>

          {
            showPassword ?
            (
              <ShowPassword type='button' onClick={funcShowPassword}>
                <AiOutlineEyeInvisible />
              </ShowPassword>
            )
            :
            (
              <ShowPassword type='button' onClick={funcShowPassword}>
                <AiOutlineEye />
              </ShowPassword>
            )
          }
        </FieldInput>
      </InputsDiv>

      <SaveLogin>
        <CheckBox type="checkbox" name="save-login" id="save-login" />
        <LabelCheckBox onClick={()=> setIsChecked(!isChecked)} htmlFor="save-login">
          <Text>Salvar dados de login?</Text>
        </LabelCheckBox>
      </SaveLogin>

      <Button type="submit" onClick={() => loginProp(password, email, isChecked)}>Login</Button>
    </Container>
  )
}

Form.propTypes = {
  login: PropTypes.func.isRequired,
}


export default Form
