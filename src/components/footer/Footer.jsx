import React from 'react';
import "./footer.css";
import { SiHashnode } from 'react-icons/si';
import { RiCodepenLine } from 'react-icons/ri';
import { BiLogoInstagram } from "react-icons/bi";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Vamsi Krishna</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#certifications" className="footer__link">Certifications</a>
                    </li>
                </ul>

                <div className="footer__social">

                    <a href="https://instagram.com/imvamsii" className="home__social-icon" target="_blank" rel="noreferrer">
                        <BiLogoInstagram />
                    </a>

                    <a href="https://hashnode.com/imvamsii" className="home__social-icon" target="_blank" rel="noreferrer">
                        <SiHashnode />
                    </a>


                    <a href="https://www.codingninjas.com/studio/profile/b8b82053-1695-4954-a422-86950465efb0" className="home__social-icon" target="_blank" rel="noreferrer" >
                        <RiCodepenLine />
                    </a>
                </div>
                <span className="footer__copy">  &#169;VK.Complete Control Asserted</span>
            </div>
        </footer>
    );
}

export default Footer;