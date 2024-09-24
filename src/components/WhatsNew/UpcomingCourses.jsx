import Slider from "../../ClientSide/Shared/Slider/Slider"
import UpCmnTtle from "./UpCmnTtle"

const UpcomingCourses = () => {
    return (
        <div>
            <UpCmnTtle />
            <div>
                <h3 className="font-gucina text-[70px] text-white font-bold leading-[80px] text-center mt-[ ]">
                    Upcoming Coursesx
                </h3>
            </div>
            <div className="mt-[75px] text-white h-[650px]">
                <Slider />
            </div>
        </div>
    )
}

export default UpcomingCourses
