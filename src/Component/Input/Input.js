import React from "react";

const Input = ({ children, onChange, value, label, placeholder }) => {
  return (
    <input
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    >
      {children}
    </input>
  );
};

export default Input;
