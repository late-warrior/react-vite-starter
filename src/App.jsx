import { RouterProvider } from 'react-router-dom';
import {router} from './Router';


export default function App() {
  return (
    <RouterProvider router={router}>
    <h1 className="text-3xl font-bold underline bg-teal-200">
      Hello world!
    </h1>
    </RouterProvider>
  )
}
