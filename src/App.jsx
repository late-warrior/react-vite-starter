import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";

import { Portfolio } from "./Portfolio";

const routes = [
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
        <br />
        <Link to="portfolio">Portfolio</Link>
      </div>
    )
  },
  {
    path: "about",
    element: (
      <div className="bg-gray-400">
        <p className="text-blue-500">About</p>
      </div>
    )
  },
  {
    path: "portfolio",
    element: <Portfolio />
  }
];

const router = createBrowserRouter(routes);

export default function App() {
  return (<RouterProvider router={router}>
        <h1 className="text-3xl font-bold underline text-blue-400">
      Hello world!
    </h1> 
    </RouterProvider>)
}