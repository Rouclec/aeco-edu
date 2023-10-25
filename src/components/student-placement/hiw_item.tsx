import React, { FC } from "react";
import { HiChevronRight } from "react-icons/hi2";

type Props = {
  item: {
    title: string;
    body: string;
  };
};
const HIWItem: FC<Props> = ({ item }) => {
  return (
    <div className="grid">
      <div className="flex gap-2 items-center">
        <HiChevronRight className="text-lg font-semibold" />
        <p className="font-inter text-lg font-semibold">{item.title}</p>
      </div>
      <div className="mx-6 my-2">
        <p className="font-inter">{item.body}</p>
      </div>
    </div>
  );
};

export default HIWItem;
