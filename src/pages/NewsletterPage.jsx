import React, { useState, useEffect } from 'react';
import '../newsletter.css';     

export default function NewsletterPage() {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const isTimeExpired = timeLeft === 0; // Determina si el tiempo ha expirado

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-header">
          <img src="./images/logo.png" alt="ReviewHub Logo" className="logo" />
          <span className="publicidad">Publicidad</span>
        </div>
        <section className="message-section">
          <h3>Esta temporada, mejora tu setup</h3>
          <p>Estimado usuario,</p>
          <p>
            Es el momento perfecto para actualizar tus periféricos. Aprovecha nuestras ofertas y lleva tu experiencia al siguiente nivel.
          </p>
          <ul className="benefits-list">
            <li><i className="fa-regular fa-circle-check"></i> Sin papeleo</li>
            <li><i className="fa-regular fa-circle-check"></i> Sin comisiones</li>
            <li><i className="fa-regular fa-circle-check"></i> Entrega rápida</li>
          </ul>
          <a href="#" className="promo-button">
            Ver más detalles
          </a>
        </section>
        {isTimeExpired ? (
          // Mostrar mensaje de oferta caducada
          <div className="offer-expired">
            <h2>¡Oferta Caducada!</h2>
            <p>Lo sentimos, esta oferta ya no está disponible. ¡Vuelve pronto para más descuentos increíbles!</p>
          </div>
        ) : (
          // Mostrar contenido del newsletter
          <div className="newsletter-content">
            <section className="promo-section">
              <h2>¡Ofertas Especiales en ReviewHub!</h2>
              <p>Rebajas exclusivas en tus periféricos favoritos.</p>
              <ul className="promo-details">
                <li>Descuentos en teclados hasta un 20%</li>
                <li>Ratones con hasta un 30% de descuento</li>
                <li>Monitores a precios increíbles</li>
              </ul>
              <a
                href="#"
                className='promo-button'
              >
                ¡Compra ahora!
              </a>
              <div className="countdown-timer">
                <p>¡Oferta termina en:</p>
                <h3 className="animated-time">{formatTime(timeLeft)}</h3>
              </div>
            </section>
          </div>
        )}
      </div>
    </section>
  );
}
