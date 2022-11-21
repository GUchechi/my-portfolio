import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Njoku Godswill Uchendu",
  },

  {
    label: "Abuja",
    value: "Nigeria",
  },
  {
    label: "Email",
    value: "godswilluchendu7@gmail.com",
  },
  {
    label: "Contact No",
    value: "+2348142827949",
  },
];

const jobSummary =
  "A dynamic, hands-on, detail-oriented, and emerging front-end developer with 6 months of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. Very passionate about aesthetics and UI design. Solid reputation for diligence regarding project accuracy and enhanced end-user functionality. Able to effectively self-manage during independent projects and collaborate as part of a productive team.";

const About = () => {
  return (
    <section id="about" className="about">
    <PageHeaderContent
      headerText="About Me"
      icon={<BsInfoCircleFill size={40} />}
    />
    <div className="about__content">
      <div className="about__content__personalWrapper">
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(-900px)",
          }}
          end={{
            transform: "translatex(0px)",
          }}
        >
          <h3>Front End Developer</h3>
          <p>{jobSummary}</p>
        </Animate>

        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(500px)",
          }}
          end={{
            transform: "translatex(0px)",
          }}
        >
          <h3 className="personalInformationHeaderText">
            Personal Information
          </h3>
          <ul>
            {personalDetails.map((item, i) => (
              <li key={i}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>
              </li>
            ))}
          </ul>
        </Animate>
      </div>
      <div className="about__content__servicesWrapper">
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(600px)",
          }}
          end={{
            transform: "translatex(0px)",
          }}
        >
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaDev size={60} color="var( --yellow-theme-main-color)" />
            </div>
            <div>
              <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
            </div>
            <div>
              <DiApple size={60} color="var( --yellow-theme-main-color)" />
            </div>
          </div>
        </Animate>
      </div>
    </div>
  </section>
  );
};

export default About;
