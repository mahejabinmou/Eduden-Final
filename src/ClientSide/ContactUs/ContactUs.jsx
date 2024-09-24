import JoinOurClan from "../CourseDetails/JoinOurClan/JoinOurClan";
import ContactCard from "./ContactCard/ContactCard";
import ContactForm from "./ContactForm/ContactForm";
import Faq from "./Faq/Faq";

const ContactUs = () => {
  // Function to handle input change

  return (
    <div className="bg-[#010101] ">
      <ContactCard></ContactCard>
      <ContactForm></ContactForm>
      <JoinOurClan></JoinOurClan>
      <Faq></Faq>
    </div>
  );
};

export default ContactUs;
