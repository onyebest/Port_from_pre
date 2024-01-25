import React from "react";
import "./About.css";
import Image from "../../assest/port-image.png";
import Navbar from "../../component/Navbar";
import { Link } from "react-router-dom";
import CTA from "../../component/CTA";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <div className='about__container'>
      <Navbar />
      <div className='container__content'>
        <div className='content__1'>
          <div className='image'>
            <img src={Image} alt='' />
          </div>

          <h4>SAMUEL ONYEBUCHI</h4>
          <h5>Full Stack Developer</h5>

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

        <div className='content__2'>
          <div className='content'>
            <h4>HELLO</h4>
            <h5>
              I'm <span>SAMUEL ONYEBUCHI</span>
            </h5>
            <h6>
              My name is <span>Samuel Onyebuchi</span>, i'm a skilled full-stack
              programmer proficient in front-end technologies (HTML, CSS,
              JavaScript, React, Angular), back-end development (Node.js,
              Python, Ruby on Rails), database management, API development,
              DevOps, testing, and effective communication. He excels in
              problem-solving, continuous learning, and project management,
              delivering robust and user-friendly web applications.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
