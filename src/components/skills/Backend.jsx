import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">C++</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">DSA</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">LLD </h3>
                            <span className="skills__level">Beginner</span>
                        </div>
                    </div>

                    
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Java</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">SpringBoot</h3>
                            <span className="skills__level">Beginner</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Backend;