import Link from "next/link";
import React, { FC } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Testimonial: FC = () => {
  return (
    <div className="grid ">
      <div className="overflow-hidden w-full  h-48 relative">
        <div
          className="absolute inset-0 bg-cover bg-center grid transition-transform duration-500 rounded-t-sm"
          style={{ backgroundImage: `url("/assets/work_overseas.jpeg")` }}
        />
      </div>
      <div className="flex flex-col justify-between py-8 px-8 bg-[var(--secondary-700)] rounded-b-sm">
        <div className="grid gap-y-6">
          <div className="grid ">
            <p className="text-[var(--neutral-10)] font-inter font-semibold text-lg mb-4">
              {`"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              tempore impedit nostrum ab rerum temporibus repellendus fugit aut
              quas, at dolor itaque ratione perspiciatis quia, provident odio
              atque quo beatae."`}
            </p>
            <hr />
            <div className="flex mt-2 gap-8 items-center justify-between">
              <p className="mt-2 px-2 italic text-[var(--neutral-10)]">
                Aeco Edu admin
              </p>
              <p className="text-[var(--neutral-10)]">
                <div className="flex gap-2">
                  <BsStarFill size={18} className="text-[var(--neutral-10)]" />
                  <BsStarFill size={18} className="text-[var(--neutral-10)]" />
                  <BsStarFill size={18} className="text-[var(--neutral-10)]" />
                  <BsStarFill size={18} className="text-[var(--neutral-10)]" />
                  <BsStarHalf size={18} className="text-[var(--neutral-10)]" />
                </div>
              </p>
            </div>
            <div>
              <p className="mt-2 px-2 font-[550] font-inter italic text-[var(--neutral-10)]">
                University (study program)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
