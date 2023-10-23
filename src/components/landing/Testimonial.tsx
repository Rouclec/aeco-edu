import Link from "next/link";
import React, { FC } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

type Props = {
  testimonial: {
    name: string;
    image: string;
    message: string;
    rating: number;
    university: string;
    program: string;
  };
};

const Testimonial: FC<Props> = ({ testimonial }) => {
  const { rating } = testimonial;
  const whole = Math.floor(rating);
  const decimal = rating - whole;
  return (
    <div className="grid">
      <div className="overflow-hidden w-full  h-48 relative">
        <div
          className="absolute inset-0 bg-cover bg-center grid transition-transform duration-500 rounded-t-sm"
          style={{ backgroundImage: `url(${testimonial.image})` }}
        />
      </div>
      <div className="flex flex-col justify-between py-8 px-8 bg-[var(--secondary-700)] rounded-b-sm">
        <div className="grid gap-y-6">
          <div className="grid ">
            <p className="text-[var(--neutral-10)] font-inter font-semibold text-lg mb-4">
              {`"${testimonial.message}"`}
            </p>
            <hr />
            <div className="flex mt-2 gap-8 items-center justify-between">
              <p className="mt-2 px-2 italic text-[var(--neutral-10)]">
                {testimonial.name}
              </p>
              <div className="flex gap-2">
                {Array(whole)
                  .fill("a")
                  .map((_, index) => (
                    <BsStarFill
                      size={18}
                      key={index}
                      className="text-[var(--neutral-10)]"
                    />
                  ))}
                {decimal !== 0 && (
                  <BsStarHalf size={18} className="text-[var(--neutral-10)]" />
                )}
              </div>
            </div>
            <div>
              <p className="mt-2 px-2 font-[550] font-inter italic text-[var(--neutral-10)]">
                {testimonial.university} <br />({testimonial.program})
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
