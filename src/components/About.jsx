import Skills from "./Skills";
export default function About(){

    return(
<section id="about-me">
  <div className="box-about">
    <div className="about-text">
      <h1 className="titulo-seccion">Sobre Mí</h1>
      <h5>
        Developer <span>&amp; Designer</span>
      </h5>
      <p>
        ¡Hola! Soy Kevin, un apasionado desarrollador web con una sólida
        experiencia en el desarrollo de aplicaciones web modernas.
      </p>
      <p>
        Mi enfoque principal es el backend, y he trabajado en diversos
        proyectos, desde sitios web elegantes hasta aplicaciones web complejas.
      </p>{" "}
    </div>
  </div>
  <Skills/>
</section>
    );

}