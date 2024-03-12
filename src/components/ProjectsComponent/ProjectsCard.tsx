import { FC } from "react";
import { ProjectsCardProps } from "../../inteface";
import { AiOutlineZoomIn } from "react-icons/ai";

const ProjectsCard: FC<ProjectsCardProps> = ({ ProjectImg, title }) => {
  return (
    <div className="relative w-fit p-0 cursor-pointer group">
      <div
        className="h-fit w-fit bg-no-repeat bg-contain bg-center transition duration-300 ease-in-out relative cursor-pointer"
        style={{
          backgroundImage: `url(${ProjectImg})`,
          width: "355px",
          height: "296px",
        }}
      ></div>
      <div className="absolute bg-white lg:inset-0 md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:right-1/2 md:w-fit md:h-fit md:p-2 md:m-0 m-5 p-6 flex-col gap-3 justify-center items-start hidden group-hover:flex transition-all duration-300 ease-in-out">
        <div className="flex gap-5 items-center md:px-2">
          <AiOutlineZoomIn size={40} className="hover:text-primary"/>
          <span className="text-xl text-primary hover:opacity-75 whitespace-nowrap">{title}</span>
        </div>
        <div className="text-justify text-black md:hidden">
          We work hard on every app to deliver top-notch features with great UI
          that you won't find anywhere else.
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;