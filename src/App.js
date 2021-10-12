
import './css/Header.css';
import React, {useState, useEffect} from 'react';
import {Helmet} from "react-helmet";
// import ImgBC from './Images/bc7.jpg';
import ReactReadMoreReadLess from "react-read-more-read-less";
import Img from './Images/navbarBackgroundImg.svg';
import MartynasImg from './Images/martynasImg.jpg';
import ReferenceImg1 from './Images/Martin.jfif';
import ReferenceImg2 from './Images/Jonas.jfif';
import CV from './Images/Martynas_Majaras_CV.pdf';
import ProjectsCompleted from './Images/projects_completed.svg';
import CompaniesWorked from './Images/companies_worked.svg';
import Contact from './Images/Contact Me.svg';
import Menu from './Images/menu.svg';
import Portfolio1stats from './Images/portfolio1stats.JPG';
import { ReactPhotoCollage } from "react-photo-collage";
import ShowMoreText from "react-show-more-text";
import Portfolio1stats1 from './Images/bc4.jpg';
import Portfolio1stats2 from './Images/bc1.jpg';
import Portfolio1stats3 from './Images/bc2.jpg';
import Portfolio1stats4 from './Images/bc3.jpg';
import VueIcon from './Images/vue_icon.png';
import ReactIcon from './Images/react_icon.png';
import GraphCMSIcon from './Images/graphCMS_icon.svg';
import BootstrapIcon from './Images/bootstrap_icon.png';
import GithubIcon from './Images/github_icon.png';
import MongoDBICon from './Images/mongoDB_icon.png';
import NodeJSIcon from './Images/nodeJS_icon.png';
import LaravelIcon from './Images/laravel_icon.png';
import MySQLIcon from './Images/MySQL_icon.png';
import PhpMyAdminIcon from './Images/PhpMyAdmin_icon.png';
import PhotoshopIcon from './Images/photoshop_icon.png';
import Portfolio2 from './Images/portfolio2.JPG';
import Portfolio3 from './Images/portfolio3.JPG';
import Portfolio4 from './Images/portfolio4.JPG';
import PortPort from './Images/portport.JPG';

import LanguagesPort1 from './Images/languages.JPG';
import LanguagesPort2 from './Images/languages1.JPG';
import portfolio5 from './Images/portfolio5.JPG';
import Portfolio6 from './Images/portfolio6.JPG';
import Portfolio6_2 from './Images/portfolio6_2.JPG';

import WebshopIMG1 from './Images/webshopIMG1.png';
import WebshopIMG2 from './Images/webshopIMG2.png';
import WebshopIMG3 from './Images/webshopIMG3.png';
import WebshopIMG4 from './Images/webshopIMG4.png';
import WebshopIMG5 from './Images/webshopIMG5.png';
import MailerIMG from './Images/mailerIMG.JPG';
import MailerIMG1 from './Images/mailerIMG1.JPG';
import GameStoreIMG from './Images/gamestoreIMG.JPG';
import GameStoreIMG1 from './Images/gamestoreIMG1.JPG';
import GameStoreIMG2 from './Images/gamestoreIMG2.JPG';
import DietPageIMG from './Images/dietpageIMG.jpg';
import DietPageMealsIMG from './Images/dietPageMealsImg.JPG';
import WorkoutPageIMG from './Images/workoutpageIMG.JPG';
// import WorkoutPageIMG1 from './Images/workoutpageIMG.JPG';
import UserPageIMG from './Images/userpageIMG.JPG';
import NutritionFactPageIMG from './Images/nutritionfactpageIMG.JPG';

import DividendIMG1 from './Images/dividendIMG1.JPG';
import DividendIMG2 from './Images/dividendIMG2.gif';
import DividendIMG3 from './Images/dividendIMG3.JPG';
import DividendIMG4 from './Images/dividendIMG4.JPG';
import FourConnectStats1 from './Images/4connectStats1.JPG';
import FourConnectStats from './Images/4connectStats.JPG';
import FourConnectStats2 from './Images/4connectStats2.JPG';
import FourConnectStats3 from './Images/4connectStats3.JPG';
import TicTacToeStats from './Images/tictactoeStats.JPG';
import TicTacToeStats1 from './Images/tictactoeStats1.JPG';
import TicTacToeStats2 from './Images/tictactoeStats2.JPG';
import QuizGameStats from './Images/QuizStats.JPG';
import DogStationStats from './Images/dogStationStats.JPG';
import GameStoreStats from './Images/gameStoreStats.JPG';
import WorkoutAndNutritionStats from './Images/workoutandnutritionStats.JPG';
import TrelloStats from './Images/trelloStats.JPG';

import GIF from './Images/Animation1.gif';
import GIF1 from './Images/testtest.gif';
import GIF2 from './Images/Animation3.gif';
import ConnectFourGIF from './Images/connectFourGIF.gif';
import GameStoreGIF from './Images/gameStoreGIF.gif';
import TrelloGIF from './Images/trelloGIF.gif';


import GIF6 from './Images/quizGIF.gif';
import test1 from './Images/test41.jpg';

import Typed from 'react-typed';


import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";



