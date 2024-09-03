import React from "react";
import MyServiceForm from "../MyServiceForm/myServiceform";
import { useDispatch, useSelector } from "react-redux";


const MyService = () => {
  const { user } = useSelector((state) => state.auth);
  
  return (
    <>
      <div className="form-container">
        <MyServiceForm />
      </div>
    </>
  );
};

export default MyService;
