// Service.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllServices } from "../../features/provision/provisionSlice";
import "./Service.css";

const Service = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.prov.services);

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  return (
    <>
      <div>
        <h2>Estos servicios hay para ti!</h2>
      </div>
      <div>
        <ul>
          {services.map((service) => (
            <li key={service._id}>
              <h4>{service.title}</h4>
              <h6>{service.description}</h6>
              <p>${service.price}</p>
              <button>Contratar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Service;
