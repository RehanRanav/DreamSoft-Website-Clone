import { motion } from "framer-motion";

const MiddleFooter = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.8,
      ease: "easeIn",
    }}
     className="pr-24 md:pr-0">
      <div className="text-4xl text-neutral font-medium">
        Questions?
        <br /> Contact Us
      </div>
      <input
        placeholder="Name"
        className="bg-[#282736] opacity-80 border-none outline-none my-4 placeholder:text-white text-white font-medium py-4 w-full"
        type="text"
      />
      <input
        placeholder="Email"
        className="bg-[#282736] opacity-80 border-none outline-none my-4 placeholder:text-white text-white font-medium py-4 w-full"
        type="text"
      />
      <textarea
        placeholder="Message"
        className="bg-[#282736] opacity-80 border-none outline-none my-4 placeholder:text-white placeholder:font-medium py-4 w-full"
        rows={5}
      ></textarea>
      <button className="w-full py-4 border-2 border-primary bg-primary text-secondary font-medium tracking-wide  hover:bg-black hover:border-black transition-all duration-300 ease-in-out whitespace-nowrap">
          SEND MESSAGE
        </button>
    </motion.div>
  );
};

export default MiddleFooter;
