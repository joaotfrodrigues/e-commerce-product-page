import React, { useState } from "react";
import { Slider, SliderNavigation } from "./Slider";

/* IMAGES */
import slide1 from "../images/image-product-1.jpg";
import slide2 from "../images/image-product-2.jpg";
import slide3 from "../images/image-product-3.jpg";
import slide4 from "../images/image-product-4.jpg";

import close from "../images/icon-close.svg";
import prev from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";

const slides = [slide1, slide2, slide3, slide4];

function ProductSwiper() {
    const [swiper, setSwiper] = useState(0);
    const [selectedItem, setSelectedItem] = useState(0);
    const [fullScreenSwiper, setFullScreenSwiper] = useState(false);

    function changeSlide(event) {
        const newIndex = event.target.name;

        swiper.slideTo(newIndex);
        setSwiper(swiper);
        
        setSelectedItem(newIndex);
    }

    function toggleFsSwiper() {
        setFullScreenSwiper(!fullScreenSwiper);
        if (window.innerWidth < 867) setFullScreenSwiper(false);
    }

    function handlePrev() {
        swiper.slidePrev();
    }

    function handleNext() {
        swiper.slideNext();
    }
    
    return (
        <div className="swiperContainer">
            <div className="fullScreenSwiper flex align-items-center" style={{display: fullScreenSwiper ? "flex" : "none"}}>
                <div className="fsSwiperContainer flex align-items-center relative">
                    <img onClick={toggleFsSwiper} className="fsSwiperClose pointer" src={close} alt="" />
                    <div className="fsSwiper relative">
                        <button className="fsSwiperController pointer flex align-items-center absolute fsSwiperPrev" onClick={handlePrev}><img src={prev} alt="" /></button>
                        <div className="fsSwiperWrapper">
                            <Slider
                                setSwiper={setSwiper}
                                setSelectedItem={setSelectedItem}
                                navigation={true}
                                swiper={swiper}
                            />
                        </div>
                        <button className="fsSwiperController pointer flex align-items-center absolute fsSwiperNext" onClick={handleNext}><img src={next} alt="" /></button>
                    </div>
                    <div className="fsSwiperNavigation flex align-items-center relative">
                    {[0, 1, 2, 3].map((index) => (
                        <SliderNavigation
                            src={slides[index]}
                            key={index}
                            id={index}
                            changeSlide={changeSlide}
                            selected={parseInt(selectedItem) === index}
                        />
                    ))}
                    </div>
                </div>
            </div>
            <div className="swiperBigImage pointer relative">
                <button className="fsSwiperController pointer flex align-items-center absolute fsSwiperPrev" style={{display: "none", left: "15px"}} onClick={handlePrev}><img src={prev} alt="" /></button>
                <Slider
                    setSwiper={setSwiper}
                    setSelectedItem={setSelectedItem}
                    toggleFunction={toggleFsSwiper}
                    swiper={swiper}
                />
                <button className="fsSwiperController pointer flex align-items-center absolute fsSwiperNext" style={{display: "none", right: "15px"}} onClick={handleNext}><img src={next} alt="" /></button>
            </div>
            <div className="swiperNavigation flex">
                {[0, 1, 2, 3].map((index) => (
                    <SliderNavigation
                        src={slides[index]}
                        key={index}
                        id={index}
                        changeSlide={changeSlide}
                        selected={parseInt(selectedItem) === index}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductSwiper;