import ProjectsCard from "./ProjectsCard";
import FinStep from "../../assets/ProjectsImages/Project1.jpg";
import MobileFinance from "../../assets/ProjectsImages/Project2.jpg";
import QManage from "../../assets/ProjectsImages/Project3.jpg";
import WearherCast from "../../assets/ProjectsImages/Project4.jpg";
import HomeCalender from "../../assets/ProjectsImages/Project5.jpg";
import MPlanner from "../../assets/ProjectsImages/Project6.jpg";
import AliceMessenger from "../../assets/ProjectsImages/Project7.jpg";
import WiseMoney from "../../assets/ProjectsImages/Project8.jpg";
import { motion } from "framer-motion";

const Projects = () => {
  const ProjectCards = [
    { image: FinStep, title: "FinStep" },
    { image: MobileFinance, title: "Mobile Finance" },
    { image: QManage, title: "Q-Manage" },
    { image: WearherCast, title: "WearherCast" },
    { image: HomeCalender, title: "Home Calender" },
    { image: MPlanner, title: "MPlanner" },
    { image: AliceMessenger, title: "Alice Messenger" },
    { image: WiseMoney, title: "WiseMoney" },
  ];

  return (
    <div className="py-20 px-10 flex flex-col gap-10 justify-center items-center">
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="font-semibold text-4xl">Latest Projects</div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
          }}
          viewport={{ once: true }}
          className="w-2/5 md:w-2/3 sm:w-full  text-center font-normal"
        >
          In our portfolio, you can browse the latest products developed for our
          clients for different corporate purposes. Our qualified team of
          interface designers and software developers is always ready to create
          something unique for you.
        </motion.div>
      </div>
      <div className="w-full grid justify-center items-center grid-cols-3 grid-rows-3 md:grid-cols-1 gap-x-4 gap-y-10">
        {ProjectCards.map((item, index) => (
          <ProjectsCard
            ProjectImg={item.image}
            title={item.title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
