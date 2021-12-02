import React from "react";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { passes } from "../../../api/loginData";
import { useHistory } from "react-router-dom";

const LogIn = ({ lang, setIsLoginShow, setName }) => {
  const history = useHistory();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookies] = useCookies();
  const [wrongLogin, setWrongLogin] = useState(false);

  const userLogin = "admin";
  const userPassword = "admin123";
  const name = "Paweł";

  function logIn() {
    if (login === userLogin && password === userPassword) {
      setCookies("isLogged", true, { path: "/" });
      setCookies("justLoggedIn", true, { path: "/" });
      setName(name);
      setIsLoginShow(false);
      setWrongLogin(false);
    }

    if ((login !== userLogin) | (password !== userPassword)) {
      setWrongLogin(true);
    }
  }

  return (
    <>
      <div
        className="login-background"
        onClick={() => {
          setIsLoginShow(false);
        }}
      >
        {" "}
      </div>
      <div className="login-box">
        <form action="" className="login-form">
          <label htmlFor="login" className="login-label">
            Login:
          </label>
          <input
            type="text"
            className="login-input"
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <label htmlFor="password" className="password-label">
            Password:
          </label>
          <input
            type="password"
            className="password-input"
            onInput={(e) => {
              setPassword(e.target.value);
            }}
          />
          {wrongLogin === true && (
            <div className="incorrect-password">
              <p>Incorrect data!</p>
            </div>
          )}
          <input
            onClick={(e) => {
              e.preventDefault();
              logIn();
            }}
            type="submit"
            className="submit"
            value="Login"
          />
        </form>
      </div>
    </>
  );
};

export default LogIn;
