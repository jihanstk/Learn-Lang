import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
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
        <ul className=" p-4 w-80 h-full ">
          {/* Sidebar content here */}
          <li className="uppercase">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
              }
              to="/"
            >
              HOME
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
              }
              to="/dashboard/add-class"
            >
              Add Class
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
          <li className="uppercase">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
              }
              to="/"
            >
              {" "}
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
