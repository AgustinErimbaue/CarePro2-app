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
    <div className="profile-container">
      <h1>Perfil</h1>
      <div className="info-container">
        <div className="img-profile">
          <img src={user?.profilePicture || "default-profile.png"} alt="Profile" />
        </div>
        <div className="info">
          <div className="name-user">
            <h3>{user?.name || "Name"}</h3>
            <h3>{user?.surname || "Surname"}</h3>
          </div>
          <div className="rate-user">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className={index < (user?.rating || 0) ? 'filled-star' : 'empty-star'}>&#9733;</span>
            ))}
          </div>
          <div className="extra-info">
            <p><strong>Email:</strong> {user?.email || "Not provided"}</p>
            <p><strong>Phone Number:</strong> {user?.phoneNumber || "Not provided"}</p>
            <p><strong>Address:</strong> {user?.address || "Not provided"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
