import { motion } from "framer-motion";
import AboutUsImg from "../assets/AboutImages/AboutUsimg.jpg";
import { Link } from "react-router-dom";
import WhyChoose from "./WhyChooseUs";

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

const About = () => {
  return (
    <>
      <div
        className="h-screen w-full bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${AboutUsImg})`,
        }}
      >
        <motion.div
          variants={ParentDivVariants}
          initial="hidden"
          whileInView="visible"
          className="m-auto h-full w-full flex flex-col gap-8 justify-center items-center font-sans"
        >
          <div className="text-7xl font-medium md:text-5xl sm:text-4xl w-full text-center">
            About Us{" "}
          </div>
          <div>
            <span className="py-2">
              <Link to="/" className="px-4">
                Home
              </Link>
              <span className="text-neutral">/</span>
              <span className="text-neutral px-4">ABOUT US</span>
            </span>
          </div>
        </motion.div>
      </div>
      <WhyChoose/>
    </>
  );
};

export default About;
