import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "./Slide.css";

const Slide = ({ items, setCurrentBox }) => {
  const [active, setActive] = useState(0);
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  const handleActive = (e) => {
    if (setCurrentBox) {
      setCurrentBox(e.target.id);
    }
    setActive(e.target.id);
  };
  return (
    <div className="slide__wrapper">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map((item, index) => {
          return (
            <SwiperSlide
              className={`slide__item ${active == index && "active"}`}
              id={index}
              onClick={handleActive}
            >
              {capitalize(item)}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slide;
