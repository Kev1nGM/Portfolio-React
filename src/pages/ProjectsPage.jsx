import React from 'react';
import ProyectCard from '/src/components/ProyectCard';

export default function ProjectsPage({ projects }) {
  return (
    <section id="projects">
      <div className="box-projects">
        <div className="etiquetaSeccion">
          <h2 className="titulo-seccion">
            Proyectos <span className="resaltado">DESTACADOS</span>
          </h2>
        </div>
        <div className="grid-box">
          {projects.map((project, index) => (
            <div key={index}>
              <ProyectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
