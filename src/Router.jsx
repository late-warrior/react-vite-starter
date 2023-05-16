import {
    createBrowserRouter,
  } from "react-router-dom";
  
  import { Portfolio } from "./pages/Portfolio";
  import {About} from "./pages/About";
  import {Home} from "./pages/Home";
  
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
      path: "portfolio",
      element: <Portfolio />
    }
  ];
  
  export const router = createBrowserRouter(routes);
  