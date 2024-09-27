// Importing necessary modules from Swiper
import { Pagination, Autoplay } from "swiper/modules"
import { SwiperSlide, Swiper } from "swiper/react"
import UpcomingCard from "../../../components/WhatsNew/UpcomingCard"
import { upComingCourses } from "../../../constant/dummyJson"
import "./Slider.css"
import { useState } from "react"
import UpComingCrsDetails from "../../../components/WhatsNew/UpComingCrsDetails"
import handleMouseEnter from "../../../helpers/handleMouseEnter.js"

const Slider = () => {
    const [isHover, setIsHover] = useState("")

    console.log(isHover)
    return (
        <div className="upCmnCrs" onMouseLeave={() => setIsHover("")}>
            <Swiper
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false, //
                }}
                loop={true}
                breakpoints={{
                    1440: {
                        spaceBetween: 26,
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                pagination={false}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                touchEventsTarget="container"
            >
                {upComingCourses.map((courseDetails) => (
                    <SwiperSlide
                        className={` ${
                            isHover === courseDetails.id && "upCmnhover"
                        } cursor-pointer `}
                        key={courseDetails.id}
                        onMouseEnter={() =>
                            handleMouseEnter(courseDetails.id, setIsHover)
                        }
                        onMouseLeave={() => setIsHover("")}
                    >
                        {isHover !== courseDetails.id ? (
                            <UpcomingCard
                                {...courseDetails}
                                onMouseEnter={() =>
                                    handleMouseEnter(
                                        courseDetails.id,
                                        setIsHover
                                    )
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
