import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ClientSide/Home/Home";
import "./index.css";
import WhatsNew from "./ClientSide/Whatsnew/WhatsNew";
import "swiper/css";
import "swiper/css/pagination";
import CourseDetails from "./ClientSide/CourseDetails/CourseDetails";
import AboutUs from "./ClientSide/AboutUs/AboutUs";
import Verify from "./ClientSide/Verify/Verify";
import ContactUs from "./ClientSide/ContactUs/ContactUs";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import Navbar from "./ClientSide/Shared/Navbar/Navbar";
import Footer from "./ClientSide/Shared/Footer/Footer";

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
    path: "/aboutUs",
    element: <AboutUs></AboutUs>,
  },
  {
    path: "/verify",
    element: <Verify></Verify>,
  },
  {
    path: "/contactUs",
    element: <ContactUs></ContactUs>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
