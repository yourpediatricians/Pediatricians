import React from 'react';
import "./Slideshow.css"; // Import your CSS file
import Rashes from "../assets/Rashes.png"; // Import your images

function PropertyCard({ imageSrc, altText }) {
  return (
    <div className="h-70 w-45 bg-opacity-50 bg-blue-600 m-2 flex flex-col items-center rounded-lg">
      <div className="h-50 w-auto bg-opacity-50 bg-orange-200 rounded-full overflow-hidden m-5">
        <img className="w-40 h-40" src={imageSrc} alt={altText} />
      </div>
      <p className="text-black text-2xl font-bold">{altText}</p>
    </div>
  );
}

export default PropertyCard;
