import { useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const SocialLogin = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { googleLogin, setFrom } = useAuth();
  const handleGoogle = () => {
    googleLogin();
    setFrom(from);
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
