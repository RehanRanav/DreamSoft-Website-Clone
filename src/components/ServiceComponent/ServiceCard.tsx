import { Card } from "flowbite-react";
import { IoTriangleSharp } from "react-icons/io5";
import { ServiceCardProps } from "../../inteface";
import { FC } from "react";

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="h-80 w-72 md:w-full border-none rounded-none cursor-pointer group py-6 px-4 shadow-xl">
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="text-xl font-medium text-center">
          <div className="relative flex justify-center">
            {icon}
            <div className="absolute bottom-2 transform rotate-[18deg] group-hover:rotate-0 transition-all duration-500 ease-in-out">
              <IoTriangleSharp size={64} color="#e2e8f0" />
            </div>
          </div>
          <div className="whitespace-nowrap mt-4 hover:text-[#756aee] transition-all duration-300 ease-in-out">
            {title}
          </div>
        </div>
        <div className="relative m-2 h-[2px] w-1/4 bg-slate-300 transition-all duration-500 ease-linear after:absolute after:content-[''] after:left-0 after:top-0 after:bg-[#756aee] after:w-full after:h-[2px] after:transform after:scale-x-0 after:transition-all after:duration-300 after:group-hover:-scale-x-150 "></div>
        <div className="text-center">{description}</div>
      </div>
    </Card>
  );
};

export default ServiceCard;
