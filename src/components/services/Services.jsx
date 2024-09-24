import React, { useState } from 'react';
import './services.css';
import { HiOutlineArrowSmRight, HiX } from 'react-icons/hi';
import { TbPencilMinus, TbFileCode, TbChecks } from "react-icons/tb";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <TbFileCode className="services__icon" />
                        <h3 className="services__title">Frontend Development </h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More
                        <HiOutlineArrowSmRight className="services__button-icon" />
                    </span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                            <h3 className="services__modal-title">User Interface development</h3>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <TbChecks className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        I develop the beautiful user interface.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <TbChecks className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Web page development.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <TbChecks className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Full Website development.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <TbChecks className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Responsive Web design.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <TbChecks className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Progressive Web Application.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <TbPencilMinus className="services__icon" />
                        <h3 className="services__title">Backend Development</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(2)}>
                        View More
                        <HiOutlineArrowSmRight className="services__button-icon" />
                    </span>
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                            <h3 className="services__modal-title">Server side development</h3>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <TbChecks className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        I develop backend for website.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <TbChecks className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Build reusable code and libraries for future use.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <TbChecks className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Scalable and efficient development solutions.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <TbChecks className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Optimize the application for better performance.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <TbChecks className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        API Development.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Services;