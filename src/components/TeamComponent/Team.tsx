import RyanImg from "../../assets/TeamImages/directorofproduction.jpg";
import JillImg from "../../assets/TeamImages/uidesigner.jpg";
import SamImg from "../../assets/TeamImages/seniordeveloper.jpg";
import MaryImg from "../../assets/TeamImages/softwaredeveloper.jpg";
import GetMoreComponent from "./GetMoreComponent";
import { motion } from "framer-motion";

const Team = () => {
  const Team = [
    {
      image: RyanImg,
      name: "Ryan Wilson",
      designation: "Director of Production",
    },
    {
      image: JillImg,
      name: "Jill Peterson",
      designation: "UI Designer",
    },
    {
      image: SamImg,
      name: "Sam Robinson",
      designation: "Senior Developer",
    },
    {
      image: MaryImg,
      name: "Mary Lee",
      designation: "Software Developer",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center mt-6">
      <div className="text-5xl mb-6 whitespace-nowrap"> Meet The Team</div>
      <motion.div
        initial={{ x: 5, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeIn",
        }}
        className="w-fit grid grid-cols-4 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-4 justify-center items-center gap-8 p-4"
      >
        {Team.map((item, index) => (
          <div
            className="relative overflow-hidden cursor-pointer group grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
            key={index}
          >
            <img src={item.image} alt="Team Member Image" className="w-full" />
            <div className="absolute bg-neutral-transparent bottom-8 right-12 w-full p-4 skew-x-12 flex justify-center items-center group-hover:translate-x-4 transition-all duration-500 ease-in-out">
              <div className="-skew-x-12 w-40 flex flex-col gap-2 text-white">
                <span className="font-medium text-xl hover:text-primary hover:opacity-85">
                  {item.name}
                </span>
                <span>{item.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <GetMoreComponent />
    </div>
  );
};

export default Team;
