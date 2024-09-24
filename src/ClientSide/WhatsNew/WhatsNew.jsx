import FreeWebinar from "../../components/WhatsNew/FreeWebinar"
import UpcomingCourses from "../../components/WhatsNew/UpcomingCourses"
import UpComingEvnts from "../../components/WhatsNew/UpComingEvnts"

const WhatsNew = () => {
    return (
        <>
            <div className="bg-[#010101] sectionPadding">
                <div className="font-sans mt-[150px] min-h-screen max-w-[1920px] mx-auto">
                    <UpcomingCourses />
                    <UpComingEvnts />
                    <FreeWebinar />
                </div>
            </div>
        </>
    )
}

export default WhatsNew
