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
        <h2 className="services-heading">¡Estos servicios hay para ti!</h2>
      </div>
      <div className="services-list-container">
        <ul className="services-list">
          {services.map((service) => (
            <li key={service._id} className="service-item">
              <h4 className="service-title">{service.title}</h4>
              <h6 className="service-description">{service.description}</h6>
              <p className="service-price">${service.price}</p>
              {serviceSelected && serviceSelected._id === service._id ? (
                <button className="confirm-button" onClick={handleHireService}>
                  Confirmar
                </button>
              ) : (
                <button className="hire-button" onClick={() => selectedService(service)}>
                  Contratar
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Service;
