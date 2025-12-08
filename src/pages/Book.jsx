import { useParams, useNavigate } from 'react-router-dom';
import { books } from '../data/bookMock';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Book() {
  const { id } = useParams();
  const book = books.find(b => b.id === id);
  const { addItem } = useLocalStorage('cart');
  const navigate = useNavigate();

  if (!book) return <main style={{ padding: 20 }}><p>Libro no encontrado</p></main>;

  return (
    <main style={{ padding: 20 }}>
      <h2>{book.title}</h2>
      <p>Código: {book.code}</p>
      <p>Autor: {book.author}</p>
      <p>Precio: ${book.price.toFixed(2)}</p>
      <p>{book.description}</p>

      <button
        onClick={() => {
          addItem(book);
          navigate('/cart');
        }}
      >
        Añadir al carrito y ver carrito
      </button>
    </main>
  );
}
