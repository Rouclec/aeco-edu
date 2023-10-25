import { HIWItem, StudyLocation, TopNav } from "@/components";
import React, { FC } from "react";

const howItWorksItems = [
  {
    title: "Step 1: We listen to you",
    body: "Tell us about your education up to now, your interests and skill sets, as well as your preferred institute, course and location. We can suggest some great options as well as locations, and advise you on courses, career paths and possible financial assistance.",
  },
  {
    title: "Step 2: Then we work out the details",
    body: "Once we've worked out your personal and professional goals, we'll go into more details to find the universities and institutes that can offer your courses aligned with your career path and preferred destination. We'll check that you meet the entry requirements and talk about visa requirements at this stage.",
  },
  {
    title: "Step 3: Admission Processing",
    body: "We'll handle the application process. There's no need to worry about the paperwork, we'll take care of everything for you. We will submit the application on your behalf and liaise with your educational provider to make sure everything runs smoothly. All you need to do is ensure that you've got appropriate Transcripts, Certificates, enough financial resources, and that you meet any language requirements. We can help you with each of these as well if needed - just ask us in the initial consultation. \n\nWe are Fast, Reliable and high Experienced in handling applications into universities haven worked with both private and public universities in over 50 different countries in the world. Contact us for your admissions into that dream university of yours.",
  },
  {
    title: "Step 4: Visa Application Guidance",
    body: "We're here to support you.\n\nWhen it comes to visas, the process and outcomes can be very daunting for a lot of people. You need a team you can trust to give you the right guidance on documentation and process.\n\nWe will guide you on the documentation and process requirements for a study visa as well as ensure you meet all the requirements with your new course to stay visa compliant.\n\nAt AECO Education, we've got years of experience in handling visa applications. Requirements vary by country and change often. We are always updated about the changes and equipped to support you. While our counselors can guide you on general visa documents if you are managing your own application.",
  },
];
const Main: FC = () => {
  return (
    <TopNav>
      <div className="overflow-x-hidden">
        <div
          className="bg-cover bg-center w-full h-[50vh] overflow-hidden"
          style={{ backgroundImage: `url("/assets/hero.png")` }}
        />
        <div className="bg-[var(--neutral-100)] w-screen py-8 px-16 pt-12">
          <div className="grid w-[60%]">
            <p className="font-inter text-2xl mb-4">
              Studying Abroad can change the Way You see The World
            </p>
            <p className="font-inter text-[var(--neutral-600)] ">
              {
                "Study Abroad Programs give you the opportunity to experience the world as your classroom. Rather than picking things up from books and the internet, navigating a new landscape may open your eyes to culture, hisotry, a new language or your heritage. Studying Abroad opens the door to personal growth and discovery too. as you learn to say 'hello' in a foreign language, make friends, eat exciting new foods, it is bound to boost your confidence, teach you self-reliance and stretch the parameters of your comfort zone"
              }
            </p>
          </div>
          <div className="right-0 items-end justify-end flex">
            <div className="w-[50%] grid grid-cols-3 gap-4 md:mr-10 mt-10">
              {Array(6)
                .fill("a")
                .map((_, index) => (
                  <StudyLocation key={index} />
                ))}
            </div>
          </div>
        </div>
        <div className="py-12 mx-4 md:mx-10">
          <p>{"What Type Of Study Abroad Programs are there?"}</p>
          <p>
            {
              "You may have heard about studying overseas but are new to actually surfing this site. AECO Education has a fantasitc way for you to search for Study Abroad Programs by level, type and country. It's easy and visual so you won't get lost. We will walk you through it"
            }
          </p>
          <div>
            <p>{"Here's how it works"}</p>
            <div className="grid m-4 gap-y-6">
              {howItWorksItems.map((item, index) => (
                <HIWItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </TopNav>
  );
};

export default Main;
