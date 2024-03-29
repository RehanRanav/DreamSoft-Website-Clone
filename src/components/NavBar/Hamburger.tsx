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
import { AdditionalPages, Blog, Elements, Gallery } from "./NavLists";
import "./styles.css";

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
  };
  return (
    <div className="bg-white z-10 pt-3 overflow-scroll">
      {menuOpen ? (
        <IoArrowBackSharp size={40} onClick={closeMenu} />
      ) : (
        <MdMenu size={40} onClick={openMenu} />
      )}

      <div
        className="h-screen pb-96 bg-white w-64 absolute -left-full top-20 flex flex-col justify-start border-r overflow-y-scroll transition-all duration-300 ease-in-out"
        ref={menuRef}
      >
        <div className="relative w-full p-2 pt-4">
          <input
            type="text"
            className="block w-full transition-all duration-1000  ease-linear placeholder:text-primary
            z-10 p-4 ps-10 text-sm text-gray-900 border-none shadow-md border-neutral bg-white outline-none focus:border-none"
            placeholder="Search..."
          />
          <div className="absolute top-1 bottom-1 end-3 flex items-center">
            <IoSearchOutline
              size={24}
              className="hover:text-primary cursor-pointer"
            />
          </div>
        </div>

        <div className="flex gap-4 m-4 w-fit">
          <FaFacebookF
            size={20}
            className="hover:text-primary transition-colors duration-300 ease-linear"
          />
          <FaTwitter
            size={20}
            className="hover:text-primary transition-colors duration-300 ease-linear"
          />
          <FaGooglePlusG
            size={20}
            className="hover:text-primary transition-colors duration-300 ease-linear"
          />
          <FaInstagram
            size={20}
            className="hover:text-primary transition-colors duration-300 ease-linear"
          />
        </div>

        <div className="w-full">
          <Accordion className="rounded-none" collapseAll>
            <div className="p-4 w-full bg-white hover:bg-primary hover:text-white text-black font-normal transition-colors duration-300 ease-linear">
              <Link to="/">Home</Link>
            </div>
            <div className="p-4 w-full bg-white hover:bg-primary hover:text-white text-black font-normal transition-colors duration-300 ease-linear">
              <Link to="/about">About Us</Link>
            </div>
            <Accordion.Panel className="p-4 w-full bg-white hover:bg-primary hover:text-white text-black font-normal transition-colors duration-300 ease-linear">
              <Accordion.Title className="text-black font-normal">
                <Link to="/gallery">Gallery</Link>
              </Accordion.Title>
              <Accordion.Content className="p-0">
                <ul className="flex flex-col gap-4">
                  {Gallery.map((item, index) => (
                    <li
                      className="w-full p-2 px-4 bg-white hover:bg-primary hover:text-white transition-colors duration-300 ease-linear"
                      key={index}
                    >
                      <Link to="/gallery">{item}</Link>
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
            <div className="p-4 w-full bg-white hover:bg-primary hover:text-white text-black font-normal transition-colors duration-300 ease-linear">
              <Link to="/">Pricing</Link>
            </div>
            <Accordion.Panel className="p-4 w-full bg-white hover:bg-primary hover:text-white text-black font-normal transition-colors duration-300 ease-linear">
              <Accordion.Title className="text-black font-normal">
                Blog
              </Accordion.Title>
              <Accordion.Content className="p-0">
                <ul className="flex flex-col gap-3">
                  {Blog.map((item, index) => (
                    <li
                      className="w-full p-2 px-4 bg-white hover:bg-primary hover:text-white transition-colors duration-300 ease-linear"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
            <div className="p-4 w-full bg-white hover:bg-primary hover:text-white text-black font-normal transition-colors duration-300 ease-linear">
              <Link to="/contact">Contact Us</Link>
            </div>
            <Accordion.Panel className="p-4 w-full bg-white hover:bg-primary hover:text-white text-black font-normal transition-colors duration-300 ease-linear">
              <Accordion.Title className="text-black font-normal">
                Pages
              </Accordion.Title>
              <Accordion.Content className="p-0">
                <div className="text-primary text-xl p-2 m-2 border-b">
                  Elements
                </div>
                <ul className="flex flex-col gap-3">
                  {Elements.map((item, index) => (
                    <li
                      className="w-full p-2 px-4 bg-white hover:bg-primary hover:text-white transition-colors duration-300 ease-linear"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="text-primary text-xl p-2 m-2 border-b">
                  Additional Pages
                </div>
                <ul className="flex flex-col gap-3">
                  {AdditionalPages.map((item, index) => (
                    <li
                      className="w-full p-2 px-4 bg-white hover:bg-primary transition-colors duration-300 ease-linear"
                      key={index}
                    >
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
