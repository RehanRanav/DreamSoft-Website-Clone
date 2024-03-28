import { Card, CustomFlowbiteTheme } from "flowbite-react";
import AsyncawaitBlogImg from "../../assets/BlogImages/asyncawaitImg.jpg";
import IPaasBlogImg from "../../assets/BlogImages/IPaasImg.jpg";
import HibernateBlogImg from "../../assets/BlogImages/hqlImg.jpg";
import { motion } from "framer-motion";

const Blogs = () => {
  const BlogData = [
    {
      date: "07/04",
      image: AsyncawaitBlogImg,
      title: "Benefits Of Async/Await",
      description:
        "Asynchronous functions are a good and bad thing in JavaScript. The good side is that asynchronous functions are non-blocking and",
    },
    {
      date: "07/17",
      image: IPaasBlogImg,
      title: "Key Considerations Of IPaaS",
      description:
        "Digital transformation requires cloud appropriate adoption, legacy IT systems modernization, and Agile-based methodologies for faster",
    },
    {
      date: "07/22",
      image: HibernateBlogImg,
      title: "Hibernate Query Language",
      description:
        "In this tutorial, we will discuss the Hibernate Query Language. HQL is an object-oriented query language. Hibernate Query",
    },
  ];

  const customTheme: CustomFlowbiteTheme["card"] = {
    root: {
      children: "px-0 py-6 relative",
    },
    img: {
      base: "scale-105 w-68 hover:scale-100 transition-all duration-500 ease-in-out",
    },
  };

  return (
    <div className="flex flex-col gap-8 items-center px-10 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeIn",
        }}
        className="text-4xl font-medium"
      >
        Latest Blog Posts
      </motion.div>
      <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeIn",
      }}
       className="grid grid-cols-3 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-3 gap-8 px-4">
        {BlogData.map((item, index) => (
          <Card
            className="max-w-smrounded-none shadow-none border-none overflow-hidden"
            imgAlt="Benefits Of Async/Await"
            imgSrc={item.image}
            theme={customTheme}
            key={index}
          >
            <div className="absolute text-primary text-4xl after:relative -top-10 sm:-top-8 z-10 px-4 pb-2 bg-secondary">
              <div className="absolute bg-secondary h-4 w-full skew-x-[30deg] -top-4 -left-[5px]"></div>
              {item.date}
            </div>
            <div className="text-xl font-medium tracking-wide text-black hover:text-primary dark:text-white">
              {item.title}
            </div>
            <p className="font-medium text-neutral text-justify w-68 max-h-20 overflow-hidden text-ellipsis">
              {item.description}
            </p>
          </Card>
        ))}
      </motion.div>
    </div>
  );
};

export default Blogs;
