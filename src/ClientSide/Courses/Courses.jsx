/* eslint-disable no-irregular-whitespace */
import SearchCourses from "../../components/Courses/SearchCourses"
import "./Courses.css"

import CourseLists from "../../components/Courses/CourseLists/CourseLists"
import Navbar from "../Shared/Navbar/Navbar"
import WhatsNewHero from "../WhatsNew/WhatsNewHero"
import Footer from "../Shared/Footer/Footer"
const Courses = () => {
    return (
        <>
            <Navbar />
            <WhatsNewHero title={"Courses"} />
            <div className="sectionPadding font-sans">
                <div className="max-w-[1920px]  mx-auto">
                    <SearchCourses />
                    <CourseLists />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Courses
