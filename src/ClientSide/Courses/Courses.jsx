/* eslint-disable no-irregular-whitespace */
import SearchCourses from "../../components/Courses/SearchCourses";
import "./Courses.css";

import CourseLists from "../../components/Courses/CourseLists/CourseLists";
import Navbar from "../Shared/Navbar/Navbar";

import Footer from "../Shared/Footer/Footer";
import WhatsNewHero from "../../ClientSide/WhatsNew/WhatsNewHero";
import { useEffect } from "react";
const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <WhatsNewHero title={"Courses"} />
      <div className="sectionPadding font-sans">
        <div className="max-w-[1920px]  mx-auto">
          <SearchCourses />
          <CourseLists />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
