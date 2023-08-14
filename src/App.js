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

function App() {
  const pokedexData = {
    title: 'Pokedex',
    img: pokemonLogo,
    text:'Es un proyecto desarrollado en React.js consumiendo los datos de una API REST llamada pokeApi, el fin de este proyecto es aplicar los conocimientos aprendidos en React.js.',
    link: 'https://vickfaby.github.io/vick-pokedex/'
  }

  const notesData = {
    title: 'Todo-notes',
    img: notesLogo,
    text:'Esta webpage desarrollada con React.js, tiene como funcionalidad crear, leer y editar notas de manera intuitiva, aplicando técnicas de una UX intuitiva y responsive.',
    link: 'https://vickfaby.github.io/todo-notes/'
  }

  const moviesData = {
    title: 'movies',
    img: moviesLogo,
    text:'Una sencilla página web que se encarga de tenerte al tanto de las novedades en películas y que te permite alamcenar tus favoritas.',
    link: 'https://vickfaby.github.io/consumo-api-rest-movie-practico/'
  }


  return (
    <div className="App">
      <section>
        <div className="title">
          <h1>Vick</h1>
          <p>Frontend Developer</p>
        </div>
      </section>

      <main>
        <div className="info-profile">
          <div className="profile-img">
            <img src={photoPort} alt="" />
          </div>
          <div className="profile-info">
            <div className="profile-data">
            <h2>Víctor Morales</h2>
            <h4>Frontend developer</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias amet totam iure qui aut et blanditiis corporis dolores
              quae, eligendi quam illum delectus quos id, quisquam omnis tempore
              necessitatibus nihil!
            </p>
            </div>

            <div className="profile-imgTechnologies">
              <img src={html} alt="html logo" />
              <img src={css} alt="css logo" />
              <img src={js} alt="javascript logo" />
              <img src={react} alt="react logo" />
              <img src={node} alt="node logo" />
            </div>
            <div className="profile-contact">
              <ul>
                <li>
                  <span className="fa-brands fa-linkedin"></span>
                  <a href="https://github.com/vickfaby">Github</a>
                </li>
                <li>
                  <span className="fa-brands fa-github"></span>
                  <a href="https://www.linkedin.com/in/vickfaby/">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-photo">
            <img src={photoPerfil} alt="" />
          </div>
        </div>

        <div className="info-projects">
          <div className="about-me">
            <h2>About me</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis nemo unde aspernatur sed consequuntur quasi? Facilis,
              dolorum adipisci? Vero, reiciendis nam. Cumque vel minus ex rerum
              officiis, fugiat ullam deserunt.
            </p>
          </div>
          <div className="projects-me">
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem unde
              cupiditate iusto, sit facilis est cumque ex aperiam dolor
              consequatur laboriosam eum dolore accusamus quasi soluta.
              Molestiae maxime eveniet magnam?
            </p>
            <div className="projects-me-container">
              <CardProject img={pokedexData.img} title={pokedexData.title} text={pokedexData.text} link={pokedexData.link} />
              <CardProject img={notesData.img} title={notesData.title}  text={notesData.text} link={notesData.link}/>
              <CardProject img={moviesData.img} title={moviesData.title}  text={moviesData.text} link={moviesData.link} />
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p>Vickfaby</p>
      </footer>
    </div>
  );
}

export default App;
