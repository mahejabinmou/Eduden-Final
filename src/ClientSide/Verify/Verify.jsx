import { useState } from "react"
import Cancel from "../../components/dialoge/Cancel"
import Ok from "../../components/dialoge/Ok"
import VerifyForm from "../../components/Verify/VerifyForm"
import UpcominEvents from "../Home/UpcomingEvents/UpcominEvents"
import Footer from "../Shared/Footer/Footer"
import Navbar from "../Shared/Navbar/Navbar"
import WhatsNewHero from "../WhatsNew/WhatsNewHero"

const Verify = () => {
    const [isOkay, setIsOkay] = useState(false)
    const [isError, setIsError] = useState(true)
    return (
        <>
            {isOkay && <Ok setIsOkay={setIsOkay} />}
            {isError && <Cancel setIsError={setIsError} />}

            <Navbar />
            <WhatsNewHero title={"verify"} />
            <div className="mt-[150px] sectionPadding bg-black">
                <VerifyForm setIsOkay={setIsOkay} setIsError={setIsError} />
            </div>
            <div>
                <UpcominEvents />
            </div>
            <Footer />
        </>
    )
}

export default Verify
