import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles.scss"
import { Animate } from 'react-simple-animate'

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactPage = () => {
      navigate("/contact");
  }
  return (
    <div id='home' className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Godswill.
          <br />
          FrontEnd Developer
        </h1>
      </div>
      <Animate
        play
        duration={0.8}
        delay={0.7}
        start={{
          transform: "translateY(550px)",
        }}

        end={{
          transform: "translate(0px)"
        }}
      >
      <div className="home__contact-me">
        <button onClick={handleNavigateToContactPage }>Hire Me 🙏🏻</button>
      </div>
      </Animate>
    </div>
  )
}

export default Home;