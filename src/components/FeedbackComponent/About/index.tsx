import { Avatar, Carousel, CustomFlowbiteTheme } from "flowbite-react";
import AvatarCatherine from "../../../assets/ReviewImages/avatarcatherine.jpg";
import AvatarRupert from "../../../assets/ReviewImages/avatarrupert.jpg";
import AvatarSamantha from "../../../assets/ReviewImages/avatarsamantha.jpg";
import { useRef } from "react";
import { motion } from "framer-motion";

const CardOpacityVariants = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Reviews = () => {
  const CardView = useRef<HTMLDivElement | null>(null);
  const CardData = [
    {
      name: "Catherine Williams",
      avatar: AvatarCatherine,
      review:
        "DreamSoft offers a high caliber of resources skilled in Microsoft Azure .NET, mobile and Quality Assurance. They became our true business partners over the past three years.",
    },
    {
      name: "Rupert Wood",
      avatar: AvatarRupert,
      review:
        "DreamSoft powered us with a competent team to develop products for banking services. The team has been delivering results within budget and time, which is amazing.",
    },
    {
      name: "Samantha Brown",
      avatar: AvatarSamantha,
      review:
        "DreamSoft is a highly skilled and uniquely capable firm with multitudes of talent on-board. We have collaborated on a number of diverse projects that have been a great success.",
    },
  ];

  const customTheme: CustomFlowbiteTheme["carousel"] = {
    indicators: {
      active: {
        off: "bg-neutral",
        on: "bg-primary",
      },
      base: "w-3 h-3 bg-white ml-0.5 relative",
      wrapper:
        "absolute h-fit w-fit gap-2 left-1/2 -bottom-10 flex -translate-x-1/2",
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll cursor-default rounded-none",
    },
    item: {
      wrapper: {
        on: "w-full flex-shrink-0 transform cursor-default snap-center",
      },
    },
  };

  return (
    <div className="h-screen p-10 pb-20 sm:p-2 sm:pb-20 w-full flex flex-col gap-10 justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeIn",
        }}
        className="text-4xl font-medium"
      >
        What People Say
      </motion.div>
      <Carousel
        theme={customTheme}
        leftControl={` `}
        rightControl={` `}
        indicators={true}
        className="relative shadow-card-shadow  before:bg-[#e8e8e8] cursor-default before:h-4 before:z-10 before:block before:mx-6 before:absolute before:inset-0 before:-top-4 after:bg-[#f4f4f4] after:h-2 after:z-10 after:block after:mx-4 after:absolute after:inset-0 after:-top-2"
      >
        {CardData.map((item, index) => (
          <div
            className="flex flex-col h-full items-center justify-center bg-white shadow-lg"
            key={index}
            ref={CardView}
          >
            <motion.div
              variants={CardOpacityVariants}
              initial="initial"
              whileInView="whileInView"
            >
              <Avatar
                img={item.avatar}
                size="lg"
                rounded
                className="cursor-pointer font-normal tracking-wide"
              />
            </motion.div>

            <div className="flex flex-col justify-center items-center gap-4">
              <motion.div
                variants={CardOpacityVariants}
                initial="initial"
                whileInView="whileInView"
                className="relative px-2 text-center font-normal w-1/2 md:w-10/12 before:block before:content-['\201C'] before:w-fit before:text-primary before:absolute before:-left-5 before:-top-4 before:z-10 before:text-6xl after:block after:content-['\201C'] after:w-fit after:text-primary after:absolute after:-right-5 after:-bottom-8 after:z-10 after:text-6xl"
              >
                {item.review}
              </motion.div>
              <div className="text-center">
                <motion.div
                  variants={CardOpacityVariants}
                  initial="initial"
                  whileInView="whileInView"
                  className="text-2xl hover:text-primary"
                >
                  {item.name}
                </motion.div>
                <motion.div
                  variants={CardOpacityVariants}
                  initial="initial"
                  whileInView="whileInView"
                  className="text-primary font-medium"
                >
                  Regular client
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;
