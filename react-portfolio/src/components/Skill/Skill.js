import React, { useEffect } from "react";

// Importing TagCloud for  3D Rotating Text Sphere
import TagCloud from "TagCloud";

import "../../styles/Skill/Skill.scss";

const Skill = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    const container = ".tagcloud";
    let radii;

    // If 3D Text Sphere is not showing up after deployment remove the return (i.e, return() =>{}) function from below code
    return () => {
      const texts = [
        "HTML",
        "CSS",
        "MySQL",
        "JavaScript",
        "React",
        "PHP",
        "Java",
        "NodeJS",
        "Solidity",
        "Firebase",
        "TailwindCSS",
        "GIT",
        "Figma",
      ];

      // Decrasing 'radius' value for small screen devices
      function radiusValue() {
        if (window.screen.width <= 778) {
          radii = 150;
        } else {
          radii = 290;
        }
        return radii;
      }

      const options = {
        radius: radiusValue(),
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);
  return (
    <div className="skill">
      <div className="skill__main-container">
        <div className="skill__header" id="skill__heading">
          <h1>
            <span data-aos="fade-down" data-aos-delay="0" data-aos-offset="200">
              S
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-offset="200"
            >
              K
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-offset="200"
            >
              I
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="600"
              data-aos-offset="200"
            >
              L
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="800"
              data-aos-offset="200"
            >
              L
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="1000"
              data-aos-offset="200"
            >
              .
            </span>
          </h1>
        </div>
        <div className="skill__inner-container">
          <div className="skill__info">
            <div className="skill__details-container">
              <div className="skill__details">
                <h4>Front-End Development</h4>
                <ul>
                  <li>
                    <span>
                      <b>Languages & Tools:</b> HTML, CSS, JavaScript
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Frameworks & Libraries:</b> React.js, Next.js,
                      ReactMUI, TailwindCSS, Bootstrap
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Design Tools:</b> Figma
                    </span>
                  </li>
                  {/*
                  <li>
                    <span>
                      <b>Preprocessors:</b> PUG, SASS
                    </span>
                  </li>*/}
                </ul>
              </div>
              <div className="skill__details">
                <h4>Back-End Development</h4>
                <ul>
                  <li>
                    <span>
                      <b>Languages & Tools: </b> &nbsp; PHP, Java
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Frameworks & Libraries:</b> &nbsp; Node.js, Express.js
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Database Management:</b> &nbsp; MySQL, Firebase
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Server-Side Logic & API Integration:</b> &nbsp;
                      Experienced in server-side logic and API integration
                    </span>
                  </li>
                </ul>
              </div>
              <div className="skill__details">
                <h4>Programming Languages</h4>
                <ul>
                  <li>
                    <span>
                      <b>Languages: </b> &nbsp; C++, Python, HTML, CSS,
                      JavaScript, PHP, MySQL, Java, Solidity
                    </span>
                  </li>
                </ul>
              </div>

              <div className="skill__details">
                <h4>Version Control Systems</h4>
                <ul>
                  <li>
                    <span>GIT, GitHub</span>
                  </li>
                </ul>
              </div>

              <div className="skill__details">
                <h4>Software Proficiency</h4>
                <ul>
                  <li>
                    <span>
                      <b>Development & Project Management Tools: </b> &nbsp;
                      Visual Studio, Visual Studio Code, Spring Boot, PyCharm,
                      Eclipse, IntelliJ, GitHub Desktop, Clockify, Jira
                      Software, ClickUp Software, MS SQL Server 2019
                    </span>
                  </li>
                </ul>
              </div>

              <div className="skill__details">
                <h4>E-Commerce</h4>
                <ul>
                  <li>
                    <span>Shopify</span>
                  </li>
                </ul>
              </div>

              <div className="skill__details">
                <h4>Systems Utilization and Technology Skills</h4>
                <ul>
                  <li>
                    <span>
                      <b>Operating Systems: </b> &nbsp; Windows, Mac
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Software: </b> &nbsp; MS Office Suite (Word, Excel,
                      PowerPoint)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="skill__details">
                <h4>Server Side</h4>
                <ul>
                  <li>
                    <span>Node.js</span>
                  </li>
                  <li>
                    <span>Express.js</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3D Text Cloud */}
          <div className="skill__cloud">
            <div
              className="tagcloud"
              data-aos="zoom-in-up"
              data-aos-offset="200"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
