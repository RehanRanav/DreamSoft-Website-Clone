import { motion } from "framer-motion";
import AboutUsImg from "../assets/Bannerimg.jpg";
import KeyboardImage from "../assets/AboutImages/keyboardimage.jpg";
import { Link } from "react-router-dom";
import WhyChoose from "./WhyChooseUs";
import HistoryTimeLine from "./HistoryTimeline";
import CountUp from "react-countup";
import Clients from "./ClientsComponent";
import Reviews from "./FeedbackComponent/About";

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
          className="m-auto h-full w-full flex flex-col gap-8 justify-center items-center"
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

      <WhyChoose />
      <HistoryTimeLine />
      <Reviews />

      <div>
        <div
          className="grid grid-cols-4 md:grid-cols-2 md:grid-rows-2 md:gap-8 sm:gap-2 sm:grid-cols-1 sm:grid-rows-4 p-20 bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${KeyboardImage})`,
          }}
        >
          <div className="flex flex-col justify-center items-center border-r sm:border-r-0 sm:border-b p-4  border-neutral">
            <span className="text-8xl">
              <CountUp start={1} end={12} duration={0.5} enableScrollSpy={true}>
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </span>
            <span className="text-2xl">Awards Won</span>
          </div>
          <div className="flex flex-col justify-center items-center lg:border-r sm:border-r-0 sm:border-b p-4 border-neutral">
            <span className="text-8xl">
              <CountUp
                start={100}
                end={194}
                duration={0.5}
                enableScrollSpy={true}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </span>
            <span className="text-2xl">Apps Developed</span>
          </div>
          <div className="flex flex-col justify-center items-center border-r sm:border-r-0 sm:border-b p-4 border-neutral">
            <span className="text-8xl">
              <CountUp
                start={0}
                end={2}
                duration={0.5}
                suffix="k"
                enableScrollSpy={true}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </span>
            <span className="text-2xl">Satisfied Customers</span>
          </div>
          <div className="flex flex-col justify-center items-center p-4">
            <span className="text-8xl">
              <CountUp start={1} end={25} duration={0.5} enableScrollSpy={true}>
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </span>
            <span className="text-2xl">Team Members</span>
          </div>
        </div>
      </div>

      <Clients/>
    </>
  );
};

export default About;
