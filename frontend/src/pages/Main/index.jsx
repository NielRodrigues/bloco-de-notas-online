import React from "react";
import { Outlet } from 'react-router-dom'

import { Container } from "./style";

function Main(){
  return (

    <Container>
      <Outlet />
    </Container>

  );
};

export default Main;
