import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Study abroad",
    tag: "Export our study abroad programmes",
    image: "/assets/study_abrod.jpeg",
    link: "/",
  },
  {
    title: "Language prepration",
    tag: "Unlock a world of opportunities with language preparation",
    image: "/assets/language_prep.jpeg",
    link: "/",
  },
  {
    title: "Work overseas",
    tag: "Unlock new opportunities by working overseas",
    image: "/assets/work_overseas.jpeg",
    link: "/",
  },
];
const Services: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // arrows: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {services.map((service, index) => {
          return (
            <div className="w-[32vw]" key={index}>
              <ServiceCard service={service} top={!!((index + 1) % 2 === 0)} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Services;
