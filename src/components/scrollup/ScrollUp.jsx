import React from 'react';
import './scrollup.css';
import { RiArrowDropUpFill } from "react-icons/ri";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  return (
    <a href="#" className="scrollup"><RiArrowDropUpFill className="scrollup__icon" /></a>
  );
}

export default ScrollUp;