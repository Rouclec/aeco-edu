import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  partner: {
    image: string;
    logo: string;
    name: string;
    tag: string;
    body: string;
    link: string;
  };
};
const PartnerCard: FC<Props> = ({ partner }) => {
  return (
    <div className="grid h-[590px] self-center shadow-lg border-[1px] hover:-translate-y-1 hover:shodow-sm hover:cursor-pointer transition-all duration-500">
      <div className="flex border-b-1 p-4 pt-6 gap-2 items-center w-full">
        <Image
          src={partner.logo}
          width={32}
          height={32}
          alt="logo"
          className={"w-12"}
        />
        <p className="font-inter font-semibold text-[var(--neutral-500)] text-[16px] leading-[18px]">
          {partner.name}
        </p>
      </div>
      <div
        className="w-full h-48 bg-cover"
        style={{ backgroundImage: `url("/assets/hero.png")` }}
      />
      <div className="grid p-4 px-6">
        <p className="py-2 font-inter font-bold text-[20px] leading-6 text-[var(--neutral-600)">
          {partner.tag}
        </p>
        <p className="font-inter text-[15px] text-[var(--neutral-600)] overflow-hidden whitespace-normal line-clamp-5 truncate">
          {partner.body}
        </p>
        <Link
          className="btn-primary w-[80%] text-[12px] lg:text-[15px] p-4  mt-4 mb-3"
          href={partner.link}
          target="_blank"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default PartnerCard;
