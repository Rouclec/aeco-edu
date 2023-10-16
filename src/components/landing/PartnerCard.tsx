import React, { FC } from "react";

const PartnerCard: FC = () => {
  return (
    <div className="grid shadow-lg w-80 border-[1px]">
      <div className="flex border-b-2 py-2 px-4">
        <button className="btn-tetiary">first button</button>
      </div>
      <img src="/assets/hero.png" height={204} width={"auto"} />
      <div className="grid p-4">
        <p className="py-2 font-inter font-bold text-xl text-[var(--neutral-600)">
          Lorem ipsum dolor sit amet consectetur
        </p>
        <p className="py-4 font-inter text-sm text-[var(--neutral-600)]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam rerum
          nisi soluta repellendus numquam maiores, minima delectus nihil, saepe
          nemo voluptate quos impedit eaque vitae ipsa consequatur officia
          natus. Est?
        </p>
        <button className="btn-primary w-[70%]">Learn more</button>
      </div>
    </div>
  );
};

export default PartnerCard;
