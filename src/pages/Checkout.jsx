import useLocalStorage from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { value: cart, total, clear } = useLocalStorage('cart');
  const navigate = useNavigate();

  const handlePayment = () => {
    alert('Pago realizado correctamente. Gracias por tu compra!');
    clear();
    navigate('/home');
  };

  return (
    <main style={{ padding: 20 }}>
      <h2>Checkout</h2>
      {cart.length === 0 ? <p>No hay productos en el carrito</p> :
        <>
          <ul>
            {cart.map(i => <li key={i.id}>{i.title} x {i.qty} - ${ (i.price * i.qty).toFixed(2) }</li>)}
          </ul>
          <p>Total: ${total.toFixed(2)}</p>
          <button onClick={handlePayment}>Pagar</button>
        </>
      }
    </main>
  );
}
