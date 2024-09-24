import React from "react";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { BiLogoLinkedin } from "react-icons/bi";



const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/in/vamsiikrishna" className="home__social-icon" target="_blank">
                <BiLogoLinkedin />
            </a>
            <a href="https://leetcode.com/imvamsii/" className="home__social-icon" target="_blank">
                <SiLeetcode />
            </a>
            <a href="https://github.com/imvamsii" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>

        </div>
    );
}

export default Social;