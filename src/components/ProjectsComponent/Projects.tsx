import ProjectsCard from "./ProjectsCard";
import FinStep from "../../assets/ProjectsImages/Project1.jpg";
import MobileFinance from "../../assets/ProjectsImages/Project2.jpg";
import QManage from "../../assets/ProjectsImages/Project3.jpg";
import WearherCast from "../../assets/ProjectsImages/Project4.jpg";
import HomeCalender from "../../assets/ProjectsImages/Project5.jpg";
import MPlanner from "../../assets/ProjectsImages/Project6.jpg";
import AliceMessenger from "../../assets/ProjectsImages/Project7.jpg";
import WiseMoney from "../../assets/ProjectsImages/Project8.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRef } from "react";

const Projects = () => {
  const menuRef = useRef<HTMLUListElement | null>(null);

  const openMenu = () => {
    if (menuRef.current) {
      if (menuRef.current.style.display === "none")
        menuRef.current.style.display = "flex";
      else menuRef.current.style.display = "none";
    }
  };

  const ProjectsCategory = [
    ["MOBILE APPS"],
    ["CUSTOM SOFTWARE"],
    ["QA & TESTING"],
    ["UX AND DESIGN"],
  ];

  const ProjectCards = [
    [FinStep, "FinStep"],
    [MobileFinance, "Mobile Finance"],
    [QManage, "Q-Manage"],
    [WearherCast, "WearherCast"],
    [HomeCalender, "Home Calender"],
    [MPlanner, "MPlanner"],
    [AliceMessenger, "Alice Messenger"],
    [WiseMoney, "WiseMoney"],
  ];

  return (
    <div className="py-20 px-10 flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="font-semibold text-4xl">Latest Projects</div>
        <div className="w-2/5 md:w-2/3 sm:w-full  text-center font-normal">
          In our portfolio, you can browse the latest products developed for our
          clients for different corporate purposes. Our qualified team of
          interface designers and software developers is always ready to create
          something unique for you.
        </div>
      </div>
      <div className="w-full flex flex-col gap-10">
        <div className="relative w-full flex md:flex-col justify-center items-center">
          <div
            className="border items-center gap-2 w-fit px-6 py-3  tracking-wide hidden md:flex"
            onClick={openMenu}
          >
            FILTER <IoMdArrowDropdown />
          </div>
          <ul
            className="flex md:flex-col md:shadow-xl md:absolute md:-bottom-56 md:z-10 md:px-8 md:py-4 md:hidden bg-white md:gap-3 cursor-pointer justify-center"
            ref={menuRef}
          >
            <li
              className="bg-white text-primary text-lg font-medium px-4 tracking-widest"
              key={0}
            >
              ALL
            </li>
            {ProjectsCategory.map((item, index) => (
              <li
                className="bg-white border-l-2 md:border-none px-4 text-neutral text-lg font-medium hover:text-primary tracking-widest"
                key={index + 1}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 md:grid-cols-1 items-center justify-center gap-x-4 gap-y-10">
          {ProjectCards.map((item, index) => (
            <ProjectsCard ProjectImg={item[0]} title={item[1]} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
