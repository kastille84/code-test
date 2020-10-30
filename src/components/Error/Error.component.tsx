import React from "react";

import "./Error.style.css";
interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="error">
      <div className="error__header"></div>
      <div className="error__content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Error;
