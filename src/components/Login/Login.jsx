import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const initialState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState("");
  const [message, setMessage] = useState("");
  
  const dispatch = useDispatch();

  const { email, password } = formData;

  const clearState = () => {
    setFormData(initialState);
    setErrors({});
    setMessage("");
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

   
    if (!email) {
      errors.email = "El correo electrónico es obligatorio.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "El correo electrónico no es válido.";
      isValid = false;
    }

   
    if (!password) {
      errors.password = "La contraseña es obligatoria.";
      isValid = false;
    } else if (password.length < 6) {
      errors.password = "La contraseña debe tener al menos 6 caracteres.";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(login(formData));
      setMessage("Iniciando sesión...");
      clearState();
    } else {
      setMessage("Por favor, corrige los errores antes de enviar.");
    }

    setTimeout(() => {
      navigate("/Profile");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          placeholder="Correo electrónico"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>
      <div>
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>
      <button type="submit">Login</button>
      {message && <p className="message">{message}</p>}
    </form>
  );
};

export default Login;
