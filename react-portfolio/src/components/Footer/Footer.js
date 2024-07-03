import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Footer/Footer.scss";
import FooterImage from "../../assets/images/Footer.png"; // Import the image correctly

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <img src={FooterImage} alt="Footer" className="footer__image" />{" "}
          {/* Use the imported image */}
          <p>
            Thank you <FontAwesomeIcon icon={faHeart} size="sm" /> for visiting
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