// const setting = {
//     width: '440px',
//     height: ['250px', '170px'],
//     border: '1px solid #F9A826',
//     layout: [1, 4],
//     photos: [
//       { source: Portfolio1stats1 },
//       { source: Portfolio1stats2 },
//       { source: Portfolio1stats3 },
//       { source: Portfolio1stats4 },
//     ],
//     showNumOfRemainingPhotos: true
//   };

  const setting = {
    width: '440px',
    height: ['250px', '170px'],
    border: '1px solid #F9A826',
    layout: [1],
    photos: [
      { source: GIF2 },
    ],
    showNumOfRemainingPhotos: true
  };

  const setting2 = {
    width: '440px',
    height: ['250px', '170px'],
    border: '1px solid #F9A826',
    layout: [1, 1],
    photos: [
      { source: Portfolio6 },
      { source: Portfolio6_2 },
    //   { source: Portfolio1stats3 },
    //   { source: Portfolio1stats4 },
    ],
    showNumOfRemainingPhotos: true
  };

  const setting3 = {
    width: '440px',
    height: ['250px', '170px'],
    border: '1px solid #F9A826',
    layout: [1, 3],
    photos: [
      { source: WebshopIMG5 },
      { source: WebshopIMG2 },
      { source: WebshopIMG4 },
      { source: WebshopIMG1 },
    ],
    showNumOfRemainingPhotos: true
  };

  const setting4 = {
    width: '445px',
    height: ['250px'],
    border: '1px solid #F9A826',
    layout: [1, 1],
    photos: [
      { source: MailerIMG },
      { source: MailerIMG1 },
    ],
    showNumOfRemainingPhotos: true
  };

  const setting5 = {
    width: '440px',
    height: ['440px'],
    border: '1px solid #F9A826',
    layout: [1],
    photos: [
      { source: GameStoreGIF },
    ],
    showNumOfRemainingPhotos: true
  };

  const setting6 = {
    width: '445px',
    height: ['250px'],
    border: '1px solid #F9A826',
    layout: [1, 1],
    photos: [
      { source: UserPageIMG },
      { source: DietPageIMG },
      { source: DietPageMealsIMG },
      { source: WorkoutPageIMG },
      { source: NutritionFactPageIMG },
    ],
    showNumOfRemainingPhotos: true
  };

  const setting7 = {
    width: '445px',
    height: ['250px'],
    border: '1px solid #F9A826',
    layout: [1, 1],
    photos: [
      { source: DividendIMG1 },
      { source: DividendIMG2 },
      { source: DividendIMG4 },
      { source: DividendIMG3 },
    ],
    showNumOfRemainingPhotos: true
  };

  const setting8 = {
    width: '440px',
    height: ['440px', '170px'],
    border: '1px solid #F9A826',
    layout: [1],
    photos: [
      { source: ConnectFourGIF },
    ],
    showNumOfRemainingPhotos: true
  };

  const setting9 = {
    width: '440px',
    height: ['440px', '170px'],
    border: '1px solid #F9A826',
    layout: [1],
    photos: [
      { source: GIF },
    ],
    showNumOfRemainingPhotos: true
  };

  const setting10 = {
    width: '440px',
    height: ['440px', '170px'],
    border: '1px solid #F9A826',
    layout: [1],
    photos: [
      { source: GIF6 },
    ],
    showNumOfRemainingPhotos: true
  };

  const setting11 = {
    width: '440px',
    height: ['440px', '170px'],
    border: '1px solid #F9A826',
    layout: [1],
    photos: [
      { source: TrelloGIF },
    ],
    showNumOfRemainingPhotos: true
  };
  
  
  const myLongText =
  "Som vårt första projekt på RocketLabs fick vi utveckla en programvara för massmailutskick.Arbetet utförs genom utveckling av en programvara för massmailutskick som använder ramverket Vue som frontend. Jag skulle bygga en front-end för back-end till mailer projektet som företaget skulle vidareutveckla och använda sig av för massutskick via e-post och för att kunna föra statistik på vilken sorts e-post som fick e-postanvändare att öppna mest.Detta skulle jag åstadkomma genom att bygga a/b tester där man kunde skicka två olika e-post till e-postanvändare.De 2 olika e-post som skickas via a/b tester har samma budskap till exempel reklam om företagets nya produkt men innehållet skiljer sig åt exempelvis den ena e-post som skickas till kunden kan innehålla ett annat typsnitt och vara mer personlig.När en kund öppnar e-post så sparas den i databasen och på så sätt kan företaget lista ut vilken sorts e-post en kund föredrar och när kunden brukar oftast att öppna sina e-post för att avgöra vilken tid är bästa för massmailutskick.Deras önskemål var också att implementera en webbsida för att kunna skicka ett meddelande via e-post till en kund och en webbsida för att kunna se alla meddelanden som man har skickat samt vilka e-post som kunden har öppnat.Deras önskemål var också att implementera en webbsida för att kunna skicka ett meddelande via e-post till en kund och en webbsida för att kunna se alla meddelanden som man har skickat samt vilka e-post som kunden har öppnat. En webbsida med lista av alla domäner för ett e-post skulle också skapas och i den ska man kunna skapa, ta bort samt se information för en specifik domän.En webbsida där man ska kunna lägga till taggar, skapa och ta bort listor för olika domäner man har samt en webbsida för e-postlista i vilken man ska kunna lägga till namn, e-post och taggar för att på ett snabbare sätt skicka ut massmail också skulle läggas till.Header och navbar skulle också implementeras tillsammans med import av excel sheet.Dashboard som skulle vara en startsida och innehålla generell statistik samt registrering, inloggning och inställningar för att ändra lösenord och email också skulle implementeras.Hela projektet skulle genomföras i Vue.js";
  const test = {
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,

           
        },
        1000:{
            items:3,
        }
    }
   
  }

