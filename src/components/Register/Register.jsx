import React, { useEffect, useState } from "react";
import "./Register.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    phoneNumber: "",
    address: "",
    isServiceProvider: false, // Valor booleano inicial
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
    isServiceProvider: false, // Iniciar como booleano
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
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value, // Manejar checkbox correctamente
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Enviando datos... Nombre: ${data.name}, Email: ${data.email}, ¿Ofrecer servicio?: ${data.isServiceProvider}`
    );

    // Aquí ya estamos enviando el dato como booleano
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
          placeholder="Nombre Completo"
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

        <div className="checkbox-container">
          <input
            type="checkbox"
            id="isServiceProvider"
            name="isServiceProvider"
            checked={data.isServiceProvider}
            onChange={handleInputChange}
          />
          <label htmlFor="isServiceProvider">¿Ofrecerás servicios?</label>
        </div>

        <button type="submit" disabled={btnDisabled}>
          Enviar
        </button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Register;
