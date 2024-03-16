import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";

const Layout = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100 && buttonRef.current) {
      buttonRef.current.style.display = "block";
    } else {
      if (buttonRef.current) buttonRef.current.style.display = "none";
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <NavBar />
      <div className="mt-20">
        <Outlet />
      </div>
      <button
        ref={buttonRef}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary text-white transition-all duration-500 ease-in-out hover:bg-black"
      >
        <IoIosArrowUp size={20} className="m-4"/>
      </button>
    </div>
  );
};

export default Layout;
