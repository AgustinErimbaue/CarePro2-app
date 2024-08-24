import React, { useEffect } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth); 

  useEffect(() => {
    dispatch(getUser()); 
  }, [dispatch]);

  if (!user) {
    return <p>Loading...</p>; 
  }

  return (
    <>
      <div className="profile-container">
        <h1>Perfil</h1>
        <div className="info-container">
          <div className="img-profile">
            <img src="" alt="" />
          </div>
          <div className="info">
            <div className="name-user">
              <h3>Name</h3>
              <h3>Surname</h3>
            </div>
            <div className="rate-user">
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9734;</span>
            </div>
            <div className="extra-info"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