function App() {

const [navbar, setNavbar] = useState(false);
const [menuIcon, setMenuIcon] = useState(false);
const [toggle, setToggle] = useState(false);

const changeBackground = () => {
  if(window.scrollY >= 80) {
    setNavbar(true);
    setMenuIcon(true);
  }else {
    setNavbar(false);
    setMenuIcon(false);
  }
}

window.addEventListener('scroll', changeBackground);


// executeOnClick = (isExpanded) => {
//     console.log(isExpanded);
// }

  return (
    <div>
      <header className="l-header">
        <Helmet>
            <title>Portfolio</title>
        </Helmet>
    

     {/* <!-- navbar section start --> */}

        <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className="max-width">
                    <div className="logo"><a href="#">Portfo<span>lio.</span></a></div>
                    
                    <ul className="menu" id={toggle ? 'hidden' : ''}> 
                        {/* <div className="menu-btn">
                        <i class="fas fa-bars" onClick={() => setToggle(!toggle)}></i>
                        </div> */}
                        <li><a href="#home" className="menu-btn">Hem</a></li>
                        <li><a href="#about" className="menu-btn">Om</a></li>
                        <li><a href="#services" className="menu-btn">Tjänster</a></li>
                        <li><a id='ett' href="#skills" className="menu-btn">Kompetens</a></li>
                        <li><a href="#framework" className="menu-btn">Ramverk</a></li>
                        <li><a href="#qualifications" className="menu-btn">Kvalifikationer</a></li>
                        <li><a href="#portfolio" className="menu-btn">Portfolio</a></li>
                        <li class="dropdown">
                            <button class="dropbtn" id='teest'>Mer&nbsp;
                                <i class="fa fa-caret-down" id="drop"></i>
                            </button>
                            <div class="dropdown-content" id={toggle ? 'vis' : ''}>
                                <a href="#experience" className="menu-btn">Erfarenheter</a>
                                <a href="#reference" className="menu-btn">Referens</a>
                                <a href="#contact" className="menu-btn">Kontakt</a>
                            </div>
                        
                        </li>
                    </ul>
                    <div className="menu-btn">
                        <span id={menuIcon ? 'menuIconactive' : 'menuIcon'} class="material-icons" onClick={() => setToggle(!toggle)}>menu</span>
                    </div>
                </div>
            </nav>

      </header>


      <main>
      {/* <!-- home section start --> */}

        <section className="home" id="home" style={{backgroundImage: `url(${test1}`}}>
        {/* <img src={Img} alt="Img" /> */}
            <div className="max-width">
                <div className="home-content">
                    <div className="text-1">Hej, jag heter</div>
                    <div className="text-2">Martynas Majaras</div>
                    <div className="text-3">Jag är <span className="textSpan"><Typed strings={['Frontendutvecklare', 'Webbutvecklare']} typeSpeed={80} backSpeed={60} loop  style={{color: "#6C63FF", fontWeight: "500", margin: '5px 0', textShadow: "4px 2px 4px #000000" }
                      }/></span></div>
                    <a href="#contact">Anställ Mig</a>
                </div>
            </div>
        </section>

        {/* <!-- about section start --> */}

        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">Om Mig</h2>
                <div className="about-content">
                    <div className="column left">
                        <img src={MartynasImg} alt="" />
                        {/* <img src={Portfolio1stats} alt="" /> */}
                    </div>
                    <div className="column right">
                        <div className="text">Jag är Martynas och jag är <Typed strings={['Frontendutvecklare', 'Webbutvecklare']} typeSpeed={80} backSpeed={80} loop  style={{color: "#6C63FF"}
                      }/> <span className="typing-2"></span></div>
                        <p>En driven, noggrann och ansvarstagande junior frontendutvecklare som trivs att arbeta i grupp och har hög ambition för
                           programmering och design. 
                           Har tagit examen inom frontendutveckling på EC yrkeshögskolan i Helsinborg 2021 och därför behöver ett jobb för att kunna utveckla mina nuvarande kunskaper till nästa nivå men även
                           också för att få en större bild på hur arbetslivet inom programmering fungerar och ser ut.</p><br/>
                        {/* <p> Trivs väldigt bra med frontendutveckling och därför ser fram emot att jobba som frontendutvecklare för att kunna gå ut i/smaka på arbetslivet och vidareutveckla mina kunskaper 
                            inom frontendutveckling/webbutveckling.</p> <br/> */}
                        {/* <p>
                            Jag behöver ett jobb för att kunna utveckla mina nuvarande kunskaper till nästa nivå men även
                            också för att få en större bild på hur arbetslivet inom programmering fungerar och ser ut.</p><br/> */}
                        <p>Jag är en person som trivs både att arbeta i grupp och ensam både på plats eller på distans samt bryr mig mycket om vad andra tycker
                           om mig och därför försöker jag att göra mitt bästa att få så bra bild om mig som möjligt. Jag ser fram
                           emot att arbeta med er och hjälpa er så gott jag bara kan med min ultimata arbetsinsats.
                        </p>
                        <a download="Martynas_Majaras_CV.pdf" href={CV} >Ladda ner CV</a>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- services section start --> */}

    <section className="services" id="services">
        <div className="max-width">
            <h2 className="title">Mina tjänster</h2>
            <div className="serv-content">
                <div className="card">
                    <div className="box">
                    <span class="material-icons" style={{color: "#F9A826" , fontSize: '45px'}}>code</span>
                        <div className="text">Webbutveckling</div>
                        <p>Skapar hemsidor och webbaplikationer med hjälp av REACT, VUE eller CMS</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                    <span class="material-icons" style={{color: "#F9A826" , fontSize: '45px'}}>brush</span>
                        <div className="text">Webbdesign</div>
                        <p>Designar hemsidor eller webbapplikationer med hjälp av HTML, CSS eller CMS</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <span class="material-icons" style={{color: "#F9A826" , fontSize: '45px'}}>touch_app</span>
                        <div className="text">UX-design</div>
                        <p>En del erfarenhet med användarupplevelsen inom frontendutveckling</p>
                    </div>
                </div>
               </div>
            </div>
    </section>

            {/* <!-- skills section start --> */}

    <section className="skills" id="skills">
        <div className="max-width">
            <h2 className="title">Mina färdigheter</h2>
            <div className="skills-content">
                <div className="column left">
                    {/* <div className="text">Mina kreativa färdigheter & erfarenheter.</div> */}
                    <div style={{color: '#F9A826'}} className="text">Har genomfört och klarat följande kurser</div>
                        <ul style={{paddingLeft: '20px'}}>
                            <li>HTML5 och CSS3, 40 YH-poäng</li>
                            <li>JavaScript, 40 YH-poäng</li>
                            <li>Avancerad JavaScript med ReactJS, 60 YH-poäng</li>
                            <li>UX‑design, 15 YH-poäng</li>
                            <li>Backend i Node JS, 45 YH-poäng</li>
                            <li>Projekt agilt (SCRUM) Webbutveckling i Javascript, 20 YH-poäng</li>
                            <li>LIA 1, Webbutveckling, 60 YH-poäng</li>
                            <li>Webbutveckling i CMS, 20 YH-poäng</li>
                            <li>Examensarbete, 40 YH-poäng</li>
                            <li>LIA 2, Webbutveckling , 60 YH-poäng</li>
                        </ul>
                        <a href="https://github.com/Martynas-ctrl" target="_blank">Se Github</a>
                    {/* <a href="#">Läs mer</a> */}
                </div>
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS</span>
                            <span>60%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span>70%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>PHP</span>
                            <span>13%</span>
                        </div>
                        <div className="line php"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>MySQL</span>
                            <span>10%</span>
                        </div>
                        <div className="line mysql"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* <!-- Ramverk och verktyg section start -->
     <section className="services" id="services">
        <div className="max-width">
            <h2 className="title">Ramverk och verktyg</h2>
            <div className="serv-content">
                <div className="card">
                    <div className="box">
                        <i className="fas fa-paint-brush"></i>
                        <div className="text">React JS</div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <i className="fas fa-chart-line"></i>
                        <div className="text">Vue JS</div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <i className="fas fa-code"></i>
                        <div className="text">CMS</div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                    </div>
                </div>
               </div>
            </div>
    </section> */}


