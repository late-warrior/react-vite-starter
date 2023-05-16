import {
  Outlet,
    createBrowserRouter,
  } from "react-router-dom";
  
  import { Projects } from "./pages/Projects";
  import {About} from "./pages/About";
  import {Home} from "./pages/Home";
import { Experience } from "./pages/Experience";
import { NavBar } from "./components/NavBar";
  
  const routes = [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "about",
      element: <About />
    },
    {
      path: "projects",
      element: <Projects />
    },
    {
      path: "experience",
      element: <Experience />
    }
  ];

//   function NavBarWrapper() {
//     return (<>
//     <NavBar />
//     <Outlet />
//     </>)
//   }

//   const routes = [
//     {
//         path: "/", 
//         element: <NavBarWrapper/>,
//         children:[
//              {
//                  path: "/", // yes, again
//                  element: <Home/>
//              },
//              {
//                  path: "/about",
//                  element: <About />
//              },
//         ]
//     }
// ];
  
  export const router = createBrowserRouter(routes);
  