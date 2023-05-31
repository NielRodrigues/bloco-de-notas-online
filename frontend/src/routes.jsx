import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";

export function AppRoutes() {

  const [userLogged, setUserLogged] = useState(localStorage.getItem("userLogged"))

  useEffect(() => {}, [userLogged])


  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={!userLogged ? <Login setUserLogged={setUserLogged} /> : <Navigate to="/user" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={userLogged  ? <User setUserLogged={setUserLogged} /> : <Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
