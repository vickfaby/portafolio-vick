import React, { useEffect } from "react";
import "../style/CardProject.scss";

function CardProject( { img,imgBackground, title, text, link }) {

  useEffect(()=>{
    document.getElementById(`circle-${title}`).style.backgroundImage = `url(${imgBackground})`
  },[])

  return (
    <div className="cardProject" id={`cardProject-${title}`}>
      <img src={img} alt="logo de pokemon" />
      <h1>{title}</h1>
      <div className="circle" id={`circle-${title}`}  ></div>
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
