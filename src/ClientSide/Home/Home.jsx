import AboutUs from "./AboutUs/AboutUs";
import AllCourses from "./AllCourses/AllCourses";
import HeroSection from "./HeroSection/HeroSection";
import PopularCategories from "./PopularCategories/PopularCategories";
import TrendingCourses from "./TrendingCourses/TrendingCourses";

const Home = () => {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <AboutUs></AboutUs>
      <PopularCategories></PopularCategories>
      <TrendingCourses></TrendingCourses>
      <AllCourses></AllCourses>
    </div>
  );
};

export default Home;
