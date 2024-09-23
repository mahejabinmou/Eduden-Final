import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ClientSide/Home/Home";
import FoundationCourse from "./ClientSide/CourseDetails/FoundationCourse";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/foundationcourse",
    element: <FoundationCourse></FoundationCourse>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
