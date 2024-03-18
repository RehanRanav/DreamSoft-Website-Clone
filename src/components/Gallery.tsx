import { motion } from "framer-motion";
import GalleryImg from "../assets/Bannerimg.jpg";
import { Link } from "react-router-dom";
import FinStep from "../assets/ProjectsImages/Project1.jpg";
import MobileFinance from "../assets/ProjectsImages/Project2.jpg";
import QManage from "../assets/ProjectsImages/Project3.jpg";
import WearherCast from "../assets/ProjectsImages/Project4.jpg";
import MPlanner from "../assets/ProjectsImages/Project6.jpg";
import WiseMoney from "../assets/ProjectsImages/Project8.jpg";
import { CustomFlowbiteTheme, TabItem, Tabs } from "flowbite-react";
import { useState } from "react";

const ParentDivVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
};

const ProjectCards = [
  {
    image: FinStep,
    title: "ISTATS",
    year: 2017,
    type: "iOS Development Services",
  },
  {
    image: MobileFinance,
    title: "BIZADVISOR APP",
    year: 2015,
    type: "iPhone App",
  },
  {
    image: QManage,
    title: "XTRA GRAPH BUILDER",
    year: 2013,
    type: "QA & Testing",
  },
  {
    image: WearherCast,
    title: "WEATHERCAST",
    year: 2012,
    type: "UI & UX Design",
  },
  {
    image: WiseMoney,
    title: "RKX ASSISTANT",
    year: 2011,
    type: "App Optimization",
  },
  {
    image: MPlanner,
    title: "KALENDER",
    year: 2009,
    type: "Social App",
  },
];

const Gallery = () => {
  const [updatedProjectCards, setUpdatedProjectCards] = useState(ProjectCards);

  const customTheme: CustomFlowbiteTheme["tabs"] = {
    tablist: {
      base: "flex justify-center",
      styles: {
        underline: "",
      },
      tabitem: {
        styles: {
          underline: {
            base: "text-xl sm:text-lg text-neutral rounded-none tracking-wide",
            active: {
              on: "text-primary border-primary focus:ring-0",
              off: "hover:text-primary focus:ring-0",
            },
          },
        },
      },
    },
  };

  return (
    <>
      <div
        className="h-screen w-full bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${GalleryImg})`,
        }}
      >
        <motion.div
          variants={ParentDivVariants}
          initial="hidden"
          whileInView="visible"
          className="m-auto h-full w-full flex flex-col gap-8 justify-center items-center font-sans"
        >
          <div className="text-7xl font-medium md:text-5xl sm:text-4xl w-full text-center">
            Grid Gallery
          </div>
          <div>
            <span className="py-2">
              <Link to="/" className="px-4">
                Home
              </Link>
              <span className="text-neutral">/</span>
              <Link to="/gallery" className="px-4">
                Gallery
              </Link>
              <span className="text-neutral">/</span>
              <span className="text-neutral px-4">GRID GALLERY</span>
            </span>
          </div>
        </motion.div>
      </div>

      <div className="pt-20">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                All
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                aria-current="page"
              >
                MOBILE APP
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Settings
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Contacts
              </a>
            </li>
            <li>
              <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-10 pb-20 grid justify-center items-center grid-cols-3 md:grid-cols-1 gap-x-4 gap-y-10">
        {updatedProjectCards.map((item, index) => (
          <div className="w-full flex flex-col items-center justify-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeIn",
              }}
              viewport={{ once: true }}
              className="w-fit md:w-full md:flex md:justify-center p-0 cursor-pointer"
              key={index}
            >
              <div
                className="group h-fit w-fit bg-no-repeat bg-contain bg-center transition duration-300 ease-in-out relative cursor-pointer"
                style={{
                  backgroundImage: `url(${item.image})`,
                  width: "355px",
                  height: "296px",
                }}
              >
                <motion.div
                  initial={{
                    width: "0px",
                  }}
                  whileInView={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="absolute bg-neutral-transparent opacity-30 inset-0 hidden group-hover:block"
                ></motion.div>
              </div>
            </motion.div>
            <div className="flex flex-col px-4 w-full md:w-fit ">
              <div className="tracking-wider text-lg">{item.title}</div>
              <div className="text-base text-neutral tracking-wide">
                <span>{item.year}</span>
                <span>,</span>
                <span>{item.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
