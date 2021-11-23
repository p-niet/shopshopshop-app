import React from "react";
import { languages } from "../../../api/languages";
import "./header.css";
import { useCookies } from "react-cookie";

export default function LanguagePicker(isLanguageShown) {
  const [cookies, setCookies] = useCookies(["lang"]);
  return (
    <div className="langs">
      {languages.map((lang) => {
        return (
          <div>
            <a
              href={`/${lang.isoCode}`}
              onClick={() => {
                setCookies("Language", lang.isoCode, { path: "/" });
              }}
            >
              <p className="lang-option">{lang.name}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
}
