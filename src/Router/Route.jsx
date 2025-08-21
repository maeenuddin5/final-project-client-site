import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AddBlog from "../Pages/AddBlog";
import AllBlogs from "../Pages/AllBlogs";
import ErrorPage from "../Pages/ErrorPage";
import BlogDetails from "../Pages/BlogDetails";
import UpdateBlog from "../Pages/UpdateBlog";
import FeaturedBlogs from "../Pages/FeaturedBlogs";
import PrivateRoute from "./PrivateRoute";
import Wishlist from "../Pages/Wishlist";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: ([
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/addBlog',
        element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
      },
      {
        path: '/allBlogs',
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: '/blog/:id',
        element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/blogs/${params.id}`)
      },
      {
        path: '/update-blog/:id',
        element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/blogs/${params.id}`)
      },
      {
        path: '/featured',
        element: <FeaturedBlogs></FeaturedBlogs>
      },
      {
        path: '/wishlist',
        element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
      }
    ])
  },
]);

export default Route;