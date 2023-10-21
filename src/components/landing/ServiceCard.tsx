import Link from "next/link";
import React, { FC, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

type Props = {
  service: {
    title: string;
    tag: string;
    image: string;
    link: string;
  };
  top: boolean;
};
const ServiceCard: FC<Props> = ({ service, top = true }) => {
  //   const [top, setTop] = useState(true);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      // className="relative w-[80vw] md:w-[45vw] lg:w-[30vw] h-[440px] shadow-sm overflow-hidden "
      className="relative mx-2 h-[440px] shadow-sm overflow-hidden "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 bg-cover bg-center grid transition-transform duration-500 hover:scale-110"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div
          className={`grid hover:cursor-pointer w-full h-fit items-center ${
            top ? "self-start top-0" : "self-end bottom-0"
          } right-0 left-0`}
        >
          {!top && (
            <span className="w-0 h-0 border-b-[24px] border-b-[#45220c63] self-center m-auto border-l-[24px] border-r-[24px] border-l-transparent border-r-transparent" />
          )}
          <div
            className={`relative w-full grid items-center transition-height justify-center ${
              isHovered ? "h-60" : "h-24"
            } bg-[#45220c63] duration-500 ease-out p-6`}
            style={{
              maxHeight: isHovered ? "15rem" : "6rem",
              overflow: "hidden",
              transition: "max-height 0.5s",
            }}
          >
            {top && (
              <div
                className={`absolute left-0 right-0 bottom-0 duration-700 ease-in-out ${
                  isHovered
                    ? "-translate-y-8"
                    : "-translate-y-[calc(100%+4rem)]"
                }`}
              >
                <div className="grid mx-8 my-2 self-center">
                  <p
                    className={`text-center text-[var(--neutral-10)] font-inter text-[15px] lg:leading-[22px] lg:text-[18px]`}
                  >
                    {service.tag}
                  </p>
                </div>
                <Link
                  href={service.link}
                  className="flex gap-2 items-center justify-center w-full"
                >
                  <p className=" text-center text-[var(--secondary-500)] font-bold font-inter text-xl">
                    Discover more
                  </p>
                  <BsArrowRight
                    size={24}
                    className="text-center text-[var(--secondary-500)] font-bold font-inter text-xl"
                  />
                </Link>
              </div>
            )}
            <p
              className={`uppercase text-center text-[var(--neutral-10)] font-inter font-extrabold text-lg lg:text-[24px] lg:leading-[30px] ${
                isHovered
                  ? top
                    ? "-translate-y-8"
                    : "-translate-y-16"
                  : "translate-y-0"
              }`}
            >
              {service.title}
            </p>
            {!top && (
              <div
                className={`absolute left-0 right-0 bottom-0 duration-700 ease-in-out ${
                  isHovered ? "-translate-y-16" : "translate-y-full"
                }`}
              >
                <div className="grid mx-8 my-2 self-center">
                  <p
                    className={`text-center text-[var(--neutral-10)] font-inter text-[15px] lg:leading-[22px] lg:text-[18px]`}
                  >
                    {service.tag}
                  </p>
                </div>
                <Link
                  href={service.link}
                  className="flex gap-2 items-center justify-center w-full"
                >
                  <p className=" text-center text-[var(--secondary-500)] font-bold font-inter text-xl">
                    Discover more
                  </p>
                  <BsArrowRight
                    size={24}
                    className="text-center text-[var(--secondary-500)] font-bold font-inter text-xl"
                  />
                </Link>
              </div>
            )}
          </div>
          {top && (
            <span className="w-0 h-0 border-t-[24px] border-t-[#45220c63] self-center m-auto border-l-[24px] border-r-[24px] border-l-transparent border-r-transparent" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
