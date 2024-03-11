import { Carousel } from "flowbite-react";
import Slider1 from "../../assets/slider-1.jpg";
import Slider2 from "../../assets/slider-2.jpg";
import Slider3 from "../../assets/slider-3.jpg";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="mt-20">
      <Carousel
        leftControl={` `}
        rightControl={` `}
        indicators={true}
        className="SliderContainer"
      >
        {[
          [
            Slider1,
            "Mobile App Development",
            `Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses.`,
          ],
          [
            Slider2,
            "Experienced Team",
            `We are a team of qualified software developers, aimed at creating unique and powerful tools for your business & everyday life.`,
          ],
          [
            Slider3,
            "Award-Winning Software",
            `The software solutions developed by our company have been numerously awarded for usability and innovative features.`,
          ],
        ].map((slider) => (
          <div
            className="h-[742px] md:h-[450px] w-full bg-no-repeat bg-cover bg-center transition duration-300 ease-in-out relative cursor-pointer "
            style={{
              backgroundImage: `url(${slider[0]})`,
              borderRadius: "0px",
            }}
          >
            <div className="m-auto h-full w-full flex flex-col gap-4 justify-center items-center font-sans">
              <div className="text-7xl w-full text-center">{slider[1]}</div>
              <div className="text-center w-1/2">{slider[2]}</div>
              <button className="relative px-8 py-4 bg-[#756aee] text-white font-semibold overflow-hidden hover:bg-black transition-colors duration-300 origin-center ease-in-out">
                  <span className="z-10 relative text-white">Get In Touch</span>
                  <span className="absolute inset-0 z-0 bg-[#756aee] transition-all duration-300 ease-in-out transform origin-center scale-x-0 hover:scale-x-100" />
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
