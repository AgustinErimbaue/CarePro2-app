import React, { useState } from "react";

const MyServiceForm = () => {
  const initialState = { title: "", description: "", price: 0, category: "" };

  const [data, setData] = useState(initialState);
  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Ingrese titulo del servicio"
        value={data.title}
        name="title"
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Ingrese descripcion del servicio"
        value={data.description}
        name="description"
        onChange={handleInputChange}
      />
      <input
        type="number"
        placeholder="Ingrese precio"
        value={data.price}
        name="price"
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Ingrese categoria de servicio"
        value={data.category}
        name="category"
        onChange={handleInputChange}
      />
      <button>Agregar servicio</button>
    </form>
  );
};

export default MyServiceForm;
