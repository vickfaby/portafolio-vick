import "./style/App.scss";

import photo_port from '../src/assets/images/photo_port.jpg'
import photo_profile from '../src/assets/images/photo_perfil.jpeg'

import html from '../src/assets/images/html.png'
import css from '../src/assets/images/css.png'
import js from '../src/assets/images/js.png'
import react from '../src/assets/images/react.png'
import node from '../src/assets/images/node.png'

import taskshot1 from '../src/assets/images/taskfeeder1.jpg'
import taskshot2 from '../src/assets/images/taskfeeder2.jpg'

import pokemonLogo from '../src/assets/images/pokemon.png'
import pokedexScreen from '../src/assets/images/screenPokedex.png'
import pokedexMock from '../src/assets/images/shotsPokemon1.png'

import notesLogo from '../src/assets/images/notesLogo.png'
import notesScreen from '../src/assets/images/screenNotes.png'
import notesMock from '../src/assets/images/shotsNotes.png'

import moviesLogo from '../src/assets/images/movies.png'
import moviesScreen from '../src/assets/images/screenMovies.png'
import moviesMock from '../src/assets/images/shotsMovies.png'

import React from 'react';

import CardProject from "./components/CardProject";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

type Language = {
  nativeName: string
}

type Languages = {
  [key: string]: Language;
}

const languages: Languages = {
  en: { nativeName: "English" },
  es: { nativeName: "Español" },
};

// const images = {
//   photoPort:'https://previews.dropbox.com/p/thumb/ACAxHPH0k-WI5ehXuvuZdQH5Tc1p-bfCCtrFLXyyP_S8Tko2MfD9e8AxOLxzza5l3TbPfc-ieIdhwpP2gRUgALylU3CFFDjzDKih3Z216-V0YgLvaoi46FDXDOsSZlFfTbaYZyLaDESgzZrziY_6yVs3qGUZDQLOXUnuTtX0lbBVdvvck2xZRZu8_k2UTbC2udHR7EUrRrmXRpoXYhaEWHpidFctR_fHd8qU9763V9mJvQzlgbue-3fWI9RqcRvarUrl1RFcGAzosqLqQtze14EYX0AET9sR1-NtNvoAesCUon2qzA82hSsfqo6rQkBrf4Ala-GzTyqJSL_TTtMWv4QE/p.jpeg',

