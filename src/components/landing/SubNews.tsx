import Link from "next/link";
import React, { FC } from "react";

const SubNews: FC = () => {
  return (
    <div className="grid">
      <div className="overflow-hidden w-full h-64 relative">
        <div
          className="absolute inset-0 bg-cover bg-center grid transition-transform duration-500 hover:scale-110"
          style={{ backgroundImage: `url("/assets/study_abrod.jpeg")` }}
        >
          <div className="grid p-4 gap-2 bg-tranparent self-end">
            <p className="text-[var(--neutral-10)] font-inter text-xl font-bold">
              Lorem ipsum, dolor sit amet consectetur.
            </p>
            <Link className="btn-link" href={"/"}>
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNews;
