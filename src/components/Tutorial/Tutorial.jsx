import "./Tutorial.css";

import React from "react";

const Tutorial = () => {
  return (
    <div className="how-it-works">
      <h2>¿Cómo Funciona Care-Pro?</h2>

      <section>
        <h3>1. Registro y Configuración de Cuenta</h3>
        <p>
          Regístrate en <strong>Care-Pro</strong> completando un sencillo
          formulario con tus datos. Después de registrarte, recibirás un correo
          de confirmación para validar tu cuenta. Una vez confirmada, podrás
          personalizar tu perfil y acceder a todas las funciones de la
          plataforma.
        </p>
      </section>

      <section>
        <h3>2. Explora Nuestros Servicios</h3>
        <p>
          En <strong>Care-Pro</strong>, ofrecemos una amplia gama de servicios
          profesionales de atención y cuidado. Si eres un proveedor de
          servicios, podrás crear y gestionar tus ofertas de manera fácil y
          rápida. Si buscas servicios, puedes navegar por las categorías y
          elegir lo que mejor se adapte a tus necesidades.
        </p>
      </section>

      <section>
        <h3>3. Contratación de Servicios</h3>
        <p>
          Cuando encuentres el servicio adecuado, solo tienes que hacer clic en
          el botón de contratación y seguir los pasos para agendar o adquirir el
          servicio. Recibirás una confirmación con todos los detalles a tu
          correo electrónico.
        </p>
      </section>

      <section>
        <h3>4. Reseñas y Valoraciones</h3>
        <p>
          Después de completar un servicio, te invitamos a dejar una reseña y
          valorar tu experiencia. Esto ayuda tanto a otros usuarios como a los
          proveedores a mejorar continuamente.
        </p>
      </section>

      <section>
        <h3>5. Soporte al Cliente</h3>
        <p>
          Si necesitas ayuda en cualquier momento, nuestro equipo de soporte
          está a tu disposición. Puedes contactarnos a través del chat en vivo o
          por correo electrónico, y con gusto te asistiremos.
        </p>
      </section>
    </div>
  );
};
export default Tutorial;
