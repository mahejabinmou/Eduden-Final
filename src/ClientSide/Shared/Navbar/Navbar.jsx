// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./Navbar.css";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

      <nav className={`lg:hidden fix ${scrolled ? "hidden" : ""} `}>
        <div className="navbarLeftRightSpace flex justify-between items-center bg-transparent font-helvetica font-normal">
          <div className="headerLogo ">
            <Link to="/">
              <img
                className="h-full w-full object-cover"
                src="https://i.ibb.co.com/C5kSmh8/layer-1-1-66f24f9bd9b5b.webp"
                alt="brand logo"
              />
            </Link>
          </div>
          <div>
            <IoMenu
              className="text-[#A8FF57] h-[55px] w-full
              "
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
                      src="https://i.ibb.co.com/C5kSmh8/layer-1-1-66f24f9bd9b5b.webp"
                      alt="brand logo"
                    />
                  </Link>
                </div>
                <div
                  className="md:text-[38px] text-[35px] font-title"
                  onClick={handleClose}
                >
                  <MdClose className="text-[#A8FF57]" />
                </div>
              </div>
              <div className="mobileMenuParent23">
                <Link to="/" onClick={menuClose}>
                  <li className="text-black hover:text-[#A8FF57]">Home</li>
                </Link>
                <Link to="/Aboutus" onClick={menuClose}>
                  <li className="text-black">About Us</li>
                </Link>

                <li className="relative">
                  <button
                    onClick={toggleDropdown2}
                    className="flex items-center w-full text-left px-0 xs:0 text-black hover:text-[#A8FF57] focus:outline-none"
                  >
                    Courses
                    {isDropdown2Open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                  {isDropdown2Open && (
                    <ul className="mt-2 mb-2 min-w-[150px] bg-[#A8FF57]/[.4] text-black rounded shadow-lg">
                      <Link to="/courses">
                        <li className="px-4 py-[5px] text-black">Courses </li>
                      </Link>
                      <Link to="/courseDetails">
                        <li className="text-black px-4 pb-[5px] ">
                          Courses Details
                        </li>
                      </Link>
                    </ul>
                  )}
                </li>
                <li className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center w-full text-left px-0 xs:pb-0 text-black hover:text-[#A8FF57] focus:outline-none"
                  >
                    What’s New
                    {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                  {isDropdownOpen && (
                    <ul className=" mt-2 mb-2 min-w-[150px] bg-[#A8FF57]/[.4] text-black rounded shadow-lg">
                      <Link to="/whatsnew">
                        <li className="px-4 py-[5px] text-black hover:text-[#A8FF57]">
                          What’s New
                        </li>
                      </Link>
                      <Link to="/whatsnew2">
                        <li className="px-4 pb-[5px] text-black hover:text-[#A8FF57]">
                          What’s New 2
                        </li>
                      </Link>
                    </ul>
                  )}
                </li>

                <Link to="/verify" onClick={menuClose}>
                  <li className="text-black hover:text-[#A8FF57]">Verify</li>
                </Link>

                <Link to="/contactUs">
                  <li className="text-black hover:text-[#A8FF57]">
                    Contact us
                  </li>
                </Link>
              </div>
            </ul>
          )}
        </div>
      </nav>

      {/* large screen nav */}
      <div>
        <div className="hidden lg:block w-full z-50 relative ">
          <div className="largeScreenMenu bg-[#010101] font-helvetica font-normal">
            <div className="headerLogo">
              <Link to="/">
                <img
                  className="h-full w-full object-cover"
                  src="https://i.ibb.co.com/C5kSmh8/layer-1-1-66f24f9bd9b5b.webp"
                  alt="brand logo"
                />
              </Link>
            </div>

            <div>
              <div className="mobileMenuParent">
                <Link to="/" onClick={menuClose}>
                  <li className="text-[#FFFFFF] hover:text-[#A8FF57]">Home</li>
                </Link>

                <Link to="/About" onClick={menuClose}>
                  <li className="text-[#FFFFFF] hover:text-[#A8FF57]">
                    aboutUs
                  </li>
                </Link>
                <li className="relative">
                  {/* Study Menu Item */}
                  <button
                    onClick={toggleDropdown2}
                    className="text-[#FFFFFF] hover:text-[#A8FF57] flex items-center gap-x-[6px]"
                  >
                    Courses
                    {isDropdown2Open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdown2Open && (
                    <ul className="absolute left-0 mt-2 w-40 bg-[#A8FF57]/[.4] text-black rounded shadow-lg">
                      <Link to="/courses">
                        {" "}
                        <li className="px-4 py-2 text-[14px] text-black hover:text-[#A8FF57]">
                          Course
                        </li>
                      </Link>
                      <li className="px-4 py-2 text-[14px] text-black hover:text-[#A8FF57]">
                        <Link to="/courseDetails">Course Details</Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* Other Menu Items */}
                <li className="relative">
                  {/* Gallery Menu Item */}
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center  gap-x-[6px] text-[#FFFFFF] hover:text-[#A8FF57]"
                  >
                    What’s New
                    {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <ul className="absolute left-20 mt-2 w-40 bg-[#A8FF57]/[.4] text-black rounded shadow-lg">
                      <li className="px-4 py-2 text-black hover:text-[#A8FF57]">
                        <Link to="/whatsnew">whats new 1</Link>
                      </li>
                      <li className="px-4 py-2 text-black hover:text-[#A8FF57]">
                        <Link to="/whatsnewdetails">whats new details </Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* Other Menu Items */}
                <li>
                  <Link
                    to="/contactus"
                    className="text-[#FFFFFF] hover:text-[#A8FF57]"
                  >
                    Verify
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contactus"
                    className="text-[#FFFFFF] hover:text-[#A8FF57]"
                  >
                    Contact Us
                  </Link>
                </li>
              </div>
            </div>

            <button className="homeLargeAppoinMent  flex items-center justify-between text-[#010101] bg-[#A8FF57] font-bold">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
