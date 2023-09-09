import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          subtitle: {
            part1: "Frontend developer",
          },
          personalData: {
            subtitle: "Frontend developer",
            description: {
              part1:
                "Developer focused on creating intuitive digital experiences centered around the user.",

              part2:
                "I perform efficiently both in individual work and as part of a team, and I incorporate the use of AI to reduce development times.",
            },
            knowledge: "Knowledge of:",
            knowledge1: "JavaScript",
            knowledge2: "ReactJS",
            knowledge3: "API REST consumption",
            knowledge4: "Express",
            knowledge5: "Use of Figma",
            knowledge6: "B2 English level",
            exp: "Experience:",
            exp1: "Global Primex Tecnología - 1year",
            achievements:{
              title:'¿What did I develop?',
              description:'The interface of “Task Feeder”!, an app that allows the feeding of processes of any company, programmed in Kotlin for Global Primex Tecnología.',
              link:'Visit in Google Play'
            }
          },
          projects: {
            title1: "What can I contribute to your company?",
            description1: {
              part1:
                " Improvement ideas for projects based on the needs of your company.",
              part2:
                " Willingness to learn other development technologies in order to increase the quality of your App or website.",
              part3:
                " Design of functionalities focused on obtaining the best digital experience for the user.",
            },
            title2: "Check out!",
            description2: {
              part1:
                "Both this web portfolio and the following projects are created with the intention of showing my capabilities as a Web developer. These include the use of technologies such as ReactJS and Vanilla JavaScript combined with design techniques that aim to develop an outstanding user interface due to its intuitive handling and functionalities suited to each case.",
            },
          },
          download: {
            button: "Download CV",
          },
          projectsData: {
            pokedex: {
              text: "It consumes information from a REST API which provides data on Pokémon and their evolutions. The view flow was made with React router and the loading animations with CSS3.",
            },
            notes: {
              text: "Developed with ReactJS, this website allows you to create, read, edit and delete notes through an easy-to-use user interface. Includes icons imported from the Font Awesome library.",
            },
            movies: {
              text: "Vanilla JavaScript was used to create this website that keeps you up to date with the latest movies and provides a useful favorites list to store the titles selected by the user.",
            },
            button: "Visit",
          },
          footer: {
            section1: {
              description: "This web portfolio includes development features and techniques such as:",
              item1: " 'Mobile first' Design.",
              item3: " Dark and light mode.",
              item2: " Internationalization.",
              item4: " Tutorial animation.",
              item5: " Slider made with JS.",
              item6: " UI focused on UX.",

            },
            section2: {
              description: "Services",
              item1: " Creation of webpages.",
              item2: " UI Design.",
              item3: " Migration from JS to ReactJS.",
              item4: " Responsive design.",
            },
            section3: {
              item1: "Created by",
            },
          },
        },
      },
      es: {
        translation: {
          // here we will place our translations...
          subtitle: {
            part1: "Desarrollador frontend",
          },
          personalData: {
            subtitle: "Desarrollador frontend",
            description: {
              part1:
                "Soy un desarrollador enfocado en la creación de experiencias digitales intuitivas centradas en el usuario.",

              part2:
                "Me desempeño eficientemente tanto en el  trabajo individual como en equipo e incluyo el uso de las IA para reducir los tiempos de desarrollo.",
            },
            knowledge: "Conocimiento en:",
            knowledge1: "JavaScript",
            knowledge2: "ReactJS",
            knowledge3: "Consumo de API REST",
            knowledge4: "Express",
            knowledge5: "Uso de Figma",
            knowledge6: "Nivel de inglés B2",
            exp: "Experiencia:",
            exp1: "Global Primex Tecnología - 1año",
            achievements:{
              title:'¿Que desarrollé?',
              description:'¡La interfaz de "Task Feeder"!, una App que permite la alimentación de procesos de cualquier empresa, programada en Kotlin para Global Primex Tecnología.',
              link:'Ver en Google Play'
            }
          },
          projects: {
            title1: "¿Que puedo aportar a tu empresa?",
            description1: {
              part1:
                " Ideas de mejoramiento para los proyectos en función de las necesidades de tu empresa.",
              part2:
                " Disposición a aprender otras tecnologías de desarrollo con el fin de incrementar la calidad de tu App o página web.",
              part3:
                " Diseño de funcionalidades centradas en obtener la mejor experiencia digital para el usuario.",
            },
            title2: "Echa un vistazo!",
            description2: {
              part1:
                "Tanto este portafolio web como los siguientes proyectos están creados con la intención de mostrar mis capacidades como desarrollador Web. Se destacan en estos, el  uso de tecnologías como ReactJS y JavaScript Vanilla combinadas con técnicas de diseño que apuntan al desarrollo de una interfaz de usuario sobresaliente por su  manejo intuitivo y sus funcionalidades acertadas a cada caso.",
            },
          },
          download: {
            button: "Descargar CV",
          },
          projectsData: {
            pokedex: {
              text: "Consume información desde una API REST la cual proporciona datos de los pokemones y sus evoluciones. El flujo de vistas se realizó con React router y las animaciones de carga con CSS3.",
            },
            notes: {
              text: "Desarrollada con ReactJS, esta web permite crear, leer, editar y eliminar notas mediante una interfaz de usuario de fácil manejo. Incluye iconos importados desde la librería de Font Awesome.",
            },
            movies: {
              text: "JavaScript Vanilla fue empleado para crear esta web que te mantiene al tanto de las últimas películas y proporciona una lista de favoritos útil para almacenar los títulos seleccionados por el usuario.",
            },
            button: "Visitar",
          },
          footer: {
            section1: {
              description: "Este portafolio web incluye funciones y técnicas de desarrollo como:",
              item1: " Diseño Mobile first.",
              item3: " Tema claro y oscuro.",
              item2: " Internacionalización.",
              item4: " Animación tutorial.",
              item5: " Slider hecho con JS.",
              item6: " UI enfocada en UX.",

            },
            section2: {
              description: "Servicios",
              item1: " Creación de páginas web.",
              item2: " Diseño de UI.",
              item3: " Migración de JS a ReactJS.",
              item4: " Diseño responsive.",
            },
            section3: {
              item1: "Creado por",
            },
          },
        },
      },
    },
  });

export default i18n;
