import React, { useState } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { login } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  let navigate = useNavigate();


  const ReegisterToApp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
        }).then(() => {
          dispatch(
            login({
              email: user.email,
              displayName: name,
            })
          );
           navigate("/", { replace: true })
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  

  return (
    <div className="login">
      <img
        src="https://s3.m2data.net/public/73461/bez-imeni.png"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Имя"
        />

        {/* <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type="text"
          placeholder=" url аватара / optional"
        /> */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="Email"
          placeholder=" E-mail"
        />
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="Password"
          placeholder="Пароль"
        />
        <button type="submit" onClick={ReegisterToApp}>
          Зарегистрироваться
        </button>
      </form>

      <p>
        уже зарегистрирован?
        <Link to="/login">
          <span className="login__register">Войти</span>
        </Link>
      </p>
    </div>
  );
}

export default Register;
