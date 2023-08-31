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

import mockPokedex from "../src/assets/images/shotsPokemon1.png";
import mockMovies from "../src/assets/images/shotsMovies.png";
import mockNotes from "../src/assets/images/shotsNotes.png";
import { useEffect, useRef, useState } from "react";

function App() {
  const [viewport, setViewport] = useState("vacio");

  const pokedexData = {
    title: "Pokedex",
    img: pokemonLogo,
    mock: mockPokedex,
    repo: "https://github.com/vickfaby/vick-pokedex",
    imgBackground: screenPokedex,
    text: "This is a project developed in React.js consuming data from a REST API called pokeApi. The purpose of this project is to apply the knowledge learned in React.js",
    link: "https://vickfaby.github.io/vick-pokedex/",
  };

  const notesData = {
    title: "Notes",
    img: notesLogo,
    mock: mockNotes,
    repo: "https://github.com/vickfaby/todo-notes",
    imgBackground: screenNotes,
    text: "This webpage, developed with React.js, has the functionality to create, read, and edit notes in an intuitive way, applying techniques of an intuitive and responsive UX.",
    link: "https://vickfaby.github.io/todo-notes/",
  };

  const moviesData = {
    title: "Movies",
    img: moviesLogo,
    mock: mockMovies,
    repo: "https://github.com/vickfaby/consumo-api-rest-movie-practico",
    imgBackground: screenMovies,
    text: "A simple website that keeps you up-to-date on the latest movies and allows you to store your favorites.",
    link: "https://vickfaby.github.io/consumo-api-rest-movie-practico/",
  };

  const setFixedBar = () => {
    // console.log(document.documentElement.scrollTop);
    const element = document.getElementById("titleDiv");
    const nameLogoH1 = document.getElementById("nameLogo");
    const descriptionLogoP = document.getElementById("descriptionLogo");
    const buttonLogo = document.getElementById("buttonLogo");
    const buttonSection = document.getElementById("buttonSection");

    element.style.height = "4rem";
    descriptionLogoP.style.display = "none";
    nameLogoH1.style.fontSize = "4rem";
    nameLogoH1.style.height = "4rem";
    buttonLogo.style.opacity = "1";
    buttonLogo.style.transform = "rotate(0deg)";
    buttonSection.style.animation = "none";
    buttonSection.style.opacity = "0";

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
      // console.log(
      //   `El scrollWidth entra como ${container.scrollLeft} y el width del container es ${containerProjects.clientWidth}`
      // );
      const newScroll =
        parseFloat(container.scrollLeft) +
        parseFloat(containerProjects.clientWidth);
      // console.log(`El newScroll es: ${newScroll}`);
      container.scrollTo({
        top: 0,
        left: newScroll,
        behavior: "smooth",
      });
    };
    const moveToRight = () => {
      const container = document.getElementById("projects-me-container");
      // console.log(container.scrollLeft);
      // console.log(
      //   `El scrollProjects entra como ${container.scrollLeft} y el width del container es ${containerProjects.clientWidth}`
      // );
      const newScroll =
        parseFloat(container.scrollLeft) -
        parseFloat(containerProjects.clientWidth);
      // console.log(`El newScroll es: ${newScroll}`);
      container.scrollTo({
        top: 0,
        left: newScroll,
        behavior: "smooth",
      });
    };

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
      const buttonSection = document.getElementById("buttonSection");

      console.log(`Entra a la funcion y va a poner ${viewport}`);
      element.style.height = viewport;
      descriptionLogoP.style.display = "block";
      nameLogoH1.style.fontSize = "10rem";
      nameLogoH1.style.height = "10rem";
      buttonLogo.style.opacity = "0";
      buttonLogo.style.transform = "rotate(180deg)";
      buttonSection.style.animation = "buttonSection 2s linear infinite";
      buttonSection.style.animationDelay = "2s";
    };

    const element = document.getElementById("titleDiv");
    const buttonLogo = document.getElementById("buttonLogo");
    const buttonSection = document.getElementById("buttonSection");
    const containerProjects = document.getElementById("projects-me-container");

    setViewport(`${element.clientHeight}px`);
    // console.log(`setea al viewport en ${element.clientHeight}px`);
    buttonLogo.addEventListener("click", goUp);
    buttonSection.addEventListener("click", setFixedBar);

    containerProjects.addEventListener("wheel", (Event) => {
      // console.log("se ejecuta la funcion de containerProjects");
      Event.preventDefault();
      var delta = Event.deltaY;
      containerProjects.scrollLeft += delta / 10;
      document.getElementById("touchHandTutorial").style.opacity = "0";
      document.getElementById("touchHandTutorial").style.animation = "none";
      document.getElementById("handTutorial").style.opacity = "0";

      if (
        containerProjects.scrollLeft > 10 &&
        containerProjects.scrollLeft < containerProjects.clientWidth - 80
      ) {
        containerProjects.scrollTo({
          top: 0,
          left: containerProjects.clientWidth,
          behavior: "smooth",
        });
      }

      if (
        containerProjects.scrollLeft > containerProjects.clientWidth - 80 &&
        containerProjects.scrollLeft < containerProjects.clientWidth
      ) {
        console.log("se quiere devolver");
        containerProjects.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }

      if (
        containerProjects.scrollLeft > containerProjects.clientWidth + 10 &&
        containerProjects.scrollLeft < containerProjects.clientWidth * 2 - 80
      ) {
        containerProjects.scrollTo({
          top: 0,
          left: containerProjects.clientWidth * 2,
          behavior: "smooth",
        });
      }
      if (
        containerProjects.scrollLeft > containerProjects.clientWidth * 2 - 80 &&
        containerProjects.scrollLeft < containerProjects.clientWidth * 2
      ) {
        console.log("se quiere devolver");
        containerProjects.scrollTo({
          top: 0,
          left: containerProjects.clientWidth,
          behavior: "smooth",
        });
      }
    });

    containerProjects.addEventListener("touchmove", () => {
      if (containerProjects.scrollLeft > 1) {
        document.getElementById("touchHandTutorial").style.opacity = "0";
        document.getElementById("touchHandTutorial").style.animation = "none";
        document.getElementById("handTutorial").style.opacity = "0";
        document.getElementById("handTutorial").style.animation = "none";
      } else {
        document.getElementById("touchHandTutorial").style.opacity = "0.5";
        document.getElementById("touchHandTutorial").style.animation =
          "touch-hand 2s infinite linear";
        document.getElementById("handTutorial").style.opacity = "1";

        document.getElementById("handTutorial").style.animation =
          "hand 2s infinite linear";
      }

      if (
        containerProjects.scrollLeft > 10 &&
        containerProjects.scrollLeft < containerProjects.clientWidth - 80
      ) {
        containerProjects.scrollTo({
          top: 0,
          left: containerProjects.clientWidth,
          behavior: "smooth",
        });
      }

      if (
        containerProjects.scrollLeft > containerProjects.clientWidth - 80 &&
        containerProjects.scrollLeft < containerProjects.clientWidth
      ) {
        console.log("se quiere devolver");
        containerProjects.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }

      if (
        containerProjects.scrollLeft > containerProjects.clientWidth + 10 &&
        containerProjects.scrollLeft < containerProjects.clientWidth * 2 - 80
      ) {
        containerProjects.scrollTo({
          top: 0,
          left: containerProjects.clientWidth * 2,
          behavior: "smooth",
        });
      }
      if (
        containerProjects.scrollLeft > containerProjects.clientWidth * 2 - 80 &&
        containerProjects.scrollLeft < containerProjects.clientWidth * 2
      ) {
        console.log("se quiere devolver");
        containerProjects.scrollTo({
          top: 0,
          left: containerProjects.clientWidth,
          behavior: "smooth",
        });
      }
    });

    document.documentElement.addEventListener("wheel", () => {
      // console.log(
      //   `el height es ${document.documentElement.scrollTop}px y el viewport es ${viewport}`
      // );

      if (`${document.documentElement.scrollTop}px` === `0px`) {
        console.log(`se llama goUp()`);
        goUp();
      }
    });

    document.documentElement.addEventListener("touchmove", () => {
      // console.log(
      //   `el height es ${document.documentElement.scrollTop}px y el viewport es ${viewport}`
      // );

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
          <span id="buttonSection" className="fa-solid fa-arrow-down"></span>
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
              The following projects are personal projects that I developed to
              practice my skills and creativity in UX/UI design.
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
                  className="fa-solid fa-hand-pointer"
                  id="handTutorial"
                ></span>
                <CardProject
                  img={pokedexData.img}
                  imgBackground={pokedexData.imgBackground}
                  mock={pokedexData.mock}
                  repo={pokedexData.repo}
                  title={pokedexData.title}
                  text={pokedexData.text}
                  link={pokedexData.link}
                />
                <CardProject
                  img={notesData.img}
                  imgBackground={notesData.imgBackground}
                  mock={notesData.mock}
                  repo={notesData.repo}
                  title={notesData.title}
                  text={notesData.text}
                  link={notesData.link}
                />
                <CardProject
                  img={moviesData.img}
                  imgBackground={moviesData.imgBackground}
                  mock={moviesData.mock}
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
        <div className="info">
          <h2>Vick</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            quaerat itaque quisquam nulla fugiat eaque vel ipsa dolorem aliquam
            id, placeat asperiores hic! Ipsum labore fugiat quo reiciendis sunt.
            Nihil.
          </p>
        </div>
        <div className="services">
          <h3>Servicios</h3>
          <ul>
            <li>Páginas Web</li>
            <li>JS Vanilla</li>
            <li>React</li>
          </ul>
        </div>
        <div className="contact">
          <div className="contact-social">
            <span className="fa-brands fa-facebook"></span>
            <span className="fa-brands fa-twitter"></span>
            <span className="fa-brands fa-whatsapp"></span>
            <span className="fa-brands fa-instagram"></span>
          </div>
          <div className="contact-cretedBy">
            <p>Creates By</p>
            <p>Vick</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
