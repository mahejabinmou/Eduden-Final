import FreeWebinar from "../../components/WhatsNew/FreeWebinar"
import UpcomingCourses from "../../components/WhatsNew/UpcomingCourses"
import UpcominEvents from "../Home/UpcomingEvents/UpcominEvents"
import Navbar from "../Shared/Navbar/Navbar"

const WhatsNew = () => {
    return (
        <>
            <Navbar />
            <div className="bg-[#010101] sectionPadding">
                <div className="font-sans mt-[150px] min-h-screen max-w-[1920px] mx-auto">
                    <UpcomingCourses />
                    <UpcominEvents />
                    <FreeWebinar />
                </div>
            </div>
        </>
    )
}

export default WhatsNew
