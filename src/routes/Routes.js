import * as React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import { Signup } from "../Pages/Signup/Signup";
import Todo from "../Pages/Todo/Todo";
// import Todo from "../Pages/Todo/Todo";
// import NotFound from "../pages/NotFound/NotFound";

// import PrivateRoute from "./PrivateRoute";

export default function Routes() {
  return useRoutes([
    // {
    //     path: '/dashboard',
    //     element: <PrivateRoute navLink="/" component={DashboardLayout} />,
    //     children: [
    //         {
    //             path: '',
    //             element: <div />,
    //         },

    //     ],
    // },
    {
      path: "/todo",
      element: <Todo />,
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Signup",
      element: <Signup />,
    },
  ]);
}
