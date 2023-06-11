import { NavLink, Outlet } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FcReading } from "react-icons/fc";

import Header from "../Pages/Shared/Header/Header";
// import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const DashboardLayout = () => {
  const { user } = useAuth();
  // const [isAdmin] = useAdmin();
  return (
    <>
      <Header></Header>
      <div className="drawer lg:drawer-open pt-20 ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <div className="w-full">
            <Outlet></Outlet>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-[#303956] text-white max-h-screen ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <h2 className="text-2xl p-4 border-b-2 border-b-white">
            Instructor: <small>{user.displayName}</small>
          </h2>
          <ul className=" p-4 w-80 h-full text-lg">
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
                    to="my-class"
                  >
                    <div className="flex items-center gap-2">
                      <FcReading></FcReading> My Class
                    </div>
                  </NavLink>
                </li>
                <li className="uppercase my-6">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-500 border-b-2 border-orange-500"
                        : ""
                    }
                    to="add-class"
                  >
                    <div className="flex items-center gap-2">
                      <FaPlus></FaPlus> Add Class
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
