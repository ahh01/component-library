import React from "react";
import { IconContext } from "react-icons";
import { AiFillGolden } from "react-icons/ai";

function Badge({ color, size, icon, children }) {
  return (
    <div className="flex items-center">
    <div
      className={`px-1 ${size === "md" ? "text-4xl" : ""} ${
        color === "blue" ? "bg-blue-200" : "bg-green-200"}`}
    >
      {icon && (
        <IconContext.Provider value={{ className: "badge-icon" }}>
          <AiFillGolden />
        </IconContext.Provider>
      )} 
      
      </div>
      <span className={"ml-2 text-lg"}>{children}</span>
  </div>
  );
}


export default Badge;
