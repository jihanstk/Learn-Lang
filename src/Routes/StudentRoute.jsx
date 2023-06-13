import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useUserRole";

const StudentRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, roleLoading] = useAdmin();
  const location = useLocation();

  if (loading || roleLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && role.role == "student") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default StudentRoute;
