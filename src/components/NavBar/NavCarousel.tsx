import FinStep from "../../assets/NavImages/navbar-img-1.jpg";
import MobileFinance from "../../assets/NavImages/navbar-img-2.jpg";
import WeatherCast from "../../assets/NavImages/navbar-img-3.jpg";
import QManage from "../../assets/NavImages/navbar-img-4.jpg";
import HomeCalender from "../../assets/NavImages/navbar-img-5.jpg";
import MPlanner from "../../assets/NavImages/navbar-img-6.jpg";
import { AiOutlineZoomIn } from "react-icons/ai";
import { Carousel } from "flowbite-react";

const NavCarousel = () => {

  const CarouselImages = [
    [FinStep, MobileFinance],
    [WeatherCast, QManage],
    [HomeCalender, MPlanner],
  ];

  return (
    <Carousel
      leftControl={` `}
      rightControl={` `}
      indicators={true}
      className="NavCarousal"
    >
      {CarouselImages.map((slide, index) => (
        <div className="grid grid-cols-2 gap-2" key={index}>
          <div
            className={`h-fit w-fit bg-no-repeat bg-cover bg-center transition duration-300 ease-in-out relative cursor-pointer`}
            style={{
              backgroundImage: `url(${slide[0]})`,
              height: "140px",
              width: "142px",
            }}
          >
            <div className="absolute inset-0 bg-neutral opacity-0 hover:opacity-50 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="m-2 ml-3 border h-[124px] border-white flex flex-col gap-2 justify-center items-center text-white">
                <AiOutlineZoomIn size={30} />
                <div className="hover:border-b-2 border-b-white">
                  Project #{index * 2 + 1}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`h-fit w-fit bg-no-repeat bg-cover bg-center transition duration-300 ease-in-out relative cursor-pointer`}
            style={{
              backgroundImage: `url(${slide[1]})`,
              height: "140px",
              width: "142px",
            }}
          >
            <div className="absolute inset-0 bg-neutral opacity-0 hover:opacity-50 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="m-2 ml-3 border h-[124px] border-white flex flex-col gap-2 justify-center items-center text-white">
                <AiOutlineZoomIn size={30} />
                <div className="hover:border-b-2 border-b-white">
                  Project #{index * 2 + 2}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default NavCarousel;
