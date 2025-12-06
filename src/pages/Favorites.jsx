import useLocalStorage from "../hooks/useLocalStorage";

export default function Favorites() {
  const { value: favorites } = useLocalStorage("favorites");

  return (
    <div style={{ padding: 20 }}>
      <h2>Tus favoritos</h2>
      {favorites.length === 0 ? (
        <p>No has marcado ningún libro como favorito aún.</p>
      ) : (
        <ul>
          {favorites.map(book => (
            <li key={book.id}><strong>{book.title}</strong> — {book.author}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
