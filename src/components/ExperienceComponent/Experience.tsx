import Mittos from "../../assets/ExperienceImages/mittos.png";
import Pompadour from "../../assets/ExperienceImages/pompadour.png";
import KingMap from "../../assets/ExperienceImages/king-map.png";
import HighestQuality from "../../assets/ExperienceImages/highest-quality.png";
import CountUp from 'react-countup';
import { motion } from "framer-motion";
import ParticalCanvas from "./ParticalCanvas";

const Experience = () => {
  const CompanyImages = [[Mittos], [Pompadour], [KingMap], [HighestQuality]];

  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center">
      <div className="w-full flex justify-center items-center md:flex-col md:gap-10">
        <div className="flex sm:flex-col gap-2 justify-center items-center">
          <motion.div
          initial={{ opacity:0}}
          whileInView={{ opacity:1}}
          transition={{
            duration: 0.8,
            ease: 'easeIn'
          }}
          viewport={{once: true}}
          className="text-[337px] w-96 h-fit font-bold text-primary -tracking-widest cursor-pointer">
            <ParticalCanvas/>
            <CountUp start={4} end={10} duration={0.5} enableScrollSpy/>
          </motion.div>
          <div className="w-fit flex p-4 flex-col flex-1 gap-4 justify-start items-start">
            <div className="w-fit text-4xl border-l-4 border-neutral pl-4">
              <div className="w-fit">Years Of </div>
              <div className="w-fit">Experience</div>
            </div>
            <div className="w-64 text-lg text-neutral font-semibold">
              DreamSoft is a team of highly experienced app designers and
              developers creating unique software for you.
            </div>
            <div className="pt-4">
              <button className="px-16 py-4 border-2 border-primary bg-primary text-secondary hover:text-black hover:border-black hover:bg-secondary transition-all duration-300 ease-in-out">
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        <div className="h-fit grid grid-cols-2 grid-rows-2 sm:grid-cols-1 sm:grid-rows-4 m-4 justify-center items-center">
          <div className="flex pr-8 pb-8 sm:p-0 sm:pb-8 flex-col gap-2 justify-center items-center border-r sm:border-r-0 border-b">
            <div>
              <span className="text-8xl">
              <CountUp start={0} end={2} duration={0.5} enableScrollSpy/>
              </span>
              <span className="text-6xl">K</span>
            </div>
            <div className="text-neutral tracking-widest">APPS DEVELOPED</div>
          </div>

          <div className="flex pl-8 pb-8 sm:p-0 sm:pb-8 flex-col gap-2 justify-center items-center border-b">
            <div>
              <span className="text-8xl">
              <CountUp start={25} end={40} duration={0.5} enableScrollSpy/>
              </span>
            </div>
            <div className="text-neutral tracking-widest">CONSULTANTS</div>
          </div>

          <div className="flex pr-8 pt-8 sm:p-0 sm:pb-8 flex-col gap-2 justify-center items-center border-r sm:border-r-0 sm:border-b">
            <div>
              <span className="text-8xl">
              <CountUp start={5} end={12} duration={0.5} enableScrollSpy/>
              </span>
            </div>
            <div className="text-neutral tracking-widest">AWARDS WON</div>
          </div>

          <div className="flex pl-8 pt-8 sm:p-0 sm:pb-8 flex-col gap-2 justify-center items-center">
            <div>
              <span className="text-8xl">160</span>
            </div>
            <div className="text-neutral tracking-widest">EMPLOYEES</div>
          </div>
        </div>
      </div>
      <div className="w-fit gap-8 grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-10 pb-20 md:pt-20">
        {CompanyImages.map((image,index) =>(
            <div className="w-fit opacity-50 hover:opacity-100 hover:border hover:border-black transition-all duration-300 ease-in-out" key={index}>
                <img src={`${image}`} alt="Image" className="border border-black hover:scale-95 transition-all duration-300 ease-in-out"/>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
