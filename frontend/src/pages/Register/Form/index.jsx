import React, { useState, useRef, useEffect } from 'react'
import PropTypes from "prop-types";

import { MdEmail } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { Container, InputsDiv, Text, FieldInput, Input, ShowPassword, Button } from "../../../components/Form/style";

function Form({ register }) {

  const Password = useRef()
  const ConfirmPassword = useRef()
  const [showPassword , setShowPassword] = useState(false);
  const [showConfirmPassword , setShowConfirmPassword] = useState(false);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  useEffect(() => {}, [password, confirmPassword])

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

  const funcShowConfirmPassword = () => {
    if(!showConfirmPassword){
      ConfirmPassword.current.type = 'text'
      setShowConfirmPassword(true)
      return true
    }
    ConfirmPassword.current.type = 'password'
    setShowConfirmPassword(false)
    return false
  }

  async function registerFunc() {
    register(name, email, password, confirmPassword)
  }

  return (
    <Container>
      <InputsDiv>
        <Text>Nome:</Text>
        <FieldInput>
          <FaUserAlt />
          <Input type="text" onChange={(event) => setName(event.target.value)} name="name" id="name" required/>
        </FieldInput>
      </InputsDiv>

      <InputsDiv>
        <Text>E-mail:</Text>
        <FieldInput>
          <MdEmail />
          <Input type="email" onChange={(event) => setEmail(event.target.value)} name="email" id="email" required/>
        </FieldInput>
      </InputsDiv>

      <InputsDiv>
        <Text>Senha:</Text>
        {
          confirmPassword === password ?
          (
            <FieldInput>
              <RiLockPasswordFill />
              <Input ref={Password} onChange={(event) => setPassword(event.target.value)} type="password" name="password" id="password" required/>

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
          )
          :
          (
            <FieldInput className="wrong">
              <RiLockPasswordFill />
              <Input ref={Password} onChange={(event) => setPassword(event.target.value)} type="password" name="password" id="password" required/>

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
          )
        }
      </InputsDiv>

      <InputsDiv>
        <Text>Confirmar senha:</Text>
        {
          confirmPassword === password ?
          (
            <FieldInput>
              <RiLockPasswordFill />
              <Input ref={ConfirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} type="password" name="confirm-password" id="confirm-password" required/>
              {
                showConfirmPassword ?
                (
                  <ShowPassword type='button' onClick={funcShowConfirmPassword}>
                    <AiOutlineEyeInvisible />
                  </ShowPassword>
                )
                :
                (
                  <ShowPassword type='button' onClick={funcShowConfirmPassword}>
                    <AiOutlineEye />
                  </ShowPassword>
                )
              }
            </FieldInput>
          )
          :
          (
            <FieldInput className="wrong">
              <RiLockPasswordFill />
              <Input ref={ConfirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} type="password" name="confirm-password" id="confirm-password" required/>

              {
                showConfirmPassword ?
                (
                  <ShowPassword type='button' onClick={funcShowConfirmPassword}>
                    <AiOutlineEyeInvisible />
                  </ShowPassword>
                )
                :
                (
                  <ShowPassword type='button' onClick={funcShowConfirmPassword}>
                    <AiOutlineEye />
                  </ShowPassword>
                )
              }
            </FieldInput>
          )
        }
      </InputsDiv>

      <Button type="submit" onClick={() => registerFunc(name, email, password, confirmPassword)}>Registrar</Button>
    </Container>
  )
}

Form.propTypes = {
  register: PropTypes.func.isRequired
}

export default Form
