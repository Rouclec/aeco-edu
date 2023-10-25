import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect, useRef, useState } from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMenu,
} from "react-icons/ai";
import { VscLocation } from "react-icons/vsc";
import {
  HiOutlineChevronDown,
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
    name: "Student Placement",
    subs: [
      {
        name: "Local Student Placement",
        link: "/student-placement/local",
      },
      {
        name: "Study Abroad",
        link: "/student-placement/study-abroad",
      },
      {
        name: "Online Studies",
        link: "/student-placement/online-studies",
      },
    ],
  },
  {
    name: "Pathways",
    subs: [
      {
        name: "International Year Programme",
        link: "/pathways/international-year-programme",
      },
      {
        name: "Partner Pathways",
        link: "/pathways/partner-pathways",
      },
    ],
  },
  {
    name: "Language education",
    subs: [
      {
        name: "Exam Preparations",
        link: "/language-education/exam-preparation",
      },
      {
        name: "Language Trainings",
        link: "/language-education/language-trainings",
      },
    ],
  },
  {
    name: "Education services",
    subs: [
      {
        name: "School Management Systems",
        link: "/education-services/school-management-system",
      },
      {
        name: "Partnership development",
        link: "/education-services/partnership-development",
      },
      {
        name: "Student recruitment",
        link: "/education-services/student-recruitment",
      },
    ],
  },
];

const bottomNavItems = [
  {
    name: "Aeco Education",
    subs: [
      {
        name: "About Us",
        link: "/about",
      },
      {
        name: "Careers",
        link: "/careers",
      },
      {
        name: "News",
        link: "/news",
      },
      {
        name: "FAQ",
        link: "/faq",
      },
    ],
  },
  {
    name: "Resources",
    subs: [
      {
        name: "Entry Requirements",
        link: "/entry-requirements",
      },
      {
        name: "Partner With Us",
        link: "/partner-with-us",
      },
      {
        name: "Course Finder",
        link: "/course-finder",
      },
      {
        name: "Admissions",
        link: "/admission",
      },
    ],
  },
  {
    name: "Legal",
    subs: [
      {
        name: "Anti Slavery & Human Trafficking",
        link: "/anti-slavery-human-trafficking",
      },
      {
        name: "Student Protection Plan",
        link: "/student-protection-plan",
      },
      {
        name: "Policies & Statements",
        link: "/policies-statements",
      },
      {
        name: "Refund Policy",
        link: "/refund-policy",
      },
    ],
  },
];

const others = [
  {
    name: "User Portal",
    link: "https://aeco.ams4you.net/amslogin.html",
    new: "tab",
  },
  {
    name: "Apply Now",
    link: "/apply",
  },
];

