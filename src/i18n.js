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
                "Desarrollador con una sólida base en la creación de experiencias digitales que agreguen valor a usuario.",

              part2:
                " Creo en el trabajo en equipo y apoyo el uso de IA para mejorar la eficiencia en la resolución de problemas.",
            },
            knowledge: "Knowledge of:",
            knowledge1: "JavaScript",
            knowledge2: "ReactJS",
            knowledge3: "API REST consumption",
            knowledge4: "Express",
            knowledge5: "Use of Figma",
            Exp: "Experience:",
            exp1: "Global Primex Tecnología - 1yr",
          },
          projects: {
            title: "Projectos",
            description:
              "The following projects are personal projects that I developed to practice my skills and creativity in UX/UI design.",
          },
          download: {
            button: "Download CV",
          },
          projectsData: {
            pokedex: {
              text: "This is a project developed in React.js consuming data from a REST API called pokeApi. The purpose of this project is to apply the knowledge learned in React.js",
            },
            notes: {
              text: "This webpage, developed with React.js, has the functionality to create, read, and edit notes in an intuitive way, applying techniques of an intuitive and responsive UX.",
            },
            movies: {
              text: "A simple website that keeps you up-to-date on the latest movies and allows you to store your favorites.",
            },
            button: "Visit",
          },
          footer: {
            section1: {
              description: "In this project you can find:",
              item1: "- Slider made with JS.",
              item2: "- CSS animation.",
              item3: "- Movil first",
            },
            section2: {
              description: "Services",
              item1: "WebPages",
              item2: "JS Vanilla",
              item3: "ReactJS",
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
