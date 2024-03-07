import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Carousel } from "flowbite-react";
import logo from "../assets/logo-dreamsoft.png";
import NavbarImg1 from "../assets/navbar-img-1.jpg";
import NavbarImg2 from "../assets/navbar-img-2.jpg";
import NavbarImg3 from "../assets/navbar-img-3.jpg";
import NavbarImg4 from "../assets/navbar-img-4.jpg";
import NavbarImg5 from "../assets/navbar-img-5.jpg";
import NavbarImg6 from "../assets/navbar-img-6.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { PiShareNetworkLight } from "react-icons/pi";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineZoomIn } from "react-icons/ai";

const NavBar = () => {
  const [enableSearch, setEnableSearch] = useState(false);

  const handleSearchtoggle = () => {
    setEnableSearch(!enableSearch);
  };

  const HoverlineEffect = () => (
    <div className="w-full h-1 bg-[#756aee] opacity-0 group-hover:opacity-100 group-hover:transform group-hover:-translate-y-[2px] transition-opacity duration-500 ease-in-out"></div>
  );

  return (
    <div className="flex justify-between items-center pl-4 pr-16 bg-slate-200 h-20">
      <div id="logo-container" className="flex-auto">
        <img src={logo} alt="DreamSoft" className="lg:w-36 lg:h-10 " />
      </div>
      {!enableSearch ? (
        <div className="flex-2 flex justify-between items-center h-4 font-sans font-medium text-lg">
          <Link to="/" className="group">
            <div>Home</div>
            <HoverlineEffect />
          </Link>
          <Link to="/" className="group">
            <div>About Us</div> <HoverlineEffect />
          </Link>
          <Link to="/" className="group relative">
            <div>Gallery</div> <HoverlineEffect />
            <Card className="rounded-none w-60 px-4 absolute top-16 whitespace-nowrap opacity-0 group-hover:opacity-100 hidden group-hover:block hover:block group-hover:transform group-hover:top-14 transition-all duration-300 ease-in">
              <ul className="flex flex-col gap-3">
                <li className="hover:border-l-4 hover:border-[#756aee] hover:pl-4 transition-all duration-300 ease-in-out">
                  Full width Gallery
                </li>
                <li className="hover:border-l-4 hover:border-[#756aee] hover:pl-4 transition-all duration-300 ease-in-out">
                  Grid Gallery
                </li>
                <li className="hover:border-l-4 hover:border-[#756aee] hover:pl-4 transition-all duration-300 ease-in-out">
                  <div>Full width Masonry</div>
                  <div>Gallery</div>
                </li>
                <li className="hover:border-l-4 hover:border-[#756aee] hover:pl-4 transition-all duration-300 ease-in-out">
                  Masonry Gallery
                </li>
              </ul>
            </Card>
          </Link>
          <Link to="/" className="group">
            <div>Pricing</div> <HoverlineEffect />
          </Link>
          <Link to="/" className="group relative">
            <div>Blog</div> <HoverlineEffect />
            <Card className="rounded-none w-60 px-4 absolute top-16 whitespace-nowrap opacity-0 group-hover:opacity-100 hidden group-hover:block hover:block group-hover:transform group-hover:top-14 transition-all duration-300 ease-in">
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
          <Link to="/" className="group relative flex items-center">
            <div>Pages</div> <HoverlineEffect />
            <Card className="rounded-none w-screen px-4 absolute -right-[150px] whitespace-nowrap hidden group-hover:block hover:block group-hover:transform group-hover:top-14 transition-display transition-all duration-1000 ease-in">
              <div className="grid grid-cols-3 gap-4">
                <div className="border-r-2 font-normal">
                  <div>Elements</div>
                  <ul className="grid grid-cols-2 grid-rows-6">
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
                      <li className="hover:border-l-4 hover:border-[#756aee] hover:pl-4 transition-all duration-300 ease-in-out">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-r-2 font-normal">
                  <div>Additional Pages</div>
                  <ul className="grid grid-cols-2 grid-rows-6">
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
                      <li className="hover:border-l-4 hover:border-[#756aee] hover:pl-4 transition-all duration-300 ease-in-out">
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
                      className="cursor-pointer"
                    >
                      <div className="grid grid-cols-2 gap-2">
                        <div
                          className={`h-fit w-fit bg-no-repeat bg-cover bg-center transition duration-300 ease-in-out relative cursor-pointer`}
                          style={{
                            backgroundImage: `url(${NavbarImg1})`,
                            height: "140px",
                            width: "142px",
                          }}
                        >
                          <div className="absolute inset-0 bg-gray-500 opacity-0 hover:opacity-50 hover:scale-105 transition-all duration-300 ease-in-out">
                            <div className="m-2 ml-3 border h-[124px] border-white flex flex-col gap-2 justify-center items-center text-white">
                              <AiOutlineZoomIn size={30} />
                              <div className="hover:border-b-2 border-b-white">Project #1</div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`h-fit w-fit bg-no-repeat bg-cover bg-center transition duration-300 ease-in-out relative cursor-pointer`}
                          style={{
                            backgroundImage: `url(${NavbarImg2})`,
                            height: "140px",
                            width: "142px",
                          }}
                        >
                          <div className="absolute inset-0 bg-gray-500 opacity-0 hover:opacity-50 hover:scale-105 transition-all duration-300 ease-in-out">
                            <div className="m-2 ml-3 border h-[124px] border-white flex flex-col gap-2 justify-center items-center text-white">
                              <AiOutlineZoomIn size={30} />
                              <div className="hover:border-b-2 border-b-white">Project #2</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div
                          className={`h-fit w-fit bg-no-repeat bg-cover bg-center transition duration-300 ease-in-out relative cursor-pointer`}
                          style={{
                            backgroundImage: `url(${NavbarImg3})`,
                            height: "140px",
                            width: "142px",
                          }}
                        >
                          <div className="absolute inset-0 bg-gray-500 opacity-0 hover:opacity-50 hover:scale-105 transition-all duration-300 ease-in-out">
                            <div className="m-2 ml-3 border h-[124px] border-white flex flex-col gap-2 justify-center items-center text-white">
                              <AiOutlineZoomIn size={30} />
                              <div className="hover:border-b-2 border-b-white">Project #3</div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`h-fit w-fit bg-no-repeat bg-cover bg-center transition duration-300 ease-in-out relative cursor-pointer`}
                          style={{
                            backgroundImage: `url(${NavbarImg4})`,
                            height: "140px",
                            width: "142px",
                          }}
                        >
                          <div className="absolute inset-0 bg-gray-500 opacity-0 hover:opacity-50 hover:scale-105 transition-all duration-300 ease-in-out">
                            <div className="m-2 ml-3 border h-[124px] border-white flex flex-col gap-2 justify-center items-center text-white">
                              <AiOutlineZoomIn size={30} />
                              <div className="hover:border-b-2 border-b-white">Project #4</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div
                          className={`h-fit w-fit bg-no-repeat bg-cover bg-center transition duration-300 ease-in-out relative cursor-pointer`}
                          style={{
                            backgroundImage: `url(${NavbarImg5})`,
                            height: "150px",
                            width: "142px",
                          }}
                        >
                          <div className="absolute inset-0 bg-gray-500 opacity-0 hover:opacity-50 hover:scale-105 transition-all duration-300 ease-in-out">
                            <div className="m-2 ml-3 border h-[124px] border-white flex flex-col gap-2 justify-center items-center text-white">
                              <AiOutlineZoomIn size={30} />
                              <div className="hover:border-b-2 border-b-white">Project #5</div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`h-fit w-fit bg-no-repeat bg-cover bg-center transition duration-300 ease-in-out relative cursor-pointer`}
                          style={{
                            backgroundImage: `url(${NavbarImg6})`,
                            height: "150px",
                            width: "142px",
                          }}
                        >
                          <div className="absolute inset-0 bg-gray-500 opacity-0 hover:opacity-50 hover:scale-105 transition-all duration-300 ease-in-out">
                            <div className="m-2 ml-3 border h-[124px] border-white flex flex-col gap-2 justify-center items-center text-white">
                              <AiOutlineZoomIn size={30} />
                              <div className="hover:border-b-2 border-b-white">Project #6</div>
                            </div>
                          </div>
                        </div>
                      </div>
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
      <div className="pl-6 flex gap-4">
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
        <PiShareNetworkLight
          size={24}
          color="#756aee"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default NavBar;
