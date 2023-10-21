import Image from "next/image";
import React, { FC } from "react";

const PartnerCard: FC = () => {
  return (
    <div className="grid self-center shadow-lg border-[1px] hover:-translate-y-1 hover:shodow-sm hover:cursor-pointer transition-all duration-500">
      <div className="flex border-b-1 p-4 pt-6 gap-2 items-center w-full">
        <Image
          src="/assets/berlin_school.jpeg"
          width={32}
          height={48}
          alt="logo"
          className="w-12"
        />
        <p className="font-inter font-semibold text-[var(--neutral-500)] text-[16px] leading-[18px]">
          Partner name
        </p>
      </div>
      <div
        className="w-full h-48 bg-cover"
        style={{ backgroundImage: `url("/assets/hero.png")` }}
      />
      <div className="grid p-4 px-6">
        <p className="py-2 font-inter font-bold text-[20px] leading-6 text-[var(--neutral-600)">
          Lorem ipsum dolor sit amet consectetur
        </p>
        <p className="font-inter text-[15px] text-[var(--neutral-600)] overflow-hidden whitespace-normal line-clamp-3 truncate">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          obcaecati, velit aspernatur repudiandae accusantium tempore excepturi
          temporibus! Iure animi debitis, aspernatur odit atque nemo
          perspiciatis blanditiis. Perferendis iure a culpa.
        </p>
        <button className="btn-primary w-[80%] text-[12px] lg:text-[15px] p-4  mt-4 mb-3">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default PartnerCard;
