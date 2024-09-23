import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ClientSide/Home/Home";
import "./index.css";
import CourseDetails from "./ClientSide/CourseDetails/CourseDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/coursedetails",
    element: <CourseDetails></CourseDetails>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
