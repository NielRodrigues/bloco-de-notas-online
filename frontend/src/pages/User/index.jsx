import React, { useEffect, useState } from 'react';

import { BsCloudArrowUpFill, BsCloudCheckFill } from "react-icons/bs"
import { FaUserEdit } from "react-icons/fa"

import PropTypes from "prop-types";

import { FiLogOut } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import userProfilePic from '../../assets/images/user_placeholder.jpg';
import { Container, InfoUser, Notes, ProfilePic, TextContent, Text, Button, Loading, SelectImage, SwitchImage } from './style'

import { updateNotes, login, file } from '../../services/api';

function User({setUserLogged}) {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))

  const [loadingPage, setLoadingPage] = useState(true)
  const [image, setImage] = useState(user.picture)


  useEffect(() => {
    async function loginApi()
    {
      const data = {
        email: user.email,
        password_hash: user.password_hash
      }

      const [code, userData] = await login(data)

      if(code === 200){
        setLoadingPage(false)
        await localStorage.setItem("user", JSON.stringify(userData))
        return
      }

      await localStorage.removeItem("userLogged")
      await localStorage.removeItem("user")
      setUserLogged(false)
      navigate("/")

    }
    loginApi()
  }, [])

  const [notes, setNotes] = useState(user.notes)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    async function update() {
      const data = {
        id: user.id,
        notes
      }
      await updateNotes(data)

      const dataLogin = {
        email: user.email,
        password_hash: user.password_hash
      }

      const [code, userData] = await login(dataLogin)

      if(code === 200){
        setLoadingPage(false)
        await localStorage.setItem("user", JSON.stringify(userData))
        setLoading(false)
        return
      }
      await localStorage.removeItem("userLogged")
      setUserLogged(false)
      navigate("/")
    }
    update();
  }, [notes])

  useEffect(() => {}, [image])

  const logout = async () => {
    await localStorage.removeItem("userLogged")
    setUserLogged(false)
    navigate("/")
  }

  const changePicture = async (files) => {
    const formData = new FormData();
    formData.append("file", files[0])

    const [code, response] = await file(formData)

    setImage(response.path)

    if(code === 200) {
      const data = {
        id: user.id,
        picture: response.path
      }

      await updateNotes(data)

      const dataLogin = {
        email: user.email,
        password_hash: user.password_hash
      }

      const [codeLogin] = await login(dataLogin)

      if(codeLogin === 200){
        return
      }
      await localStorage.removeItem("userLogged")
      setUserLogged(false)
      navigate("/")
    }
  }

  if(loadingPage) {
    return(
      <Container>
        Carregando...
      </Container>
    )
  }

  return (
    <Container>
      <InfoUser>
        {
          image ?
          (
            <ProfilePic src={`http://localhost:3001/tmp/uploads/${image}`}  alt="Profile" />
          )
          :
          (
            <ProfilePic src={userProfilePic}  alt="Profile" />
          )
        }

        <SelectImage type="file" name="picture" id="picture" onChange={(event) => changePicture(event.target.files)} />
        <SwitchImage htmlFor="picture">
          <FaUserEdit />
        </SwitchImage>

        <TextContent>
          <Text>{user.name}</Text>
          <Text>{user.email}</Text>
        </TextContent>
        <Button type='button' onClick={logout}>
          <FiLogOut />
        </Button>
      </InfoUser>
      <Notes value={notes} onChange={(event) => setNotes(event.target.value)} />

      <Loading>
        {loading ? <BsCloudArrowUpFill /> : <BsCloudCheckFill /> }
      </Loading>
    </Container>
  )
}

User.propTypes = {
  setUserLogged: PropTypes.func.isRequired,
};

export default User
