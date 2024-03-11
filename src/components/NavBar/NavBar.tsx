import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Carousel } from "flowbite-react";
import logo from "../../assets/logo-dreamsoft.png";
import NavbarImg1 from "../../assets/navbar-img-1.jpg";
import NavbarImg2 from "../../assets/navbar-img-2.jpg";
import NavbarImg3 from "../../assets/navbar-img-3.jpg";
import NavbarImg4 from "../../assets/navbar-img-4.jpg";
import NavbarImg5 from "../../assets/navbar-img-5.jpg";
import NavbarImg6 from "../../assets/navbar-img-6.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { PiShareNetworkLight } from "react-icons/pi";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineZoomIn } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram  } from "react-icons/fa6";
import Hamburger from "./Hamburger";
import "./NavBar.css";

const NavBar = () => {
  const [enableSearch, setEnableSearch] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleSearchtoggle = () => {
    setEnableSearch(!enableSearch);
  };

  const HoverlineEffect = () => (
    <div className="w-full h-1 bg-[#756aee] opacity-0 group-hover:opacity-100 group-hover:transform group-hover:-translate-y-[2px] transition-opacity duration-500 ease-in-out"></div>
  );

  const showShareOptions = () => {
    if (menuRef.current) {
      if (menuRef.current.style.display === "none")
        menuRef.current.style.display = "flex";
      else menuRef.current.style.display = "none";
    }
  };

  return (
    <div className="z-20 bg-white flex justify-between items-center gap-2 pl-4 pr-16 h-20 fixed top-0 left-0 right-0">
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
                {[
                  ["Full width Gallery"],
                  ["Grid Gallery"],
                  ["Full width Masonry Gallery"],
                  ["Masonry Gallery"],
                ].map((item) => (
                  <li className="hover:border-l-4 hover:border-[#756aee] hover:pl-4 transition-all duration-300 ease-in-out">
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
            <Card className="z-10 rounded-none font-semibold text-base w-60 px-4 mt-2 absolute left-0 whitespace-nowrap hidden group-hover:block hover:block group-hover:transform group-hover:top-14 transition-all duration-300 ease-in bg-white">
              <ul className="flex flex-col gap-3">
                {[
                  ["Classic Blog"],
                  ["Grid Blog"],
                  ["Grid Blog 2"],
                  ["Grid Blog 3"],
                  ["Blog Post"],
                ].map(([item]) => (
                  <li className="hover:border-l-4 hover:border-[#756aee] hover:pl-4 transition-all duration-300 ease-in-out">
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
            <Card className="z-10 rounded-none font-semibold text-base w-screen px-4 mt-2 absolute -right-[158px] whitespace-nowrap hidden group-hover:block hover:block group-hover:transform group-hover:top-14 transition-display transition-all duration-1000 ease-in bg-white">
              <div className="grid grid-cols-3 gap-4">
                <div className="border-r-2 font-normal">
                  <div>Elements</div>
                  <ul className="grid grid-cols-2 grid-rows-5">
                    {[
                      ["Typography"],
                      ["Calls to Action"],
                      ["Icons with Text"],
                      ["Progress Bars"],
                      ["Buttons"],
                      ["Tabs and Accordions"],
                      ["Forms"],
                      ["Hover Effects"],
                      [""],
                      ["Grid System"],
                    ].map(([item]) => (
                      <li className="hover:border-l-4 hover:border-[#756aee] hover:pl-4 transition-all duration-300 ease-in-out whitespace-normal">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-r-2 font-normal">
                  <div>Additional Pages</div>
                  <ul className="grid grid-cols-2 grid-rows-6">
                    {[
                      ["Service"],
                      ["503 Page"],
                      ["Service 2"],
                      ["Pricing"],
                      ["Single Service"],
                      ["Coming Soon"],
                      ["Our Team"],
                      ["Contact Us 2"],
                      ["Testimonials"],
                      ["FAQ"],
                      ["404 Page"],
                      ["Search Results"],
                    ].map(([item]) => (
                      <li className="hover:border-l-4 hover:border-[#756aee] hover:pl-4 transition-all duration-300 ease-in-out whitespace-normal">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div>Recent Projects</div>
                  <div className="px-4 h-56 w-96 cursor-pointer">
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
                        <div className="grid grid-cols-2 gap-2">
                          <div
                            className={`h-fit w-fit bg-no-repeat bg-cover bg-center transition duration-300 ease-in-out relative cursor-pointer`}
                            style={{
                              backgroundImage: `url(${slide[0]})`,
                              height: "140px",
                              width: "142px",
                            }}
                          >
                            <div className="absolute inset-0 bg-gray-500 opacity-0 hover:opacity-50 hover:scale-105 transition-all duration-300 ease-in-out">
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
                            <div className="absolute inset-0 bg-gray-500 opacity-0 hover:opacity-50 hover:scale-105 transition-all duration-300 ease-in-out">
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
            } z-10 p-4 ps-10 text-sm text-gray-900 border-none shadow-md border-gray-300 rounded-full bg-gray-50 outline-none focus:border-none`}
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 end-3 flex items-center">
            <button onClick={handleSearchtoggle} className="z-50">
              <IoSearchOutline
                size={24}
                className="hover:text-[#756aee] cursor-pointer"
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
              className={`hover:text-[#756aee] cursor-pointer transform rotate-0 transition-transform duration-1000 ease-in-out ${
                enableSearch ? `rotate-90` : `rotate-0`
              }`}
            />
          ) : (
            <MdOutlineCancel
              size={24}
              className={`hover:text-[#756aee] cursor-pointer transform rotate-0 transition-transform duration-1000 ease-in-out ${
                !enableSearch ? `rotate-90` : `rotate-0`
              }`}
            />
          )}
        </div>
        <div className="relative">
          <PiShareNetworkLight
            size={24}
            className="cursor-pointer hover:text-[#756aee]"
            onClick={showShareOptions}
          />

          <div
            className="gap-2 bg-white p-1 w-fit absolute -bottom-6 -left-4"
            ref={menuRef}
            style={{display: "none"}}
          >
            <FaFacebookF
              size={16}
              className="hover:text-[#756aee] transition-colors duration-300 ease-linear"
            />
            <FaTwitter
              size={16}
              className="hover:text-[#756aee] transition-colors duration-300 ease-linear"
            />
            <FaGooglePlusG
              size={16}
              className="hover:text-[#756aee] transition-colors duration-300 ease-linear"
            />
            <FaInstagram
              size={16}
              className="hover:text-[#756aee] transition-colors duration-300 ease-linear"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
