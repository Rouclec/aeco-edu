import Link from "next/link";
import React, { FC } from "react";
import { BsArrowRight } from "react-icons/bs";

type Props = {
  news: {
    title: string;
    date: string;
    image: string;
    body: string;
  };
};

const SubNews: FC<Props> = ({ news }) => {
  return (
    <div className="grid">
      <div className="overflow-hidden w-full h-64 relative hover:cursor-pointer">
        <div
          className="absolute inset-0 bg-cover bg-center grid transition-transform duration-500 hover:scale-110"
          style={{
            backgroundImage: `url(${news.image})`,
          }}
        >
          <div className="grid inset-0 bg-[#00000027] hover:[*>&]:p-2 [*>&]:transition-all [*>&]:duration-500">
            <div className="grid p-1 md:p-4 gap-2 bg-transparent self-end w-full">
              <p className="text-[var(--neutral-10)] font-inter text-sm md:text-[20px] leading-6 font-bold">
                {news.title}
              </p>
              <div className="flex gap-2 items-center">
                <Link className="btn-link mt-2 md:mt-0" href={"/"}>
                  Learn more
                </Link>
                <BsArrowRight
                  size={24}
                  className="text-center text-[var(--secondary-500)] font-bold font-inter text-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNews;
