import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { Animate } from "react-simple-animate";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import Marquee from "react-fast-marquee";

const Home = () => {
  const [state] = useState({
    title: "Hello, I'm Godswill",
    titleThree: "FrontEnd Developer",
  });
  const navigate = useNavigate();

  const handleNavigateToContactPage = () => {
    navigate("/contact");
  };
  return (
    <div id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          {state.title}
          <span className="waving-hand">👋🏼</span>
          <br />
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "Front End Developer",
                "I love React Js",
                "I'm a Tech Enthusiast",
              ],
            }}
          />
        </h1>
        <div></div>
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
      <section className="marquee-section">
        <Marquee speed={60} gradient={false} pauseOnHover>
          <div className="marquee-container">
            <div className="marquee3k">
              <h4>
                {" "}
                <span>SOFTWARE</span>
                <span>REACT</span>
                <span>JAVASCRIPT </span>
                <span> CSS </span>{" "}
              </h4>

              <h4>
                {" "}
                <span>SOFTWARE</span>
                <span>REACT</span>
                <span> CSS </span>
                <span> HTML </span>{" "}
              </h4>
              <h4>
                {" "}
                <span>SOFTWARE</span>
                <span>REACT</span>
                <span> HTML </span>
                <span> CSS </span>{" "}
              </h4>
            </div>
          </div>
        </Marquee>
        <Marquee speed={60} gradient={false} pauseOnHover direction="right">
          <div className="marquee-container">
            <div className="marquee3k">
              <h4>
                {" "}
                <span>SOFTWARE</span>
                <span>REACT</span>
                <span>JAVASCRIPT </span>
                <span> HTML </span>
                <span> MOBILE-RESPONSIVE </span>{" "}
              </h4>

              <h4>
                {" "}
                <span>SOFTWARE</span>
                <span>REACT</span>
                <span> HTML </span>{" "}
              </h4>
              <h4>
                {" "}
                <span>SOFTWARE</span>
                <span>REACT</span>
                <span> HTML </span>{" "}
              </h4>
            </div>
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default Home;
