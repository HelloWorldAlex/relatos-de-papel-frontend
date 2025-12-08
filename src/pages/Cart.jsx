import useLocalStorage from "../hooks/useLocalStorage";
import '../styles.css';
import { useNavigate } from "react-router-dom";

export default function Cart() {

  const { value: cart, clear: clearCart } = useLocalStorage("cart");
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="rp-container">
      <h2>Tu carrito</h2>

      {cart && cart.length === 0 ? (
        <p>No hay libros en tu carrito todavía.</p>
      ) : (
        <>
          <ul className="rp-cart-list">
            {cart && cart.map(book => (
              <li key={book.id} className="rp-cart-list__item">
                <strong>{book.title}</strong> — {book.author} x {book.qty}
              </li>
            ))}
          </ul>

          <button
            onClick={clearCart}
            className="rp-button--error"
          >
            Vaciar carrito
          </button>

          <button
            onClick={handleCheckout}
            style={{ marginTop: 10, background: "green", color: "white", padding: 10, marginLeft: 10 }}
          >
            Finalizar pedido
          </button>
        </>
      )}
    </div>
  );
}
