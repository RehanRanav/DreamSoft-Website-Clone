import ProjectsCard from "./ProjectsCard";
import Project1 from "../../assets/ProjectsImages/Project1.jpg";
import Project2 from "../../assets/ProjectsImages/Project2.jpg";
import Project3 from "../../assets/ProjectsImages/Project3.jpg";
import Project4 from "../../assets/ProjectsImages/Project4.jpg";
import Project5 from "../../assets/ProjectsImages/Project5.jpg";
import Project6 from "../../assets/ProjectsImages/Project6.jpg";
import Project7 from "../../assets/ProjectsImages/Project7.jpg";
import Project8 from "../../assets/ProjectsImages/Project8.jpg";

const Projects = () => {
  const ProjectsCategory = [
    ["MOBILE APPS"],
    ["CUSTOM SOFTWARE"],
    ["QA & TESTING"],
    ["UX AND DESIGN"],
  ];

  const ProjectCards = [
    [Project1, "FinStep"],
    [Project2, "Mobile Finance"],
    [Project3, "Q-Manage"],
    [Project4, "WearherCast"],
    [Project5, "Home Calender"],
    [Project6, "MPlanner"],
    [Project7, "Alice Messenger"],
    [Project8, "WiseMoney"],
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
        <div className="w-full flex justify-center items-center">
          <ul className="flex cursor-pointer justify-center">
            <li
              className="bg-white text-[#756aee] text-lg font-medium px-4 tracking-widest"
              key={0}
            >
              ALL
            </li>
            {ProjectsCategory.map((item, index) => (
              <li
                className="bg-white border-l-2 px-4 text-stone-400 text-lg font-medium hover:text-[#756aee] tracking-widest"
                key={index + 1}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 justify-center gap-x-4 gap-y-10">
          {ProjectCards.map((item, index) => (
            <ProjectsCard ProjectImg={item[0]} title={item[1]} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
