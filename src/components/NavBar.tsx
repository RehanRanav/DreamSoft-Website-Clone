import { Link } from "react-router-dom";
import logo from "../assets/logo-dreamsoft.png";
import { IoSearchOutline } from "react-icons/io5";
import { PiShareNetworkLight } from "react-icons/pi";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import { Card } from "flowbite-react";

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
            <Card className="rounded-none w-60 px-4 absolute top-16 whitespace-nowrap opacity-0 group-hover:opacity-100 hover:block group-hover:transform group-hover:top-14 transition-all duration-300 ease-in">
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
            <Card className="rounded-none w-60 px-4 absolute top-16 whitespace-nowrap opacity-0 group-hover:opacity-100 hover:block group-hover:transform group-hover:top-14 transition-all duration-300 ease-in">
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
          <Link to="/" className="group relative">
            <div>Pages</div> <HoverlineEffect />
            <Card className="rounded-none w-screen px-4 grid grid-cols-3 absolute top-16 -right-[150px] whitespace-nowrap opacity-0 group-hover:opacity-100 hover:block group-hover:transform group-hover:top-14 transition-all duration-300 ease-in">
              <div className="border-r-2">
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
              
              <div className="border-r-2">
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
            </Card>
          </Link>
        </div>
      ) : (
        <div className="relative w-full flex-2">
          <input
            type="text"
            className={`block w-full transition-all duration-1000 ease-in ${
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
