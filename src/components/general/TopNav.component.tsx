import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi2";

type Props = {
  children?: any;
};

const TopNav: FC<Props> = ({ children }) => {
  const router = useRouter();
  const [active, setActive] = useState("/");
  const path = router.pathname;
  console.log({ path });
  return (
    <div>
      <div className="fixed top-0 right-0 left-0 h-20 bg-[var(--tetiary-500)] px-14">
        <div className="h-full w-full flex items-center justify-between">
          <div>
            <Image
              src={"/assets/logo2.png"}
              alt={"Logo"}
              width={120}
              height={64}
            />
          </div>
          <div className="flex gap-8 items-center">
            <div className="flex gap-3">
              <AiOutlineFacebook className="text-2xl text-[var(--neutral-400)] hover:cursor-pointer hover:text-[var(--facebook)] transition-transform duration-500 hover:scale-110 relative" />
              <AiOutlineInstagram className="text-2xl text-[var(--neutral-400)] hover:cursor-pointer hover:text-[var(--instagram)] transition-transform duration-500 hover:scale-110 relative" />
              <AiOutlineLinkedin className="text-2xl text-[var(--neutral-400)] hover:cursor-pointer hover:text-[var(--linkedin)] transition-transform duration-500 hover:scale-110 relative" />
            </div>
            <div className="flex gap-2">
              <button className="btn-primary">User Portal</button>
              <button className="btn-secondary">Apply</button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-20 right-0 left-0 h-12 bg-[var(--neutral-10)] px-14">
        <div className="flex w-full h-full items-center justify-between">
          <div className="flex gap-2 items-center">
            <div
              className={`flex p-3 items-center gap-[1px] justify-center hover:cursor-pointer hover:active-nav ${
                active === "/" && "active-nav"
              }`}
            >
              <p className="uppercase font-inter text-[16px] text-[var(--neutral-600)]">
                Home
              </p>
            </div>
            <div
              className={`flex p-3 items-center gap-[1px] justify-center hover:cursor-pointer hover:active-nav`}
            >
              <p className="font-inter uppercase font-[500] text-[16px] text-[var(--neutral-600)]">
                Student placement
              </p>
              <HiOutlineChevronDown className="" />
            </div>
            <div
              className={`flex p-3 items-center gap-[1px] justify-center hover:cursor-pointer hover:active-nav`}
            >
              <p className="font-inter uppercase font-[500] text-[16px] text-[var(--neutral-600)]">
                Pathways
              </p>
              <HiOutlineChevronDown className="" />
            </div>
            <div
              className={`flex p-3 items-center gap-[1px] justify-center hover:cursor-pointer hover:active-nav`}
            >
              <p className="font-inter uppercase font-[500] text-[16px] text-[var(--neutral-600)]">
                Language education
              </p>
              <HiOutlineChevronDown className="" />
            </div>
            <div
              className={`flex p-3 items-center gap-[1px] justify-center hover:cursor-pointer hover:active-nav`}
            >
              <p className="font-inter uppercase font-[500] text-[16px] text-[var(--neutral-600)]">
                Education services
              </p>
              <HiOutlineChevronDown className="" />
            </div>
          </div>
        </div>
      </div>
      <main className="mt-32">{children}</main>
    </div>
  );
};

export default TopNav;
