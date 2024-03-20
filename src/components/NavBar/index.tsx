import { useRef, useState } from "react";
import logo from "../../assets/NavImages/logo-dreamsoft.png";
import { IoSearchOutline } from "react-icons/io5";
import { PiShareNetworkLight } from "react-icons/pi";
import { MdOutlineCancel } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa6";
import Hamburger from "./Hamburger";
import "./styles.css";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const [enableSearch, setEnableSearch] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleSearchtoggle = () => {
    setEnableSearch(!enableSearch);
  };

  const showShareOptions = () => {
    if (menuRef.current) {
      if (menuRef.current.style.display === "none")
        menuRef.current.style.display = "flex";
      else menuRef.current.style.display = "none";
    }
  };

  return (
    <div className="z-20 bg-white flex justify-between items-center gap-2 pl-4 pr-16 h-20 fixed top-0 left-0 right-0 NavBarContainer font-poppins">
      <div className="hidden h-fit w-fit md:block">
        <Hamburger />
      </div>
      <div id="logo-container" className="flex-auto">
        <img src={logo} alt="DreamSoft" className="lg:w-36 lg:h-10 " />
      </div>
      {!enableSearch ? (
        <NavLinks />
      ) : (
        <div className="relative flex justify-end w-full flex-2">
          <motion.input
            initial={{
              width: "50%",
            }}
            whileInView={{
              width: "100%",
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            type="text"
            className={`block transition-all duration-1000 ease-linear ${
              enableSearch ? `scale-x-100` : ``
            } z-10 p-4 ps-10 text-sm text-black border-none shadow-md border-gray-300 rounded-full bg-gray-50 outline-none focus:border-none`}
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 end-3 flex items-center">
            <button onClick={handleSearchtoggle} className="z-50">
              <IoSearchOutline
                size={24}
                className="hover:text-primary cursor-pointer"
              />
            </button>
          </div>
        </div>
      )}
      <div className="pl-6 flex gap-4 md:hidden">
        <div onClick={handleSearchtoggle}>
          {!enableSearch ? (
            <IoSearchOutline
              size={24}
              className={`hover:text-primary cursor-pointer transform rotate-0 transition-transform duration-1000 ease-in-out ${
                enableSearch ? `rotate-90` : `rotate-0`
              }`}
            />
          ) : (
            <MdOutlineCancel
              size={24}
              className={`hover:text-primary cursor-pointer transform rotate-0 transition-transform duration-1000 ease-in-out ${
                !enableSearch ? `rotate-90` : `rotate-0`
              }`}
            />
          )}
        </div>
        <div className="relative">
          <PiShareNetworkLight
            size={24}
            className="cursor-pointer hover:text-primary"
            onClick={showShareOptions}
          />

          <div
            className="gap-2 bg-white p-1 w-fit absolute -bottom-6 -left-4"
            ref={menuRef}
            style={{ display: "none" }}
          >
            <FaFacebookF
              size={16}
              className="hover:text-primary transition-colors duration-300 ease-linear"
            />
            <FaTwitter
              size={16}
              className="hover:text-primary transition-colors duration-300 ease-linear"
            />
            <FaGooglePlusG
              size={16}
              className="hover:text-primary transition-colors duration-300 ease-linear"
            />
            <FaInstagram
              size={16}
              className="hover:text-primary transition-colors duration-300 ease-linear"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
