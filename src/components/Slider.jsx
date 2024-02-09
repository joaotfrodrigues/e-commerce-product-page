import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// SWIPER IMAGES
import slide1 from "../images/image-product-1.jpg";
import slide2 from "../images/image-product-2.jpg";
import slide3 from "../images/image-product-3.jpg";
import slide4 from "../images/image-product-4.jpg";

function Slider(props) {
    
    const handleSlideChange = (swiper) => {
        props.setSwiper(swiper);
        const currentIndex = swiper.realIndex;
        props.setSwiper(swiper);

        props.setSelectedItem(currentIndex);
    };

    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={25}
            slidesPerView={1}
            loop={true}
            onSwiper={(swiper) => {
                handleSlideChange(swiper);
                return swiper = props.swiper;
            }}
            onSlideChange={(swiper) => handleSlideChange(swiper)}
            onClick={ props.toggleFunction ? props.toggleFunction : null }
        >

            <SwiperSlide><img src={slide1} alt=""></img></SwiperSlide>
            <SwiperSlide><img src={slide2} alt=""></img></SwiperSlide>
            <SwiperSlide><img src={slide3} alt=""></img></SwiperSlide>
            <SwiperSlide><img src={slide4} alt=""></img></SwiperSlide>
        </Swiper>
    );
}

function SliderNavigation(props) {
    return (
        <div className="navigationItem relative flex align-items-center" id={`slide${props.id}`}>
            <input type="image" alt="" onClick={props.changeSlide} className={`navigationBtn ${props.selected ? 'inputSelected' : ''}`} src={props.src} name={props.id} />
            <div className={props.selected ? "itemSelected absolute" : "absolute"}></div>
        </div>
    );
}

export { Slider, SliderNavigation };