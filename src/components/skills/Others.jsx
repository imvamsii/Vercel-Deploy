import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title"> Other</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">SQL</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">AWS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                            <span className="skills__level">Beginner</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Linux</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">PL/SQL</h3>
                            <span className="skills__level">Beginner</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frontend;