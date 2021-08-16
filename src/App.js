import "./components/layout/layout.css";
import Header from "./components/layout/Header/Header";
import WideFooter from "./components/layout/WideFooter";
import SlimFooter from "./components/layout/SlimFooter";
import MainPage from "./components/layout/MainPage";
import WideFooterMobile from "./components/layout/WideFooterMobile";
import Product from "./components/layout/subpages/Product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Category from "./components/layout/subpages/Category";
import Brand from "./components/layout/subpages/Brand";
import Search from "./components/layout/subpages/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/products/:id" children={<Product />}></Route>
          <Route path="/category/:category" children={<Category />}></Route>
          <Route path="/brand/:brand" children={<Brand />}></Route>
          <Route path="/search/:search" children={<Search />}></Route>
        </Switch>
        <SlimFooter />
        <WideFooter />
        <WideFooterMobile />
      </Router>
    </div>
  );
}

export default App;
