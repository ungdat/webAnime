import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./style/App.css";
import { Menu } from "./component/Menu";
import { Home } from "./component/Home";
import { Product } from "./component/Product";
import { Cart } from "./component/Cart";
import { Footer } from "./component/footer";

function App() {
  return (
    <div className="main">
      <div className="App">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
