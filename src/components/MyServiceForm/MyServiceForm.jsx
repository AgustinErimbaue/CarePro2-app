import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createService,
  getUserServices,
} from "../../features/provision/provisionSlice";
import "./MyServiceForm.css";
const MyServiceForm = () => {
  const dispatch = useDispatch();

  const initialState = { title: "", description: "", price: 0, category: "" };
  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const clearState = () => {
    setData(initialState);
    setErrors({});
  };

  const validate = () => {
    let tempErrors = {};
    if (!data.title) tempErrors.title = "El título es obligatorio";
    if (!data.description)
      tempErrors.description = "La descripción es obligatoria";
    if (data.price <= 0) tempErrors.price = "El precio debe ser mayor que 0";
    if (!data.category) tempErrors.category = "La categoría es obligatoria";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(`Se creó el servicio`);
      dispatch(createService(data))
        .then(() => {
          dispatch(getUserServices());
        })
        .finally(() => {
          clearState();
        });
    }
  };

  return (
    <>
      <div className="form-container-1">
        <form>
          <div>
            <input
              type="text"
              placeholder="Ingrese título del servicio"
              value={data.title}
              name="title"
              onChange={handleInputChange}
            />
            {errors.title && (
              <span style={{ color: "red" }}>{errors.title}</span>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Ingrese descripción del servicio"
              value={data.description}
              name="description"
              onChange={handleInputChange}
            />
            {errors.description && (
              <span style={{ color: "red" }}>{errors.description}</span>
            )}
          </div>
          <div>
            <input
              type="number"
              placeholder="Ingrese precio"
              value={data.price}
              name="price"
              onChange={handleInputChange}
            />
            {errors.price && (
              <span style={{ color: "red" }}>{errors.price}</span>
            )}
          </div>
          <div>
            <select
              name="category"
              value={data.category}
              onChange={handleInputChange}
            >
              <option value="">Seleccione una categoría</option>
              <option value="Cuidados de perros">Cuidados de perros</option>
              <option value="Paseo de perros">Paseo de perros</option>
              <option value="Limpieza de Casa">Limpieza de Casa</option>
            </select>
            {errors.category && (
              <span style={{ color: "red" }}>{errors.category}</span>
            )}
          </div>
          <button type="submit" onClick={handleSubmit}>
            Agregar servicio
          </button>
        </form>
      </div>
    </>
  );
};

export default MyServiceForm;
