import "./style/App.scss";
import photoPerfil from "../src/assets/images/photo_perfil.jpeg";
import photoPort from "../src/assets/images/photo_port.jpeg";
import CardProject from "./components/CardProject";
import js from "../src/assets/images/js.png";
import html from "../src/assets/images/html.png";
import css from "../src/assets/images/css.png";
import react from "../src/assets/images/react.png";
import node from "../src/assets/images/node.png";

import pokemonLogo from "../src/assets/images/pokemon.png";
import notesLogo from "../src/assets/images/notesLogo.png";
import moviesLogo from "../src/assets/images/movies.png";

import screenPokedex from "../src/assets/images/screenPokedex.png";
import screenNotes from "../src/assets/images/screenNotes.png";
import screenMovies from "../src/assets/images/screenMovies.png";
import { useEffect, useRef, useState } from "react";

function App() {
  const [viewport, setViewport] = useState("vacio");

  const pokedexData = {
    title: "Pokedex",
    img: pokemonLogo,
    repo: "https://github.com/vickfaby/vick-pokedex",
    imgBackground: screenPokedex,
    text: "Es un proyecto desarrollado en React.js consumiendo los datos de una API REST llamada pokeApi, el fin de este proyecto es aplicar los conocimientos aprendidos en React.js.",
    link: "https://vickfaby.github.io/vick-pokedex/",
  };

  const notesData = {
    title: "Notes",
    img: notesLogo,
    repo: "https://github.com/vickfaby/todo-notes",
    imgBackground: screenNotes,
    text: "Esta webpage desarrollada con React.js, tiene como funcionalidad crear, leer y editar notas de manera intuitiva, aplicando técnicas de una UX intuitiva y responsive.",
    link: "https://vickfaby.github.io/todo-notes/",
  };

  const moviesData = {
    title: "Movies",
    img: moviesLogo,
    repo: "https://github.com/vickfaby/consumo-api-rest-movie-practico",
    imgBackground: screenMovies,
    text: "Una sencilla página web que se encarga de tenerte al tanto de las novedades en películas y que te permite alamcenar tus favoritas.",
    link: "https://vickfaby.github.io/consumo-api-rest-movie-practico/",
  };

  const setFixedBar = () => {
    // console.log(document.documentElement.scrollTop);
    const element = document.getElementById("titleDiv");
    const nameLogoH1 = document.getElementById("nameLogo");
    const descriptionLogoP = document.getElementById("descriptionLogo");
    const buttonLogo = document.getElementById("buttonLogo");

    element.style.height = "4rem";
    descriptionLogoP.style.display = "none";
    nameLogoH1.style.fontSize = "4rem";
    nameLogoH1.style.height = "4rem";
    buttonLogo.style.opacity = "1";
    buttonLogo.style.transform = "rotate(0deg)";

    if (element.clientHeight > 160) {
      // element.scrollIntoView();
      document.documentElement.scrollTo(0, 1);
    }
  };

  window.addEventListener("scroll", () => {
    requestAnimationFrame(() => {
      setFixedBar();
    });
  });

  const refLeft = useRef();
  const refRight = useRef();

  useEffect(() => {
    const moveToLeft = () => {
      const container = document.getElementById("projects-me-container");
      console.log(
        `El scrollWidth entra como ${container.scrollLeft} y el width del container es ${containerProjects.clientWidth}`
      );
      const newScroll =
        parseFloat(container.scrollLeft) +
        parseFloat(containerProjects.clientWidth);
      console.log(`El newScroll es: ${newScroll}`);
      container.scrollTo({
        top: 0,
        left: newScroll,
        behavior: "smooth",
      });

    }
    const moveToRight = () => {
      
      const container = document.getElementById("projects-me-container");
      console.log(container.scrollLeft); //  AQUI VBAMOS
      console.log(
        `El scrollProjects entra como ${container.scrollLeft} y el width del container es ${containerProjects.clientWidth}`
      );
      const newScroll =
        parseFloat(container.scrollLeft) -
        parseFloat(containerProjects.clientWidth);
      console.log(`El newScroll es: ${newScroll}`);
      container.scrollTo({
        top: 0,
        left: newScroll,
        behavior: "smooth",
      });

    }
    const containerProjects = document.getElementById("projects-me-container");
    const buttonLeftProjects = document.getElementById("goLeftProjects");
    const buttonRightProjects = document.getElementById("goRightProjects");

    if (!refLeft.current) {
      buttonRightProjects.addEventListener("click", moveToLeft);
      refLeft.current = true;
    }

    if (!refRight.current) {
      buttonLeftProjects.addEventListener("click", moveToRight);
      refRight.current = true;
    }
  }, []);

  useEffect(() => {
    const goUp = () => {
      console.log("Se activó GoUP()");
      const element = document.getElementById("titleDiv");
      const descriptionLogoP = document.getElementById("descriptionLogo");
      const nameLogoH1 = document.getElementById("nameLogo");
      const buttonLogo = document.getElementById("buttonLogo");

      console.log(`Entra a la funcion y va a poner ${viewport}`);
      element.style.height = viewport;
      descriptionLogoP.style.display = "block";
      nameLogoH1.style.fontSize = "10rem";
      nameLogoH1.style.height = "10rem";
      buttonLogo.style.opacity = "0";
      buttonLogo.style.transform = "rotate(180deg)";
    };

    const element = document.getElementById("titleDiv");
    const buttonLogo = document.getElementById("buttonLogo");
    const containerProjects = document.getElementById("projects-me-container");

    setViewport(`${element.clientHeight}px`);
    console.log(`setea al viewport en ${element.clientHeight}px`);
    buttonLogo.addEventListener("click", goUp);

    containerProjects.addEventListener("wheel", (Event) => {
      console.log("se ejecuta la funcion de containerProjects");
      Event.preventDefault();
      var delta = Event.deltaY;
      containerProjects.scrollLeft += delta / 10;
    });

    containerProjects.addEventListener("touchmove", (Event) => {
      console.log("se ejecuta la funcion de containerProjects");
      Event.preventDefault();
      var delta = Event.deltaY;
      containerProjects.scrollLeft += delta / 10;
    });

    document.documentElement.addEventListener("wheel", () => {
      console.log(
        `el height es ${document.documentElement.scrollTop}px y el viewport es ${viewport}`
      );

      if (`${document.documentElement.scrollTop}px` === `0px`) {
        console.log(`se llama goUp()`);
        goUp();
      }
    });
    document.documentElement.addEventListener("touchmove", () => {
      console.log(
        `el height es ${document.documentElement.scrollTop}px y el viewport es ${viewport}`
      );

      if (`${document.documentElement.scrollTop}px` === `0px`) {
        console.log(`se llama goUp()`);

        goUp();
      }
    });
  }, [viewport]);



  return (
    <div className="App">
      <section>
        <div className="title" id="titleDiv">
          <h1 id="nameLogo">Vick</h1>
          <p id="descriptionLogo">Frontend Developer</p>
          <span id="buttonLogo" className="fa-solid fa-arrow-up"></span>
        </div>
      </section>

      <main>
        <div className="info-profile">
          <div className="profile-img">
            <img src={photoPort} alt="" />
            <div className="profile-photo">
              <img src={photoPerfil} alt="" />
            </div>
          </div>

          <div className="profile-info">
            <div className="profile-data">
              <h2>Víctor Morales</h2>
              <h4>Frontend developer</h4>

              <div className="profile-imgTechnologies">
                <img src={html} alt="html logo" />
                <img src={css} alt="css logo" />
                <img src={js} alt="javascript logo" />
                <img src={react} alt="react logo" />
                <img src={node} alt="node logo" />
              </div>
              <p>
                Frontend developer with 1 year of experience developing software
                in kotlin and React.JS technologies. I have worked in a group to
                design an app from design to production.
                <br />
                <br />
                Knowledge of:
              </p>
              <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>REST API consumption</li>
                <li>Express</li>
                <li>Use of figma</li>
              </ul>
              <br />
              <p>Experience:</p>
              <ul>
                <li>Global Primex Tecnología - 1yr</li>
              </ul>
            </div>
            <div className="profile-contact">
              <ul>
                <li>
                  <span className="fa-brands fa-github"></span>
                  <a
                    href="https://github.com/vickfaby"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <span className="fa-brands fa-linkedin"></span>
                  <a
                    href="https://www.linkedin.com/in/vickfaby/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="profile-download">
              <a href="https://drive.google.com/u/0/uc?id=1XSNVVsLbcxAsn2VZ-4uUhuMblB6mSKcf&export=download">
                <span className="fa-solid fa-download"></span>
                Donwload cv
              </a>
            </div>
          </div>
        </div>

        <div className="info-projects">
          <div className="projects-me">
            <h2>Projects</h2>
            <p>
              Los proyectos a continuación han sido desarrollados personalmente
              para poner en práctica los conocimientos adquiridos, a su vez
              dandole lugar a la creatividad a la hora de diseñar sus
              correspondientes UX/UI.
            </p>

            <div className="slide-projects">
              <button id="goLeftProjects">
                <span className="fa-solid fa-arrow-left"></span>
              </button>
              <div className="projects-me-container" id="projects-me-container">
                <span
                  className="fa-regular fa-circle-dot "
                  id="touchHandTutorial"
                ></span>
                <span
                  className="fa-solid fa-hand-pointer "
                  id="handTutorial"
                ></span>
                <CardProject
                  img={pokedexData.img}
                  imgBackground={pokedexData.imgBackground}
                  repo={pokedexData.repo}
                  title={pokedexData.title}
                  text={pokedexData.text}
                  link={pokedexData.link}
                />
                <CardProject
                  img={notesData.img}
                  imgBackground={notesData.imgBackground}
                  repo={notesData.repo}
                  title={notesData.title}
                  text={notesData.text}
                  link={notesData.link}
                />
                <CardProject
                  img={moviesData.img}
                  imgBackground={moviesData.imgBackground}
                  repo={moviesData.repo}
                  title={moviesData.title}
                  text={moviesData.text}
                  link={moviesData.link}
                />
              </div>
              <button id="goRightProjects">
                <span className="fa-solid fa-arrow-right"></span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <h3>Created by</h3>
        <p>Vick</p>
      </footer>
    </div>
  );
}

export default App;
