import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { googleLogin } = useAuth();
  const handleGoogle = () => {
    googleLogin();
    navigate(from);
  };
  return (
    <div
      onClick={handleGoogle}
      className="px-7 pb-8 mt-0 w-44 mx-auto flex items-center text-3xl cursor-pointer "
    >
      <img
        className="w-10 h-10 cursor-pointer"
        src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
        alt=""
      />
      <span className="text-red-800">oogle</span>
    </div>
  );
};

export default SocialLogin;
