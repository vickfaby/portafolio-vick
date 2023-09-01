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
            description:'Frontend developer with 1 year of experience developing software in kotlin and React.JS technologies. I have worked in a group to design an app from design to production.',
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
            description:'Desarrollador frontend con un año de experiencia desarrollando software en tecnologías como kotlin y React.JS. He trabajado en grupo desarrollando una app desde el diseño hasta producción',
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
            title:'Projectos',
            description:'Los siguientes son proyectos personales que he desarrollado para practicar mis conocimientos y creatividad en la experiencia de ususario y la interfaz de usuario.',
          },
          download:{
            button:'Descargar CV'
          },
          projectsData:{
            pokedex:{
              text:'Este es un proyecto desarrollado en ReactJS comsumiendo información desde una API REST llamada pokeAPI. El propósito des este proyecto es aplicar los conocimientos aprendidos sobre ReactJS'
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