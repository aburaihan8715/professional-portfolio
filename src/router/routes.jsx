import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import AppLayout from "../layouts/AppLayout";
import ProjectDetails from "../pages/ProjectDetails";

const router = createBrowserRouter([
  {
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/project-details/:id",
        element: <ProjectDetails></ProjectDetails>,
      },
    ],
  },
]);

export default router;
