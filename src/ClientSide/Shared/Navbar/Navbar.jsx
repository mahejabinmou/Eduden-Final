// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdArrowRightAlt, MdClose } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./Navbar.css";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isDropdown2Open, setIsDropdown2Open] = useState(false);

  const toggleDropdown2 = () => {
    setIsDropdown2Open(!isDropdown2Open);
  };
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/About";
  const isBlogsPage = location.pathname === "/blogs";
  const isContactPage = location.pathname === "/contactUs";
  const isStudyDistention = location.pathname === "/studyDistention";
  const isStudyDistention2 = location.pathname === "/studyDistention2";
  const isPhotoGallery = location.pathname === "/photo-gallery";
  const isVideoGallery = location.pathname === "/video-gallery";

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
              className={` ${isHomePage ? "text-white" : "text-black/[.8]"}`}
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
                      src="https://i.ibb.co/7R7kn56/logo-66ced2cb8a688.webp"
                      alt="brand logo"
                    />
                  </Link>
                </div>
                <div
                  className="md:text-[38px] text-[35px] font-title"
                  onClick={handleClose}
                >
                  <MdClose className="text-[#7EA254]" />
                </div>
              </div>
              <div className="mobileMenuParent">
                <Link to="/" onClick={menuClose}>
                  <li
                    className={` ${
                      isHomePage
                        ? "text-[#F6941E] hover:text-[#F6941E]"
                        : "text-black hover:text-[#F6941E]"
                    }`}
                  >
                    Home
                  </li>
                </Link>
                <Link to="/About" onClick={menuClose}>
                  <li
                    className={` ${
                      isAboutPage ? "text-[#f6941e]" : "text-black"
                    }`}
                  >
                    About Us
                  </li>
                </Link>

                <li className="relative">
                  <button
                    onClick={toggleDropdown2}
                    className="flex items-center w-full text-left px-0 py-2 text-black hover:text-[#f6941e] focus:outline-none"
                  >
                    Study Distention
                    {isDropdown2Open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                  {isDropdown2Open && (
                    <ul className="ml-4 mt-2 w-full bg-[#F5F5F5] text-black rounded shadow-lg">
                      <Link to="/studyDistention">
                        <li
                          className={`px-4 py-2 ${
                            isStudyDistention ? "text-[#F6941E]" : "text-black"
                          }`}
                        >
                          Study Distention
                        </li>
                      </Link>
                      <Link to="/studyDistention2">
                        <li
                          className={`px-4 py-2 ${
                            isStudyDistention2 ? "text-[#F6941E]" : "text-black"
                          }`}
                        >
                          Study Distention 2
                        </li>
                      </Link>
                    </ul>
                  )}
                </li>
                <li className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center w-full text-left px-0 py-2 text-black hover:text-[#f6941e] focus:outline-none"
                  >
                    Gallery
                    {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                  {isDropdownOpen && (
                    <ul className="ml-4 mt-2 w-full bg-[#F5F5F5] text-black rounded shadow-lg">
                      <Link to="/photo-gallery">
                        <li
                          className={`px-4 py-2 ${
                            isPhotoGallery ? "text-[#F6941E]" : "text-black"
                          }`}
                        >
                          Photo Gallery
                        </li>
                      </Link>
                      <Link to="/video-gallery">
                        <li
                          className={`px-4 py-2 ${
                            isVideoGallery ? "text-[#F6941E]" : "text-black"
                          }`}
                        >
                          Video Gallery
                        </li>
                      </Link>
                    </ul>
                  )}
                </li>

                <Link to="/blogs" onClick={menuClose}>
                  <li
                    className={` ${
                      isBlogsPage ? "text-[#f6941e]" : "text-black"
                    }`}
                  >
                    Blogs
                  </li>
                </Link>

                <Link to="/contactUs">
                  <li
                    className={` ${
                      isContactPage ? "text-[#f6941e]" : "text-black"
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
                    <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg">
                      <Link to="/whatsnew">
                        {" "}
                        <li className="px-4 py-2 text-[14px] text-[#FFFFFF] hover:text-[#A8FF57]">
                          Course 1
                        </li>
                      </Link>
                      <li className="px-4 py-2 text-[14px] text-[#FFFFFF] hover:text-[#A8FF57]">
                        <Link to="/studyDistention2">Course 2</Link>
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
                    <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg">
                      <li className="px-4 py-2 hover:bg-[#f6941e] hover:text-white">
                        <Link to="/photo-gallery">whats new 1</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#f6941e] hover:text-white">
                        <Link to="/video-gallery">whats new 2</Link>
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
