import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/home'), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main style={{ padding: 20, textAlign: 'center' }}>
      <h1>Bienvenid@ a Relatos de Papel</h1>
      <p>Serás redirigid@ a la página principal en 5 segundos...</p>
      <p>O haz clic en <button onClick={() => navigate('/home')}>Ir a Home</button></p>
    </main>
  );
}
