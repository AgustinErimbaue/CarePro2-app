import React from "react";
import "./Home.css"
const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <h1>Encuentra el servicio perfecto para tu hogar y mascotas</h1>
        <p>
          Conecta con profesionales confiables en tu área para limpieza, cuidado
          de mascotas y más.
        </p>
        <button className="cta-button">Explorar Servicios</button>
      </div>
      <div className="services-section">
        <h2>Nuestros Servicios</h2>
        <div className="services-list">
          <div className="service-item">
            <img src="cleaning.jpg" alt="Limpieza de casa" />
            <h3>Limpieza de Casa</h3>
            <p>
              Encuentra expertos en limpieza para mantener tu hogar impecable.
            </p>
          </div>
          <div className="service-item">
            <img src="dog-walking.jpg" alt="Paseo de perros" />
            <h3>Paseo de Perros</h3>
            <p>
              Contrata a paseadores de perros de confianza para cuidar de tu
              mascota.
            </p>
          </div>
          <div className="service-item">
            <img src="pet-care.jpg" alt="Cuidado de mascotas" />
            <h3>Cuidado de Mascotas</h3>
            <p>Deja a tus mascotas en manos seguras mientras estás fuera.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
