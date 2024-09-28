import OurCollaboration from "../Home/OurCollaboration/OurCollaboration";
import Testimonial from "../Home/Testimonial/Testimonial";
import Video from "../Home/Video/Video";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import AboutHero from "./AboutHero/AboutHero";
import OnlineCourses from "./OnlineCourses/OnlineCourses";

const AboutUsPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <AboutHero></AboutHero>
      <OnlineCourses></OnlineCourses>
      <Video></Video>
      <Testimonial></Testimonial>
      <OurCollaboration></OurCollaboration>
      <Footer></Footer>
    </div>
  );
};

export default AboutUsPage;
