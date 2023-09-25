import React, { useEffect } from "react";
import "./SuccessStyle.css";

const SuccessMessage = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Close the success message after 3 seconds

    return () => {
      clearTimeout(timer); // Clear the timer if the component unmounts
    };
  }, [onClose]);

  return (
    <div className={`success-message show`}>
      <p>{message}</p>
    </div>
  );
};

export default SuccessMessage;
