import "./components/layout/layout.css";
import Header from "./components/layout/Header/Header";
import WideFooter from "./components/layout/WideFooter";
import SlimFooter from "./components/layout/SlimFooter";
import MainPage from "./components/layout/MainPage";
import WideFooterMobile from "./components/layout/WideFooterMobile";
import Product from "./components/layout/subpages/Product";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Category from "./components/layout/subpages/Category";
import Brand from "./components/layout/subpages/Brand";
import Search from "./components/layout/subpages/Search";
import Type from "./components/layout/subpages/Type";
import "./components/layout/subpages/grid.css";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import Cookies from "./components/layout/Cookies";
import { useState } from "react";

function App({ lang }) {
  const [cookies, setCookies] = useCookies();
  const [cookiesSet, setCookiesSet] = useState(false);
  const [subscribe, setSubscribe] = useState();

  useEffect(() => {
    if (!cookies.Language) {
      setCookies("Language", "en", { path: "/" });
    }

    if (cookies.CookieConsent === "yes") {
      setCookiesSet(true);
    }
  }, []);

  let { path } = useRouteMatch();

  return (
    <div>
      <Header lang={lang} subscribe={subscribe} />
      {!cookiesSet && <Cookies setCookiesSet={setCookiesSet} />}

      <Switch>
        <Route exact path={path}>
          <MainPage lang={lang} />
        </Route>
        <Route
          path={`${path}/product/:productId/:productName`}
          children={<Product lang={path} />}
        ></Route>
        <Route
          path={`${path}/category/:category`}
          children={<Category lang={lang} />}
        ></Route>
        <Route
          exact
          path={`${path}/:type`}
          children={<Type lang={lang} />}
        ></Route>
        <Route
          path={`${path}/brand/:brand`}
          children={<Brand lang={lang} />}
        ></Route>
        <Route
          path={`${path}/search/:search`}
          children={<Search lang={lang} />}
        ></Route>
        <Route>
          DUPA BŁĄD
          <br />
          DUPA BŁĄD
          <br />
          DUPA BŁĄD
          <br />
          DUPA BŁĄD
          <br />
          DUPA BŁĄD
          <br />
          DUPA BŁĄD
          <br />
          DUPA BŁĄD
          <br />
          DUPA BŁĄD
          <br />
          DUPA BŁĄD
          <br />
          DUPA BŁĄD
          <br />
          DUPA BŁĄD
          <br />
          DUPA BŁĄD
          <br />
          DUPA BŁĄD
          <br />
          DUPA BŁĄD
          <br />
        </Route>
      </Switch>
      <SlimFooter setSubscribe={setSubscribe} />
      <WideFooter />
      <WideFooterMobile />
    </div>
  );
}

export default App;
