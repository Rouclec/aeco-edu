import { FC, useState } from "react";

const Card: FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    console.log("mouse has entered");
    !isFlipped && setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    console.log("mouse is leaving");
    isFlipped && setIsFlipped(false);
  };

  return (
    <div
      className={`card ${isFlipped ? "rotate-y-180" : "-rotate-y-180"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isFlipped && (
        <div className="front">
          <div
            className="bg-cover bg-center w-full h-full overflow-hidden rounded-lg grid items-end"
            style={{ backgroundImage: `url("/assets/study_abrod.jpeg")` }}
          >
            <div className="p-4 text-[var(--tetiary-500)] font-inter">
              <p className="text-2xl font-bold">Name</p>
              <p className="text-xl">Title</p>
            </div>
          </div>
        </div>
      )}
      {isFlipped && (
        <div className="w-full h-full bg-[var(--neutral-100)] rounded-lg p-4 shadow-sm overflow-y-scroll">
          <div className="rotate-y-180 transform duration-600 overflow-y-auto">
            <p className="font-inter text-lg leading-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              VoluptasLorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptas laudantium earum soluta provident iusto quisquam
              voluptates laborum maiores facere corporis minus repudiandae
              tempore, ab voluptatibus quidem nulla veniam sunt facilis.
              laudantium earum soluta provident iusto quisquam voluptates
              laborum maiores facere corporis minus repudiandae tempore, ab
              voluptatibus quidem nulla veniam sunt facilis. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Voluptas laudantium earum
              soluta provident iusto quisquam voluptates laborum maiores facere
              corporis minus repudiandae tempore, ab voluptatibus quidem nulla
              veniam sunt facilis.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
