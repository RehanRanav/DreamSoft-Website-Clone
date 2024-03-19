import MapComponent from "./MapComponent";
import { GiSmartphone } from "react-icons/gi";
import { RiHome2Line } from "react-icons/ri";
import { PiChatCircleDots } from "react-icons/pi";
import GetInTouch from "./GetInTouchComponent";

const ContactUS = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="h-screen w-screen block">
        <MapComponent />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-3 items-center justify-center px-10 py-20 gap-8 cursor-pointer">
        <div className="w-full border group hover:shadow-card-shadow h-80 flex justify-center items-center hover:scale-[1.01] transition-all duration-500 ease-in-out">
          <div className="flex flex-col items-center justify-center">
            <GiSmartphone size={60} className="text-primary group-hover:-translate-y-2 transition-all duration-500 ease-in-out "/>
            <div className="relative m-2 h-0.5 w-1/2 transition-all duration-500 ease-linear after:absolute after:content-[''] after:left-0 after:top-0 after:bg-primary after:w-full after:h-[2px] after:transform after:scale-x-0 after:transition-all after:duration-500 after:group-hover:-scale-x-150 "></div>
            <div className="text-black font-semibold text-lg flex flex-col">
              <div className="hover:text-primary transition-all duration-500 ease-in-out">+1 323-913-4688</div>
              <div className="hover:text-primary transition-all duration-500 ease-in-out">+1 323-888-4554</div>
            </div>
          </div>
        </div>
        <div className="w-full border group hover:shadow-card-shadow h-80 flex justify-center items-center hover:scale-[1.01] transition-all duration-500 ease-in-out">
          <div className="flex flex-col items-center justify-center">
            <RiHome2Line size={60} className="text-primary group-hover:-translate-y-2 transition-all duration-500 ease-in-out "/>
            <div className="relative m-2 h-0.5 w-1/2 transition-all duration-500 ease-linear after:absolute after:content-[''] after:left-0 after:top-0 after:bg-primary after:w-full after:h-[2px] after:transform after:scale-x-0 after:transition-all after:duration-500 after:group-hover:-scale-x-150 "></div>
            <div className="text-black font-semibold text-lg flex flex-col hover:text-primary transition-all duration-500 ease-in-out">
              <div>4730 Crystal Springs Dr,</div>
              <div>Los Angeles, CA 90027</div>
            </div>
          </div>
        </div>
        <div className="w-full border group hover:shadow-card-shadow h-80 flex justify-center items-center hover:scale-[1.01] transition-all duration-500 ease-in-out">
          <div className="flex flex-col items-center justify-center">
            <PiChatCircleDots size={60} className="text-primary group-hover:-translate-y-2 transition-all duration-500 ease-in-out "/>
            <div className="relative m-2 h-0.5 w-1/2 transition-all duration-500 ease-linear after:absolute after:content-[''] after:left-0 after:top-0 after:bg-primary after:w-full after:h-[2px] after:transform after:scale-x-0 after:transition-all after:duration-500 after:group-hover:-scale-x-150 "></div>
            <div className="text-black font-semibold text-lg flex flex-col">
              <div className="hover:text-primary transition-all duration-500 ease-in-out">mail@demolimk.org</div>
              <div className="hover:text-primary transition-all duration-500 ease-in-out">info@demolimk.org</div>
            </div>
          </div>
        </div>
      </div>
      <GetInTouch/>
    </div>
  );
};

export default ContactUS;
