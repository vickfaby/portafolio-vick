import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'

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
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          subtitle:{
            part1:'Frontend developer'
          },
          personalData:{
            subtitle:'Frontend developer',
            description:{
              part1:'Desarrollador con una sólida base en la creación de experiencias digitales que agreguen valor a usuario.',
              
              part2:' Creo en el trabajo en equipo y apoyo el uso de IA para mejorar la eficiencia en la resolución de problemas.',
            },
            knowledge:'Knowledge of:',
            knowledge1:'JavaScript',
            knowledge2:'ReactJS',
            knowledge3:'API REST consumption',
            knowledge4:'Express',
            knowledge5:'Use of Figma',
            Exp:'Experience:',
            exp1:'Global Primex Tecnología - 1yr',
          },
          projects:{
            title:'Projectos',
            description:'The following projects are personal projects that I developed to practice my skills and creativity in UX/UI design.',
          },
          download:{
            button:'Download CV'
          },
          projectsData:{
            pokedex:{
              text:'This is a project developed in React.js consuming data from a REST API called pokeApi. The purpose of this project is to apply the knowledge learned in React.js'
            },
            notes:{
              text:'This webpage, developed with React.js, has the functionality to create, read, and edit notes in an intuitive way, applying techniques of an intuitive and responsive UX.'
            },
            movies:{
              text:'A simple website that keeps you up-to-date on the latest movies and allows you to store your favorites.'
            },
            button:'Visit',
          },
          footer:{
            section1:{
              description:'In this project you can find:',
              item1:'- Slider made with JS.',
              item2:'- CSS animation.',
              item3:'- Movil first',
            },
            section2:{
              description:'Services',
              item1:'WebPages',
              item2:'JS Vanilla',
              item3:'ReactJS',
            },
            section3:{
              item1:'Created by'
            }
          }
        }
      },
      es: {
        translation: {
          // here we will place our translations...
          subtitle:{
            part1:'Desarrollador frontend'
          },
          personalData:{
            subtitle:'Desarrollador frontend',
            description:{
              part1:'Enfocado en el desarrollo de experiencias digitales intuitivas centradas en el usuario para agregar valor a tu app ó tu página web.',

              part2:' Creo en el trabajo en equipo y apoyo el uso de IA para mejorar la eficiencia en la resolución de problemas.',
            },
            knowledge:'Conocimiento en:',
            knowledge1:'JavaScript',
            knowledge2:'ReactJS',
            knowledge3:'Consumo de API REST',
            knowledge4:'Express',
            knowledge5:'Uso de Figma',
            exp:'Experiencia:',
            exp1:'Global Primex Tecnología - 1año',
          },
          projects:{
            title:'Que puedo aportar a tu empresa?',
            description:{
              part1:'-Aporte de ideas de mejoramiento para tu app o página web en función de las necesidades de tu empresa.',
              part2:'-Desarrollo de interfaces de usuario intuitivas basadas en trabajo en equipo o individual.',
              part3:'Por otra parte, en los siguientes proyectos e incluso en esta misma página web, puedes notar los conocimientos aplicados en el desarrollo de las interfaces de usuario, las cuales se destacan por su  manejo intuitivo y su funcionalidad con un diseño aplicado muy acertado a cada situación.'
            },
          },
          download:{
            button:'Descargar CV'
          },
          projectsData:{
            pokedex:{
              text:'Este es un proyecto desarrollado en ReactJS consumiendo información desde una API REST llamada pokeAPI. El propósito des este proyecto es aplicar los conocimientos aprendidos sobre ReactJS'
            },
            notes:{
              text:'Esta página web, desarrollada con ReactJS, tiene la funcionalidad de crear, leer y editar notas de manera intuitiva, aplicandolas técnicas de una intuitiva y responsiva experiencia de usuario.'
            },
            movies:{
              text:'Un sencillo sitio web que te mantiene al tanto de las últimas películas y te permite guardar tus titúlos favoritos.'
            },
            button:'Visitar'
          },
          footer:{
            section1:{
              description:'En este proyecto puedes encontrar:',
              item1:'- Slider hecho con JS',
              item2:'- Animación con CSS ',
              item3:'- Desarrollo Movil first',
            },
            section2:{
              description:'Servicios',
              item1:'Páginas web',
              item2:'JS Vanilla',
              item3:'ReactJS',
            },
            section3:{
              item1:'Creado por'
            }
          }
        }
      },
    }
  });

  export default i18n;