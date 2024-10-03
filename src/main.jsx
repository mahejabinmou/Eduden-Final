import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ClientSide/Home/Home";
import "./index.css";
import WhatsNew from "./ClientSide/Whatsnew/WhatsNew";
import "swiper/css";
import "swiper/css/pagination";
import CourseDetails from "./ClientSide/CourseDetails/CourseDetails";
import Verify from "./ClientSide/Verify/Verify";
import ContactUs from "./ClientSide/ContactUs/ContactUs";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import Navbar from "./ClientSide/Shared/Navbar/Navbar";
import Footer from "./ClientSide/Shared/Footer/Footer";
import Courses from "./ClientSide/Courses/Courses";
import AboutUsPage from "./ClientSide/AboutUsPage/AboutUsPage";
import SignUp from "./ClientSide/SignUp/SignUp";
import LogIn from "./ClientSide/LogIn/LogIn";
import Dashboard from "./ClientSide/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/navbar",
    element: <Navbar></Navbar>,
  },
  {
    path: "/footer",
    element: <Footer></Footer>,
  },
  {
    path: "/courseDetails",
    element: <CourseDetails></CourseDetails>,
  },
  { path: "/whatsnew", element: <WhatsNew /> },

  {
    path: "/about",
    element: <AboutUsPage></AboutUsPage>,
  },
  {
    path: "/verify",
    element: <Verify></Verify>,
  },
  {
    path: "/contactUs",
    element: <ContactUs></ContactUs>,
  },
  {
    path: "/courses",
    element: <Courses></Courses>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/LogIn",
    element: <LogIn></LogIn>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
