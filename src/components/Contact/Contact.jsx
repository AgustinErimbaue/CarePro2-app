import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <div className="contact-us">
      <h2>Contacto</h2>

      <div className="contact-info">
        <section>
          <h3>Nuestra Ubicación</h3>
          <p>Care-Pro S.A.</p>
          <p>Calle Ficticia 123, Ciudad de Buenos Aires, Argentina</p>
        </section>

        <section>
          <h3>Teléfono</h3>
          <p>+54 11 5555-1234</p>
        </section>

        <section>
          <h3>Email</h3>
          <p><a href="mailto:contacto@carepro.com">contacto@carepro.com</a></p>
        </section>
      </div>

      <div className="contact-form">
        <h3>Envíanos un Mensaje</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Tu email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" placeholder="Escribe tu mensaje" required></textarea>
          </div>

          <button type="submit" className="btn-submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact