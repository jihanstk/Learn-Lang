import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

import SocialLogin from "../../../Common/SocialLogin";
import { Link, useNavigate } from "react-router-dom";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import { FaEye } from "react-icons/fa";

const img_hosting_token = import.meta.env.VITE_IMG_HOSTING_API;
const Register = () => {
  const [show, setShow] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [Error, setError] = useState(false);
  const { signUp, UpdateUserProfile, logOut } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    setError("");
    console.log(data);
    if (data.password !== data.ConPassword) {
      setError("passWord Dosen't match");
      return;
    }
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        console.log(imgRes);

        signUp(data.email, data.password).then((res) => {
          const user = res.user;

          //   TODO : Update User Profile Name and photo
          UpdateUserProfile(user, data.name, imgRes.data.display_url).then(
            () => {
              console.log("User Profile is updated");
              const userInfo = {
                email: user.email,
                name: user.displayName,
                photo: imgRes.data.display_url,
                role: "student",
              };

              axiosSecure.post("/user", userInfo).then((userUpdate) => {
                console.log("from register Add", userUpdate);
              });

              logOut();
              navigate("/login");
            }
          );
        });
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content mb-20 flex-col w-1/2">
        <div className="text-center ">
          <h1 className="text-5xl font-bold mt-20">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                className="input input-bordered"
              />
              {errors.email && (
                <p className=" text-red-700">Email is required.</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {errors.email && (
                <p className=" text-red-700">Email is required.</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                className="input input-bordered relative"
              />
              <FaEye
                onClick={() => setShowPass(!showPass)}
                className="absolute right-10 mt-12 text-2xl"
              ></FaEye>
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type={show ? "text" : "password"}
                {...register("ConPassword", {
                  required: true,
                })}
                placeholder="Confirm Password"
                className="input input-bordered relative"
              />
              <FaEye
                onClick={() => setShow(!show)}
                className="absolute right-10 mt-12 text-2xl"
              ></FaEye>
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                type="file"
                {...register("image", {
                  required: true,
                })}
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
            {Error && <p className="p-10 text-red-700">{Error}</p>}
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value="Register"
              />
            </div>
          </form>
          <p className="p-9">
            Already Have an account?{" "}
            <Link className="text-orange-600 font-bold " to="/login">
              Please log in
            </Link>{" "}
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
