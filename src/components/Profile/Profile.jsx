import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoggedUser,
  uploadProfileImage,
} from "../../features/auth/authSlice";
import { getUserProfile } from "../../features/contract/contractSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const { contract } = useSelector((state) => state.contract);
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    dispatch(getLoggedUser());
    if (user.isServiceProvider === false) {
      dispatch(getUserProfile());
    }
  }, [dispatch]);

  // Maneja la selección de archivo
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Maneja la subida de la imagen
  const handleUpload = () => {
    if (selectedFile) {
      dispatch(uploadProfileImage(selectedFile)); 
    }
  };

  return (
    <div className="profile-container">
      <h1>Perfil</h1>
      <div className="info-container">
        <div className="img-profile">
          <img
            src={`http://localhost:8080/${user.profileImage}`}
            alt="Profile"
          />

         
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Subir nueva imagen</button>
        </div>
        <div className="info">
          <div className="name-user">
            <h3>{user?.name || "Name"}</h3>
          </div>
          <div className="rate-user">
            {Array.from({ length: 5 }, (_, index) => (
              <span
                key={index}
                className={
                  index < (user?.rating || 0) ? "filled-star" : "empty-star"
                }
              >
                &#9733;
              </span>
            ))}
          </div>
          <div className="extra-info">
            <p>
              <strong>Email:</strong> {user?.email || "Not provided"}
            </p>
            <p>
              <strong>Phone Number:</strong>{" "}
              {user?.phoneNumber || "Not provided"}
            </p>
            <p>
              <strong>Address:</strong> {user?.address || "Not provided"}
            </p>
          </div>
        </div>
        {user.isServiceProvider === false ? (
          <>
            <div className="my-service">
              <h2 className="service-title">Servicios Contratados</h2>
              {contract && contract.length > 0 ? (
                <ul className="service-list">
                  {contract.map((c) => (
                    <li key={c._id} className="service-item">
                      <h3 className="service-name">{c.service.title}</h3>
                      <p className="service-description">
                        {c.service.description}
                      </p>
                      <p className="service-price">
                        Precio: ${c.service.price}
                      </p>
                      <p className="service-date">
                        Fecha de Inicio:{" "}
                        {new Date(c.startDate).toLocaleDateString()}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No tienes servicios contratados.</p>
              )}
            </div>
          </>
        ) : null}{" "}
      </div>
    </div>
  );
};

export default Profile;
