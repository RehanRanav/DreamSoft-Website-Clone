import { Link, useLocation } from "react-router-dom";
import { Card, CustomFlowbiteTheme, Navbar } from "flowbite-react";
import { AdditionalPages, Blog, Elements, Gallery } from "./NavLists";
import NavCarousel from "./NavCarousel";

const NavLinks = () => {
  const location = useLocation();

  const customTheme: CustomFlowbiteTheme["navbar"] = {
    root: {
      base: "bg-white dark:border-gray-700 dark:bg-gray-800 flex-2 flex justify-between items-center gap-2 h-4 font-medium text-lg whitespace-nowrap md:hidden",
    },
    link: {
      base: "relative text-black after:w-full after:h-1 after:bg-primary after:absolute  after:block after:translate-y-4 hover:after:translate-y-1 after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-500 after:ease-in-out",
      active: {
        on: "dark:text-white md:bg-transparent after:opacity-100 after:translate-y-1",
        off: "",
      },
    },
  };

  return (
    <Navbar theme={customTheme} className="list-none">
      <div className="flex-2 flex justify-between items-center gap-2 h-4 font-poppins font-medium text-lg whitespace-nowrap md:hidden">
        <Navbar.Link as={Link} to="/" active={location.pathname === '/'}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about" active={location.pathname === '/about'}>About Us</Navbar.Link>
        <Link
          to="/gallery"
          className="group relative h-16 flex flex-col justify-center items-center"
        >
          <Navbar.Link as={Link} to="/gallery" active={location.pathname === '/gallery'}>Gallery</Navbar.Link>
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
        <Navbar.Link as={Link} to="/">Pricing</Navbar.Link>
        <Link
          to="/"
          className="group relative h-16 flex flex-col justify-center items-center"
        >
          <Navbar.Link as={Link} to="/">
            Blog
            <Card className="z-10 rounded-none font-semibold text-base w-60 px-4 mt-2 absolute left-0 whitespace-break-spaces hidden group-hover:block hover:block group-hover:transform group-hover:top-8 transition-all duration-300 ease-in bg-white">
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
          </Navbar.Link>
        </Link>
        <Navbar.Link as={Link} to="/contact" active={location.pathname === '/contact'}>Contact Us</Navbar.Link>
        <Link
          to="/"
          className="group relative h-16 flex flex-col justify-center items-center"
        >
          <Navbar.Link as={Link} to="/">
            Pages
            <Card className="z-10 rounded-none font-semibold text-base w-screen px-4 pb-5 mt-2 absolute -right-[158px] whitespace-nowrap hidden group-hover:block hover:block group-hover:transform group-hover:top-8 transition-all duration-1000 ease-in bg-white">
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
          </Navbar.Link>
        </Link>
      </div>
    </Navbar>
  );
};

export default NavLinks;
