import React from "react";

import "../../../styles/About/Route/Intro.scss";
const Intro = () => {
  return (
    <>
      <div className="about-intro">
        <div className="about-intro__container">
          <div className="about-intro__header">
            <h2 className="about-intro__number">
              0<span>1</span>
            </h2>
            <h1 data-aos="fade-down" data-aos-offset="0">
              H<span>ello</span>.
            </h1>
          </div>
          <div className="about-intro__description">
            <p data-aos="fade-right">
              I am <span>Ehtasham Al Noman</span>
            </p>
            <p data-aos="fade-right" data-aos-delay="200">
              I enjoy building websites and always enthusiastic about creating
              new front-stack features.
            </p>
            <p data-aos="fade-right" data-aos-delay="400">
              As a dedicated Computer Science Software Engineering student at
              University Technology Malaysia, I have developed a comprehensive
              understanding of various programming languages and technologies,
              including HTML5, CSS, JavaScript, React.js, Next.js, Firebase,
              Express, Solidity, C++, Java, PHP, and web3 technologies
            </p>
            <p data-aos="fade-right" data-aos-delay="600">
              My academic pursuits and project experiences have instilled a
              strong commitment to writing clean, efficient, and maintainable
              code. I possess a deep proficiency in project management and
              version control systems, particularly Git and GitHub, which has
              enabled me to contribute effectively to both independent and
              team-based projects. My organized and collaborative approach is
              complemented by excellent communication and analytical skills,
              which I leverage to address complex problems and ensure the
              success of each project I undertake.
            </p>
            {/*
            <p data-aos="fade-right" data-aos-delay="800">
              Add few more lines if required...
            </p>
*/}
            <div className="about-intro__emoji">:&nbsp;)</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
