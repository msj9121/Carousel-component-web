import React from "react";
import "./Card.css";

const Card = ({ c, id, width, height }) => {
  return (
    <div
      id={`card-${c.id}`}
      className="card"
      style={{
        minWidth: width,
        minHeight: height,
        opacity: c.id === id ? 1 : 0.5,
        transform: c.id === id ? "scale(1)" : "scale(0.7)"
      }}
    >
      <img src={c.image} alt="" />
    </div>
  );
};

export default Card;