<section className="framework" id="framework">
    <div className="max-width">
        <h2 className="title">Ramverk och verktyg</h2>
        <div className="port-content">
            <OwlCarousel className="owl-theme" loop margin={10} {...test} items={20} autoplay >
                <div>
                    <div>
                        <div className="card">
                            <div className="box">
                                <img src={ReactIcon}  alt=""  style={{height: '140px', display: 'block',  marginLeft: 'auto',  marginRight: 'auto', width: '43.5%' }}/>
                                <div className="text">React JS</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="card">
                            <div className="box">
                                <img src={VueIcon}  alt=""  style={{height: '140px', display: 'block',  marginLeft: 'auto',  marginRight: 'auto', width: '45%' }}/>
                                <div className="text">Vue JS</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="card">
                            <div className="box">
                                <img src={GraphCMSIcon}  alt=""  style={{height: '140px', display: 'block',  marginLeft: 'auto',  marginRight: 'auto', width: '43.5%' }}/>
                                <div className="text">CMS</div>
                            </div>
                        </div>
                                
                    </div>
                </div>
                <div>
                    <div >
                        <div className="card">
                            <div className="box">
                                <img src={BootstrapIcon}  alt=""  style={{height: '140px', display: 'block',  marginLeft: 'auto',  marginRight: 'auto', width: '53%' }}/>
                                <div className="text">Bootstrap</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <div className="card">
                            <div className="box">
                                <img src={GithubIcon}  alt=""  style={{height: '140px', display: 'block',  marginLeft: 'auto',  marginRight: 'auto', width: '60%' }}/>
                                <div className="text">Github</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <div className="card">
                            <div className="box">
                                <img src={MongoDBICon}  alt=""  style={{height: '140px', display: 'block',  marginLeft: 'auto',  marginRight: 'auto', width: '72%' }}/>
                                <div className="text">MongoDB</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <div className="card">
                            <div className="box">
                                <img src={NodeJSIcon}  alt=""  style={{height: '140px', display: 'block',  marginLeft: 'auto',  marginRight: 'auto', paddingTop: '12px', width: '72%' }}/>
                                <div className="text">Node JS</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <div className="card">
                            <div className="box">
                                <img src={MySQLIcon}  alt=""  style={{height: '140px', display: 'block',  marginLeft: 'auto',  marginRight: 'auto', paddingBottom: '15px', width: '64%'}}/>
                                <div className="text">MySQL</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <div className="card">
                            <div className="box">
                                <img src={PhpMyAdminIcon}  alt=""  style={{height: '120px', display: 'block',  marginLeft: 'auto',  marginRight: 'auto',  paddingBottom: '17px', width: '72%' }}/>
                                <div style={{paddingTop: '20px'}}  className="text">PhpMyAdmin</div>
                            
                            </div>
                        </div>
                </div>
                </div>
                <div class="item">
                    <div>
                        <div className="card">
                            <div className="box">
                                <img src={LaravelIcon}  alt=""  style={{height: '140px', display: 'block',  marginLeft: 'auto',  marginRight: 'auto', width: '41%' }}/>
                                <div className="text">Laravel</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <div className="card">
                            <div className="box">
                                <img src={PhotoshopIcon}  alt=""  style={{height: '140px', display: 'block',  marginLeft: 'auto',  marginRight: 'auto', width: '44%' }}/>
                                <div className="text">Photoshop</div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    </div>
</section>

                      {/* Qualifications */}
                       {/* <h1>Min personlig resa</h1> */}
                {/* <h1>KOlla Icons från denna video för UX-design</h1> */}

    <section className="qualifications" id="qualifications">
        <div className="max-width">
            <h2 className="title">Mina kvalifikationer</h2>
            <div className="qualifications-content">
            <div className='qualification_content container'>
                {/* <div className='qualification_tabs'>
                    <div className='qualification_button button--flex'>
                        <span class="material-icons">school</span>
                    </div>
                </div> */}

                <div className='qualification_sections'>

                    <div className='qualification_content'>

                        <div className='qualification__data'>
                            <div className='qualification_align'>
                                <h3 className='qualification__title'>Frontendutvecklare</h3>
                                <span className='qualification__subtitle'>Helsingborg - yrkeshögskolan</span><br/>
                                <p className='qualification__subtitle_p'>EC Utbildning</p>
                                <div className='qualification__calendar'>
                                    <span id='qualification__icons' class="material-icons">date_range</span>
                                    2019 - 2021
                                </div>
                                
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div>
                                <h3 className='qualification__title'>Frontendutvecklare</h3>
                                <span className='qualification__subtitle'>Tyringe - Lärande i arbete 1</span><br/>
                                <p className='qualification__subtitle_p'>RocketLabs AB</p>
                                <div className='qualification__calendar'>
                                    <span id='qualification__icons' class="material-icons">date_range</span>
                                    2020-09-21 -- 2020-12-11
                                </div>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div className='qualification_align'>
                                <h3 className='qualification__title'>Frontendutvecklare</h3>
                                <span className='qualification__subtitle'>Tyringe - Lärande i arbete 2</span><br/>
                                <p className='qualification__subtitle_p'>RocketLabs AB</p>
                                <div className='qualification__calendar'>
                                    <span id='qualification__icons' class="material-icons">date_range</span>
                                    2019-03-08 -- 2021-05-28
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                {/* <span className='qualification__lineggg'></span> */}
                            </div>
                        </div>
                        
                        {/* <div className='qualification__data'>
                            <div></div>
                            <div>
                                <span className='qualification__rounder'></span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>       
                
                
            </div>
        </div>
    </section>

{/* FRÅN OCH MED HÄR FIXA MEDIA QUERIES */}

