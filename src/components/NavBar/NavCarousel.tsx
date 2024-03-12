import NavbarImg1 from "../../assets/NavImages/navbar-img-1.jpg";
import NavbarImg2 from "../../assets/NavImages/navbar-img-2.jpg";
import NavbarImg3 from "../../assets/NavImages/navbar-img-3.jpg";
import NavbarImg4 from "../../assets/NavImages/navbar-img-4.jpg";
import NavbarImg5 from "../../assets/NavImages/navbar-img-5.jpg";
import NavbarImg6 from "../../assets/NavImages/navbar-img-6.jpg";
import { AiOutlineZoomIn } from "react-icons/ai";
import { Carousel } from "flowbite-react";

const NavCarousel = () => {
  return (
    <Carousel
      leftControl={` `}
      rightControl={` `}
      indicators={true}
      className="NavCarousal"
    >
      {[
        [NavbarImg1, NavbarImg2],
        [NavbarImg3, NavbarImg4],
        [NavbarImg5, NavbarImg6],
      ].map((slide, index) => (
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
