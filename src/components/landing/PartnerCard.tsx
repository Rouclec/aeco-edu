import Image from "next/image";
import React, { FC } from "react";

const PartnerCard: FC = () => {
  return (
    <div className="grid self-center shadow-lg border-[1px] hover:border-[var(--secondary-400)] hover:cursor-pointer transition-transform duration-500">
      <div className="flex border-b-2 p-4 gap-2 items-center w-[50%]">
        <Image
          src="/assets/berlin_school.jpeg"
          width={42}
          height={48}
          alt="logo"
          className="w-full"
        />
        <p className="font-inter uppercase text-sm">Partner name</p>
      </div>
      <Image src="/assets/hero.png" height={480} width={560} alt="cover" />
      <div className="grid p-4 px-6">
        <p className="py-2 font-inter font-bold text-xl text-[var(--neutral-600)">
          Lorem ipsum dolor sit amet consectetur
        </p>
        <p className="font-inter text-sm text-[var(--neutral-600)] overflow-hidden whitespace-normal line-clamp-3 truncate">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          obcaecati, velit aspernatur repudiandae accusantium tempore excepturi
          temporibus! Iure animi debitis, aspernatur odit atque nemo
          perspiciatis blanditiis. Perferendis iure a culpa.
        </p>
        <button className="btn-primary w-[80%] text-[12px] lg:text-[15px] p-4  mt-8 mb-2">Learn more</button>
      </div>
    </div>
  );
};

export default PartnerCard;
