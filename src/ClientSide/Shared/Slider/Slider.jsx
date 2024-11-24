// Importing necessary modules from Swiper
import { Pagination, Autoplay } from "swiper/modules"
import { SwiperSlide, Swiper } from "swiper/react"
import UpcomingCard from "../../../components/WhatsNew/UpcomingCard"
import { filterCourse, upComingCourses } from "../../../constant/dummyJson"
import "./Slider.css"
import { useState } from "react"
import UpComingCrsDetails from "../../../components/WhatsNew/UpComingCrsDetails"
import handleMouseEnter from "../../../helpers/handleMouseEnter.js"
import Course from "../../Home/AllCourses/Course.jsx"
import categories from "../../../constant/stateDummyData.js"
import Card from "../../../components/Card/Card.jsx"

const Slider = () => {
    const [isHover, setIsHover] = useState("")

    return (
        <div className="upCmnCrs" onMouseLeave={() => setIsHover("")}>
            <Swiper
                slidesPerView={1}
                // autoplay={{
                //     delay: 3000,
                //     disableOnInteraction: false, //
                // }}
                // loop={true}
                breakpoints={{
                    1620: {
                        spaceBetween: 26,
                        slidesPerView: 4,
                    },
                    1240: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    500: {
                        slidesPerView: 1,
                    },
                }}
                pagination={false}
                modules={[Pagination, Autoplay]}
                className="mySwiper bg-black h-[680px] k"
                touchEventsTarget="container"
            >
                {/* {upComingCourses.map((courseDetails) => (
                    <SwiperSlide
                        className={` ${
                            isHover === courseDetails.id && "upCmnhover "
                        } cursor-pointer `}
                        key={courseDetails.id}
                        onMouseEnter={() =>
                            handleMouseEnter(courseDetails.id, setIsHover)
                        }
                        onMouseLeave={() => setIsHover("")}
                    > */}
                {/* {isHover !== courseDetails.id ? (
              <UpcomingCard
                {...courseDetails}
                onMouseEnter={() =>
                  handleMouseEnter(courseDetails.id, setIsHover)
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
            )} */}
                {filterCourse.map((cat, index) => (
                    <SwiperSlide key={index}>
                        <Card key={index} {...cat} slider={true} />
                    </SwiperSlide>
                ))}
                {/* <Course currentCategory={currentCategory} /> */}
            </Swiper>
            {/* Removed the extra UpcomingCard here */}
        </div>
    )
}

export default Slider
