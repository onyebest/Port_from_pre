import React from "react";
import "./Project.css";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { BiLogoPython } from "react-icons/bi";
import { FaAngular } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import Navbar from "../../component/Navbar";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className='project__container'>
      <Navbar />
      <div className='pro__container__content'>
        <div className='top__text'>Projects</div>
        <div className='template'>
          <div className='template__card'>
            <div className='card'>
              <AiFillHtml5 color='#e34c26' className='icon' />
              <h4>
                <Link to={"https://samrealestate.netlify.app"} color='#3C8EFC'>
                  Real Estate Website
                </Link>
              </h4>
              <h6>
                Real estate involves the buying, selling, and leasing of
                properties
              </h6>
            </div>
          </div>
          <div className='template__card'>
            <div className='card'>
              <FaReact color='#61DBFB' className='icon' />
              <h4>
                <Link>Portfolio</Link>
              </h4>
              <h6>collection that showcases an individual's</h6>
            </div>
          </div>
          <div className='template__card'>
            <div className='card'>
              <BiLogoPython color=' #FFD43B' className='icon' />
              <h4>
                <Link to={"https://samportfile.netlify.app"}>
                  SamsPortflolio
                </Link>
              </h4>
              <h6>
                provides SAM representation of his capabilities, expertise, and
                creative accomplishments
              </h6>
            </div>
          </div>
          <div className='template__card'>
            <div className='card'>
              <FaAngular color='#dd1b16' className='icon' />
              <h4>
                <Link to={"https://samuelcaluclator.netlify.app"}>
                  Calculator
                </Link>
              </h4>
              <h6>
                It simplifies complex computations, ranging from basic
                arithmetic to advanced mathematical functions
              </h6>
            </div>
          </div>
          <div className='template__card'>
            <div className='card'>
              <DiJavascript1 color='#F0DB4F' className='icon' />
              <h4>
                <Link to={"https://samuelcaluclator.netlify.app"}>
                  CuteBeautyBar
                </Link>
              </h4>
              <h6>
                With a focus on enhancing individual charm, CuteBeautyBar
                delivers a delightful and transformative experience
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
