import { useParams } from 'react-router-dom';
import { books } from '../data/bookMock';

function BookDetailPage() {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);


  if (!book) {
    return <h2 className="text-center text-2xl mt-10">Libro no encontrado</h2>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">{book.title}</h2>
      <p className="mb-2"><strong>Autor:</strong> {book.author}</p>
      <p className="mb-2"><strong>Género:</strong> {book.genre}</p>
      <p><strong>Descripción:</strong> {book.description}</p>
    </div>
  );
}

export default BookDetailPage;
