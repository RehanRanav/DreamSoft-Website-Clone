import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
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
import "./NavBar.css";
import NavCarousel from "./NavCarousel";
import { AdditionalPages, Blog, Elements, Gallery } from "./NavLists";

const NavBar = () => {
  const [enableSearch, setEnableSearch] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleSearchtoggle = () => {
    setEnableSearch(!enableSearch);
  };

  const HoverlineEffect = () => (
    <div className="w-full h-1 bg-primary opacity-0 group-hover:opacity-100 group-hover:transform group-hover:-translate-y-[2px] transition-opacity duration-500 ease-in-out"></div>
  );

  const showShareOptions = () => {
    if (menuRef.current) {
      if (menuRef.current.style.display === "none")
        menuRef.current.style.display = "flex";
      else menuRef.current.style.display = "none";
    }
  };

  return (
    <div className="z-20 bg-white flex justify-between items-center gap-2 pl-4 pr-16 h-20 fixed top-0 left-0 right-0 NavBarContainer">
      <div className="hidden h-fit w-fit md:block">
        <Hamburger />
      </div>
      <div id="logo-container" className="flex-auto">
        <img src={logo} alt="DreamSoft" className="lg:w-36 lg:h-10 " />
      </div>
      {!enableSearch ? (
        <div className="flex-2 flex justify-between items-center gap-2 h-4 font-sans font-medium text-lg whitespace-nowrap md:hidden">
          <Link to="/" className="group">
            <div>Home</div>
            <HoverlineEffect />
          </Link>
          <Link to="/" className="group">
            <div>About Us</div> <HoverlineEffect />
          </Link>
          <Link
            to="/"
            className="group relative h-16 flex flex-col justify-center items-center"
          >
            <div>Gallery</div> <HoverlineEffect />
            <Card className="z-10 rounded-none font-semibold text-base w-64 px-4 mt-2 absolute left-0 whitespace-break-spaces hidden group-hover:block hover:block group-hover:transform group-hover:top-14 transition-all duration-300 ease-in bg-white">
                <ul className="flex flex-col gap-3">
                  {Gallery.map((item, index) => (
                    <li
                      className="hover:border-l-4 hover:border-primary hover:pl-4 transition-all duration-300 ease-in-out"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
            </Card>
          </Link>
          <Link to="/" className="group">
            <div>Pricing</div> <HoverlineEffect />
          </Link>
          <Link
            to="/"
            className="group relative h-16 flex flex-col justify-center items-center"
          >
            <div>Blog</div> <HoverlineEffect />
            <Card className="z-10 rounded-none font-semibold text-base w-60 px-4 mt-2 absolute left-0 whitespace-break-spaces hidden group-hover:block hover:block group-hover:transform group-hover:top-14 transition-all duration-300 ease-in bg-white">
              <ul className="flex flex-col gap-3">
                {Blog.map((item, index) => (
                  <li
                    className="hover:border-l-4 hover:border-primary hover:pl-4 transition-all duration-300 ease-in-out"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Link>
          <Link to="/" className="group">
            <div>Contact Us</div> <HoverlineEffect />
          </Link>
          <Link
            to="/"
            className="group relative h-16 flex flex-col justify-center items-center"
          >
            <div>Pages</div> <HoverlineEffect />
            <Card className="z-10 rounded-none font-semibold text-base w-screen px-4 pb-5 mt-2 absolute -right-[158px] whitespace-nowrap hidden group-hover:block hover:block group-hover:transform group-hover:top-14 transition-all duration-1000 ease-in bg-white">
              <div className="grid grid-cols-3 gap-4">
                <div className="border-r-2 font-normal">
                  <div className="text-lg pb-4">Elements</div>
                  <ul className="grid grid-cols-2 grid-rows-5 gap-4 ">
                    {Elements.map((item, index) => (
                      <li
                        className="hover:border-l-4 hover:border-primary hover:pl-4 transition-all duration-300 ease-in-out"
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-r-2 font-normal">
                  <div className="text-lg pb-4">Additional Pages</div>
                  <ul className="grid grid-cols-2 grid-rows-6 gap-4">
                    {AdditionalPages.map((item, index) => (
                      <li
                        className="hover:border-l-4 hover:border-primary hover:pl-4 transition-all duration-300 ease-in-out whitespace-normal"
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div>Recent Projects</div>
                  <div className="px-4 h-56 w-96 cursor-pointer">
                    <NavCarousel />
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      ) : (
        <div className="relative w-full flex-2">
          <input
            type="text"
            className={`block w-full transition-all duration-1000 ease-linear ${
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
