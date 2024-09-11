import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MyService.css";
import {
  getUserServices,
  updateService,
  deleteService,
} from "../../features/provision/provisionSlice";
import editarArchivo from "../../assets/editar-archivo.png";
import MyServiceForm from "../MyServiceForm/MyServiceForm";

const MyService = () => {
  const dispatch = useDispatch();
  const { services } = useSelector((state) => state.prov);
  const { user } = useSelector((state) => state.auth);

  const [selectedService, setSelectedService] = useState(null);
  const [selectedServiceDelete, setSelectedServiceDelete] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    if (user) {
      dispatch(getUserServices());
    }
  }, [dispatch, user]);

  const editService = (service) => {
    setSelectedService(service);
    setFormData({
      title: service.title,
      description: service.description,
      price: service.price,
    });
  };

  const selectServiceToDelete = (serviceToDelete) => {
    setSelectedServiceDelete(serviceToDelete);
  };

  const handleDeleteService = () => {
    if (selectedServiceDelete) {
      dispatch(deleteService(selectedServiceDelete._id))
        .then(() => {
          dispatch(getUserServices());
        })
        .finally(() => {
          setSelectedServiceDelete(null); 
        });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(updateService({ _id: selectedService._id, formData }))
        .then(() => {
          dispatch(getUserServices());
        })
        .finally(() => {
          setSelectedService(null); 
          clearState(); 
        });
    }
  };

  return (
    <>
      <div>
        <MyServiceForm />
      </div>

      <div className="form-container">
        {selectedService && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Service Title"
            />
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Service Description"
            />
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Service Price"
            />
            <button type="submit">Save Changes</button>
            <button
              type="button"
              onClick={() => setSelectedService(null)}
            >
              Cancel
            </button>
          </form>
        )}
      </div>

      <div className="services-container">
        {services && services.length > 0 ? (
          services.map((service) => (
            <div key={service._id} className="service-item">
              <h3>{service.title}</h3>
              <h5>{service.description}</h5>
              <p>${service.price}</p>
              <button onClick={() => editService(service)}>
                <img src={editarArchivo} alt="Editar" />
              </button>
              <button
                onClick={() => selectServiceToDelete(service)} 
              >
                Eliminar
              </button>
            </div>
          ))
        ) : (
          <p>No services found.</p>
        )}
      </div>

      {selectedServiceDelete && (
        <div>
          <button onClick={handleDeleteService}>
            Confirmar eliminación
          </button>
          <button onClick={() => setSelectedServiceDelete(null)}>
            Cancelar eliminación
          </button>
        </div>
      )}
    </>
  );
};

export default MyService;