<section className="about" id="portfolio" style={{backgroundColor: '#111', color: '#fff'}}>
            <div className="max-width">
                <h2 className="title">Min portfolio</h2>
                <OwlCarousel className="owl-theme" items={1} margin={50} autoplayHoverPause autoplay >
    
                <div className="about-content">
                    <div className="column left">
                       <ReactPhotoCollage {...setting8} className='photoCOllageImg' id='portImg'/>
                    </div>
                    <div className="column right">
                    <h2 className="text" style={{color: "#F9A826"}}>4 i rad</h2>
                        <p id='portfolio_content_text' style={{fontSize: '15px', textAlign: 'justify'}}>
                            Arbetet utförs genom utveckling av en react applikation för att skapa det klassiska spelet 4 i rad.
                            Spelet går ut på att varannan gång lägger deltagarna en bricka i spelet. Den som först får fyra av sina brickor i rad (vågrätt, lodrätt eller diagonalt) vinner.
                            Eftersom brickor hela tiden tillförs samtidigt som ytan är begränsad slutar spelet oavgjort när det inte längre finns plats för fler brickor. 
                        </p>
                        <div style={{marginTop: '15px'}}>
                            <img src={FourConnectStats3} alt=""  style={{width: '200px'}}/>
                        </div>
                        {/* <div style={{marginTop: '30px'}}>
                            <img src={FourConnectStats} alt=""  style={{width: '300px'}}/>
                        </div> */}
                        <a className='seeMoreBtn' href="https://trusting-hoover-2121cd.netlify.app"  target="_blank">Se demo</a>
                    </div>
                </div>

                <div className="about-content">
                    <div className="column left">
                       <ReactPhotoCollage {...setting9} className='photoCOllageImg' id='portImg'/>
                    </div>
                    <div className="column right">
                    <h2 className="text" style={{color: "#F9A826"}}>3 i rad</h2>
                        <p id='portfolio_content_text' style={{fontSize: '15px', textAlign: 'justify'}}>
                            Arbetet utförs med vanilla javascript för att skapa ett spel där användaren kan spela spelet 3 i rad(Tic Tac Toe).
                            Spelet går ut på att två spelare som ska turas om att lägga djävul (😈) resp. ängel (😇) på ett (3x3) rutnät. 
                            Spelaren som först får tre i rad vinner. Programmet läser in vilken ruta man vill placera sitt tecken på och lägger därefter spelarens markör på rutan.
                            Vinnaren får sedan meddelandet efter spelets slut om om man har vunnit eller förlorat. Möjligheten för att återställa, starta om eller stänga av spelet finns också.
                        </p>
                       
                        <div style={{marginTop: '15px'}}>
                        <img src={TicTacToeStats2} alt=""  style={{width: '200px'}}/>
                        </div>
                        <a className='seeMoreBtn' href="https://dreamy-roentgen-6992cb.netlify.app"  target="_blank">Se demo</a>
                    </div>
                </div>

                <div className="about-content">
                    <div className="column left">
                       <ReactPhotoCollage {...setting10} className='photoCOllageImg' id='portImg'/>
                    </div>
                    <div className="column right">
                    <h2 className="text" style={{color: "#F9A826"}}>SpelQuiz</h2>
                            <p id='portfolio_content_text' style={{fontSize: '15px', textAlign: 'justify'}}>
                                Arbetet utförs genom utveckling av en react app för att skapa det klassiska spelet 4 i rad.
                                Spelet går ut på att varannan gång lägger deltagarna en bricka i spelet. Den som först får fyra av sina brickor i rad (vågrätt, lodrätt eller diagonalt) vinner.
                                Eftersom brickor hela tiden tillförs samtidigt som ytan är begränsad slutar spelet oavgjort när det inte längre finns plats för fler brickor. 
                            </p>
                            <div style={{marginTop: '15px'}}>
                                <img src={QuizGameStats} alt=""  style={{width: '200px'}}/>
                            </div>
                            <a className='seeMoreBtn' href="https://practical-wozniak-a4c7ae.netlify.app"  target="_blank">Se demo</a>
                    </div>
                </div>

                <div className="about-content">
                    <div className="column left">
                       <ReactPhotoCollage {...setting5} className='photoCOllageImg' id='portImg'/>
                    </div>
                    <div className="column right">
                    <h2 className="text" style={{color: "#F9A826"}}>Spelbutik</h2>
                            <p id='portfolio_content_text' style={{fontSize: '15px', textAlign: 'justify'}}>
                                Arbetet utförs genom praktiskt arbete och utveckling av en webbapplikation som använder 
                                ramverket React som frontend och ett headless GraphCMS som backend som är helt byggt 
                                som API fokuserat från grunden, vilket gör det möjligt för utvecklaren att definiera 
                                strukturer, behörigheter och relationer för API parametrarna. Applikationen kopplar upp sig 
                                via GraphQL API från Apollo Client på användarens data som användaren skapar, hämtar, 
                                uppdaterar och tar bort.
                                Jag har skapad en applikation som jag kallar för game store, det är en spelbutik demo för
                                spelförsäljning som blocket och hela projektet går ut på att då hantera data i, från och till
                                frontend med hjälp av ett headless graphCMS och det genomför jag via implementation
                                av lägga till/skapa, uppdatera och ta bort funktioner.
                            </p>
                            
                            <div style={{marginTop: '15px'}}>
                                <img src={GameStoreStats} alt=""  style={{width: '200px'}}/>
                            </div>
                           
                            <a className='seeMoreBtn' href="https://gallant-goldberg-eca837.netlify.app/"  target="_blank">Se demo</a>
                    </div>
                </div>

                <div className="about-content">
                    <div className="column left">
                       <ReactPhotoCollage {...setting} className='photoCOllageImg' id='portImg'/>
                        {/* <img src={GIF2} alt="" /> */}
                    </div>
                    <div className="column right">
                    <h2 className="text" style={{color: "#F9A826"}}>Bibliotek för hundraser</h2>
                            <p id='portfolio_content_text' style={{fontSize: '15px', textAlign: 'justify'}}>
                                Arbetet utförs med vanilla javascript för att visa slumpmässiga bilder för alla hundraser eller en specifik hundrad med hjälp av en REST API.</p>
                                {/* <p>
                                genom praktiskt arbete och utveckling av en statisk hemsida som använder 
                                vanilla javascript och REST API för att visa slumpmässiga bilder för alla hundraser eller en specifik hundras.</p> */}
                            <div style={{marginTop: '15px'}}>
                                <img src={DogStationStats} alt=""  style={{width: '200px'}}/>
                            </div>
                            <a className='seeMoreBtn' href="https://cranky-chandrasekhar-95fec7.netlify.app"  target="_blank">Se demo</a>
                    </div>
                </div>

                <div className="about-content">
                    <div className="column left">
                       <ReactPhotoCollage {...setting11} className='photoCOllageImg' id='portImg'/>
                        {/* <img src={Portfolio1stats} alt="" /> */}
                    </div>
                    <div className="column right">
                    <h2 className="text" style={{color: "#F9A826"}}>Trello</h2>
                            <p id='portfolio_content_text' style={{fontSize: '15px', textAlign: 'justify'}}>
                                Arbetet utförs genom utveckling av en fullstack webbapplikation som använder 
                                ramverket React som frontend och Express, en webb- och applikationsserver för Node.js för att köra backend.
                                Det är en applikation som kallas för Trello som är ett visuellt verktyg för arbetshantering som hjälper användaren att organisera, 
                                planera och hantera sitt arbete på ett produktivt och organiserat sätt så att man kan se vad man arbetar med och var i processen man är.
                            </p>
                            <div style={{marginTop: '15px'}}>
                                <img src={TrelloStats} alt=""  style={{width: '200px'}}/>
                            </div>
                            <a className='seeMoreBtn' href="https://github.com/Martynas-ctrl/mandatory-backend2"  target="_blank">Se kod</a>
                    </div>
                </div>

                <div className="about-content">
                    <div className="column left">
                       <ReactPhotoCollage {...setting6} className='photoCOllageImg' id='portImg'/>
                        {/* <img src={Portfolio1stats} alt="" /> */}
                    </div>
                    <div className="column right">
                    <h2 className="text" style={{color: "#F9A826"}}>Tränings och -kostapplikation</h2>
                            <p id='portfolio_content_text' style={{fontSize: '15px', textAlign: 'justify'}}>
                                Applikationen som jag utvecklade kallar jag för HealtyLifeStyle. Det är ett projekt 
                                som utvecklades i några veckor för att bygga en komplett React JS applikation tillsammans 
                                med ett headless CMS som backend med stöd att erbjuda användaren ett användargränssnitt 
                                med mängd olika funktioner. I applikationen kan användaren skapa eget träningsschema och 
                                kostschema enligt applikationens uträkning av rekommenderad daglig kalori och 
                                näringsbehov beroende på användares ålder, längd, vikt, kön och mål. Detta åstadkommer 
                                man med olika matematiska formler för att göra dessa uträckningar. Applikation visar också 
                                användarens kalori- och näringsintag för varje måltid i form av olika grafer samt 
                                träningsupplägg för varje dag där även 1RM beräknas så att användaren kan ha koll och 
                                kontroll över sin träning och kost för att lyckas med en hälsosam livsstil. För datahämtning 
                                och datamodifiering används i applikationen Apollo Client till graphQL API för att nyttja full 
                                CRUD och cache så att användaren kan hämta, skapa, uppdatera och ta bort sina
                                träningsövningar från träningsschemat eller livsmedel från sitt kostschema samtidigt som 
                                användargränssnittet för användaren uppdateras automatisk
                            </p>
                            <div style={{marginTop: '15px'}}>
                                <img src={WorkoutAndNutritionStats} alt=""  style={{width: '200px'}}/>
                            </div>
                            <a className='seeMoreBtn' href="https://github.com/Martynas-ctrl/HealthyLifeStyle"  target="_blank">Se kod</a>
                    </div>
                </div>
               
                <div className="about-content">
                    <div className="column left">
                       <ReactPhotoCollage {...setting3} className='photoCOllageImg' id='portImg'/>
                    </div>
                    <div className="column right">
                    <h2 className="text" style={{color: "#F9A826"}}>Webshop Valtab</h2>
                            <p id='portfolio_content_text' style={{fontSize: '15px', textAlign: 'justify'}}>
                                Arbetet utförs med pagebuilder, ett traditional CMS som RocketLabs själva har utvecklat.
                                Jag skulle återbygga kundens hemsida från scratch med vissa ändringar på sidan men även extra saker som skulle läggas till. 
                                Hemsidan heter Valtab som säljer olika matkassar.
                                Deras önskemål var att layout på shoppen som skulle läggas till ska vara i likhet med en annan hemsida som heter Etnomat för produktkatalog och produktsida men färgval skulle fortfarande stämma överens med den nuvarande sidan Valtab. 
                                Alla övriga sidor skulle se ut på samma vis som på den nuvarande hemsidan Valtab med några mindre justeringar för det som låg från början under matkassar eftersom det skulle ändras till att bli recept och priser skulle inte längre finnas med. 
                                Matkassar skulle även flyttas in i blog-verktyget som skulle ligga till grund för receptboken på sidan. 
                            </p>
                            <a className='seeMoreBtn' href="https://valtab.se/"  target="_blank">Besök hemsidan</a>
                    </div>
                </div>               

                <div className="about-content">
                    <div className="column left">
                       <ReactPhotoCollage {...setting4} className='photoCOllageImg' id='portImg'/>
                        {/* <img src={WebshopIMG} alt="" /> */}
                    </div>
                    <div className="column right">
                    <h2 className="text" style={{color: "#F9A826"}}>Mailer</h2>
                        <ShowMoreText
                            /* Default options */
                            lines={1}
                            more="Läs mer"
                            less="Läs mindre"
                            className="showMoreText"
                            anchorClass="my-anchor-css-class"
                            expanded={false}
                            width={5000}
                            truncatedEndingComponent={"... "}
                            >
                                
                            <p id='portfolio_content_text' style={{fontSize: '15px', textAlign: 'justify'}}>
                                Som vårt första projekt på RocketLabs fick vi utveckla en programvara för massmailutskick. 
                                Arbetet utförs genom utveckling av en programvara för massmailutskick som använder ramverket Vue som frontend.
                                Jag skulle bygga en front-end för back-end till mailer projektet som företaget skulle vidareutveckla och använda sig av för massutskick via e-post och för att kunna föra statistik på vilken sorts e-post som fick e-postanvändare att öppna mest. 
                                Detta skulle jag åstadkomma genom att bygga a/b tester där man kunde skicka två olika e-post till e-postanvändare. 
                                De 2 olika e-post som skickas via a/b tester har samma budskap till exempel reklam om företagets nya produkt men innehållet skiljer sig åt exempelvis den ena e-post som skickas till kunden kan innehålla ett annat typsnitt och vara mer personlig. 
                                När en kund öppnar e-post så sparas den i databasen och på så sätt kan företaget lista ut vilken sorts e-post en kund föredrar och när kunden brukar oftast att öppna sina e-post för att avgöra vilken tid är bästa för massmailutskick. 
                                Deras önskemål var också att implementera en webbsida för att kunna skicka ett meddelande via e-post till en kund och en webbsida för att kunna se alla meddelanden som man har skickat samt vilka e-post som kunden har öppnat.
                                En webbsida med lista av alla domäner för ett e-post skulle också skapas och i den ska man kunna skapa, ta bort samt se information för en specifik domän.
                                En webbsida där man ska kunna lägga till taggar, skapa och ta bort listor för olika domäner man har samt en webbsida för e-postlista i vilken man ska kunna lägga till namn, e-post och taggar för att på ett snabbare sätt skicka ut massmail också skulle läggas till. 
                                Header och navbar skulle också implementeras tillsammans med import av excel sheet. 
                                Dashboard som skulle vara en startsida och innehålla generell statistik samt registrering, inloggning och inställningar för att ändra lösenord och email också skulle implementeras.  
                                Hela projektet skulle genomföras i Vue.js.
                            </p>
                            </ShowMoreText>
                    </div>
                </div>

                <div className="about-content">
                    <div className="column left">
                       <ReactPhotoCollage {...setting7} className='photoCOllageImg' id='portImg'/>
                    </div>
                    <div className="column right">
                    <h2 className="text" style={{color: "#F9A826"}}>Aktieportfölj</h2>
                            <p id='portfolio_content_text' style={{fontSize: '15px', textAlign: 'justify'}}>
                                Arbetet utförs genom praktiskt arbete och utveckling av en webbapplikation som använder 
                                ramverket React som frontend och ett headless GraphCMS som backend 
                                På RocketLabs fick vi vidareutveckla aktieprojektet, en programvara för aktieutdelning som RocketLabs har utvecklat i ett år. 
                                Vi skulle lägga till många olika funktionaliteter som de ville ha som bestod både av frontend och backend. 
                                Aktieprojektet var ett externt projekt från början som såldes till en kund efter kundens behov men sedan blev ett internt projekt för en av våra handledare som han ska vidareutveckla efter vår LIA och sedan ska bli en preminarrationstjänst som ska användas av Martin Forsen och hans kunder. 
                                Denna programvara ska hantera aktieutdelning där kunden kan köpa och sälja aktier för att tjäna pengar. 
                                Detta skulle vi åstadkomma genom att bygga ett användargränssnitt som visar statistik och tabeller om olika innehav, affärssektorer, transaktioner, utdelning, bevakningslistor och mycket mer.
                                Projektet skulle genomföras i Vue.js och laravel.
                            </p>
                    </div>
                </div>
                
                </OwlCarousel>
            </div>
        </section>

    <section className="services" id="experience" style={{backgroundColor: '#fff'}}>
        <div className="max-width">
        <h2 className="title" style={{color: '#222'}}>Mina Erfarenheter</h2>
            <div className="serv-content" style={{color: '#fff!important'}}>
                <div className="card" id='iconHover' style={{backgroundColor: '#fff', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px', color: '#222', color: '#222'}}>
                    <div className="box">
                    <img src={Img} alt="" style={{width: '200px', height: '200px'}} />

                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            <div>
                                <div className="text" style={{color: '#F9A826'}}>0</div>
                                <p style={{fontSize: '15px'}}>Års</p>
                                <p style={{fontSize: '15px'}}>Arbetslivserfarenhet</p>
                            </div>
                            <div >
                                <div className="text" style={{color: '#F9A826'}}>2</div>
                                <p style={{fontSize: '15px'}}>Års</p>
                                <p style={{fontSize: '15px'}}>yrkesutbildning</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="card" id='iconHover' style={{backgroundColor: '#fff',  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px', color: '#222'}}>
                    <div className="box">
                        <img src={CompaniesWorked} alt="" style={{width: '200px', height: '200px'}} />

                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            <div>
                                <div className="text" style={{color: '#F9A826'}}>2</div>
                                <p style={{fontSize: '14px'}}>Genomförda projekt</p>
                                <p style={{fontSize: '14px'}}>på företaget</p>
                            </div>
                            <div>
                                <div className="text" style={{color: '#F9A826'}}>10+</div>
                                <p style={{fontSize: '14px'}}>Genomförda projekt</p>
                                <p style={{fontSize: '14px'}}>på yrkeshögskolan</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="card" id='iconHover' style={{backgroundColor: '#fff',  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px', color: '#222', color: '#222'}}>
                    <div className="box">
                        <img src={ProjectsCompleted} alt="" style={{width: '200px', height: '200px'}} />

                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            <div>
                                <div className="text" style={{color: '#F9A826'}}>0</div>
                                <p style={{fontSize: '15px'}}>Företag som</p>
                                <p style={{fontSize: '15px'}}>jag har jobbat på</p>
                            </div>
                            <div>
                                <div className="text" style={{color: '#F9A826'}}>2</div>
                                <p style={{fontSize: '15px'}}>Företag som</p>
                                <p style={{fontSize: '15px'}}>jag har haft LIA på</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
               </div>
            </div>
    </section>


  
 
   
  
  
   
   
    
  
                            {/* <li>JavaScript, 40 YH-poäng</li>
                                1.Tic Tac Toe gif V
                                2.Hundar Gif V

                            <li>Avancerad JavaScript med ReactJS, 60 YH-poäng</li>
                                3. 4 rad netlify V
                                4. Register collage
                                5. Todo List Collage
                                6. Movies Collage
                                7. Kanske dropbox

                            <li>UX‑design, 15 YH-poäng</li>
                                8.UX2 Netlify V

                            <li>Backend i Node JS, 45 YH-poäng</li>
                                9.Backend1 gif
                                10.Backend2 gif

                            <li>LIA 1, Webbutveckling, 60 YH-poäng</li>
                                11. Valtab länk till Hemsidan + bild V
                                12. Mailer projektet bilder bara V

                            <li>Webbutveckling i CMS, 20 YH-poäng</li>
                                13.CMS2 Hoster V
                                14.Examens Arbetet Hoster V

                            <li>LIA 2, Webbutveckling , 60 YH-poäng</li>
                                15. Gif från aktie projektet V */} 



{/* Kanske   boxShadow: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px', */} 
    {/* <section className="services" id="services" style={{backgroundColor: '#fff'}}>
        <div className="max-width">
        <h2 className="title">Mina Erfarenheter</h2>
            <div className="serv-content">
                <div className="card" style={{backgroundColor: '#fff', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px', color: '#222'}}>
                    <div className="box">
                    <img src={Img} alt="" style={{width: '200px', height: '200px'}} />
                        <div className="text">0</div>
                        <p>Års erfarenhet</p>
                    </div>
                </div>
                <div className="card" style={{backgroundColor: '#fff',  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px', color: '#222'}}>
                    <div id='iconHover' className="box">
                    <img src={CompaniesWorked} alt="" style={{width: '200px', height: '200px'}} />
                        <div className="text">2</div>
                        <p>Genomförda projekt på företaget</p>
                      
                    </div>
                </div>
                <div className="card" style={{backgroundColor: '#fff',  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px', color: '#222'}}>
                    <div className="box">
                    <img src={ProjectsCompleted} alt="" style={{width: '200px', height: '200px'}} />
                        <div className="text">0</div>
                        <p>Företag som jag har jobbat på</p>
                    </div>
                </div>
               </div>
            </div>
    </section>           */}
{/* 
     <section className="services" id="services" style={{backgroundColor: '#fff'}}>
        <div className="max-width">
        <h2 className="title">Mina Erfarenheter</h2>
            <div className="serv-content">
                <div className="card" style={{backgroundColor: '#fff', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', color: '#222'}}>
                    <div className="box">
                    <img src={Img} alt="" style={{width: '200px', height: '200px'}} />
                        <div className="text">0</div>
                        <p>Års erfarenhet</p>
                    </div>
                </div>
                <div className="card" style={{backgroundColor: '#fff',  boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', color: '#222'}}>
                    <div id='iconHover' className="box">
                    <img src={CompaniesWorked} alt="" style={{width: '200px', height: '200px'}} />
                        <div className="text">2</div>
                        <p>Genomförda projekt på företaget</p>
                       
                    </div>
                </div>
                <div className="card" style={{backgroundColor: '#fff',  boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', color: '#222'}}>
                    <div className="box">
                    <img src={ProjectsCompleted} alt="" style={{width: '200px', height: '200px'}} />
                        <div className="text">0</div>
                        <p>Företag som jag har jobbat på</p>
                       
                    </div>
                </div>
               </div>
            </div>
    </section>                   */}

        {/* <section className="skills" id="skills">
        <div className="max-width">
            <h2 className="title">Mina Erfarenheter</h2>
            <div className="skills-content" style={{textAlign: 'center'}}>
                <div>
                    <img src={Img} alt="" style={{width: '200px', height: '200px'}} />
                    <br/>
                    <h2>0</h2>
                    <p>Års erfarenhet</p>
                </div>
                <div>
                    <img src={ProjectsCompleted} alt="" style={{width: '200px', height: '200px'}} />
                    <br/>
                    <h2>2</h2>
                    <p>Genomförda projekt på företaget</p>
                    <h2>20+</h2>
                    <p>Genomförda projekt på yrkeshögskolan</p>
                </div>
                <div>
                    <img src={CompaniesWorked} alt="" style={{width: '200px', height: '200px'}} />
                    <br/>
                    <h2>0</h2>
                    <p>Företag som jag har jobbat på</p>
                    <h2>1(2ggr)</h2>
                    <p>Företag som jag har haft praktik på</p>
                </div>
            </div>
        </div>
    </section> */}
      {/* <!-- contact section start --> */}
    {/* <!-- teams section start --> */}

    <section className="reference" id="reference">
        <div className="max-width">
            <h2 className="title">Min referens</h2>
            <div className="ref-content">
                <div className="card">
                    <div className="box">
                    <img id='referenceImg' src={ReferenceImg1} alt=""/>
                        <div className="text">Martin Forsén</div>
                        {/* <p>Project manager and webdeveloper at RocketLabs.</p> */}
                        <p>Projektledare och webbutvecklare på RocketLabs</p>
                        <div style={{marginRight: "200px", marginTop: "20px", display: 'flex'}}>
                          <span style={{color: "#F9A826" , fontSize: '45px', paddingRight: '50px'}} class="material-icons">call</span>
                          <div className="info">
                              <div className="head">Telefonnummer</div>
                              <div className="sub-title">0739189492</div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                    <img id='referenceImg' src={ReferenceImg2} alt=""/>
                        <div className="text">Jonas Sandberg</div>
                        {/* <p>Web Developer and Linux System Administrator at RocketLabs.</p> */}
                        <p>Webbutvecklare och Linux systemadministratör på RocketLabs</p>
                        <div style={{marginRight: "200px", marginTop: "20px", display: 'flex'}}>
                          <span style={{color: "#F9A826" , fontSize: '45px', paddingRight: '50px'}} class="material-icons">call</span>
                          <div className="info">
                              <div className="head">Telefonnummer</div>
                              <div className="sub-title">0451 - 34 000</div>
                          </div>
                        </div>
                        </div>
                </div>
               </div>
            </div>
    </section>
    


    {/* <!-- contact section start --> */}

    <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Kontakta Mig</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Hör av Dig</div>
                    <p>Om du är intresserad hör av dig via e-post eller telefonsamtal .</p>
                    <div className="icons">
                        <div className="row">
                        <span style={{color: "#F9A826" , fontSize: '45px'}} class="material-icons">person</span>
                            <div className="info">
                                <div className="head">Namn</div>
                                <div className="sub-title">Martynas Majaras</div>
                            </div>
                        </div>
                        <div className="row">
                        <span style={{color: "#F9A826" , fontSize: '45px'}} class="material-icons">place</span>
                            <div className="info">
                                <div className="head">Adress</div>
                                <div className="sub-title">Åkerbergsgatan 30, Höör</div>
                            </div>
                        </div>
                        <div className="row">
                        <span style={{color: "#F9A826" , fontSize: '45px'}} class="material-icons">email</span>
                            <div className="info">
                                <div className="head">Epost</div>
                                <div className="sub-title">martynasmajaras98@gmail.com</div>
                            </div>
                        </div>
                        <div className="row">
                        <span style={{color: "#F9A826" , fontSize: '45px'}} class="material-icons">call</span>
                        {/* <span style={{color: "#F9A826" , fontSize: '45px'}} class="material-icons">phone_in_talk</span> */}
                            <div className="info">
                                <div className="head">Telefonnummer</div>
                                <div className="sub-title">0724537273</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                  <img src={Contact} alt="Img"  className="contactImg" />
                </div>
            </div>
        </div>
    </section>

    {/* <!-- footer section start --> */}

    <footer>
        <span>© 2021 <a href="https://www.linkedin.com/in/martynas-majaras-781b681b3/" target="_blank">Martynas Majaras</a></span>
    </footer>

      </main>
      
      
    </div>
  );
}

export default App;          