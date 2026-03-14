import React from "react";

const Usear = ({ Data }) => {
  const {
    username,
    company: { name },
    address: { city },
  } = Data;
  return (
    <div>
      <div className="border border-green-500 p-5 rounded-md text-sm font-bold">
        <h2>Usere Name: {username}</h2>
        <h2>Compnay Name: {name}</h2>
        <h2>Address and City: {city}</h2>
      </div>
    </div>
  );
};

export default Usear;
