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
      <div className="absolute bg-white inset-0 m-5 p-6 flex-col gap-3 justify-center items-start hidden group-hover:flex transition-all duration-300 ease-in-out">
        <div className="flex gap-8 items-center">
          <AiOutlineZoomIn size={40} className="hover:text-[#756aee]"/>
          <span className="text-xl text-[#756aee] hover:opacity-75">{title}</span>
        </div>
        <div className="text-justify text-black">
          We work hard on every app to deliver top-notch features with great UI
          that you won't find anywhere else.
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
