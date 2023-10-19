import React, { FC, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

const PartnersLogo: FC = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: 0,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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
    <div className="w-[96vw]">
      <Slider {...settings} ref={sliderRef}>
        {partnerLogos.map((partner, index) => {
          return (
            <div
              className="grid h-36 items-center justify-center   rounded-lg"
              key={index}
            >
              <div className="w-[80%] h-[80%]  m-auto my-4 grid">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={96}
                  height={64}
                  className="m-auto self-center"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PartnersLogo;
