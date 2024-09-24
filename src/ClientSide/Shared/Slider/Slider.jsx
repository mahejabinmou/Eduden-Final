// Importing necessary modules from Swiper
import { Pagination, Autoplay } from "swiper/modules"
import { SwiperSlide, Swiper } from "swiper/react"
import UpcomingCard from "../../../components/WhatsNew/UpcomingCard"
import { upComingCourses } from "../../../constant/dummyJson"
import "./Slider.css"
import { useState } from "react"
import UpComingCrsDetails from "../../../components/WhatsNew/UpComingCrsDetails"

const Slider = () => {
    const [isHover, setIsHover] = useState("")
    const handleMouseEnter = (id) => {
        setIsHover(id)
    }
    const handleMouseLeave = () => {
        setIsHover("")
        console.log("leave")
    }
    console.log(isHover)
    return (
        <div className="upCmnCrs" onMouseLeave={handleMouseLeave}>
            <Swiper
                slidesPerView={3}
                spaceBetween={26}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false, //
                }}
                loop={true}
                breakpoints={{
                    1620: {
                        slidesPerView: 4,
                        spaceBetween: 26,
                    },
                    0: {
                        slidesPerView: 3, // 3 slides for smaller screens
                    },
                }}
                pagination={false}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                touchEventsTarget="container"
            >
                {upComingCourses.map((courseDetails) => (
                    <SwiperSlide
                        className={`${
                            isHover === courseDetails.id && "upCmnhover"
                        } cursor-pointer`}
                        key={courseDetails.id}
                        onMouseEnter={() => handleMouseEnter(courseDetails.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {isHover !== courseDetails.id ? (
                            <UpcomingCard
                                {...courseDetails}
                                onMouseEnter={(e) =>
                                    handleMouseEnter(e, courseDetails.id)
                                }
                            />
                        ) : (
                            <UpComingCrsDetails
                                crsDetails={courseDetails.crsDetails}
                                title={courseDetails.title}
                                rating={courseDetails.rating}
                                price={courseDetails.price}
                                category={courseDetails.category}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Removed the extra UpcomingCard here */}
        </div>
    )
}

export default Slider
