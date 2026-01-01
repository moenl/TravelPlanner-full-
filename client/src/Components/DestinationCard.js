import React from "react";
 import "../Styles/Destinations.css"
const DestinationCard = ({ destination }) => {
  return (
    <div className="card p-3 text-center">
      <img
        src={destination.image}
        alt={destination.name}
        className="img-fluid mb-3"
        width="80"
      />
      <h4>{destination.name}</h4>
      <p>{destination.country}</p>
    </div>
  );
};

export default DestinationCard;
