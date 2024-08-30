import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser } from "../../features/auth/authSlice";


const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLoggedUser());
  }, [dispatch]);

  const token = localStorage.getItem("token");


  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/Tutorial">¿Cómo funciona?</Link>
        </li>
        <li>
          <Link to="/Contacto">Contacto</Link>
        </li>
        {token ? (
          <>
            <li>
              <Link to="/Servicios">Servicios</Link>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </>
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
