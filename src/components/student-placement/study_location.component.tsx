import React, { FC, useState } from "react";

type Props = {
  location: string;
  background: string;
};
const StudyLocation: FC = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="h-40 grid hover:cursor-pointer"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="overflow-hidden w-full h-full relative">
        <div
          className="absolute inset-0 bg-cover bg-center grid transition-transform duration-500"
          style={{
            backgroundImage: `url('/assets/study_abrod.jpeg')`,
          }}
        >
          <div className="relative grid inset-0 [*>&]:transition-all [*>&]:duration-500">
            <div className="grid z-[99] p-1 gap-2 self-start w-full bg-[#00050896]">
              <p className="text-center text-[var(--tetiary-500)] font-inter text-lg">
                Italy
              </p>
            </div>
            {show && (
              <div className="absolute inset-0 bg-[#cbcbcbdc] items-center justify-center flex">
                <p className="text-center font-inter font-light">
                  Rome | Milan | Turin
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyLocation;