//   photoProfile:'https://previews.dropbox.com/p/thumb/ACC8doofZr6fM521xTTW0D66YMXuArsbPnMJ1LErQxDRIo7xajBkwVAehUf2DwyDpkT_Uu9VfcQRgJeRxh7RMIW2tFWR8rto5UN_phXpxR2mQB5wC4CbvOmkWCy4bGErIe_D1AUf40YBQwTfHS8PRI26ReEueMpY6NuPG9vMlGQNHEjd1zMJB3adJJdxnHbc68IkdT1UGWiB1rO8ISUMse_FzD0rvSLZGHYcROBfyTynfLuSIFqqcIazCT3OKJmU8WFuSmyhF7nzgNJ4LSMvcbeXMXo4prkbVMo9j3SvlsITDqtExjXR_gOnbDBS9DDYwLiUPoMx3Gk6H8iBG4CPdVVl/p.jpeg',
//   html:'https://previews.dropbox.com/p/thumb/ACDdK7rJCmDtaQgbRRe3VGElR0W-QUufEFbraE1DDJ9WmthGhI73siqeWgDhv-I58P13MEdBsi2RYUB-MkmO3BL2kbtkZV7ne84swp3tRY3PN5YWtPvw3emzWIiLKUuPwqwYbiKvv4lDWOyfOTNYx4pCVgf1UpGF5Ogy8VLKuRNUjQjYwigsv_0XWrHIuwakioW0uzlZVLi4IjqHDvH8wIyChj6yRZBH0Cy0EL4xZnZib0SMXgLkpn2QTw0uWYRHepD9_Hp2Hm0BAK72qNKYRKhQkkly5za4Q-8txsR4VxyFisa3I2RAEwEjfPKy2nPywIlOx495aZn-2eJg41pQ7yUM/p.png',
//   css:'https://previews.dropbox.com/p/thumb/ACCgVAr_QZmY5uM_tBg51I22pgnIav2wQe8DJGLHTXj_eoGzvaplGOuAQcAuPvunrzB1WUoG-Bqm7eg0JKGKIfhAPMdhBRyNbkxI-Q_4p9DqLE-zAZMmaqK9_zqLjM99-ek6ebUVAM8KaF5RM8nqJUGZOKszcxoRUXRZg7ghFkgrobDBjtnCbWCzLYBwa4DHi2EDYZuMuIJEJptQAy7SiVSvPtMrQf8WNxzwbILloM4Y1Jyk5FoK3uUN4ES_2mJbRY9Wj_DCDtT2TRv4GGRAiDmo-xomSc26LZmS39VzgEiODPCocEquKC8X3jAUSXjgaofl7YFVvBIg8BT-mm6kxA3u/p.png',
//   js:'https://previews.dropbox.com/p/thumb/ACAO_y81zm8sikFeENfR-6UQa1sG6xlkM0DBc-m4GlApvrY-I7LNfXQnhasDpEbTOdvhWvRu6ST67klt0LFCQIVKpYIN7I9FMnRkCQ4gFqIuFG8Sdym-wikktOkhl2m7s6YCcPXL4uAV0jSlHGnlPVLpHyE0relTByp3ko6szkxnr-WpNo9pNDAdaF0OlP80Qb-JLyyKwN6pBr8tDpXElLmAl2XfEVHj0fkZyUipftGrO3N0803RlJKL1rXRxnWwRiQGJbhhc8EwUVUhwukyokiSxkVDULNuaH0rcIOipUcYoExDZ5PROU9KcKoCu8qPs8HEmBgMwgoMwZAMtuqzcgjk/p.png',
//   react:'https://previews.dropbox.com/p/thumb/ACBqgJoC7nnvVTBidVDwD8Wrmz6JUCgdIjgqTMZfdyARw_yarJBAPTeofwi8-7Qv1XsSlIQFffaJ0iU0pvHxEmXkMGrx-gahXnoiU3_EqIzg1WaJ8OJTwk1I-Qy-D7A0MYftMv9vCqJ0TCD-JMh4gEgu7c4MAnePYbmxZmqX7h1vo54_kCEoil2ElUJWE994KlZdQJ-MWJwQjNCIcaeKmJir2YDOIIyucYWbVQbNyG8ZADK3eHwIPR3YOcaqRM0kPqXgZYvIEDkvQ1VWgFvn1au5ewqV2oRkqpiNtT97Uw0NSrNPBAxElnfZSLH0RHVpNHO5r5W7B79H3kZVaWWyMRnC/p.png',
//   node:'https://previews.dropbox.com/p/thumb/ACCE95aEm5GKxadHolyhE5nXvlmFFQO_99E5voJXi-U1_j_2YgPawdZkpGiyTsE5c1VQj5NptjRDhPdRg9nkEEkVq63vYgFX1_hcVPnSlssHidQtD8jETfEGiofuWgq2ZcG4mbF0is_8QWC-3IbY6pRNLpFIk1-xmqbYw4rbihOov6m-6MV4pjb_gQi8hyYGN2UeMy2gHE2QtharzeuTbvFpiT2EhqEkwSlxlUhP5pFtBUCzsR2AtEzT8VfkkeGrA55Z5tJ8suMM0vO7jjzbLEJAFjYBRXOSQq5ZKHrxFoFFhkoxVZ3Vz0zh7TX9nvpmSmyq8eIYzshgvuo96h0hPHYQ/p.png',
//   screenshotAchievement1:'https://previews.dropbox.com/p/thumb/ACCjyF3mIRn_cZaCgb1wytR26BlIdJYqxCsUbjruFSsBsBDuTjeacp3Iyh3WOEhWVjl2E3PHor3w8yLQqdIaX5itupKObus0n7XtFHpGd7Xtlbu-g4QkEddPOTko0V93x1eZy_BJJhcU_-vMGJu6fS-Vd-Zb_ArGSPGtoLhQBL-glCR2Wqb0pRJMT5ICxwJAn61vFm-Hs2Ghypmz0xdIufJkKuxmsN5zurTlgGVPBlaee7oRL6DNMYafbZNuFKC7qFcUlLm2D56yjr8qu8Y_d8tR-U8qrlc1i_DNEezcOjo_avV4AgpBjssJejyH3b-OsajilvdwS5DmrrDW2bkbmEcB/p.jpeg',
//   screenshotAchievement2:'https://previews.dropbox.com/p/thumb/ACCuEXpS3G6fB6UuE7Q9y3qOR-1gF2yCJGl17zB6CAuyB4tbdlnISEB1NARImmA6sMzQsg99h6_VhRnh2gGWJ4IxRhhxpMQYPqHb47hINL2PJXasx6sY5jXo-zSAKkeeo9D9r0SstUVycxevrhuESM9TQhO_ppNj_XKw1ZOB_3HUamXg7ytLsAwMZxtyxskl8BqUZ9vDhGZxgNg2rBBrTEk1zeFoSUJjUiQpvBM2A5AqPW2745Oism4da2foWcFWtDO3CP2KdnMhRLlyhBh1Kq3b4XJo13KKWPqux3GEieoUJHPyr4i0z4OEdEEGl-jbNbljto5YD5Zko8EIdnUerlN8/p.jpeg',
//   pokedexTitle:'https://previews.dropbox.com/p/thumb/ACDDGEieWwU4LKgEKNFxKZN6lf1T-HCANl94JgL9NvlNkgnhBHGEpJwbrKkA7fCMULXwf31jZiYYRYQbVdFAGymJvLcBT1AnOZiLE76Pb0xyzZZ3BiMTEr6EZJQA5yfSQXgp4o2nx3d2C0jR-ey_B1N2ld7AWdcU45Mw5JKqRLvEcN9oZaoq7P2070ijF-n3120Xt_r_i-sxeEi-ZAfVfglXLDxPRoHQcLi9G41ndymNhVikicXZdQMpfVLnMsbXir-lgLB88kotqbGq9-o8uV5aMKqTpHZvzFoCXdoLGiEE4YyEbokxyyOk6Yt93KomFdvFcUmTVPtQ87v7Er8oz80u/p.png',
//   pokedexMock:'https://previews.dropbox.com/p/thumb/ACDEGjew92-chFLl4FVTV8IzSOGop1gYmFyLmqfIMQnD9x6ybiS7vpFfzkmYNZbLl80tibQSqwGG1f_1qtoW5h8C8jEGxLth9x-A1tXE4nBDXRHKufsUDX15xpqsBCWu62sj6zrvO2vYZ55KlB_WrAkpYW4DFAOzG9a6c4Kv68nN-3Ox4RsKgWtR_UuMdCSCd62xbgMMBjp6byAI4639iIziX8O9j0coQzzuU1Pcj5qNvVMTdi8gQNMck9j6Z19fjXiJXqPSya_Iqj7t3HFUlgn2gJCr-kg_pGd1G8KpsSRDN7sh04RkMRz9EpebHbKeYlcMrkikGHHHATdTC2cU9NBJ/p.png',
//   pokedexBackground:'https://previews.dropbox.com/p/thumb/ACAKjPbO0yMP83KCoUOMBsAgtmIWB3AgjVoPsBPRKnduQcns3FcotRWoqLsUO7LTaVOHXvrnrzPzKQJlB5os0rj4mm1F1bosF59spK9ceVx79Mki9SgU8lZILHZyDU3umNNiwKxhSWcczRC2hajjkWTC1xmdDSZx0h-BeCnMTG4nRYdENLdhIn8dNmb5oMf4OMliitZkKkmnrPRMV2wsq87IVwtSzk8_e-N3spNvVw8c1yUlquXwZbAYrUAKlc197x3K2y3B77U7_NGBfMjXS_VmqGzVuUweBTW0xZyethAl6tCY1oQ2ZcvkuZKfRs67evjMGHfPtgnu3HwRhRjS68v5/p.png',
//   notesTitle:'https://previews.dropbox.com/p/thumb/ACCm3sgjxJu5pLEfT9SR6S8A8WLXkEvB_sf8ZOeoDqaGaS5AQuhpJ7fPsE8iA3J-WGeCILjEEhbpmN-0LmT13cvJhUhzMaDrvpy4V9arLS0gvD0kmtvHCn4ggBl2Qz8LhrEFp0Inec3PlN80Mf5F11RDGo39FknpiivE53DSQr0xURb_fISzvKw5H9tXoiV8fnX8L7ypXRou7RhYOXvPX-j7mmeg5d6v4Tii0FH1P5j7B3xx0fXvKZDDC64Ylm1TxTlM5RIGitlDlrWAx3h-rf1my8-ncNvSA5BieNNJARKgNxaHA-WGtFVEfRbzZHDw4PojtQub47J-DYIKVrAWJvjk/p.png',
//   notesMock:'https://previews.dropbox.com/p/thumb/ACCo7vUbWUwE9uv05UG9jmSQYtwWSQvSsbJyunoZ1433RRBbvw59g9CgEO3KVgLZNJ-LfMT4j8z_FBEyKwWy5_jHdPXtvmB_LruckeYtISkS8VYYl8h4AZK8PCwHhV7T25Myjb4aGkKyEDbOxo8qjfh-gAA1OZnC_eSptVapPn_Q0C-j2WIK-2H8oljN0LPxXQ2dLKRZ8DJznP9qpLrGRHFJ-DHk5CONyYfbuq5x0yG2P3Tv_R_rd4tnvjPOOSitmhreLXFiY2UyLyApwxMO77mFFSkAH3lY-LkPFwlQHMHM5cT1A7F3Q26B9m263w1U0eqVCUouVGgvD3OWraZ1WMOl/p.png',
//   notesBackground:'https://previews.dropbox.com/p/thumb/ACD4VOTA3a7Or2g16A7n6RTeJCpLvyypXtBj-GybK-XqoiegUGtvDaU0tGd_HSrBZJhuSwW6mnjBxN0PBq8qAg4kcsJhUGX__8PRjtbSi-43g7L1iNAtAgajlrD-o5kYuYoiQ-3IsEavpmVtNH8Khwrve7H0SZrVmqQphAD06Asiy_9mVxRFFN1L-jIgjtSBTxJ_9MXixyQC3EqPL20QbGMIqfhjfQNXxWxjlfJva9WamlkR-yfA02HdPUQsNK3fAsEETk5a9__MEe98LK0viaOPuh2n6yg_dSMyh9wC_fZZPcrU37mIfTSVxdo_NzcLkVMydoejK5afDTks7igkww9w/p.png',
//   moviesTitle:'https://previews.dropbox.com/p/thumb/ACACMwu4jGClzTlS0Yu630Ei2VWdgpjGC4CbQR7oMaYQTTlYyVTftihgxC4jsTIaGLLZy2tmmbJRDaMq9-CZDl43iva2VUDG-57s8Wp2q-XjzSc0_9uEN3NDUfdfZCowiHSiT0ixHZ1xA18k7MRF0J-U4Uo1jblNnZ_17u0rB5lhypsCYwW2PoJ1AUN3c5Usjk_jpoNpUnoKO-NXtacigTO0zkbs5coYJ2TS-7f6xDgfIp7ognwGZ44nzJfTUtPFu-Wn8r_c41HkpWb9FH1jcY7QxbPnnSbw2bDw6h5lRjPeDQQFdvYfMf5AjpuoschgiUo-h_clpxeyIim5rWQezYJA/p.png',
//   moviesMock:'https://previews.dropbox.com/p/thumb/ACAY0YtMsVo-8_lEeC6YxW2g04IMGpUrzS5wkQHEDPSecJTKl4DjZi6dTNYIk7RwFhUXFproVu3FGqcq6OFlcSz5JvcYSTpyzPaRevCHcoCei7ducOI2ttc3n2nxBaqH01XTNRrOrmKpns9yvfCXESOlcyuyEaiBdOR5b2sCWl9o6p12FnPma7TPM_hnIepIaakC8o9frMckIEqvlkXBp2CXJ0y53NpSXholOWPoWY117-GHBsbaTidVWlIRGUU5V8sGJcxC6xkMoLRump7oadscMJFSaWEikmkoUvf8mGZAODXMx85PZxViaGoj-xutHYgz-hkuWPUSUqA4RqNjCUSe/p.png',
//   moviesBackground:'https://www.dropbox.com/scl/fi/ejj6xbw21437b703wn1ge/Captura-de-pantalla-2023-08-18-155603.png?rlkey=xnvgnnv3gobcr0xi746pr1rmt&dl=0',
// }

