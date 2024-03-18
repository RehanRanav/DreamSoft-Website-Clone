import { motion } from "framer-motion";
import International from "../../assets/ClientsImages/internationaldevelopment.png";
import HerryWood from "../../assets/ClientsImages/herrywood.png";
import Kingmap from "../../assets/ClientsImages/kingmap.png";
import Johnolive from "../../assets/ClientsImages/johnolive.png";
import Golden from "../../assets/ClientsImages/golden.png";
import Fastlane from "../../assets/ClientsImages/fastlane.png";
import Artcreative from "../../assets/ClientsImages/artcreative.png";
import OneTree from "../../assets/ClientsImages/onetree.png";

const Clients = () => {
  const CompanyImages = [
    International,
    HerryWood,
    Kingmap,
    Johnolive,
    Golden,
    Fastlane,
    Artcreative,
    OneTree,
  ];
  return (
    <div className="flex flex-col gap-10 items-center px-10 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeIn",
        }}
        className="text-4xl font-medium"
      >
        Our Clients
      </motion.div>
      <motion.div
        initial={{ x: -5, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeIn",
        }}
        viewport={{ once: true }}
        className="w-fit gap-8 grid grid-cols-4 grid-rows-2 md:grid-cols-2 sm:grid-cols-1 px-10 pb-20 md:pt-20"
      >
        {CompanyImages.map((image, index) => (
          <div
            className="w-fit opacity-50 hover:opacity-100 hover:border hover:border-black transition-all duration-300 ease-in-out"
            key={index}
          >
            <img
              src={`${image}`}
              alt="Image"
              className="border border-black hover:scale-95 transition-all duration-300 ease-in-out"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Clients;
