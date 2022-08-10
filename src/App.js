import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";

import "./App.css";
import Header from "./components/Header/Header";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "./features/userSlice";
import { auth, storage } from "./firebase";
import SideBar from "./components/SideBar/SideBar";
import Technos from "./pages/Technos";
import Main from "./pages/Main/Main";
import Chat from "./pages/Chat/Chat";
import { setAvatar } from "./features/avatarImgSlice";
import { getDownloadURL, ref } from "firebase/storage";

function App() {
  const user = useSelector((state) => state.user);
  const avatar = useSelector((state) => state.avatar.avatarUrl);

  const dispatch = useDispatch();

  console.log(auth.currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );

        // getDownloadURL(ref(storage, `image`))
        // .then((url) => {
        //   dispatch(setAvatar(url));
        // })
        // .catch((error) => {
        //   console.log(error.message, "error getting the image url");
        // });
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={user.user ? <Main /> : <Login />} />
        <Route path="/technos" element={user.user ? <Technos /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
