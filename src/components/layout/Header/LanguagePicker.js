import React from "react";
import { languages } from "../../../api/languages";
import "./header.css";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export default function LanguagePicker({ isLanguageShown }) {
  const [cookies, setCookies] = useCookies(["lang"]);
  return (
    <div className="langs">
      {languages.map((lang) => {
        return (
          <div>
            <Link to={`/${lang.isoCode}`}>
              <p
                onClick={() => {
                  setCookies("Language", lang.isoCode, { path: "/" });
                }}
              >
                <p className="lang-option">{lang.name}</p>
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
