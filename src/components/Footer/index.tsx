import LeftFooter from "./LeftFooter";
import MiddleFooter from "./MiddleFooter";
import RightFooter from "./RightFooter";


const Footer = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-1 md:grid-rows-3 bg-footer-bg gap-4 p-20">
      <LeftFooter/>
      <MiddleFooter/>
      <RightFooter/>
    </div>
  );
};

export default Footer;
