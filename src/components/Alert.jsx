import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

function Alert ({ color, icon, children }) {
  return (
    <div className={`alert-${color} flex item-center`}>
      {icon && (
        <span className="alert-icon mr-2 text-2xl"> 
          <FiAlertTriangle /> 
        </span>
      )}
      {children}
    </div>
  );
};

export default Alert;
