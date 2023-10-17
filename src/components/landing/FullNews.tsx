import Link from "next/link";
import React, { FC } from "react";

const FullNews: FC = () => {
  return (
    <div className="grid">
      <div className="overflow-hidden w-full h-64 relative">
        <div
          className="absolute inset-0 bg-cover bg-center grid transition-transform duration-500 hover:scale-110"
          style={{ backgroundImage: `url("/assets/work_overseas.jpeg")` }}
        />
      </div>
      <div className="grid gap-4 p-4 bg-[var(--neutral-100)]">
        <p className="text-[var(--neutral-400)] font-inter text-[15px] font-bold">Date: 17/10/23</p>
        <p className="text-[var(--neutral-600)] font-inter text-xl font-bold">Lorem ipsum, dolor sit amet consectetur.</p>
        <p className="text-[var(--neutral-600)] font-inter font-[500] text-[15px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo tempore
          impedit nostrum ab rerum temporibus repellendus fugit aut quas, at
          dolor itaque ratione perspiciatis quia, provident odio atque quo
          beatae.
        </p>
        <Link className="btn-link" href={"/"}>Learn more</Link>
      </div>
    </div>
  );
};

export default FullNews;
