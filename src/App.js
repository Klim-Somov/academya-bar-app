import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";

import "./App.css";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";

import Main from "./pages/Main";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "./features/userSlice";
import { auth } from "./firebase";


function App() {
  const user = useSelector((state) => state.user);
 

  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))

       
      } else {
        
       dispatch(logout())
      }
    });
    
  }, []);
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={user.user ? <Main /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
