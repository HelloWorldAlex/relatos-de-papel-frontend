import "./App.css";
import Navbar from "./components/Navbar";
import useLocalStorage from "./hooks/useLocalStorage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer"; 
import ContactPage from "./pages/ContactPage"; 

export default function App() {

  const cartProps = useLocalStorage("cart"); 
  const favoritesProps = useLocalStorage("favorites");

  return (
    <BrowserRouter>
   
      <Navbar cartItemCount={cartProps.value.length} /> 
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
                
          <Route path="/home" element={<Home addItemToCart={cartProps.addItem} />} /> 
         
          <Route path="/book/:id" element={<Book addItemToCart={cartProps.addItem} />} /> 
          
                   <Route path="/cart" element={<Cart cartProps={cartProps} />} /> 
          
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/favorites" element={<Favorites />} /> 
          <Route path="/contact" element={<ContactPage />} />
                    
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

