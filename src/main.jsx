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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
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
