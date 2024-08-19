import React from "react";
import { Link } from "react-router-dom";

import "../../styles/About/About.scss";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about__container">
          <div className="about__header" id="about__heading">
            <h1 data-aos="fade-down" data-aos-delay="0" data-aos-offset="20">
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                A
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                B
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                O
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                U
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                T
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
            <p></p>
          </div>

          <div className="about__details-container">
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-once="true"
            >
              <Link to="/about/intro">
                <h1>
                  0<span>1</span>
                </h1>
                <h2>
                  H<span>ello,</span>
                </h2>
                <p>
                  I am <span>Ehtasham Al Noman.</span> <br /> Highly passoinate
                  Software Developer
                </p>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <Link to="/about/experience">
                <h1>
                  0<span>2</span>
                </h1>
                <h2>
                  E<span>xperience</span>
                </h2>
                <p>
                  <span>1.5 years of experience.</span>
                  <br />I have experience in developing highly responsive
                  full-stack websites and mobile apps using HTML5, CSS,
                  JavaScript, React.js, Next.js, ReactMUI, TailwindCSS, Figma,
                  Vue.js, PHP, Java, MySQL, Firebase, Express, and Solidity
                </p>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="50"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <Link to="/about/internships">
                <h1>
                  0<span>3</span>
                </h1>
                <h2>
                  I<span>nternships</span>
                </h2>
                <p>
                  <span>
                    I am currently doing an internship at Advanced Robotics Systems (ARS) as a Front End Developer.
                  </span>{" "}
                  <br />
                </p>
                
                <ul>
                {/*
                  <li>
                    <span>Advanced Robotics Systems (ARS)</span> - Front-end Developer{" "}
                  </li>
                  <li>
                    <span>XYZ Pvt Ltd</span> - Front-end Developer{" "}
                  </li>
                  <li>
                    <span>XYZ Pvt Ltd</span> - Front-end Developer{" "}
                  </li>
                  */}
                </ul>
                
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="700"
              data-aos-once="true"
            >
              <Link to="/about/graduation">
                <h1>
                  0<span>4</span>
                </h1>
                <h2>
                  E<span>ngineering</span>
                </h2>
                <p>
                  <span>Universiti Teknologi Malaysia </span>
                  <br />
                  Universiti Teknologi Malaysia (UTM) has provided me with a
                  robust foundation in Computer Science, specializing in
                  Software Engineering. The university's rigorous curriculum and
                  state-of-the-art facilities have enabled me to gain in-depth
                  knowledge and practical experience in various programming
                  languages and technologies.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
