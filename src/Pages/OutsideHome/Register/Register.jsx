import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
const img_hosting_token = import.meta.env.VITE_IMG_HOSTING_API;
const Register = () => {
  const { signUp, UpdateUserProfile, googleLogin } = useAuth();
  const [image, setImage] = useState("");
  // Google Log In
  const handleGoogle = () => {
    googleLogin();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImage(data.data.display_url);
      });
    // if (data.password !== data.ConPassword) {
    //   return;
    // }
    signUp(data.email, data.password).then((res) => {
      console.log(res.user);

      //   TODO : Update User Profile Name and photo
      UpdateUserProfile(res.user, data.name, image).then(() => {
        console.log("User Profile is updated");
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
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
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
                type="password"
                {...register("ConPassword", {
                  required: true,
                })}
                placeholder="Confirm Password"
                className="input input-bordered"
              />
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
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value="Register"
              />
            </div>
          </form>
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
        </div>
      </div>
    </div>
  );
};

export default Register;
