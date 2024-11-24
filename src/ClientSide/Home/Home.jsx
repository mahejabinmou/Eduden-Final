// import { useEffect } from "react";
// import Faq from "../ContactUs/Faq/Faq";
// import JoinOurClan from "../CourseDetails/JoinOurClan/JoinOurClan";
// import Footer from "../Shared/Footer/Footer";
// import AboutUs from "./AboutUs/AboutUs";
// import AllCourses from "./AllCourses/AllCourses";
// import HeroSection from "./HeroSection/HeroSection";
// import NeedHelp from "./NeedHelp/NeedHelp";
// import OurCollaboration from "./OurCollaboration/OurCollaboration";
// import PopularCategories from "./PopularCategories/PopularCategories";
// import Testimonial from "./Testimonial/Testimonial";
// import TrendingCourses from "./TrendingCourses/TrendingCourses";
// import UpcominEvents from "./UpcomingEvents/UpcominEvents";
// import Video from "./Video/Video";

// const Home = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div className="">
//       <HeroSection></HeroSection>
//       <AboutUs></AboutUs>
//       <PopularCategories></PopularCategories>
//       <TrendingCourses></TrendingCourses>
//       <AllCourses></AllCourses>
//       <Video></Video>
//       <OurCollaboration></OurCollaboration>
//       <JoinOurClan></JoinOurClan>
//       <UpcominEvents></UpcominEvents>
//       <Testimonial></Testimonial>
//       <NeedHelp></NeedHelp>
//       <Faq></Faq>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default Home;

import { useEffect } from "react";
import Faq from "../ContactUs/Faq/Faq";
import JoinOurClan from "../CourseDetails/JoinOurClan/JoinOurClan";
import Footer from "../Shared/Footer/Footer";
import AboutUs from "./AboutUs/AboutUs";
import AllCourses from "./AllCourses/AllCourses";
import HeroSection from "./HeroSection/HeroSection";
import NeedHelp from "./NeedHelp/NeedHelp";
import OurCollaboration from "./OurCollaboration/OurCollaboration";
import PopularCategories from "./PopularCategories/PopularCategories";
import Testimonial from "./Testimonial/Testimonial";
import TrendingCourses from "./TrendingCourses/TrendingCourses";
import UpcominEvents from "./UpcomingEvents/UpcominEvents";
import Video from "./Video/Video";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <HeroSection></HeroSection>
      <AboutUs></AboutUs>
      <PopularCategories></PopularCategories>
      <TrendingCourses></TrendingCourses>
      <AllCourses></AllCourses>
      <Video></Video>
      <OurCollaboration></OurCollaboration>
      <JoinOurClan></JoinOurClan>
      <UpcominEvents></UpcominEvents>
      <Testimonial></Testimonial>
      <NeedHelp></NeedHelp>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
};

export default Home;
