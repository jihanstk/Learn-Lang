import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const [axiosSecure] = useAxiosSecure();
  const from = location.state?.from?.pathname || "/";
  const { googleLogin } = useAuth();
  const handleGoogle = () => {
    googleLogin().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      console.log(saveUser);
      fetch("http://localhost:5010/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
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
