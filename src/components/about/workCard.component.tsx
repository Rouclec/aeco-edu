import { FC } from "react";

const WorkCard: FC = () => {
  return (
    <div className={`card`}>
      <div className="front">
        <div
          className="bg-cover bg-center w-full h-full overflow-hidden rounded-lg grid items-end"
          style={{ backgroundImage: `url("/assets/study_abrod.jpeg")` }}
        >
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
