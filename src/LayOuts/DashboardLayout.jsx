import { NavLink, Outlet } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";

const DashboardLayout = () => {
  const { user } = useAuth();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#303956] text-white">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <h2 className="text-2xl p-4 border-b-2 border-b-white">Instructor</h2>
        <ul className=" p-4 w-80 h-full ">
          {/* Sidebar content here */}

          {user ? (
            <>
              <li className="uppercase">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : ""
                  }
                  to="/dashboard/add-class"
                >
                  <div className="flex items-center gap-2">
                    <FaPlus></FaPlus> Add Class
                  </div>
                </NavLink>
              </li>
              <li className="uppercase">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : ""
                  }
                  to="/classes"
                >
                  <div className="flex items-center gap-2">
                    <FcReading></FcReading> My Class
                  </div>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="uppercase">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : ""
                  }
                  to="/"
                >
                  {" "}
                  Dashboard
                </NavLink>
              </li>
              <li className="uppercase">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : ""
                  }
                  to="/"
                >
                  HOME
                </NavLink>
              </li>
            </>
          )}

          <hr className="mt-7" />
          <li className="uppercase">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
              }
              to="/"
            >
              {" "}
              HOME
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
              }
              to="/instructors"
            >
              {" "}
              Instructors
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
              }
              to="/classes"
            >
              {" "}
              Classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
