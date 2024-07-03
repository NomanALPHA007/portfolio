import React from "react";

import "../../../styles/About/Route/Experience.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <>
      <div className="experience">
        <div className="experience__container">
          <div className="experience__header">
            <h2 className="experience__number">
              0<span>2</span>
            </h2>
            <h1 data-aos="fade-down" data-aos-offset="0">
              E<span>xperience</span>.
            </h1>
          </div>
          <div className="experience__description">
            <div className="experience__main-box">
              <div className="experience__box">
                <h2>
                  Google Developer Student Club (GDSC) at University Technology
                  Malaysia
                </h2>
                <h3>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="experience__calendar"
                  />
                  &nbsp; &nbsp;05/02/2024 - PRESENT
                </h3>
                <ul>
                  <p>Responsible for -</p>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <span>
                      As a member of the Google Developer Student Club (GDSC) at
                      University Technology Malaysia, I have actively
                      participated in various projects and hackathons, enhancing
                      my technical skills and community engagement. I have
                      collaborated with peers to develop innovative solutions,
                      leveraging my expertise in HTML, CSS, JavaScript, React,
                      and other technologies. My role has involved both
                      front-end and back-end development, ensuring robust and
                      user-friendly applications. Additionally, I have
                      contributed to knowledge-sharing sessions, promoting best
                      practices in software development. This experience has
                      significantly strengthened my problem-solving abilities
                      and teamwork skills.
                    </span>
                  </li>
                </ul>
              </div>

              {/* You can put this repeated code as a child component similar to internship.js  */}
              <div className="experience__box">
                <h2>
                  International Student Society Bangladesh UTM – Website,
                  Multimedia, and Sports Team
                </h2>
                <h3>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="experience__calendar"
                  />
                  &nbsp; &nbsp;07/01/2022 - PRESENT
                </h3>
                <ul>
                  <p>Responsible for -</p>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-offset="-5000"
                  >
                    <span>
                      As a member of ISS-Bangladesh at University Technology
                      Malaysia, I am actively involved in developing and
                      maintaining the society's website, contributing to
                      multimedia content creation, and organizing sports events.
                      Utilizing my skills in HTML, CSS, JavaScript, and React, I
                      have helped design a user-friendly website that
                      effectively showcases the society's mission. Additionally,
                      I produce high-quality graphics and videos for our digital
                      media platforms. My role in organizing sports events has
                      strengthened my organizational and communication skills.
                      This experience has enhanced my technical abilities and my
                      capacity for teamwork and community engagement.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
