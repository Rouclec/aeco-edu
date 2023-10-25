import { TopNav } from "@/components";
import React, { FC } from "react";

const Main: FC = () => {
  return (
    <TopNav>
      <div className="overflow-x-hidden">
        <div
          className="bg-cover bg-center w-full h-[50vh] overflow-hidden"
          style={{ backgroundImage: `url("/assets/hero.png")` }}
        />
        <div className="my-16 mx-4 md:mx-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-16">
            <div className="col-span-2">
              <p className="mb-12 uppercase text-[var(--neutral-600)] font-inter font-bold text-4xl lg:text-5xl">
                Local Student Placements
              </p>
              <p className={`font-inter text-justify text-[16px] leading-8`}>
                {
                  "Choosing a course to study or finding the right university can be daunting; with so many quality as well as fraudulent options available and numerous wonderful locations to live in while you do it."
                }
              </p>
              <br />
              <p className={`font-inter text-justify text-[16px] leading-8`}>
                {
                  "If you're not sure where to start, or if you think you know where you're going but want expert advice first, then speak to us before you engage."
                }
              </p>
              <br />
              <p className={`font-inter text-justify text-[16px] leading-8`}>
                {
                  "Our qualified and experienced education couselors would love to hear your story and help you develop a comprehensive plan to get you where you want to go. And with our extensive institutional relationships, we can help you confirm if you're looking at the right courses, university destination (or suggest alternatives if we know there's something better)."
                }
              </p>
              <br />
              <p className={`font-inter text-justify text-[16px] leading-8`}>
                {
                  "Not only are we going to help point you to the right direction, we will also handle the entire application and admission process for you as well as visa application process for those moving to foreign countries."
                }
              </p>
            </div>
            <div className="my-4 md:my-24">
              <div
                className="bg-cover bg-center w-full h-[50vh] overflow-hidden"
                style={{ backgroundImage: `url("/assets/hero.png")` }}
              />
            </div>
          </div>
          <div className="grid gap-6 my-12 bg-[var(--neutral-200)] py-4 rounded-sm w-[80%] m-auto">
            <p className="text-center text-[var(--neutral-700)] font-semibold font-inter text-xl">
              Student Placement FAQ Sheet
            </p>
            <p className="text-center font-inter text-xl text-[var(--neutral-600)] text-extralight">
              For more information, you can download a copy of our student
              placement FAQ sheet below
            </p>
            <button className="btn-tetiary w-fit m-auto p-4 rounded-lg">
              Download
            </button>
          </div>
        </div>
        <div className="w-screen p-16 bg-[var(--primary-400)] grid gap-4 items-center justify-center">
          <p className="text-2xl font-inter text-[var(--tetiary-500)] text-center">Ready to apply for student placement with us?</p>
          <button className="btn-tetiary w-fit m-auto p-4 rounded-lg">
            Apply
          </button>
        </div>
      </div>
    </TopNav>
  );
};

export default Main;
