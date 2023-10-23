import React, { FC, useEffect, useRef } from "react";
import Slider from "react-slick";
import Testimonial from "./Testimonial";
import ServiceCard from "./ServiceCard";
import Image from "next/image";

const testimonials = [
  {
    name: "Mbah Nelly Widin",
    image: "/assets/Nelly.jpeg",
    university: "Greenwhich University",
    program: "Msc. International Business",
    rating: 5,
    message:
      "I am thrileld to share my incredible experience with AECO Education! \nGetting addmission into a UK university had always been a daunting task for me, but AECO Education made it an effortless journey.",
  },
  {
    name: "Stephanie Njikang",
    image: "/assets/Rita_1.jpeg",
    university: "BPP University",
    program: "MSc. Project management",
    rating: 5,
    message:
      "After several struggles, it finally happened with the help of AECO Education. I got my visa to the UK special thanks to AECO Education. \nI will recommend you to the world! You gave me a guaranteed future.",
  },
  {
    name: "Himan Sumda Mboli",
    image: "/assets/Hilman_1.jpeg",
    university: "University of Dundee",
    program: "BSc. International Business",
    rating: 4.5,
    message:
      "I'm in the UK today all thanks to AECO Education. They guided me througout my travel process and was a success \nTheir procedure is very simple and stress free trust me. UK to the world",
  },
  {
    name: "Michel Dirane",
    image: "/assets/michel_1.jpeg",
    university: "C3S Business School, Barcelona",
    program: "Business Management",
    rating: 5,
    message:
      "I had my way to C3S Business school in Barcelona thanks to AECO. With Aeco I didn't just get a smooth process through my application, I also got well orientated about the program I had chosen. Thank you again for taking me through.",
  },
  {
    name: "Brandom Chefon",
    image: "/assets/brandom_1.jpeg",
    university: "Texila American University, Zambia",
    program: "Doctor of Medicine",
    rating: 4.5,
    message:
      "I was recommended to trust AECO which I did and today I would say it was worth it. To everyone one out there if you're looking for the one trusted education placement agency, consult with AECO. Their procedure is stress free.",
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
        {testimonials.map((testimonial, index) => {
          return (
            <div
              className="grid h-full items-center justify-center   rounded-lg"
              key={index}
            >
              <div className="w-[95%]  m-auto my-4 grid">
                <Testimonial testimonial={testimonial} />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonials;
