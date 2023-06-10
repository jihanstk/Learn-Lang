import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
import {} from "react";

const img_hosting_token = import.meta.env.VITE_IMG_HOSTING_API;

const AddClass = () => {
  const { user } = useAuth();
  //   const [image, setImage] = useState("");
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onsubmit = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        // console.log(data);
        const imgURL = imageResponse.data.display_url;
        const { className, email, userName, sit, price } = data;
        const newClass = {
          className,
          email,
          userName,
          sit: parseInt(sit),
          price: parseFloat(price),
          image: imgURL,
        };
        fetch("http://localhost:5010/classes", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newClass),
        })
          .then((res) => res.json())
          .then((classes) => {
            console.log(classes);
          });
      });
    // if (data.password !== data.ConPassword) {
    //   return;
    // }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-3/4">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">New class!</h1>
        </div>
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onsubmit)} className="card-body">
            <div className="flex items-center gap-2">
              <div className="form-control w-full">
                <input
                  type="text"
                  placeholder="Class Name"
                  {...register("class", { required: true })}
                  className="input input-bordered"
                />
                {errors.className && (
                  <p className=" text-red-700">Class Name is required.</p>
                )}
              </div>
              <div className="form-control w-full my-4">
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="file-input file-input-bordered w-full "
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="form-control w-full">
                <input
                  type="email"
                  placeholder="email"
                  {...register("email")}
                  className="input input-bordered"
                  defaultValue={user?.email}
                  readOnly
                />
                {errors.email && (
                  <p className=" text-red-700">Email is required.</p>
                )}
              </div>
              <div className="form-control w-full">
                <input
                  type="text"
                  {...register("userName")}
                  placeholder="User Name"
                  className="input input-bordered"
                  defaultValue={user?.displayName}
                  readOnly
                />
                {errors.userName?.type === "required" && (
                  <p className="text-red-600">User Name is required</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="form-control w-full">
                <input
                  type="number"
                  placeholder="Available Sits"
                  {...register("sit", { required: true })}
                  className="input input-bordered"
                />
                {errors.sit && (
                  <p className=" text-red-700">Email is required.</p>
                )}
              </div>
              <div className="form-control w-full">
                <input
                  type="number"
                  {...register("price", {
                    required: true,
                  })}
                  placeholder="Price"
                  className="input input-bordered"
                />
                {errors.price?.type === "required" && (
                  <p className="text-red-600">Price is required</p>
                )}
              </div>
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value="Add Class"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
