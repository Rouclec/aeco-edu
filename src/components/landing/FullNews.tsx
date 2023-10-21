import Link from "next/link";
import React, { FC } from "react";
import { BsArrowRight } from "react-icons/bs";

const FullNews: FC = () => {
  return (
    <div className="grid md:flex md:flex-col">
      <div className="overflow-hidden w-full relative h-60 md:flex-1 md:flex-grow">
        <div
          className="absolute inset-0 bg-cover bg-center grid transition-transform duration-500 hover:scale-110"
          style={{ backgroundImage: `url("/assets/work_overseas.jpeg")` }}
        />
      </div>
      <div className="flex flex-col h-fit justify-between p-4 bg-[var(--neutral-100)]">
        <div className="grid gap-4">
          <p className="text-[var(--neutral-400)] font-inter text-[15px] font-bold">
            Date: 17/10/23
          </p>
          <div className="grid gap-3">
            <p className="text-[var(--neutral-600)] font-inter text-xl font-bold">
              Lorem ipsum, dolor sit amet consectetur.
            </p>
            <p className="text-[var(--neutral-600)] font-inter font-[500] text-[15px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              tempore impedit nostrum ab rerum temporibus repellendus fugit aut
              quas, at dolor itaque ratione perspiciatis quia, provident odio
              atque quo beatae.
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Link className="btn-link w-fit my-3" href={"/"}>
            Learn more
          </Link>
          <BsArrowRight
            size={24}
            className="text-center text-[var(--secondary-500)] font-bold font-inter text-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FullNews;
