import React, { useState } from "react";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);

  const { email, password } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
