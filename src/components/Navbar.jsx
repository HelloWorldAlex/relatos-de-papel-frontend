import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Navbar() {
  const { value: cart } = useLocalStorage("cart");
  const totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

  return (
    <nav className="rp-nav">
      <div className="rp-nav__links-container">
        <Link to="/" className="rp-nav__link">Inicio</Link>
        <Link to="/home" className="rp-nav__link">Catálogo</Link>
        <Link to="/favorites" className="rp-nav__link">Favoritos</Link>
        <Link to="/contact" className="rp-nav__link">Contacto</Link>
      </div>
      <div>
        <Link to="/cart" className="rp-nav__link">Carrito ({totalItems})</Link>
      </div>
    </nav>
  );
}
