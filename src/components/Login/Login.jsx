import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialState);

  const { email, password } = formData;

  const clearState = () => {
    setFormData(initialState);
  };
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearState(initialState);
    dispatch(login(formData));
  };
  return (
    <form>
      <input
        type="text"
        placeholder="email"
        name="email"
        value={email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={handleInputChange}
      />
      <button>Login</button>
    </form>
  );
};

export default Login;
