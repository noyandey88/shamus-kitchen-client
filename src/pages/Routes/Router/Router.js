import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner";
import AddService from "../../AddService/AddService";
import AllServices from "../../AllServices/AllServices";
import Blogs from "../../Blogs/Blogs";
import EditReview from "../../EditReview/EditReview";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Home from "../../Home/Home/Home";
import Main from "../../Layouts/Main";
import Login from "../../Login/Login";
import MyReviews from "../../MyReviews/MyReviews";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";
import SignUp from "../../SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const LazyServices = React.lazy(() => import("../../AllServices/AllServices"));
const LazyMyReviews = React.lazy(() => import("../../MyReviews/MyReviews"));
const LazyServiceDetails = React.lazy(() => import("../../ServiceDetails/ServiceDetails"));
const LazyEditReview = React.lazy(() => import("../../EditReview/EditReview"));
const LazyAddService = React.lazy(() => import("../../AddService/AddService"));

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
        path: '/services',
        element: (
          // <AllServices></AllServices>
          <React.Suspense fallback={<Spinner />}>
            <LazyServices />
          </React.Suspense>
        )
      },
      {
        path: '/addservice',
        element: (
          <React.Suspense fallback={<Spinner />}>
            <PrivateRoute>
              <LazyAddService />
            </PrivateRoute>
          </React.Suspense>
        )
      },
      {
        path: '/services/:id',
        loader: ({ params }) => fetch(`https://cloud-kitchen-assignment-server.vercel.app/service/${params.id}`),
        element: (
          // <ServiceDetails></ServiceDetails>
          <React.Suspense fallback={<Spinner />}>
            <LazyServiceDetails />
          </React.Suspense>
        )
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/myreviews',
        element: (
          <React.Suspense fallback={<Spinner />}>
            <PrivateRoute>
              <LazyMyReviews />
            </PrivateRoute>
          </React.Suspense>
        )
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/reviewsupdate/:id',
        loader: ({ params }) => fetch(`https://cloud-kitchen-assignment-server.vercel.app/review/${params.id}`),
        element: (
          <React.Suspense>
            <PrivateRoute>
              <LazyEditReview />
            </PrivateRoute>
          </React.Suspense>
        )
      }
    ]
  }
])