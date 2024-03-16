import { Card } from "flowbite-react";
import WireFrame from "../../assets/ServiceImages/service-wireframe.jpg";
import { PiPhoneOutgoingThin, PiUploadSimpleLight } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div className="py-20 px-10 grid justify-center items-center grid-cols-2 md:grid-cols-1">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeIn",
        }}
        viewport={{ once: true }}
        className="w-full flex justify-center"
      >
        <img src={WireFrame} alt="Wireframe Image" />
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeIn",
        }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-1  gap-8"
      >
        <Card className="h-80 w-72 md:w-full border-none rounded-none cursor-pointer group py-6 px-4 shadow-xl">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="text-3xl font-semibold text-center">
              <div className="whitespace-nowrap">See All</div>
              <div className="whitespace-nowrap">Services</div>
            </div>
            <div className="relative m-2 h-[2px] w-1/4 bg-neutral transition-all duration-500 ease-linear after:absolute after:content-[''] after:left-0 after:top-0 after:bg-primary after:w-full after:h-[2px] after:transform after:scale-x-0 after:transition-all after:duration-300 after:group-hover:-scale-x-150 "></div>
            <button className="relative h-14 w-48 bg-primary text-white font-semibold overflow-hidden transition-all duration-1000 ease-linear before:absolute before:bg-black before:content-[''] before:top-0 before:left-1/2 before:transform before:-translate-x-1/2 before:z-10 before:transition-all before:duration-500 before:w-0 before:h-full before:hover:w-full">
              <span className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {" "}
                All Services
              </span>
            </button>
          </div>
        </Card>

        <ServiceCard
          icon={<PiPhoneOutgoingThin size={54} className="z-10" />}
          title="CORPORATE SOLUTIONS"
          description="Need specific software for your company? We are ready to develop
              it!"
        />

        <ServiceCard
          icon={<TfiHeadphoneAlt size={54} className="z-10" />}
          title="CALL CENTER SOLUTIONS"
          description="Our experts provide custom products of any complexity for call
          centers."
        />

        <ServiceCard
          icon={<PiUploadSimpleLight size={54} className="z-10" />}
          title="CLOUD DEVELOPMENT"
          description="We can also offer you reliable cloud development solutions."
        />
      </motion.div>
    </div>
  );
};

export default Service;
