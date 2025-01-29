import {
  createBrowserRouter,
} from "react-router-dom";  
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
// import AboutMe from "../Pages/AboutMe";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import ProjectDetails from "../Pages/ProjectDetails";
import AboutMe from "../Pages/AboutMe";



const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout> ,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element:<AboutMe></AboutMe>,
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      },
      {
        path: '/skills',
        element:<Skills></Skills>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/project-details/:id',
        element: <ProjectDetails></ProjectDetails>
      }
    ]
  },

]);


export default router;