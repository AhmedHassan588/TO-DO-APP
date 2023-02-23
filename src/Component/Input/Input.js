import React from "react";

const Input = ({ children, onChange, value }) => {
  return (
    <input value={value} onChange={onChange}>
      {children}
    </input>
  );
};

export default Input;
