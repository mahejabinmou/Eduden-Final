import JoinOurClan from "../CourseDetails/JoinOurClan/JoinOurClan";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import ContactCard from "./ContactCard/ContactCard";
import ContactForm from "./ContactForm/ContactForm";
import ContactUsHero from "./ContactUsHero/ContactUsHero";
import Faq from "./Faq/Faq";

const ContactUs = () => {
  // Function to handle input change

  return (
    <div className="bg-[#010101] ">
      <Navbar></Navbar>
      <ContactUsHero></ContactUsHero>
      <ContactCard></ContactCard>
      <ContactForm></ContactForm>
      <JoinOurClan></JoinOurClan>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
