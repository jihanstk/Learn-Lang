import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const { signUp } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
    // if (data.password !== data.ConPassword) {
    //   return;
    // }
    signUp(data.email, data.password).then((res) => {
      console.log(res.user);
      //   TODO : Update User Profile Name and photo
    });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-1/2">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
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
                  deps: true,
                })}
                placeholder="Confirm Password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Log in" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
