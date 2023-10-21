import React, { FC, useEffect, useRef } from "react";
import Slider from "react-slick";
import Testimonial from "./Testimonial";
import ServiceCard from "./ServiceCard";
import Image from "next/image";

const partnerLogos = [
  {
    name: "Avila University USA",
    image: "/assets/avila.png",
  },
  {
    name: "Berlin School of Business and Innovation",
    image: "/assets/berlin.png",
  },
  {
    name: "Elmira College, USA",
    image: "/assets/elmira.png",
  },
  {
    name: "Global College Malta",
    image: "/assets/global_college_malta.png",
  },
  {
    name: "Norquest College, Canada",
    image: "/assets/norquest.png",
  },
  {
    name: "Opuvia",
    image: "/assets/opuvia.png",
  },
  {
    name: "St. Alessandro University Institute",
    image: "/assets/sau.png",
  },
  {
    name: "Texila American University",
    image: "/assets/texila.png",
  },
  {
    name: "Trebas Institute Canada",
    image: "/assets/trebas.png",
  },
];

type ArrowProps = {
  type: string;
};
const Arrow: FC<ArrowProps> = ({ type }) => {
  return <div className="w-10 h-10 bg-red-900 rounded-full"></div>;
};
const Testimonials: FC = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: 0,
    // nextArrow: <Arrow type="next" />,
    // prevArrow: <Arrow type="prev" />,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          //   dots: true,
        },
      },
      {
        breakpoint: 975,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 864,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null) as any;

  useEffect(() => {
    const slider = sliderRef.current;
    const interval = setInterval(() => {
      if (slider) {
        slider.slickNext();
      }
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-screen px-4 md:px-6 lg:px-[34px]">
      <Slider {...settings} ref={sliderRef}>
        {partnerLogos.map((partner, index) => {
          return (
            <div
              className="grid h-full items-center justify-center   rounded-lg"
              key={index}
            >
              <div className="w-[95%]  m-auto my-4 grid">
                <Testimonial />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonials;
