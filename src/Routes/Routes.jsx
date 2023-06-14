import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOuts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/OutsideHome/Login/Login";
import Register from "../Pages/OutsideHome/Register/Register";
import DashboardLayout from "../LayOuts/DashboardLayout";
import AddClass from "../Pages/Dashboard/Instructor/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/Instructor/MyClass/MyClass";
import PrivetRoute from "./PrivetRoute";
import InstructorRoute from "./InstructorRoute";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser/ManageUser";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses/ManageClasses";
import Classes from "../Pages/OutsideHome/Classes/Classes";
import StudentRoute from "./StudentRoute";
import MySelectedClasses from "../Pages/Dashboard/Students/MySelectedClasses/MySelectedClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";
import EnrolledClass from "../Pages/Dashboard/Students/EnrolledClass/EnrolledClass";

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
        path: "classes",
        element: <Classes></Classes>,
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
        element: (
          <InstructorRoute>
            <MyClass></MyClass>
          </InstructorRoute>
        ),
      },
      {
        path: "add-class",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "manageUser",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: "my-selected-class",
        element: (
          <StudentRoute>
            <MySelectedClasses></MySelectedClasses>
          </StudentRoute>
        ),
      },
      {
        path: "enrolled-class",
        element: (
          <StudentRoute>
            <EnrolledClass></EnrolledClass>
          </StudentRoute>
        ),
      },
    ],
  },
]);
export default router;
