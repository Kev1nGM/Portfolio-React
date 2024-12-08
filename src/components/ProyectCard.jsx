import React, { useState } from 'react';

export default function ProyectCard({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className={`flip-container ${isFlipped ? 'flipped' : ''}`}>
      <div className="flipper">
        {/* Lado frontal de la tarjeta */}
        <div className="front">
          <div className="project">
            <div className="number-project">{project.number}</div>
            <h3 className="title-project">{project.title}</h3>
            <hr />
            <div className="img-project">
              <img src={`./${project.image}`} alt={project.title} />
            </div>
            <button className="btn-primary" onClick={toggleFlip}>
              LEER MÁS
            </button>
          </div>
        </div>
        {/* Lado posterior con información */}
        <div className="back">
          <div className="project-info">

            <h3 className="project-name">{project.title}</h3>
            <p>{project.description}</p>
            <button className="btn-primary btn-back" onClick={toggleFlip}>
              Volver
            </button>
            {/* Botón para redirigir a la página */}
            <button className="btn-primary btn-visit">
                <a href={project.page}>Visitar Página</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
