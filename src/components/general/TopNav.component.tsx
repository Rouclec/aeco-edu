import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { VscLocation } from "react-icons/vsc";
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineEnvelope,
  HiOutlineGlobeEuropeAfrica,
  HiOutlinePhone,
} from "react-icons/hi2";

type Props = {
  children?: any;
};

const navItems = [
  {
    name: "Home",
    subs: [],
  },
  {
    name: "Student placement",
    subs: [
      {
        name: "Study abroad",
        link: "/",
      },
      {
        name: "Local studies",
        link: "/",
      },
      {
        name: "Online studies",
        link: "/",
      },
    ],
  },
  {
    name: "Pathways",
    subs: [
      {
        name: "International year programme",
        link: "/",
      },
    ],
  },
  {
    name: "Language education",
    subs: [
      {
        name: "Language exam prep.",
        link: "/",
      },
      {
        name: "Language studies",
        link: "/",
      },
    ],
  },
  {
    name: "Education services",
    subs: [
      {
        name: "Integrated school platform",
        link: "/",
      },
      {
        name: "Partnership development",
        link: "/",
      },
      {
        name: "Student recruitment",
        link: "/",
      },
    ],
  },
];

const TopNav: FC<Props> = ({ children }) => {
  const router = useRouter();
  const [active, setActive] = useState("/");
  const [cursorIn, setCursorIn] = useState(-1);
  const [hoveredNav, setHoveredNav] = useState("");
  const path = router.pathname;
  return (
    <div>
      <div className="fixed top-0 right-0 left-0 h-24 bg-[var(--tetiary-500)] px-14 z-[99999]">
        <div className="h-full w-full flex items-center justify-between">
          <div>
            <Image
              src={"/assets/logo.png"}
              alt={"Logo"}
              width={120}
              height={64}
            />
          </div>
          <div className="flex gap-8 items-center">
            <div className="flex gap-3">
              <AiOutlineFacebook className="text-2xl text-[var(--neutral-600)] hover:cursor-pointer hover:text-[var(--facebook)] transition-transform duration-500 hover:scale-110 relative" />
              <AiOutlineInstagram className="text-2xl text-[var(--neutral-600)] hover:cursor-pointer hover:text-[var(--instagram)] transition-transform duration-500 hover:scale-110 relative" />
              <AiOutlineLinkedin className="text-2xl text-[var(--neutral-600)] hover:cursor-pointer hover:text-[var(--linkedin)] transition-transform duration-500 hover:scale-110 relative" />
            </div>
            <div className="flex gap-2">
              <button className="btn-primary">User Portal</button>
              <button className="btn-secondary">Apply</button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-24 right-0 left-0 h-12 bg-[var(--neutral-10)] px-14 z-[99999]">
        <div className="flex w-full h-full items-center justify-between">
          <div className="flex items-center">
            {navItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`relative flex py-3 px-4 items-center gap-[3px] justify-center hover:cursor-pointer hover:active-nav ${
                    item.name.toLowerCase() === "home"
                      ? "active-nav"
                      : "[&>*]:font-[500]"
                  }`}
                  onMouseEnter={() => setHoveredNav(item.name)}
                  onMouseLeave={() => setHoveredNav("")}
                >
                  <p className="font-inter uppercase text-[16px] text-[var(--neutral-600)]">
                    {item.name}
                  </p>
                  {item.subs.length > 0 && (
                    <HiOutlineChevronDown className="" />
                  )}
                  {hoveredNav === item.name && item.subs.length > 0 && (
                    <div className="absolute top-12 bg-[#fffffff6] w-full p-4 rounded-sm transition-transform duration-500">
                      {item.subs.map((sub, index) => (
                        <Link href={sub.link} key={index}>
                          <p className="text-sm font-inter w-fit font-light transition-all duration-500 py-2 hover:font-semibold">
                            {sub.name}
                          </p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <main className="mt-32 mb-24">{children}</main>
      <div className="bottom-0 right-0 left-0 bg-[var(--tetiary-500)] px-14 py-12 z-[99999]">
        <div className="w-full h-full gap-2">
          <div className=" items-center justify-center gap-4">
            <Link href={"/"}>
              <Image
                src={"/assets/brand_logo.png"}
                height={124}
                width={124}
                alt="brand"
              />
            </Link>
          </div>
          <div className="grid grid-cols-6 gap-x-8">
            <div className="grid gap-2 col-span-2 mt-8 [&>*]:hover:cursor-pointer">
              <a
                className="relative flex gap-3 w-fit"
                href="tel:+237650663001"
                onMouseEnter={() => setCursorIn(0)}
                onMouseLeave={() => setCursorIn(-1)}
              >
                <HiOutlinePhone size={24} />
                <p className="relative">
                  (+237) 650 663 001{" "}
                  <span
                    className={`absolute -bottom-0 left-[2px] w-[90%] ${
                      cursorIn === 0 ? "scale-x-10" : "scale-x-0"
                    } h-[2px] bg-[var(--neutral-800)] transform transition-transform duration-500 origin-left`}
                  />
                </p>
              </a>
              <a
                className="flex gap-3 w-fit"
                href="mailto:info@aecoedu.com"
                onMouseEnter={() => setCursorIn(1)}
                onMouseLeave={() => setCursorIn(-1)}
              >
                <HiOutlineEnvelope size={24} />
                <p className="relative">
                  info@aecoedu.com
                  <span
                    className={`absolute -bottom-0 left-[2px] w-[90%] ${
                      cursorIn === 1 ? "scale-x-10" : "scale-x-0"
                    } h-[2px] bg-[var(--neutral-800)] transform transition-transform duration-500 origin-left`}
                  />
                </p>
              </a>
              <a
                className="flex gap-3 w-fit"
                onMouseEnter={() => setCursorIn(2)}
                onMouseLeave={() => setCursorIn(-1)}
              >
                <VscLocation size={24} />
                <p className="relative">
                  No. 237 Rue Dibombé{" "}
                  <span
                    className={`absolute -bottom-0 left-[2px] w-[90%] ${
                      cursorIn === 2 ? "scale-x-10" : "scale-x-0"
                    } h-[2px] bg-[var(--neutral-800)] transform transition-transform duration-500 origin-left`}
                  />
                </p>
              </a>
              <a
                className="flex gap-3 w-fit"
                onMouseEnter={() => setCursorIn(3)}
                onMouseLeave={() => setCursorIn(-1)}
              >
                <HiOutlineGlobeEuropeAfrica size={24} />
                <p className="relative">
                  Douala, Cameroon{" "}
                  <span
                    className={`absolute -bottom-0 left-[2px] w-[90%] ${
                      cursorIn === 3 ? "scale-x-10" : "scale-x-0"
                    } h-[2px] bg-[var(--neutral-800)] transform transition-transform duration-500 origin-left`}
                  />
                </p>
              </a>
            </div>
            {navItems
              .filter((item) => item.name.toLowerCase() !== "home")
              .map((item, index) => {
                return (
                  <div
                    className="col-span-1 [&>*]:hover:cursor-pointer"
                    key={index}
                  >
                    <p className="mb-4 text-[var(--neutral-700)] text-sm font-inter font-semibold">
                      {item.name.toUpperCase()}
                    </p>
                    <div className="grid gap-4">
                      {item.subs.map((sub, index) => {
                        return (
                          <a className="flex gap-3" key={index}>
                            <Link href={sub.link}>
                              <p>{sub.name}</p>
                            </Link>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex w-full items-center justify-between font-inter text-[var(--neutral-600)] [&>*]:hover:cursor-pointer p-2 mt-8">
          <a className="flex gap-3">
            <p>Privacy policy</p>
          </a>
          <a className="flex gap-3">
            <p>Cookie Policy</p>
          </a>
          <a className="flex gap-3">
            <p>Contact us</p>
          </a>
          <a className="flex gap-3">
            <p>Opportunities</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
