import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./login.scss";

function Login({ setLogin, user }) {
  const passwordValue = useRef();
  const navigate = useNavigate();
  const [seePassword, setSeePassword] = useState(false);
  const [isPassword, setIsPassword] = useState(true);

  const userLogin = () => {
    if (passwordValue.current.value === user.password) {
      navigate("/");
      setIsPassword(true);
      setLogin(true);
    } else {
      setIsPassword(false);
    }
  };

  return (
    <div className="loginPage">
      <div className="loginBox">
        <div className="title">Web saytga kirish uchun parolni kiriting</div>
        <h1 className="isPassword">{isPassword ? "" : "Parol xato"}</h1>
        <input ref={passwordValue} type={seePassword ? "text" : "password"} />
        <button
          onClick={() => setSeePassword(!seePassword)}
          className="show-hide"
        >
          {seePassword ? "hide" : "show"}
        </button>
        <button className="login" onClick={userLogin}>
          Kirish
        </button>
      </div>
    </div>
  );
}

export default Login;
