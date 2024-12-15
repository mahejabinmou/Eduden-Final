// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isDropdown2Open, setIsDropdown2Open] = useState(false);

  const toggleDropdown2 = () => {
    setIsDropdown2Open(!isDropdown2Open);
  };

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleMenu = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const menuClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Fixed Navbar */}
      <nav className={`lg:hidden fix ${scrolled ? "hidden" : ""}`}>
        <div className="navbarLeftRightSpace flex justify-between items-center bg-transparent font-helvetica font-normal">
          <div className="headerLogo">
            <Link to="/">
              <img
                className="h-full w-full object-cover"
                src="/edudenLogoWhite.png"
                alt="brand logo"
              />
            </Link>
          </div>
          <div>
            <IoMenu
              className="text-[#00A4FF]   md:h-[35px] h-[28px] w-full"
              onClick={handleMenu}
            ></IoMenu>
          </div>
          {open && (
            <ul className="px-[32px] py-[12px] absolute top-0 right-0 bg-white w-[100%] z-50 transition-transform duration-1000 ease-in-out">
              <div className="pb-[30px] flex justify-between items-center border-b-2 border-gray-200">
                <div className="headerLogo">
                  <Link to="/">
                    <img
                      className="h-full w-full object-cover"
                      src="/edudenLogoBlack.png"
                      alt="brand logo"
                    />
                  </Link>
                </div>
                <div
                  className="md:text-[38px] text-[35px] font-title"
                  onClick={handleClose}
                >
                  <MdClose className="text-[#00A4FF]" />
                </div>
              </div>
              <div className="mobileMenuParent23">
                <Link to="/" onClick={menuClose}>
                  <li
                    className={`mt-2 px-4 py-2 ${
                      isActive("/")
                        ? "bg-[#00A4FF] text-white font-bold rounded-md"
                        : "text-black hover:text-[#00A4FF]"
                    }`}
                  >
                    Home
                  </li>
                </Link>
                <Link to="/about" onClick={menuClose}>
                  <li
                    className={`mt-2 px-4 py-2 ${
                      isActive("/about")
                        ? "bg-[#00A4FF] text-white font-bold rounded-md"
                        : "text-black hover:text-[#00A4FF]"
                    }`}
                  >
                    About Us
                  </li>
                </Link>

                <li className="relative">
                  <Link to="/courses">
                    <button
                      onClick={toggleDropdown2}
                      className={`flex items-center w-full text-left px-4 py-2 mt-2 ${
                        isActive("/courses")
                          ? "bg-[#00A4FF] text-white font-bold rounded-md"
                          : "text-black hover:text-[#00A4FF]"
                      }`}
                    >
                      Courses
                    </button>
                  </Link>
                </li>
                <li className="relative">
                  <button
                    onClick={toggleDropdown}
                    className={`flex items-center w-full text-left px-4 py-2 mt-2 ${
                      isActive("/whatsnew")
                        ? "bg-[#00A4FF] text-white font-bold rounded-md"
                        : "text-black hover:text-[#00A4FF]"
                    }`}
                  >
                    <Link to="/whatsnew">What&apos;s New </Link>
                  </button>
                </li>

                <Link to="/verify" onClick={menuClose}>
                  <li
                    className={`mt-2 px-4 py-2 ${
                      isActive("/verify")
                        ? "bg-[#00A4FF] text-white font-bold rounded-md"
                        : "text-black hover:text-[#00A4FF]"
                    }`}
                  >
                    Verify
                  </li>
                </Link>

                <Link to="/contactUs" onClick={menuClose}>
                  <li
                    className={`mt-2 mb-2 px-4 py-2 ${
                      isActive("/contactUs")
                        ? "bg-[#00A4FF] text-white font-bold rounded-md"
                        : "text-black hover:text-[#00A4FF]"
                    }`}
                  >
                    Contact us
                  </li>
                </Link>
              </div>
            </ul>
          )}
        </div>
      </nav>

      {/* large screen nav */}
      <nav className="hidden lg:block w-full z-50 relative">
        {/* <div className="flex justify-between items-center"> */}
        <div className="largeScreenMenu bg-[#010101] font-helvetica font-normal flex justify-between place-content-baseline">
          <div className="headerLogo">
            <Link to="/">
              <img
                className="h-full w-full object-cover"
                src="/edudenLogoWhite.png"
                alt="brand logo"
              />
            </Link>
          </div>

          <div>
            <div className="mobileMenuParent">
              <Link to="/" onClick={menuClose}>
                <li
                  className={`text-[#FFFFFF] hover:text-[#00A4FF] px-3 py-1 ${
                    isActive("/") ? "ring-2 ring-[#00A4FF] rounded-full" : ""
                  }`}
                >
                  Home
                </li>
              </Link>

              <Link to="/About" onClick={menuClose}>
                <li
                  className={`text-[#FFFFFF] hover:text-[#00A4FF] px-3 py-1 ${
                    isActive("/About")
                      ? "ring-2 ring-[#00A4FF] rounded-full"
                      : ""
                  }`}
                >
                  About Us
                </li>
              </Link>

              <Link to="/courses" onClick={menuClose}>
                <li
                  className={`text-[#FFFFFF] hover:text-[#00A4FF] px-3 py-1 ${
                    isActive("/courses")
                      ? "ring-2 ring-[#00A4FF] rounded-full"
                      : ""
                  }`}
                >
                  Courses
                </li>
              </Link>

              <Link to="/whatsnew" onClick={menuClose}>
                <li
                  className={`text-[#FFFFFF] hover:text-[#00A4FF] px-3 py-1 ${
                    isActive("/whatsnew")
                      ? "ring-2 ring-[#00A4FF] rounded-full"
                      : ""
                  }`}
                >
                  Whats&apos;s New
                </li>
              </Link>

              <Link to="/verify" onClick={menuClose}>
                <li
                  className={`text-[#FFFFFF] hover:text-[#00A4FF] px-3 py-1 ${
                    isActive("/verify")
                      ? "ring-2 ring-[#00A4FF] rounded-full"
                      : ""
                  }`}
                >
                  Verify
                </li>
              </Link>

              <Link to="/contactus" onClick={menuClose}>
                <li
                  className={`text-[#FFFFFF] hover:text-[#00A4FF] px-3 py-1 ${
                    isActive("/contactus")
                      ? "ring-2 ring-[#00A4FF] rounded-full"
                      : ""
                  }`}
                >
                  Contact Us
                </li>
              </Link>
            </div>
          </div>
          <Link to="/courseDetails">
            <button className="homeLargeAppoinMent bg-[#00A4FF]  text-[#010101]  ">
              Enroll Now
            </button>
          </Link>
        </div>
        {/* </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
