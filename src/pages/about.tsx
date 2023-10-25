import { Card, TopNav, WorkCard } from "@/components";
import Link from "next/link";
import React, { FC } from "react";

const achievements = [
  {
    heading: "50,000",
    body: "students from 100 countries join our programmes annually",
  },
  {
    heading: "Seven",
    body: "University Partnerships in the UK, Europe and North America",
  },
  {
    heading: "30 Years",
    body: "delivering exceptional international education for students worldwide",
  },
  {
    heading: "One",
    body: "Global recruitment, admissions, operations and marketing engine",
  },
];

const missonVision = [
  {
    heading: "Our Mission",
    body: "We will deliver innovative, high-quality education and services to unlock opportunities, build trusted partnerships, and enable success for our students, people, partners, and communities worldwide.",
  },
  {
    heading: "Our Vision",
    body: "Through our Core Values and Mission Statement, we aim to deliver life-enhancing experiences to help students worldwide develop personally and profressionally, enriching their future opportunities.",
  },
];

type AchievementTypes = {
  heading: string;
  body: string;
};
const Achievement: FC<AchievementTypes> = ({ heading, body }) => {
  return (
    <div className="grid items-center justify-center gap-2">
      <p className="text-center text-[var(--secondary-500)] font-semibold font-inter">
        {heading}
      </p>
      <p className="text-center text-[var(--neutral-600)] text-[16px] font-inter">
        {body}
      </p>
    </div>
  );
};

const Mission: FC<AchievementTypes> = ({ heading, body }) => {
  return (
    <div className="grid gap-4">
      <p className="text-5xl font-bold text-[var(--neutral-600)] font-inter">
        {heading}
      </p>
      <p className="font-inter text-lg">{body}</p>
    </div>
  );
};

const Main: FC = () => {
  return (
    <TopNav>
      <div className="overflow-x-hidden">
        <div
          className="bg-cover bg-center w-full h-[50vh] overflow-hidden"
          style={{ backgroundImage: `url("/assets/hero.png")` }}
        >
          <div className="w-[80%] md:w-[40%] h-full grid items-center justify-center m-auto">
            <p className="text-4xl md:text-6xl font-inter font-bold text-[var(--neutral-10)]">
              Learning without Limits
            </p>
          </div>
        </div>
        <div className="my-16 border-b pb-16">
          <p className="mb-10 md:mb-16 text-center font-inter text-4xl md:text-5xl font-semibold text-[var(--neutral-600)]">
            We are AECO Education
          </p>
          <div className="mx-4 md:mx-20 grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-8">
            <div className="[&>*]:font-inter leading-6">
              <p>
                {
                  "Trusting an education agency with your future can be hard. We have been there, we know and hence AECO Education is on a mission to make quality education accessible since our inception in 2016. Our global footprints span over 50 countries and as you will discover we are truly different."
                }
              </p>
              <p>
                {
                  "Most of our Education Counselors have been international students at some point, so we understand what it's like to consider international studies."
                }
              </p>
              <br />
              <p>
                {
                  "At AECO Education, all our team members are highly experienced in tertiary study and hold appropriate qualifications for effective education counseling."
                }
              </p>
              <br />
              <p>
                {
                  "We work on your behalf as an independent reprelsentative of over 900 top universities and educational institutions across the globe which we've vetted; giving you a wide range of options backed by an intimate knowledge of each institution."
                }{" "}
              </p>
            </div>
            <div
              className="bg-cover bg-center w-full h-[40vh] md:h-[60vh] overflow-hidden rounded-lg"
              style={{ backgroundImage: `url("/assets/hero.png")` }}
            />
          </div>
        </div>
        <div className="border-b-2 border-gradient pt-4 pb-20 mb-16 grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-16 px-10 md:px-20">
          {achievements.map((achievement, index) => (
            <Achievement
              heading={achievement.heading}
              body={achievement.body}
              key={index}
            />
          ))}
        </div>
        <div className="border-b-2 border-gradient pt-4 pb-20 mb-16 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 px-10 md:px-20">
          {missonVision.map((misson, index) => (
            <Mission heading={misson.heading} body={misson.body} key={index} />
          ))}
        </div>
        <div className="mx-4 mb-20 pb-40 border-b-2 border-gradient">
          <p className="text-center mb-4 md:mb-8 font-inter text-4xl font-bold text-[var(--neutral-600)]">
            Our Team
          </p>
          <p className="text-center mb-12 md:w-[50%] m-auto font-inter text-xl">
            {
              "AECO Education is made up of a diverse group of staff who bring both experience and creativity to all that we do. Through constant ingenuity, curiosity, and ambition, we seek out opportunities that will help transform students' lives globally."
            }
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-10 md:px-20 pb-30 mt-12">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="mx-4 mb-40">
          <p className="text-center mb-4 md:mb-8 font-inter text-4xl font-bold text-[var(--neutral-600)]">
            Work with Us
          </p>
          <p className="text-center mb-12 md:w-[50%] m-auto font-inter text-xl">
            {
              "At AECO Education, we want to create life-enhancing learning opportunities for students across the world."
            }
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 px-10 md:px-20 pb-30 mt-12">
            <WorkCard />
            <div className="grid grid-cols-2 gap-4">
              <WorkCard />
              <WorkCard />
            </div>
          </div>
        </div>
      </div>
    </TopNav>
  );
};

export default Main;
