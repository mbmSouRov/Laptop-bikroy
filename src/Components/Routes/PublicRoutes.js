import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AddAProduct from "../Dashboards/AddAProduct/AddAProduct";
import AllSellers from "../Dashboards/AllSellers/AllSellers";
import Dashboard from "../Dashboards/Dashboard/Dashboard";
import MyBuyers from "../Dashboards/MyBuyers/MyBuyers";
import MyProducts from "../Dashboards/MyProducts/MyProducts";
import SBAerror from "../ErrorPages/SBAerror/SBAerror";
import DashboardLayout from "../Layout/DashboardLayout";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginSignup/Login/Login";
import Signup from "../Pages/LoginSignup/Signup/Signup";
import Products from "../Pages/Products/Products";
import AdminRoute from "./AdminRoute";
import PrivateRoutes from "./PrivateRoutes";
import SellerRoute from "./SellerRoute";
import Blog from "../Pages/Blog/Blog";
import Error404 from "../ErrorPages/404Error Page/Error404";
import AllBuyers from "../Dashboards/AllBuyers/AllBuyers";
import UserRoute from "./UserRoute";
import MyOrders from "../Dashboards/MyOrders/MyOrders";
import ReportedProduct from "../Dashboards/ReportedProducts/ReportedProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:brand",
        element: (
          <PrivateRoutes>
            <Products></Products>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://laptop-bikroy-server.vercel.app/laptops/${params.brand}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/sbaError",
        element: <SBAerror></SBAerror>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "*",
        element: <Error404></Error404>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/myOrders",
        element: (
          <UserRoute>
            <MyOrders></MyOrders>
          </UserRoute>
        ),
      },
      {
        path: "/dashboard/addAProduct",
        element: (
          <SellerRoute>
            <AddAProduct></AddAProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myProducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myBuyers",
        element: (
          <SellerRoute>
            <MyBuyers></MyBuyers>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/allSellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allBuyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reportedProducts",
        element: (
          <AdminRoute>
            <ReportedProduct></ReportedProduct>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
