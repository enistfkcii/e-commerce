import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import './outputailwind.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Search from "./pages/Search";

function App() {
  return (
    <>
    <div>     
      <PageContainer>
      <Router>
        <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products/:id" element={<Detail></Detail>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/products/:search" element={<Search></Search>}></Route>  
      </Routes>
      </Router>
      </PageContainer>
    </div>
    </>

  );
}

export default App;
