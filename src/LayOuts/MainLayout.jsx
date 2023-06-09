import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
