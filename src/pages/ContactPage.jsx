import React, { useState } from 'react';


export default function ContactPage() {
  // Estado para los valores del formulario
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    asunto: '',
    message: '',
  });

  // Estado para el mensaje de confirmación
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Manejador de cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedo enviar los datos al backend o como en este caso mostrarlos en consola
    console.log('Formulario enviado:', formValues);

    // Mostrar el mensaje de confirmación
    setIsSubmitted(true);

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => setIsSubmitted(false), 3000);

    // Reiniciar el formulario
    setFormValues({
      name: '',
      email: '',
      asunto: '',
      message: '',
    });
  };

  return (
    <section id="contact">
      <div className="box-contact">
        <div className="etiquetaSeccion">
          <div className="containerEtiqueta">
            <h2>Contáctame</h2>
          </div>
        </div>
        <h2>Rellena el Formulario</h2>

        {/* Mensaje de confirmación */}
        {isSubmitted && <div className="notification success">Mensaje enviado correctamente</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              id="fname"
              name="name"
              placeholder="Nombre*"
              value={formValues.name}
              onChange={handleInputChange}
              required
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email*"
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              id="asunto"
              name="asunto"
              placeholder="Asunto*"
              value={formValues.asunto}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <textarea
              id="message"
              name="message"
              placeholder="Mensaje*"
              value={formValues.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <input id="submitMail" type="submit" value="Enviar mensaje" />
        </form>
      </div>
    </section>
  );
}
