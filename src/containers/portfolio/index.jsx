import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import image0 from "../../images/image0.png";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image02 from "../../images/image02.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import image5 from "../../images/image5.png";
import image6 from "../../images/image6.jpg";
import image7 from "../../images/image7.jpg";
import image8 from "../../images/image8.png";
import image9 from "../../images/image9.png";
import image10 from "../../images/image10.png";
import image11 from "../../images/image11.png";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 0,
    name: "Food App",
    image: image0,
    url: "food-app-two-ashen.vercel.app",
  },
  {
    id: 1,
    name: "Palour Beauty App",
    image: image1,
    url: "g-palour-app.vercel.app",
  },
  {
    id: 2,
    name: "Movie App",
    image: image2,
    url: "g-movie-app.vercel.app",
  },
  {
    id: 2,
    name: "Defi App",
    image: image02,
    url: "defi-website-sage.vercel.app/",
  },
  {
    id: 3,
    name: "Gym App",
    image: image3,
    url: "g-gym-fitness.vercel.app",
  },
  {
    id: 4,
    name: "Google Momentum App",
    image: image4,
    url: "g-google-momentum.vercel.app",
  },
  {
    id: 5,
    name: "Dad's Joke App",
    image: image5,
    url: "dad-joke-ruddy.vercel.app",
  },
  {
    id: 6,
    name: "Notes App",
    image: image6,
    url: "g-notes-app.vercel.app",
  },
  {
    id: 7,
    name: "GMord website",
    image: image7,
    url: "gmord-site.vercel.app",
  },
  {
    id: 8,
    name: "GitHub Finder App",
    image: image8,
    url: "github-profiles-guchechi.vercel.app",
  },
  {
    id: 9,
    name: "Random Quotes App",
    image: image9,
    url: "g-quotes.vercel.app",
  },
  {
    id: 10,
    name: "Quiz App",
    image: image10,
    url: "g-quiz-app.vercel.app",
  },
  {
    id: 11,
    name: "Theme-Clock",
    image: image11,
    url: "theme-clock-one.vercel.app",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "Projects",
  },
];

const Portfolio = () => {
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log(hoveredValue);

  return (
    <section className="portfolio" id="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li key={item.filterId}>{item.label}</li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {portfolioData.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={item.id}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    {/* <button>Visit</button> */}
                    <a href={"http://" + item.url} className="link">
                      <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
