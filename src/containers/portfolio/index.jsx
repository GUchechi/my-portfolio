import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
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
    id: 1, 
    name: "Palour Beauty App",
    image: image1,
    link: "",
  },
  {
    id: 2,
    name: "Movie App",
    link: "",
    image: image2,
  },
  {
    id: 3,
    name: "Gym App",
    image: image3,
    link: "",
  },
  {
    id: 4,
    name: "Google Momentum App",
    image: image4,

    link: "",
  },
  {
    id: 5,
    name: "Dad's Joke App",
    image: image5,
    link: "",
  },
  {
    id: 6,
    name: "Notes App",
    image: image6,
    link: "",
  },
  {
    id: 7,
    name: "GMord website",
    image: image7,
    link: "",
  },
  {
    id: 8,
    name: "GitHub Finder App",
    image: image8,
    link: "",
  },
  {
    id: 9,
    name: "Random Quotes App",
    image: image9,
    link: "",
  },
  {
    id: 10,
    name: "Quiz App",
    image: image10,
    link: "",
  },
  {
    id: 11,
    name: "Theme-Clock",
    image: image11,
    link: "",
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
    setHoveredValue(index)
  }

  console.log(hoveredValue)

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
          {
            portfolioData.map((item, index) => (
              <div className="portfolio__content__cards__item" key={item.id}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className="portfolio__content__cards__item__img-wrapper" >
                  <a>
                    <img alt="dummy data" src={item.image} />
                  </a>
                </div>
                <div className="overlay">
                  {
                    index === hoveredValue && (
                      <div>
                        <p>{item.value}</p>
                        <button>Visit</button>
                      </div>
                    )
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
