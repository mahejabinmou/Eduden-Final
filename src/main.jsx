import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ClientSide/Home/Home";
import "./index.css";
import WhatsNew from "./ClientSide/Whatsnew/WhatsNew";
import "swiper/css";
import "swiper/css/pagination";
import CourseDetails from "./ClientSide/CourseDetails/CourseDetails";

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
    path: "/courseDetails",
    element: <CourseDetails></CourseDetails>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
