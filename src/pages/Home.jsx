import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { books } from '../data/bookMock';
import useLocalStorage from '../hooks/useLocalStorage';
import '../styles.css';

export default function Home() {
  const [q, setQ] = useState('');
  const { addItem } = useLocalStorage('cart');

  const filtered = useMemo(() => {
    const text = q.toLowerCase();

    return books.filter(b =>
      b.title.toLowerCase().includes(text) ||
      b.code.toLowerCase().includes(text) ||
      b.author.toLowerCase().includes(text)
    );
  }, [q]);

  return (
    <main className="rp-container">
      <h2>Catálogo</h2>

      <input
        type="text"
        placeholder="Buscar por título, código o autor..."
        value={q}
        onChange={e => setQ(e.target.value)}
        className="rp-search-input"
      />

      <div className="rp-book-list">
        {filtered.map(book => (
          <article key={book.id} className="rp-book-card">
            <h3>{book.title}</h3>
            <p>Código: {book.code}</p>
            <p>Autor: {book.author}</p>
            <p>${book.price.toFixed(2)}</p>

            <div className="rp-book-card__actions">
              <Link to={`/book/${book.id}`} className="rp-nav__link">
                Ver
              </Link>
              <button onClick={() => addItem(book)}>Añadir al carrito</button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
