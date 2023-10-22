import React from "react";
import { useParams } from "react-router-dom";

const Userdetails = () => {
  const { userId } = useParams();
  return <div>Userdetails page {userId}</div>;
};

export default Userdetails;
