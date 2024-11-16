import { useEffect } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import CourseDetailsHero from "./CourseDetailsHero/CourseDetailsHero";
import FoundationCourse from "./FoundationCourse/FoundationCourse";
import JoinOurClan from "./JoinOurClan/JoinOurClan";

const CourseDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <CourseDetailsHero></CourseDetailsHero>
      <FoundationCourse></FoundationCourse>
      <JoinOurClan></JoinOurClan>
      <Footer></Footer>
    </div>
  );
};

export default CourseDetails;
