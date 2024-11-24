import { useState } from "react";
import Cancel from "../../components/dialoge/Cancel";
import Ok from "../../components/dialoge/Ok";
import VerifyForm from "../../components/Verify/VerifyForm";
import UpcominEvents from "../Home/UpcomingEvents/UpcominEvents";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import WhatsNewHero from "../WhatsNew/WhatsNewHero";

const Verify = () => {
  const [isOkay, setIsOkay] = useState(false);
  const [isError, setIsError] = useState(true);
  return (
    <>
      {isOkay && <Ok setIsOkay={setIsOkay} />}
      {isError && <Cancel setIsError={setIsError} />}

      <Navbar />
      <WhatsNewHero title={"verify"} />
      <div
        className=" md:mt-[150px] pt-[60px] px-[30px] pb-[0px]
     md:pt-[80px] md:px-[32px]  md:pb-[80px]
     lg:px-[60px] lg:pt-[80px] lg:pb-[80px]
     xl:px-[100px] xl:pt-[100px] xl:pb-[100px]
     2xl:px-[150px] 2xl:pt-[100px] 2xl:pb-[100px] bg-black"
      >
        <VerifyForm setIsOkay={setIsOkay} setIsError={setIsError} />
      </div>
      <div>
        <UpcominEvents />
      </div>
      <Footer />
    </>
  );
};

export default Verify;
