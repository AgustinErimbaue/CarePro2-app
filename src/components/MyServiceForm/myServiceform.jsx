import React, { useState } from "react";

const myServiceform = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    price: "",
    provider: "",
    category: "",
  });
  return <div>myServiceform</div>;
};

export default myServiceform;
