import Link from "next/link";
import React, { FC } from "react";

const Testimonial: FC = () => {
  return (
    <div className="grid">
      <div className="overflow-hidden w-full  h-48 relative">
        <div
          className="absolute inset-0 bg-cover bg-center grid transition-transform duration-500"
          style={{ backgroundImage: `url("/assets/work_overseas.jpeg")` }}
        />
      </div>
      <div className="flex flex-col justify-between py-4 px-1 bg-[var(--neutral-10)]">
        <div className="grid gap-y-6">
          <div className="grid ">
            <p className="text-[var(--neutral-600)] font-inter font-light text-justify text-[15px] mb-4">
              {`"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              tempore impedit nostrum ab rerum temporibus repellendus fugit aut
              quas, at dolor itaque ratione perspiciatis quia, provident odio
              atque quo beatae."`}
            </p>
            <hr />
            <p className="mt-2 px-2 italic"> - Aeco Edu admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
