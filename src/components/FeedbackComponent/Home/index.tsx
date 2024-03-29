import { Avatar, Card } from "flowbite-react";
import AvatarCatherine from "../../../assets/ReviewImages/avatarcatherine.jpg";
import AvatarRupert from "../../../assets/ReviewImages/avatarrupert.jpg";
import AvatarSamantha from "../../../assets/ReviewImages/avatarsamantha.jpg";
import { motion } from "framer-motion";

const Review = () => {
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
  return (
    <div className="flex flex-col gap-10  justify-center items-center">
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
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeIn",
        }}
        className="grid grid-cols-3 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-3 gap-4 px-4"
      >
        {CardData.map((item, index) => (
          <Card className="max-w-sm" key={index}>
            <div className="flex flex-col gap-2 px-4 justify-start items-start">
              <Avatar
                img={item.avatar}
                size="lg"
                rounded
                className="cursor-pointer font-normal tracking-wide"
              >
                <div className="flex flex-col">
                  <span className="text-2xl hover:text-primary">
                    {item.name}
                  </span>
                  <span className="text-primary font-medium">
                    Regular client
                  </span>
                </div>
              </Avatar>
              <div className="font-normal">{item.review}</div>
            </div>
          </Card>
        ))}
      </motion.div>
    </div>
  );
};

export default Review;
