import { NavLink, Outlet } from "react-router-dom";
import {
  FaCalculator,
  FaHome,
  FaMarsStroke,
  FaPlus,
  FaUser,
} from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import control from "../assets/icon/control.png";

// import Header from "../Pages/Shared/Header/Header";
// import useAdmin from "../Hooks/useAdmin";
// import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useUserRole";
import { useState } from "react";
import Title from "../Common/Title";

const DashboardLayout = () => {
  // const { user } = useAuth();
  const [role] = useAdmin();

  const [open, setOpen] = useState(false);

  return (
    <div className="flex ">
      <div
        className={`bg-[#303956] ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            className={`cursor-pointer duration-500 w-10 ${
              open && "rotate-[360deg]"
            }`}
            src="https://www.reshot.com/preview-assets/icons/2RKQ6GCBVH/language-2RKQ6GCBVH.svg"
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            <NavLink
              to="/"
              className="btn btn-ghost text-sm uppercase font-mono"
            >
              Learn Lang
            </NavLink>
          </h1>
        </div>
        <ul className="pt-6 text-slate-200">
          {role?.role == "admin" ? (
            <>
              <li
                className={` rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4  `}
              >
                <NavLink
                  className={`flex items-center gap-5 ${({ isActive }) =>
                    isActive ? "text-orange-500 " : ""}`}
                  to="/dashboard/manageUser"
                >
                  <FaUser></FaUser>
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left text-lg duration-200`}
                  >
                    Manage Users
                  </span>
                </NavLink>
              </li>
              <li
                className={`text-slate-200 rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4  `}
              >
                <NavLink
                  className={`flex items-center gap-5 ${({ isActive }) =>
                    isActive ? "text-orange-500 " : ""}`}
                  to="/dashboard/manageClasses"
                >
                  <FaCalculator></FaCalculator>
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left text-lg duration-200`}
                  >
                    {/* {Menu.title} */}
                    Manage Classes
                  </span>
                </NavLink>
              </li>
            </>
          ) : role?.role == "instructor" ? (
            <>
              <li
                className={`text-slate-200 rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4  `}
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-orange-500 " : ""
                  }
                  to="/dashboard/my-class"
                >
                  <div className="flex items-center gap-2">
                    <FcReading></FcReading>
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left text-lg duration-200`}
                    >
                      MY Class
                    </span>
                  </div>
                </NavLink>
              </li>
              <li
                className={`text-slate-200 rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4  `}
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-orange-500 " : ""
                  }
                  to="/dashboard/add-class"
                >
                  <div className="flex items-center gap-2">
                    <FaPlus></FaPlus>{" "}
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left text-lg duration-200`}
                    >
                      Add Class
                    </span>
                  </div>
                </NavLink>
              </li>
            </>
          ) : (
            ""
          )}
          <hr />
          <li
            className={`text-slate-200 rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4  `}
          >
            <NavLink
              className={({ isActive }) => (isActive ? "text-orange-500 " : "")}
              to="/dashboard/add-class"
            >
              <div className="flex items-center gap-5 text-lg duration-200">
                <FaHome></FaHome>
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left text-lg duration-200`}
                >
                  Home
                </span>
              </div>
            </NavLink>
          </li>
          <li
            className={`text-slate-200 rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4  `}
          >
            <NavLink
              className={({ isActive }) => (isActive ? "text-orange-500 " : "")}
              to="/instructors"
            >
              <div className="flex items-center gap-5 text-lg duration-200">
                <FaMarsStroke></FaMarsStroke>
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left text-lg duration-200`}
                >
                  Instructors
                </span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <Title
          type={
            role?.role == "admin"
              ? "Admin"
              : role?.role == "instructor"
              ? "Instructor"
              : "Student"
          }
          name={role?.name}
        ></Title>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
