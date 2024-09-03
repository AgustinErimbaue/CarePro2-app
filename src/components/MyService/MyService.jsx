import React, { useEffect } from "react";
import MyServiceForm from "../MyServiceForm/myServiceform";
import { useDispatch, useSelector } from "react-redux";
import './MyService.css'
import { getUserServices } from "../../features/provision/provisionSlice";

const MyService = () => {
  const dispatch = useDispatch();

  const { services } = useSelector((state) => state.prov);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      dispatch(getUserServices());
    }
  }, [dispatch, user]);

  return (
    <>
      <div className="form-container">
        <MyServiceForm />
      </div>

      <div className="services-container">
        {services && services.length > 0 ? (
          services.map((service) => (
            <div key={service._id} className="service-item">
              <h3>{service.title}</h3>
              <h5>{service.description}</h5>
              <p>${service.price}</p>
              <button>Editar</button>
              <button>Eliminar</button>
            </div>
          ))
        ) : (
          <p>No services found.</p>
        )}
      </div>
    </>
  );
};

export default MyService;
