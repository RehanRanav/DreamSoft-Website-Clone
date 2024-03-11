import { Card } from "flowbite-react";
import WireFrame from "../../assets/service-wireframe.jpg";
import { PiPhoneOutgoingThin } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { PiUploadSimpleLight } from "react-icons/pi";
import { IoTriangleSharp } from "react-icons/io5";

const Service = () => {
  return (
    <div className="py-20 px-10 grid justify-center items-center grid-cols-2 md:grid-cols-1">
      <div className="w-full flex justify-center">
        <img src={WireFrame} alt="Wireframe Image"/>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1  gap-8">
        <Card className="h-80 w-72 md:w-full border-none rounded-none cursor-pointer group py-6 px-4 shadow-xl">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="text-3xl font-semibold text-center">
              <div className="whitespace-nowrap">See All</div>
              <div className="whitespace-nowrap">Services</div>
            </div>
            <div className="relative m-2 h-[2px] w-1/4 bg-slate-300 transition-all duration-500 ease-linear after:absolute after:content-[''] after:left-0 after:top-0 after:bg-[#756aee] after:w-full after:h-[2px] after:transform after:scale-x-0 after:transition-all after:duration-300 after:group-hover:-scale-x-150 "></div>
            <button className="relative h-14 w-48 bg-[#756aee] text-white font-semibold overflow-hidden transition-all duration-1000 ease-linear before:absolute before:bg-black before:content-[''] before:top-0 before:left-1/2 before:transform before:-translate-x-1/2 before:z-10 before:transition-all before:duration-500 before:w-0 before:h-full before:hover:w-full">
              <span className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {" "}
                All Services
              </span>
            </button>
          </div>
        </Card>
        <Card className="h-80 w-72 md:w-full border-none rounded-none cursor-pointer group py-6 px-4 shadow-xl">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="text-xl font-medium text-center">
              <div className="relative flex justify-center">
                <PiPhoneOutgoingThin size={54} className="z-10" />
                <div className="absolute bottom-2 transform rotate-[18deg] group-hover:rotate-0 transition-all duration-500 ease-in-out">
                  <IoTriangleSharp size={64} color="#e2e8f0" />
                </div>
              </div>
              <div className="whitespace-nowrap mt-4 hover:text-[#756aee] transition-all duration-300 ease-in-out">CORPORATE SOLUTIONS</div>
            </div>
            <div className="relative m-2 h-[2px] w-1/4 bg-slate-300 transition-all duration-500 ease-linear after:absolute after:content-[''] after:left-0 after:top-0 after:bg-[#756aee] after:w-full after:h-[2px] after:transform after:scale-x-0 after:transition-all after:duration-300 after:group-hover:-scale-x-150 "></div>
            <div className="text-center">
              Need specific software for your company? We are ready to develop
              it!
            </div>
          </div>
        </Card>
        <Card className="h-80 w-72 md:w-full border-none rounded-none cursor-pointer group py-6 px-4 shadow-xl">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="text-xl font-medium text-center">
              <div className="relative flex justify-center">
                <TfiHeadphoneAlt size={54} className="z-10" />
                <div className="absolute bottom-2 transform rotate-[18deg] group-hover:rotate-0 transition-all duration-500 ease-in-out">
                  <IoTriangleSharp size={64} color="#e2e8f0" />
                </div>
              </div>
              <div className="whitespace-nowrap mt-4 hover:text-[#756aee] transition-all duration-300 ease-in-out">CALL CENTER SOLUTIONS</div>
            </div>
            <div className="relative m-2 h-[2px] w-1/4 bg-slate-300 transition-all duration-500 ease-linear after:absolute after:content-[''] after:left-0 after:top-0 after:bg-[#756aee] after:w-full after:h-[2px] after:transform after:scale-x-0 after:transition-all after:duration-300 after:group-hover:-scale-x-150 "></div>
            <div className="text-center">
              Our experts provide custom products of any complexity for call
              centers.
            </div>
          </div>
        </Card>
        <Card className="h-80 w-72 md:w-full border-none rounded-none cursor-pointer group py-6 px-4 shadow-xl">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="text-xl font-medium text-center">
              <div className="relative flex justify-center">
                <PiUploadSimpleLight size={54} className="z-10" />
                <div className="absolute bottom-1 transform rotate-[18deg] group-hover:rotate-0 transition-all duration-500 ease-in-out">
                  <IoTriangleSharp size={64} color="#e2e8f0" />
                </div>
              </div>
              <div className="whitespace-nowrap mt-4 hover:text-[#756aee] transition-all duration-300 ease-in-out">CLOUD DEVELOPMENT</div>
            </div>
            <div className="relative m-2 h-[2px] w-1/4 bg-slate-300 transition-all duration-500 ease-linear after:absolute after:content-[''] after:left-0 after:top-0 after:bg-[#756aee] after:w-full after:h-[2px] after:transform after:scale-x-0 after:transition-all after:duration-300 after:group-hover:-scale-x-150 "></div>
            <div className=" text-center">
              We can also offer you reliable cloud development solutions.
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Service;
