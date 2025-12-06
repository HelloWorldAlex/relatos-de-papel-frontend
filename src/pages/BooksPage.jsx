import useLocalStorage from '../hooks/useLocalStorage';
import BookList from '../components/BookList';
import { books } from '../data/bookMock';


function BooksPage() {
  const { value: storedBooks } = useLocalStorage('books', books);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Listado de Libros</h2>
      <BookList books={storedBooks} />
    </div>
  );
}

export default BooksPage;

