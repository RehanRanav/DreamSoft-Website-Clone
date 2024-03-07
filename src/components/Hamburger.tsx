import { MdMenu } from "react-icons/md";
import { useRef, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { Accordion } from "flowbite-react";
import { Link } from "react-router-dom";

const Hamburger = () => {
  const [menuOpen, setMenuopen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const openMenu = () => {
    if (menuRef.current) menuRef.current.style.left = "0";
    setMenuopen(true);
  };
  const closeMenu = () => {
    if (menuRef.current) menuRef.current.style.left = "-100%";
    setMenuopen(false);
  }
  return (
    <div>
        {
            menuOpen?
            <IoArrowBackSharp size={36} onClick={closeMenu} />:
            <MdMenu size={36} onClick={openMenu} />
        }
        
      <div
        className="max-h-screen w-64 absolute -left-full top-20 flex flex-col justify-start border-r pb-4 overflow-y-scroll transition-all duration-300 ease-in-out"
        ref={menuRef}
      >
        <div className="relative w-full p-2 pt-4">
          <input
            type="text"
            className="block w-full transition-all duration-1000 ease-linear placeholder:text-[#756aee]
            z-10 p-4 ps-10 text-sm text-gray-900 border-none shadow-md border-gray-300 bg-white outline-none focus:border-none"
            placeholder="Search..."
          />
          <div className="absolute top-1 bottom-1 end-3 flex items-center">
            <IoSearchOutline
              size={24}
              className="hover:text-[#756aee] cursor-pointer"
            />
          </div>
        </div>

        <div className="flex gap-4 m-4 w-fit">
          <FaFacebookF
            size={20}
            className="hover:text-[#756aee] transition-colors duration-300 ease-linear"
          />
          <FaTwitter
            size={20}
            className="hover:text-[#756aee] transition-colors duration-300 ease-linear"
          />
          <FaGooglePlusG
            size={20}
            className="hover:text-[#756aee] transition-colors duration-300 ease-linear"
          />
          <FaInstagram
            size={20}
            className="hover:text-[#756aee] transition-colors duration-300 ease-linear"
          />
        </div>

        <div className="w-full">
          <Accordion className="rounded-none" collapseAll>
            <div className="p-4 w-full bg-white hover:bg-[#756aee] text-black font-normal transition-colors duration-300 ease-linear">
              <Link to="/">Home</Link>
            </div>
            <div className="p-4 w-full bg-white hover:bg-[#756aee] text-black font-normal transition-colors duration-300 ease-linear">
              <Link to="/">About Us</Link>
            </div>
            <Accordion.Panel className="p-4 w-full bg-white hover:bg-[#756aee] text-black font-normal transition-colors duration-300 ease-linear">
              <Accordion.Title className="text-black font-normal">
                Gallery
              </Accordion.Title>
              <Accordion.Content className="p-0">
                <ul className="flex flex-col gap-4">
                  {[
                    ["Full width Gallery"],
                    ["Grid Gallery"],
                    ["Full width Masonry Gallery"],
                    ["Masonry Gallery"],
                  ].map(([item]) => (
                    <li className="w-full p-2 px-4 bg-white hover:bg-[#756aee] transition-colors duration-300 ease-linear">
                      {item}
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
            <div className="p-4 w-full bg-white hover:bg-[#756aee] text-black font-normal transition-colors duration-300 ease-linear">
              <Link to="/">Pricing</Link>
            </div>
            <Accordion.Panel className="p-4 w-full bg-white hover:bg-[#756aee] text-black font-normal transition-colors duration-300 ease-linear">
              <Accordion.Title className="text-black font-normal">
                Blog
              </Accordion.Title>
              <Accordion.Content className="p-0">
                <ul className="flex flex-col gap-3">
                  {[
                    ["Classic Blog"],
                    ["Grid Blog"],
                    ["Grid Blog 2"],
                    ["Grid Blog 3"],
                    ["Blog Post"],
                  ].map(([item]) => (
                    <li className="w-full p-2 px-4 bg-white hover:bg-[#756aee] transition-colors duration-300 ease-linear">
                      {item}
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
            <div className="p-4 w-full bg-white hover:bg-[#756aee] text-black font-normal transition-colors duration-300 ease-linear">
              <Link to="/">Contact Us</Link>
            </div>
            <Accordion.Panel className="p-4 w-full bg-white hover:bg-[#756aee] text-black font-normal transition-colors duration-300 ease-linear">
              <Accordion.Title className="text-black font-normal">
                Pages
              </Accordion.Title>
              <Accordion.Content className="p-0">
                <div className="text-[#756aee] text-xl p-2 m-2 border-b">
                  Elements
                </div>
                <ul className="flex flex-col gap-3">
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
                    <li className="w-full p-2 px-4 bg-white hover:bg-[#756aee] transition-colors duration-300 ease-linear">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="text-[#756aee] text-xl p-2 m-2 border-b">
                  Additional Pages
                </div>
                <ul className="flex flex-col gap-3">
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
                    <li className="w-full p-2 px-4 bg-white hover:bg-[#756aee] transition-colors duration-300 ease-linear">
                      {item}
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