function App() {
  const [viewport, setViewport] = useState("vacio");

  const pokedexData = {
    title: "Pokedex",
    img: pokemonLogo,
    mock: pokedexMock,
    repo: "https://github.com/vickfaby/vick-pokedex",
    imgBackground: pokedexScreen,
    text: "This is a project developed in React.js consuming data from a REST API called pokeApi. The purpose of this project is to apply the knowledge learned in React.js",
    link: "https://vickfaby.github.io/vick-pokedex/",
  };

  const notesData = {
    title: "Notes",
    img: notesLogo,
    mock: notesMock,
    repo: "https://github.com/vickfaby/todo-notes",
    imgBackground: notesScreen,
    text: "This webpage, developed with React.js, has the functionality to create, read, and edit notes in an intuitive way, applying techniques of an intuitive and responsive UX.",
    link: "https://vickfaby.github.io/todo-notes/",
  };

  const moviesData = {
    title: "Movies",
    img: moviesLogo,
    mock: moviesMock,
    repo: "https://github.com/vickfaby/consumo-api-rest-movie-practico",
    imgBackground: moviesScreen,
    text: "A simple website that keeps you up-to-date on the latest movies and allows you to store your favorites.",
    link: "https://vickfaby.github.io/consumo-api-rest-movie-practico/",
  };

  const setFixedBar = () => {
    // console.log(document.documentElement.scrollTop);
    const element: HTMLElement | null = document.getElementById("titleDiv");
    const nameLogoH1: HTMLElement | null = document.getElementById("nameLogo");
    const descriptionLogoP: HTMLElement | null =
      document.getElementById("descriptionLogo");
    const buttonLogo: HTMLElement | null =
      document.getElementById("buttonLogo");
    const buttonSection: HTMLElement | null =
      document.getElementById("buttonSection");

    element!.style.height = "6rem";
    element!.style.background = "var(--color-after-tittle)";
    descriptionLogoP!.style.display = "none";
    nameLogoH1!.style.fontSize = "4rem";
    nameLogoH1!.style.height = "4rem";
    buttonLogo!.style.opacity = "1";
    buttonLogo!.style.transform = "rotate(0deg)";
    buttonSection!.style.animation = "none";
    buttonSection!.style.opacity = "0";
    buttonSection!.style.display = "none";

    if (element!.clientHeight > 160) {
      // element.scrollIntoView();
      document.documentElement.scrollTo(0, 1);
    }
  };

  window.addEventListener("scroll", () => {
    requestAnimationFrame(() => {
      setFixedBar();
    });
  });

  const refLeft = useRef<boolean | null>();
  const refRight = useRef<boolean | null>();

  useEffect(() => {
    const moveToLeft = () => {
      const container: HTMLElement | null = document.getElementById("projects-me-container");
      // console.log(
      //   `El scrollWidth entra como ${container.scrollLeft} y el width del container es ${containerProjects!.clientWidth}`
      // );
      const newScroll: number =
        container!.scrollLeft +
        containerProjects!.clientWidth; // SE REALIZÓ CORECCION, SE USABA PARSEFLOAT
      // console.log(`El newScroll es: ${newScroll}`);
      container!.scrollTo({
        top: 0,
        left: newScroll,
        behavior: "smooth",
      });
    };
    const moveToRight = () => {
      const container = document.getElementById("projects-me-container");
      // console.log(container.scrollLeft);
      // console.log(
      //   `El scrollProjects entra como ${container.scrollLeft} y el width del container es ${containerProjects!.clientWidth}`
      // );
      const newScroll =
        container!.scrollLeft -
        containerProjects!.clientWidth;
      // parseFloat(container.scrollLeft) -
      // parseFloat(containerProjects!.clientWidth);
      // console.log(`El newScroll es: ${newScroll}`);
      container!.scrollTo({
        top: 0,
        left: newScroll,
        behavior: "smooth",
      });
    };

    const containerProjects = document.getElementById("projects-me-container");
    const buttonLeftProjects = document.getElementById("goLeftProjects");
    const buttonRightProjects = document.getElementById("goRightProjects");

    if (!refLeft.current) {
      buttonRightProjects!.addEventListener("click", moveToLeft);
      refLeft.current = true;
    }

    if (!refRight.current) {
      buttonLeftProjects!.addEventListener("click", moveToRight);
      refRight.current = true;
    }
  }, []);

  useEffect(() => {
    const goUp = () => {
      console.log("Se activó GoUP()");
      const element: HTMLElement | null = document.getElementById("titleDiv");
      const descriptionLogoP: HTMLElement | null = document.getElementById("descriptionLogo");
      const nameLogoH1: HTMLElement | null = document.getElementById("nameLogo");
      const buttonLogo: HTMLElement | null = document.getElementById("buttonLogo");
      const buttonSection: HTMLElement | null = document.getElementById("buttonSection");

      console.log(`Entra a la función y va a poner ${viewport}`);
      element!.style.height = viewport;
      element!.style.background = "none";
      descriptionLogoP!.style.display = "block";
      nameLogoH1!.style.fontSize = "10rem";
      nameLogoH1!.style.height = "10rem";
      buttonLogo!.style.opacity = "0";
      buttonLogo!.style.transform = "rotate(180deg)";
      buttonSection!.style.display = "flex";
      buttonSection!.style.animation = "buttonSection 2s linear infinite";
      buttonSection!.style.animationDelay = "2s";
    };

    const element = document.getElementById("titleDiv");
    const buttonLogo = document.getElementById("buttonLogo");
    const buttonSection = document.getElementById("buttonSection");
    const containerProjects = document.getElementById("projects-me-container");

    setViewport(`${element!.clientHeight}px`);
    // console.log(`setea al viewport en ${element.clientHeight}px`);
    buttonLogo!.addEventListener("click", goUp);
    buttonSection!.addEventListener("click", setFixedBar);

    containerProjects!.addEventListener("wheel", (Event) => {
      // console.log("se ejecuta la funcion de containerProjects!");
      Event.preventDefault();
      var delta = Event.deltaY;
      containerProjects!.scrollLeft += delta / 10;
      const handTutorialTouch: HTMLElement | null = document.getElementById("touchHandTutorial");
      const handTutorial: HTMLElement | null = document.getElementById("handTutorial");
      handTutorialTouch!.style.opacity = "0";
      handTutorialTouch!.style.animation = "none";
      handTutorial!.style.opacity = "0";

      if (
        containerProjects!.scrollLeft > 10 &&
        containerProjects!.scrollLeft < containerProjects!.clientWidth - 80
      ) {
        containerProjects!.scrollTo({
          top: 0,
          left: containerProjects!.clientWidth,
          behavior: "smooth",
        });
      }

      if (
        containerProjects!.scrollLeft > containerProjects!.clientWidth - 80 &&
        containerProjects!.scrollLeft < containerProjects!.clientWidth
      ) {
        console.log("se quiere devolver");
        containerProjects!.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }

      if (
        containerProjects!.scrollLeft > containerProjects!.clientWidth + 10 &&
        containerProjects!.scrollLeft < containerProjects!.clientWidth * 2 - 80
      ) {
        containerProjects!.scrollTo({
          top: 0,
          left: containerProjects!.clientWidth * 2,
          behavior: "smooth",
        });
      }
      if (
        containerProjects!.scrollLeft > containerProjects!.clientWidth * 2 - 80 &&
        containerProjects!.scrollLeft < containerProjects!.clientWidth * 2
      ) {
        console.log("se quiere devolver");
        containerProjects!.scrollTo({
          top: 0,
          left: containerProjects!.clientWidth,
          behavior: "smooth",
        });
      }
    });

    containerProjects!.addEventListener("touchmove", () => {

      const handTutorialTouch: HTMLElement | null = document.getElementById("touchHandTutorial");
      const handTutorial: HTMLElement | null = document.getElementById("handTutorial");

      if (containerProjects!.scrollLeft > 1) {

        handTutorialTouch!.style.opacity = "0";
        handTutorialTouch!.style.animation = "none";
        handTutorial!.style.opacity = "0";
        handTutorial!.style.animation = "none";
      } else {
        handTutorialTouch!.style.opacity = "0.5";
        handTutorialTouch!.style.animation =
          "touch-hand 2s infinite linear";
        handTutorial!.style.opacity = "1";
        handTutorial!.style.animation =
          "hand 2s infinite linear";
      }

      if (
        containerProjects!.scrollLeft > 10 &&
        containerProjects!.scrollLeft < containerProjects!.clientWidth - 80
      ) {
        containerProjects!.scrollTo({
          top: 0,
          left: containerProjects!.clientWidth,
          behavior: "smooth",
        });
      }

      if (
        containerProjects!.scrollLeft > containerProjects!.clientWidth - 80 &&
        containerProjects!.scrollLeft < containerProjects!.clientWidth
      ) {
        console.log("se quiere devolver");
        containerProjects!.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }

      if (
        containerProjects!.scrollLeft > containerProjects!.clientWidth + 10 &&
        containerProjects!.scrollLeft < containerProjects!.clientWidth * 2 - 80
      ) {
        containerProjects!.scrollTo({
          top: 0,
          left: containerProjects!.clientWidth * 2,
          behavior: "smooth",
        });
      }
      if (
        containerProjects!.scrollLeft > containerProjects!.clientWidth * 2 - 80 &&
        containerProjects!.scrollLeft < containerProjects!.clientWidth * 2
      ) {
        console.log("se quiere devolver");
        containerProjects!.scrollTo({
          top: 0,
          left: containerProjects!.clientWidth,
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

  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <div className="languageSelectorContainer">
        {Object.keys(languages).map((lng) => (
          <button
            className="languajeSelector-button"
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bolder" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {languages[lng].nativeName}
          </button>
        ))}
      </div>

      <section>
        <div className="title" id="titleDiv">
          <h1 id="nameLogo">Vick</h1>
          <p id="descriptionLogo">{t("subtitle.part1")}</p>

          <span id="buttonLogo" className="fa-solid fa-arrow-up"></span>
          <span id="buttonSection" className="fa-solid fa-arrow-down"></span>
        </div>
      </section>

      <main>
        <div className="info-profile">
          <div className="profile-img">
            <img src={photo_port} alt="" />
            <div className="profile-photo">
              <img src={photo_profile} alt="" />
            </div>
          </div>

          <div className="profile-info">
            <div className="profile-data">
              <h2>Víctor Morales</h2>
              <h4>{t("personalData.subtitle")}</h4>

              <div className="profile-imgTechnologies">
                <img src={html} alt="html logo" />
                <img src={css} alt="css logo" />
                <img src={js} alt="javascript logo" />
                <img src={react} alt="react logo" />
                <img src={node} alt="node logo" />
              </div>
              <p>
                {t("personalData.description.part1")}
                <br />
                <br />
                {t("personalData.description.part2")}
                <br />
                <br />
              </p>
              <p>{t("personalData.knowledge")}</p>
              <ul>
                <li>{t("personalData.knowledge1")}</li>
                <li>{t("personalData.knowledge2")}</li>
                <li>{t("personalData.knowledge3")}</li>
                <li>{t("personalData.knowledge4")}</li>
                <li>{t("personalData.knowledge5")}</li>
                <li>{t("personalData.knowledge6")}</li>
              </ul>
              <br />
              <p>{t("personalData.exp")}</p>
              <ul>
                <li>{t("personalData.exp1")}</li>
              </ul>
              <br />
              <br />
              <div className="achievements">

                <h3>{t("personalData.achievements.title")}</h3>
                <p>
                  {t("personalData.achievements.description")}
                </p>
                <br />
                <div className="shots">
                  <img src={taskshot1} alt="pantallazo de app" />
                  <img src={taskshot2} alt="pantallazo de app" />
                </div>
                <br />
                <a href="https://play.google.com/store/apps/details?id=mx.global.primex.domoteck.taskfeeder"><span className="fa-solid fa-link"></span>{t("personalData.achievements.link")}</a>
              </div>
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
                {t("download.button")}
              </a>
            </div>
          </div>
        </div>

        <div className="info-projects">
          <div className="projects-me">
            <div className="textInformation">
              <h3>{t("projects.title1")}</h3>
              <p>
                <span className="fa-solid fa-check"></span>{t("projects.description1.part1")}
                <br />
                <br />
                <span className="fa-solid fa-check"></span>{t("projects.description1.part2")}
                <br />
                <br />
                <span className="fa-solid fa-check"></span>{t("projects.description1.part3")}
                <br />
                <br />
              </p>
              <h3>{t("projects.title2")}</h3>
              <p>
                {t("projects.description2.part1")}
              </p>
            </div>

            <div className="slide-projects">
              <span id="goLeftProjects" className="fa-solid fa-arrow-left"></span>
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
                  text={t("projectsData.pokedex.text")}
                  link={pokedexData.link}
                  button={t("projectsData.button")}
                />
                <CardProject
                  img={notesData.img}
                  imgBackground={notesData.imgBackground}
                  mock={notesData.mock}
                  repo={notesData.repo}
                  title={notesData.title}
                  text={t("projectsData.notes.text")}
                  link={notesData.link}
                  button={t("projectsData.button")}
                />
                <CardProject
                  img={moviesData.img}
                  imgBackground={moviesData.imgBackground}
                  mock={moviesData.mock}
                  repo={moviesData.repo}
                  title={moviesData.title}
                  text={t("projectsData.movies.text")}
                  link={moviesData.link}
                  button={t("projectsData.button")}
                />
              </div>
              <span id="goRightProjects" className="fa-solid fa-arrow-right"></span>
            </div>
          </div>
        </div>
      </main>

      <footer>

        <div className="services">
          <h2>{t("footer.section2.description")}</h2>
          <ul>
            <li><span className="fa-solid fa-check"></span>{t("footer.section2.item1")}</li>
            <li><span className="fa-solid fa-check"></span>{t("footer.section2.item2")}</li>
            <li><span className="fa-solid fa-check"></span>{t("footer.section2.item3")}</li>
            <li><span className="fa-solid fa-check"></span>{t("footer.section2.item4")}</li>
          </ul>
        </div>
        <div className="info">
          <h2>Vick</h2>

          <p>
            {t("footer.section1.description")} <br />
          </p>
          <ul>
            <li>
              <p>
                <span className="fa-solid fa-check"></span>{t("footer.section1.item1")} <br />
              </p>
            </li>
            <li>
              <p>
                <span className="fa-solid fa-check"></span>{t("footer.section1.item2")} <br />
              </p>
            </li>
            <li>
              <p>
                <span className="fa-solid fa-check"></span>{t("footer.section1.item3")} <br />
              </p>
            </li>
            <li>
              <p>
                <span className="fa-solid fa-check"></span>{t("footer.section1.item4")} <br />
              </p>
            </li>
            <li>
              <p>
                <span className="fa-solid fa-check"></span>{t("footer.section1.item5")} <br />
              </p>
            </li>
            <li>
              <p>
                <span className="fa-solid fa-check"></span>{t("footer.section1.item6")} <br />
              </p>
            </li>
          </ul>

        </div>
        <div className="contact">
          <div className="contact-social">
            <a href="mailto:vickfaby1@gmail.com?subject=Asunto&body=Mensaje"><span className="fa-regular fa-envelope"></span></a>
            <a href="https://twitter.com/vickfabyM"><span className="fa-brands fa-twitter"></span></a>
            <a href="https://github.com/vickfaby"><span className="fa-brands fa-github"></span></a>
          </div>
          <div className="contact-cretedBy">
            <p>{t("footer.section3.item1")}</p>
            <p>Vick</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
