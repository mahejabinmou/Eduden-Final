import VerifyForm from "../../components/Verify/VerifyForm"
import UpcominEvents from "../Home/UpcomingEvents/UpcominEvents"
import Footer from "../Shared/Footer/Footer"
import Navbar from "../Shared/Navbar/Navbar"
import WhatsNewHero from "../WhatsNew/WhatsNewHero"

const Verify = () => {
    return (
        <>
            <Navbar />
            <WhatsNewHero title={"verify"} />
            <div className="mt-[150px] sectionPadding bg-black">
                <VerifyForm />
            </div>
            <div>
                <UpcominEvents />
            </div>
            <Footer />
        </>
    )
}

export default Verify
