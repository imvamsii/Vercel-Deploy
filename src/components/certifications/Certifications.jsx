import React from 'react';
import "./certifications.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';

const Certifications = () => {
    return (
        <section className="testimonial container section" id="certifications">
            <h2 className="section__title">Certifications</h2>
            <span className="section__subtitle">I've done

            </span>
            <Swiper className="testimonial__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}

            >
                {Data.map(({ id, image }) => {
                    return (
                        <SwiperSlide className="testimonial__card" key={id}>
                            <div className="slider">
                                <div className='slides'>
                                    <img src={image} alt="client" className="testimonial__img" />
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};


export default Certifications;