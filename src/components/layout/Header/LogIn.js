import React from "react";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { passes } from "../../../api/loginData";

const LogIn = ({ lang, setIsLoginShow }) => {
  const [cookie, setCookie] = useCookies();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookies] = useCookies();

  const userLogin = "admin";
  const userPassword = "admin123";

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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            handleSubmit={() => {
              setCookie("login", true, { path: "/" });
              setCookie("justLoggedIn", true, { path: "/" });

              if (login === userLogin && password === userPassword) {
                setCookies("isLogged", true, { path: "/" });
                setCookie("justLoggedIn", true, { path: "/" });
              }
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
