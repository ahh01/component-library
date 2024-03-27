import React from "react";

function Card({ href, imgAlt, imgSrc, children }) {
  return (
   
      <a href={href} className="max-w-xs">
        <img src={imgSrc} alt={imgAlt} />
        {
          <div className="px-4 py-6">
            <div className="text-gray-700 text-base">{children}</div>
          </div>
        }
      </a>
    
  );
}

export default Card;