const TopNav: FC<Props> = ({ children }) => {
  const router = useRouter();
  const [active, setActive] = useState("/");
  const [cursorIn, setCursorIn] = useState(-1);
  const [hoveredNav, setHoveredNav] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const path = router.pathname;

  const buttonRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activePath = path.split("/")[1];
    activePath === "" ? setActive("/") : setActive(activePath);
  }, [path]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="fixed top-0 right-0 left-0 h-24 bg-[var(--tetiary-500)] px-4 md:px-8 lg:px-14 z-[99999]">
        <div className="h-full w-full flex relative items-center justify-between">
          <div>
            <Image
              src={"/assets/logo.png"}
              alt={"Logo"}
              width={120}
              height={64}
              className="w-24 md:w-32"
            />
          </div>
          <div className="gap-8 items-center hidden md:flex">
            <div className="flex gap-3">
              <Link
                href={"https://www.facebook.com/aecoeducation"}
                target="_blank"
              >
                <AiOutlineFacebook className="text-2xl text-[var(--neutral-600)] hover:cursor-pointer hover:text-[var(--facebook)] transition-transform duration-500 hover:scale-110 relative" />
              </Link>
              <Link
                href={
                  "https://instagram.com/aecoeducation?igshid=NTc4MTIwNjQ2YQ=="
                }
                target="_blank"
              >
                <AiOutlineInstagram className="text-2xl text-[var(--neutral-600)] hover:cursor-pointer hover:text-[var(--instagram)] transition-transform duration-500 hover:scale-110 relative" />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/showcase/aeco-education-services/"
                }
                target="_blank"
              >
                <AiOutlineLinkedin className="text-2xl text-[var(--neutral-600)] hover:cursor-pointer hover:text-[var(--linkedin)] transition-transform duration-500 hover:scale-110 relative" />
              </Link>
            </div>
            <div className="flex gap-2">
              <Link
                href={"https://aeco.ams4you.net/amslogin.html"}
                target="_blank"
                className="btn-primary"
              >
                User Portal
              </Link>
              <Link className="btn-secondary" href={"/apply"}>
                Apply
              </Link>
            </div>
          </div>
          <div
            className="flex md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            ref={buttonRef}
          >
            <AiOutlineMenu className="text-3xl hover:cursor-pointer" />
          </div>
        </div>
        {menuOpen && (
          <div
            className="md:hidden absolute left-0 right-0 w-full bg-[var(--neutral-100)] py-4"
            ref={menuRef}
          >
            {navItems.map((item, index) => {
              return (
                <div
                  className="mb-4 border-b border-[var(--neutral-300)]"
                  key={index}
                >
                  <div
                    className="flex gap-2 mb-2 items-center px-4 hover:cursor-pointer"
                    onClick={() =>
                      active === item.name
                        ? setActive("/")
                        : setActive(item.name)
                    }
                  >
                    <p
                      className={`${
                        active === item.name &&
                        "text-[var(--primary-500)] font-[500]"
                      }`}
                    >
                      {item.name}
                    </p>
                    {item.subs.length > 0 && (
                      <HiOutlineChevronDown
                        className={`${
                          active === item.name &&
                          "text-[var(--primary-500)] font-[500]"
                        }`}
                      />
                    )}
                  </div>
                  {active === item.name && item.subs.length > 0 && (
                    <div className="mt-3 bg-gray-200 border-t border-[var(--neutral-300)]">
                      {item.subs.map((sub, index) => {
                        return (
                          <div
                            key={index}
                            className=" border-b-[1px] p-4 border-[var(--neutral-200)]"
                          >
                            <Link href={sub.link} className="pb-4">
                              {sub.name}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            {others.map((item, index) => {
              return (
                <div
                  className="mb-4 border-b border-[var(--neutral-300)]"
                  key={index}
                >
                  <div
                    className="flex gap-2 mb-2 items-center px-4 hover:cursor-pointer"
                    onClick={() =>
                      active === item.name
                        ? setActive("/")
                        : setActive(item.name)
                    }
                  >
                    <Link
                      href={item.link}
                      target={item.new === "tab" ? "_blank" : "_parent"}
                      className={`${
                        active === item.name &&
                        "text-[var(--primary-500)] font-[500]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="hidden md:block  fixed top-24 right-0 left-0 h-16 bg-[var(--neutral-10)] px-8 lg:px-10 z-[99999]">
        <div className="flex w-full h-full items-center justify-between">
          <div className="flex items-center">
            {navItems.map((item, index) => {
              const pathName = item.name.toLowerCase().split(" ").join("-");
              return (
                <div
                  key={index}
                  className={`relative flex px-4 h-16 items-center gap-[1px] lg:gap-[3px] justify-center hover:cursor-pointer hover:active-nav ${
                    pathName === "home" && active === "/"
                      ? "active-nav"
                      : pathName === active
                      ? "active-nav"
                      : "[&>*]:font-[500]"
                  } overflow-visible`}
                  onMouseEnter={() => setHoveredNav(item.name)}
                  onMouseLeave={() => setHoveredNav("")}
                  onClick={() =>
                    item.name.toLocaleLowerCase() === "home" && router.push("/")
                  }
                >
                  <p className="font-inter uppercase truncate text-[12px] lg:text-[16px] text-[var(--neutral-600)]">
                    {item.name}
                  </p>
                  {item.subs.length > 0 && (
                    <HiOutlineChevronDown className="" />
                  )}
                  {hoveredNav === item.name && item.subs.length > 0 && (
                    <div
                      className={`absolute top-16 bg-[#fffffff6] -left-4 lg:left-0 min-w-full ${
                        item.name.toLowerCase() === "pathways" ||
                        item.name.toLowerCase() === "education services"
                          ? "w-[28vw] lg:w-[20vw]"
                          : "w-full"
                      } p-4 rounded-sm transition-transform duration-500`}
                    >
                      {item.subs.map((sub, index) => (
                        <Link href={sub.link} key={index}>
                          <p className="text-sm font-inter truncate w-fit font-light transition-all duration-500 py-2 hover:font-semibold">
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
      <main className="mt-24 md:mt-40">{children}</main>
      <div className="bottom-0 right-0 left-0 bg-[var(--primary-800)] text-[var(--tetiary-500)] px-14 py-12 z-[99999]">
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
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 gap-x-2 md:gap-x-10 lg:gap-x-28 gap-y-10">
            <div className="grid gap-2 col-span-2 mt-8 [&>*]:hover:cursor-pointer">
              <a
                className="relative flex gap-3 w-fit hover:text-[var(--secondary-500)]"
                href="tel:+237650663001"
                onMouseEnter={() => setCursorIn(0)}
                onMouseLeave={() => setCursorIn(-1)}
              >
                <HiOutlinePhone size={24} className="text-[#b8bec0]" />
                <p className="relative text-[#b8bec0] font-inter">
                  (+237) 650 663 001{" "}
                  <span
                    className={`absolute -bottom-0 left-[2px] w-[90%] ${
                      cursorIn === 0 ? "scale-x-10" : "scale-x-0"
                    } h-[2px] bg-[var(--secondary-500)] transform transition-transform duration-500 origin-left`}
                  />
                </p>
              </a>
              <a
                className="flex gap-3 w-fit hover:text-[var(--secondary-500)]"
                href="mailto:info@aecoedu.com"
                onMouseEnter={() => setCursorIn(1)}
                onMouseLeave={() => setCursorIn(-1)}
              >
                <HiOutlineEnvelope size={24} className="text-[#b8bec0]" />
                <p className="relative text-[#b8bec0] font-inter">
                  info@aecoedu.com
                  <span
                    className={`absolute -bottom-0 left-[2px] w-[90%] ${
                      cursorIn === 1 ? "scale-x-10" : "scale-x-0"
                    } h-[2px] bg-[var(--secondary-500)] transform transition-transform duration-500 origin-left`}
                  />
                </p>
              </a>
              <a
                className="flex gap-3 w-fit hover:text-[var(--secondary-500)]"
                onMouseEnter={() => setCursorIn(2)}
                onMouseLeave={() => setCursorIn(-1)}
              >
                <VscLocation size={24} className="text-[#b8bec0]" />
                <p className="relative text-[#b8bec0] font-inter">
                  No. 237 Rue Dibombé{" "}
                  <span
                    className={`absolute -bottom-0 left-[2px] w-[90%] ${
                      cursorIn === 2 ? "scale-x-10" : "scale-x-0"
                    } h-[2px] bg-[var(--secondary-500)] transform transition-transform duration-500 origin-left`}
                  />
                </p>
              </a>
              <a
                className="flex gap-3 w-fit hover:text-[var(--secondary-500)]"
                onMouseEnter={() => setCursorIn(3)}
                onMouseLeave={() => setCursorIn(-1)}
              >
                <HiOutlineGlobeEuropeAfrica
                  size={24}
                  className="text-[#b8bec0]"
                />
                <p className="relative text-[#b8bec0] font-inter">
                  Douala, Cameroon{" "}
                  <span
                    className={`absolute -bottom-0 left-[2px] w-[90%] ${
                      cursorIn === 3 ? "scale-x-10" : "scale-x-0"
                    } h-[2px] bg-[var(--secondary-500)] transform transition-transform duration-500 origin-left`}
                  />
                </p>
              </a>
            </div>
            <div className="grid col-span-1 md:col-span-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
              {bottomNavItems.map((item, index) => {
                const unique = 4 * (index + 1);
                return (
                  <div
                    className="col-span-1 [&>*]:hover:cursor-pointer w-fit"
                    key={index}
                  >
                    <p className="mb-8 text-[var(--tetiary-500)] text-sm font-inter font-semibold">
                      {item.name.toUpperCase()}
                    </p>
                    <div className="grid gap-2">
                      {item.subs.map((sub, index) => {
                        return (
                          <div
                            className="flex gap-3 w-fit"
                            key={index}
                            onMouseEnter={() => setCursorIn(unique + index)}
                            onMouseLeave={() => setCursorIn(-1)}
                          >
                            <Link href={sub.link}>
                              <p className="relative text-[#b8bec0] font-inter hover:text-[var(--secondary-500)]">
                                {sub.name}
                                <span
                                  className={`absolute -bottom-0 left-[2px] w-[90%] ${
                                    cursorIn === unique + index
                                      ? "scale-x-10"
                                      : "scale-x-0"
                                  } h-[2px] bg-[var(--secondary-500)] transform transition-transform duration-500 origin-left`}
                                />
                              </p>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr className="mt-8 border-t-2 text-[var(--neutral-100)] opacity-70" />
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-5 lg:grid-cols-7 gap-x-2 md:gap-x-10 lg:gap-x-28 w-full items-center font-inter text-[var(--neutral-600)] [&>*]:hover:cursor-pointer p-2 mt-8">
          <a className="grid gap-2 col-span-2 text-[var(--secondary-300)] font-semibold font-inter">
            <p>Privacy Policy</p>
          </a>
          <div className="grid col-span-1 md:col-span-5 grid-cols-1 gap-y-6 lg:grid-cols-3">
            <Link
              className="text-[var(--secondary-300)] font-semibold font-inter"
              href={"/cookie-policy"}
            >
              <p>Cookie Policy</p>
            </Link>
            <Link
              className="text-[var(--secondary-300)] font-semibold font-inter"
              href={"/contact-us"}
            >
              <p>Contact Us</p>
            </Link>
            <Link
              className="text-[var(--secondary-300)] font-semibold font-inter"
              href={"/environmental-policies"}
            >
              <p>Environmental Policies</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
