import "./components/layout/layout.css";
import Header from "./components/layout/Header/Header";
import WideFooter from "./components/layout/WideFooter";
import SlimFooter from "./components/layout/SlimFooter";

function App() {
  return (
    <div className="App">
      <Header />
      <SlimFooter />
      <WideFooter />
    </div>
  );
}

export default App;
