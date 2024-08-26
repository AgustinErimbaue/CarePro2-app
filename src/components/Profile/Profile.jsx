import React, { useEffect } from "react";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser } from "../../features/auth/authSlice";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoggedUser());
  }, [dispatch]);
  const { user } = useSelector((state) => state.auth);
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
