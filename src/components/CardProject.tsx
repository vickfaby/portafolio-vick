import React, { useEffect } from "react";
import "../style/CardProject.scss";

interface Props {
  img: string;
  imgBackground: string;
  mock: string;
  title: string;
  text: string;
  repo: string;
  link: string;
  button: string;
}

const CardProject: React.FC<Props> = ({
  img,
  imgBackground,
  mock,
  title,
  text,
  repo,
  link,
  button,
}) => {
  useEffect(() => {
    const circle: HTMLElement | null = document.getElementById(
      `circle-${title}`
    );
    circle!.style.backgroundImage = `url(${imgBackground})`;
  });

  return (
    <div
      className="cardProject"
      id={`cardProject-${title}`}
      onClick={() => {
        const handTutorialTouch: HTMLElement | null =
          document.getElementById("touchHandTutorial");
        const handTutorial: HTMLElement | null =
          document.getElementById("handTutorial");

        handTutorialTouch!.style.display = "none";
        handTutorial!.style.display = "none";
      }}
    >
      <img src={img} alt="logo de pokemon" />
      <h1>{title}</h1>
      <div className="circle" id={`circle-${title}`}></div>
      <div className="content">
        <h3>{title}</h3>
        <p>{text}</p>
        <a href={repo} rel="noreferrer" target="_blank">
          <span className="fa-brands fa-github"></span>
          Github
        </a>
        <img src={mock} alt="" />
        <a href={link} rel="noreferrer" target="_blank">
          {button}
        </a>
      </div>
    </div>
  );
}

export default CardProject;
