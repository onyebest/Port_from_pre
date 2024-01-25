import React from "react";
import { FaDownload } from "react-icons/fa";
import CV from "../../src/assest/CV/MyResume.pdf";
import "./CTA.css";

const CTA = () => {
  return (
    <div className='cta__container'>
      <a href={CV} download>
        Download CV <FaDownload className='icon' />{" "}
      </a>
    </div>
  );
};

export default CTA;
