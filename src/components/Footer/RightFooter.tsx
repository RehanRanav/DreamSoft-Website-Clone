import { IoMdArrowDropleft } from "react-icons/io";

const RightFooter = () => {
  const OfferedServices = [
    ["DB Management"],
    ["IOS/MacOS"],
    ["Android Apps"],
    ["Windows Apps"],
    ["UX & UI"],
  ];
  return (
    <div className="">
      <div className="text-4xl border-b p-2 whitespace-nowrap text-neutral font-medium">
        What We Offer
      </div>
      {OfferedServices.map((item, index) => (
        <div className="text-2xl text-white py-4 border-b flex justify-between" key={index}>
          <div className="lg:w-36">{item}</div>
          <IoMdArrowDropleft className="text-neutral"/>
        </div>
      ))}
    </div>
  );
};

export default RightFooter;
