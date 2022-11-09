import { createBrowserRouter } from "react-router-dom";
import AddService from "../../AddService/AddService";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Home from "../../Home/Home/Home";
import Main from "../../Layouts/Main";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/addservice',
        element: <AddService></AddService>
      },
      {
        path: '/services/:id',
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`),
        element: <ServiceDetails></ServiceDetails>
      }
    ]
  }
])