import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana al inicio
  }, [pathname]); // Ejecuta cuando la ruta cambia

  return null; // No renderiza nada
}
