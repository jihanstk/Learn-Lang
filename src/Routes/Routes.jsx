import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOuts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/OutsideHome/Login/Login";
import Register from "../Pages/OutsideHome/Register/Register";
import DashboardLayout from "../LayOuts/DashboardLayout";
import AddClass from "../Pages/Dashboard/Instructor/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/Instructor/MyClass/MyClass";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    children: [
      {
        path: "my-class",
        element: <MyClass></MyClass>,
      },
      {
        path: "add-class",
        element: <AddClass></AddClass>,
      },
    ],
  },
]);
export default router;
