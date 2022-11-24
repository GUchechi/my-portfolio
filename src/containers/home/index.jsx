import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { Animate } from "react-simple-animate";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import Marquee3k from 'marquee3000';

const Home = () => {
  const [state] = useState({
    title: "Hello, I'm Godswill",
    titleThree: "FrontEnd Developer",
  });
  Marquee3k.init() 
  const navigate = useNavigate();

  const handleNavigateToContactPage = () => {
    navigate("/contact");
  };
  return (
    <div id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          {state.title}
          <span class="waving-hand">👋🏼</span>
          <br />
          {/* {state.titleThree} */}
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "Front End Developer",
                "I love React Js",
                "I'm a Tech Enthusiast"
              ],
            }}
          />
        </h1>
        <div>
        </div>
      </div>
      <Animate
        play
        duration={0.8}
        delay={0.7}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translate(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactPage}>Hire Me 🙏🏻</button>
        </div>
      </Animate>
      {/* <section class="marquee-section">
            <div class="marquee-container">
               <div class="marquee3k" data-speed="0.25" >
                  <h4> <span>DESIGN</span>
                     
                   <span>DEVELOPMENT</span>

                  <span>BRANDING </span>

                 <span> MOBILE-RESPONSIVE </span> </h4>
               </div>
            </div>  
      </section> */}
    </div>
  );
};

export default Home;
