import "./components/layout/layout.css";
import Header from "./components/layout/Header/Header";
import WideFooter from "./components/layout/WideFooter";
import SlimFooter from "./components/layout/SlimFooter";
import MainPage from "./components/layout/MainPage";
import WideFooterMobile from "./components/layout/WideFooterMobile";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <SlimFooter />
      <WideFooter />
      <WideFooterMobile />
    </div>
  );
}

export default App;
