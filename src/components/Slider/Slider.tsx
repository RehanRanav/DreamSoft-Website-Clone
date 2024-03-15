import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
import Slider1 from "../../assets/SliderImages/slider-1.jpg";
import Slider2 from "../../assets/SliderImages/slider-2.jpg";
import Slider3 from "../../assets/SliderImages/slider-3.jpg";
import "./Slider.css";
import { motion } from "framer-motion";
import { useRef } from "react";

const ParentDivVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "beforeChildren"
    },
  },
};
const ChildTitleVariants = {
  hidden: {
    opacity: 0,
    x: -120,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
const ChildDescVariants = {
  hidden: {
    opacity: 0,
    x: 120,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
const ChildButtonVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
      ease: "easeIn",
    },
  },
};

const Slider = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const Slides = [
    {
      image: Slider1,
      title: "Mobile App Development",
      description: `Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses.`,
    },
    {
      image: Slider2,
      title: "Experienced Team",
      description: `We are a team of qualified software developers, aimed at creating unique and powerful tools for your business & everyday life.`,
    },
    {
      image: Slider3,
      title: "Award-Winning Software",
      description: `The software solutions developed by our company have been numerously awarded for usability and innovative features.`,
    },
  ];

  const customTheme: CustomFlowbiteTheme["carousel"] = {
    indicators: {
      active: {
        off: "bg-white",
        on: "bg-primary",
      },
      base: "w-10 h-1 bg-white ml-0.5 relative",
      wrapper:
        "absolute h-fit w-fit flex-col gap-5 right-5 top-1/2 flex -translate-x-1/2",
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
    },
  };

  return (
    <div className="mt-20" ref={scrollRef}>
      <Carousel
        theme={customTheme}
        leftControl={` `}
        rightControl={` `}
        indicators={true}
        className="SliderContainer"
      >
        {Slides.map((slider, index) => (
          <div
            className="h-[742px] md:h-[450px] w-full bg-no-repeat bg-cover bg-center transition duration-300 ease-in-out relative cursor-pointer "
            style={{
              backgroundImage: `url(${slider.image})`,
              borderRadius: "0px",
            }}
            key={index}
          >
            <motion.div
              variants={ParentDivVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ root: scrollRef }}
              className="m-auto h-full w-full flex flex-col gap-4 justify-center items-center font-sans"
            >
              <motion.div
                variants={ChildTitleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ root: scrollRef }}
                className="text-7xl w-full text-center"
              >
                {slider.title}
              </motion.div>
              <motion.div
                variants={ChildDescVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ root: scrollRef }}
                className="text-center w-1/2"
              >
                {slider.description}
              </motion.div>

              <motion.button
                variants={ChildButtonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ root: scrollRef }}
                className="relative h-14 w-48 bg-primary text-white font-semibold overflow-hidden transition-all duration-1000 ease-linear before:absolute before:bg-black before:content-[''] before:top-0 before:left-1/2 before:transform before:-translate-x-1/2 before:z-10 before:transition-all before:duration-500 before:w-0 before:h-full before:hover:w-full"
              >
                <span className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {" "}
                  Get In Touch
                </span>
              </motion.button>
            </motion.div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
