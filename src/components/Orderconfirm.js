import React from "react";
import { useNavigate } from "react-router-dom";

const Orderconfirm = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>orderConfirmed!</div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default Orderconfirm;
