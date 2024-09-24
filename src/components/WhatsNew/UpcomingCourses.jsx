import Slider from "../../ClientSide/Shared/Slider/Slider"

const UpcomingCourses = () => {
    return (
        <div>
            <div className="flex items-center gap-[10px] justify-center">
                <hr className="w-[82px] h-[1px] bg-white" />
                <h3 className="font-gucina text-[#A8FF57] text-[20px] font-bold leading-[115%]">
                    Upcoming
                </h3>
                <hr className="w-[82px] h-[1px] bg-white" />
            </div>
            <div>
                <h3 className="font-gucina text-[70px] text-white font-bold leading-[80px] text-center mt-[ ]">
                    Upcoming Coursesx
                </h3>
            </div>
            <div className="mt-[75px] text-white ">
                <Slider />
            </div>
        </div>
    )
}

export default UpcomingCourses
