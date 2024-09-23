import * as ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./ClientSide/Home/Home"
import FoundationCourse from "./ClientSide/CourseDetails/FoundationCourse"
import "./index.css"
import WhatsNew from "./ClientSide/Whatsnew/WhatsNew"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/foundationcourse",
        element: <FoundationCourse></FoundationCourse>,
    },
    { path: "/whatsnew", element: <WhatsNew /> },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
)
