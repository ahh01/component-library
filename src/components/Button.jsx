import React from "react";

function Button({ size, color, disabled, onClick, children }) {
  return (
    <button
      className={`px-4 py-2 rounded-md shadow-sm
       hover:bg-indigo-400
       ${size === "small" ? "text-lg" : "text-base"} ${
        color === "blue" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

      