import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllServices } from "../../features/provision/provisionSlice";
import { hireService } from "../../features/contract/contractSlice";
import "./Service.css";

const Service = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.prov.services);
  const [serviceSelected, setServiceSelected] = useState(null);

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  const selectedService = (serviceToHire) => {
    setServiceSelected(serviceToHire);
  };

  const handleHireService = (e) => {
    e.preventDefault();
    if (serviceSelected) {
      dispatch(hireService({ serviceId: serviceSelected._id }));
    }
  };

  return (
    <>
      <div>
        <h2>¡Estos servicios hay para ti!</h2>
      </div>
      <div>
        <ul>
          {services.map((service) => (
            <li key={service._id}>
              <h4>{service.title}</h4>
              <h6>{service.description}</h6>
              <p>${service.price}</p>
              {serviceSelected && serviceSelected._id === service._id ? (
                <button onClick={handleHireService}>Confirmar</button>
              ) : (
                <button onClick={() => selectedService(service)}>Contratar</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Service;
