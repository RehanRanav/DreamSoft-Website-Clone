import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import { useEffect, useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "./Footer";

const Layout = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname]);

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
    <div className="font-poppins">
      <NavBar />
      <div className="mt-20">
        <Outlet />
        <Footer/>
      </div>
      <button
        ref={buttonRef}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary text-white transition-all duration-500 ease-in-out hover:bg-black"
      >
        <IoIosArrowUp size={20} className="m-4" />
      </button>
    </div>
  );
};

export default Layout;
