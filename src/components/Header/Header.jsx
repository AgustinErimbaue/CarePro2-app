import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
import { useSelector } from "react-redux";

const Header = ({ user }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/Tutorial">Como funciona?</Link>
        </li>
        <li>
          <Link to="/Contacto">Contacto</Link>
        </li>
        {/* Expresión ternaria para condicionalmente renderizar enlaces */}
        {user ? (
          <li>
            <Link to="/Profile">Perfil</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Registro">Registrarse</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;
