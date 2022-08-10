import React, { useState } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { login } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import { setAvatar } from "../../features/avatarImgSlice";

function Register() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  // const [image, setImage] = useState("");
  // const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const hendleChange = (e) => {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //     const imageRef = ref(storage, "image");
  //     uploadBytes(imageRef, image)
  //       .then(() => {
  //         getDownloadURL(imageRef)
  //           .then((url) => {
  //             setImageUrl(url);
  //           })
  //           .catch((error) => {
  //             console.log(error.message, "error getting the image url");
  //           });
  //         setImage(null);
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //       });
  //   }
  // };

  const ReegisterToApp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
          // photoURL: imageUrl,
        }).then(() => {
          dispatch(
            login({
              email: user.email,
              displayName: name,
            })
          );
          navigate("/", { replace: true });
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="login">
      <img src="https://s3.m2data.net/public/73461/bez-imeni.png" alt="" />
      <form>
        {/* <img src={imageUrl} alt="имаге" /> */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Имя"
        />

        {/* <label htmlFor="file">
          <div>{!image ? "Загрузить аватарку" : "Аватар загружен"}</div>
        </label>
        <input
          name="image"
          exept="image/gif, image/jpeg, image/png"
          onChange={hendleChange}
          type="file"
          id="file"
          style={{ display: "none" }}
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
