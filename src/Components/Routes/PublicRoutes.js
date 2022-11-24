import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";

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
        path: "/products/:brand",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/laptops/${params.brand}`),
      },
    ],
  },
]);

export default router;
