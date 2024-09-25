import AboutUs from "./AboutUs/AboutUs";
import AllCourses from "./AllCourses/AllCourses";
import HeroSection from "./HeroSection/HeroSection";
import OurCollaboration from "./OurCollaboration/OurCollaboration";
import PopularCategories from "./PopularCategories/PopularCategories";
import TrendingCourses from "./TrendingCourses/TrendingCourses";
import Video from "./Video/Video";

const Home = () => {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <AboutUs></AboutUs>
      <PopularCategories></PopularCategories>
      <TrendingCourses></TrendingCourses>
      {/* <AllCourses></AllCourses> */}
      <Video></Video>
      <OurCollaboration></OurCollaboration>
    </div>
  );
};

export default Home;
