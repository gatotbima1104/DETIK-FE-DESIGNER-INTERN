import React from "react";

const Button = (props) => {
    const {children} = props;
  return (
    <button className="p-5 bg-blue-400 text-white font-bold rounded">
      {children}
    </button>
  );
};

export default Button;
