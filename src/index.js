import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LanguageRouter from "./LanguageRouter";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <LanguageRouter />
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
