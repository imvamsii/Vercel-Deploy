import React from 'react';
import { HiBattery100 } from "react-icons/hi2";
import { BsLaptop } from "react-icons/bs";
import { TbFileSymlink } from "react-icons/tb";


const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <BsLaptop className="about__icon" />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2½ years</span>
      </div>
      <div className="about__box">
        <TbFileSymlink className="about__icon" />
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10+ Projects</span>
      </div>
      <div className="about__box">
        <HiBattery100 className="about__icon" />
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
}

export default Info;