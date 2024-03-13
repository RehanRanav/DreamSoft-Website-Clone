import logo from "../../assets/FooterImage/logo-dreamsoft.png";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa6";

const LeftFooter = () => {
  return (
    <div className="pr-24 md:pr-0">
        <div>
          <img src={logo} alt="DreamSoft" />
        </div>
        <div className="my-4 text-neutral text-justify font-medium">
          Our company has been developing high-quality and reliable software for
          corporate needs since 2008. We are renowned professionals of software
          development.
        </div>
        <div className="py-4 border-b font-medium flex items-center gap-4">
          <span className="text-primary whitespace-nowrap">ADDRESS</span>
          <span className="text-white">
            4730 Crystal Springs Dr, Los Angeles, CA 90027
          </span>
        </div>
        <div className="py-4 border-b font-medium flex items-center gap-4">
          <span className="text-primary whitespace-nowrap">PHONES</span>
          <span className="text-white">
            +1 323-913-4688,
            <br /> +1 323-888-4554
          </span>
        </div>
        <div className="py-4 border-b font-medium flex items-center gap-4">
          <span className="text-primary whitespace-nowrap">E-MAILS</span>
          <span className="text-white">
            info@demolink.org, mail@demolink.org
          </span>
        </div>
        <div className="my-4 flex gap-4 flex-wrap lg:pr-4">
            <div className="w-fit p-2 rounded-full border-[5px] border-footer-icon bg-footer-icon hover:bg-transparent cursor-pointer">
                <FaFacebookF size={28} className="text-white hover:text-primary"/>
            </div>
            <div className="w-fit p-2 rounded-full border-[5px] border-footer-icon bg-footer-icon hover:bg-transparent cursor-pointer">
                <FaTwitter size={28} className="text-white hover:text-primary"/>
            </div>
            <div className="w-fit p-2 rounded-full border-[5px] border-footer-icon bg-footer-icon hover:bg-transparent cursor-pointer">
                <FaGooglePlusG size={28} className="text-white hover:text-primary"/>
            </div>
            <div className="w-fit p-2 rounded-full border-[5px] border-footer-icon bg-footer-icon hover:bg-transparent cursor-pointer">
                <FaInstagram size={28} className="text-white hover:text-primary"/>
            </div>
        </div>
      </div>
  )
}

export default LeftFooter;
