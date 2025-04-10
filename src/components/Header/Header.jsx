import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser, logout } from "../../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getLoggedUser());
  }, [dispatch]);

  const token = localStorage.getItem("token");

  const { user } = useSelector((state) => state.auth);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="header-container">
      <ul className="header-nav">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/Tutorial">¿Cómo funciona?</Link>
        </li>
        <li>
          <Link to="/Contacto">Contacto</Link>
        </li>
        {token && user ? (
          <>
            {user.isServiceProvider ? (
              <li>
                <Link to="/MyService">Mis Servicios</Link>
              </li>
            ) : (
              <li>
                <Link to="/Service">Servicios</Link>
              </li>
            )}
            <li>
              <Link to="/Profile">Perfil</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
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
