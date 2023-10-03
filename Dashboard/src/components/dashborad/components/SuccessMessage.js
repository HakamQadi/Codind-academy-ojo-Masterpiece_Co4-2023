import React, { useEffect } from "react";
import "./SuccessStyle.css";

const SuccessMessage = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); 

    return () => {
      clearTimeout(timer); 
    };
  }, [onClose]);

  return (
    <div className={`success-message show`}>
      <p>{message}</p>
    </div>
  );
};

export default SuccessMessage;
