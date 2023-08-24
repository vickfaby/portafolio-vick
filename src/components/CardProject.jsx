import React, { useEffect } from "react";
import "../style/CardProject.scss";
import shotsPokemons from  '../assets/images/shotsPokemon.png'

function CardProject( { img,imgBackground,mock, title, text,repo, link }) {

  useEffect(()=>{
    document.getElementById(`circle-${title}`).style.backgroundImage = `url(${imgBackground})`
  },[])

  return (
    <div className="cardProject" id={`cardProject-${title}`} onClick={()=>{

      document.getElementById("touchHandTutorial").style.display = "none";
      document.getElementById("handTutorial").style.display = "none";
    }}>
      <img src={img} alt="logo de pokemon" />
      <h1>{title}</h1>
      <div className="circle" id={`circle-${title}`}  ></div>
      <div className="content">
        <h3>{title}</h3>
        <p>
          {text}
        </p>
        <a href={repo} rel="noreferrer" target="_blank">
          <span className="fa-brands fa-github"></span>
          Github
          </a>
        <img src={mock} alt="" />
        <a href={link} rel="noreferrer" target="_blank">Visit</a>
      </div>
    </div>
  );
}

export default CardProject;
