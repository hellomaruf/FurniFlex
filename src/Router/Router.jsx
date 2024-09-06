import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import SignUp from "../Pages/Authentication/SignUp";
import SignIn from "../Pages/Authentication/SignIn";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);
