import React, { useEffect, useState } from "react";
import "./Registro.css"; // Importa el CSS
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";

const Registro = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    phoneNumber: "",
    address: "",
  });

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const initialState = {
    name: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    phoneNumber: "",
    address: "",
  };

  const validateForm = () => {
    if (!data.name) {
      setMessage("El nombre es obligatorio.");
      setBtnDisabled(true);
    } else if (data.name.length < 3) {
      setMessage("El nombre debe tener al menos 3 caracteres.");
      setBtnDisabled(true);
    } else if (!data.username) {
      setMessage("El nombre de usuario es obligatorio.");
      setBtnDisabled(true);
    } else if (!data.email) {
      setMessage("El correo electrónico es obligatorio.");
      setBtnDisabled(true);
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      setMessage("El correo electrónico no es válido.");
      setBtnDisabled(true);
    } else if (!data.password) {
      setMessage("La contraseña es obligatoria.");
      setBtnDisabled(true);
    } else if (data.password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      setBtnDisabled(true);
    } else if (data.password !== data.repeatPassword) {
      setMessage("Las contraseñas no coinciden.");
      setBtnDisabled(true);
    } else if (!data.address) {
      setMessage("La dirección es obligatoria.");
      setBtnDisabled(true);
    } else if (!data.phoneNumber) {
      setMessage("El número de teléfono es obligatorio.");
      setBtnDisabled(true);
    } else {
      setMessage("");
      setBtnDisabled(false);
    }
  };

  useEffect(() => {
    validateForm();
  }, [data]);

  const clearState = () => {
    setData(initialState);
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Enviando datos... Nombre: ${data.name}, Email: ${data.email}`);
    dispatch(register(data));
    clearState();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={data.name}
          name="name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={data.username}
          name="username"
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={data.email}
          name="email"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Dirección"
          name="address"
          value={data.address}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={data.phoneNumber}
          name="phoneNumber" 
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={data.password}
          name="password"
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Repetir Contraseña"
          name="repeatPassword"
          value={data.repeatPassword}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={btnDisabled}>
          Enviar
        </button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Registro;
