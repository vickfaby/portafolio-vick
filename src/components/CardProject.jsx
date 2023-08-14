import React from "react";
import "../style/CardProject.scss";


function CardProject( { img, title, text, link }) {
  return (
    <div className="cardProject">
      <img src={img} alt="logo de pokemon" />

      <div className="circle"></div>
      <div className="content">
        <h3>{title}</h3>
        <p>
          {text}
        </p>
        <a href={link}>Visit</a>
      </div>
    </div>
  );
}

export default CardProject;
