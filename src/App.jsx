import { RouterProvider } from 'react-router-dom';
import {router} from './Router';
import { NavBar } from './components/NavBar';


export default function App() {
  return (
    <>
      <NavBar />
    <RouterProvider router={router} />
    </>
  )
}
