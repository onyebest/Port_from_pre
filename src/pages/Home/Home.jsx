import React from "react";
import Navbar from "../../component/Navbar";
import { Link } from "react-router-dom";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import "./Home.css";
import CTA from "../../component/CTA";

const Home = () => {
  return (
    <div className='hero__section'>
      <Navbar />
      <div className='hero'>
        <div className='hero__content'>
          <div className='hero__template__1'>
            <h5>Full Stack Developer</h5>
            <h4>SAMUEL ONYEBUCHI</h4>
            <h6>
              I'm a dedicated full stack developer with a passion for crafting
              innovative web solutions. From designing engaging front-end
              interfaces to building efficient back-end systems, I thrive on
              creating seamless user experiences
            </h6>
            <div className='hire'>
              <Link to={"mailto:samuelegbo126@gmail.com"}>Hire Me</Link>
              <CTA />
            </div>

            <div className='links'>
              <div className='link'>
                <Link
                  to='https://m.me/profile.php?id=100086762701172'
                  target='_blank'
                >
                  <FaFacebookMessenger />
                </Link>
                <Link to='mailto:samuelegbo126@gmail.com' target='_blank'>
                  <BiLogoGmail />
                </Link>
                <Link
                  to='https://api.whatsapp.com/send?phone=+2349067277274'
                  target='_blank'
                >
                  <FaWhatsapp />
                </Link>
              </div>
            </div>
          </div>

          <div className='hero__template__2'></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
