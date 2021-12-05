import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import { languages } from "./api/languages";
import { useCookies } from "react-cookie";

const defaultLang = languages.find(({ isoCode }) => isoCode === "en");

export default function Router() {
  const [cookies] = useCookies();

  const cookieLang =
    languages.find(({ isoCode }) => isoCode === cookies.Language) ||
    defaultLang;

  return (
    <div className="App">
      <BrowserRouter basename={`/shopshopshop-app`}>
        <Switch>
          <Route exact path="/">
            <App lang={cookieLang} />
          </Route>

          {languages.map((lang) => {
            return (
              <Route path={`/${lang.isoCode}`}>
                <App lang={lang} />
              </Route>
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
