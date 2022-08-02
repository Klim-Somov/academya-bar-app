import React, { useState } from "react";
// import "./Login.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Login() {

  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  let navigate = useNavigate()

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(
          login({
            email: user.email,
            displayName: user.displayName,
          })
        );
        navigate("/", { replace: true })
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
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
        <button type="submit" onClick={loginToApp}>
          войти
        </button>
      </form>

      <p>
        не зарегистрирован?
        <Link to="/register">
          <span className="login__register">Зарегистрироваться</span>
        </Link>
      </p>
    </div>
  );
}

export default Login;
