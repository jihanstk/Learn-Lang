import useAuth from "../../../../Hooks/useAuth";
// import { useEffect, useState } from "react";

import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  //   const [myClasses, setMyClasses] = useState([]);
  console.log(user);
  const { data: myClasses = [] } = useQuery({
    queryKey: ["my-classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/my-classes?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>status</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myClasses.map((singleClass) => {
              return (
                <tr key={singleClass._id}>
                  <td></td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={singleClass.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-lg font-bold">{singleClass.className}</td>
                  <td>{singleClass.email}</td>
                  <td>{singleClass.status}</td>
                  <th>{singleClass.feedback}</th>
                  <th>
                    {" "}
                    <div className="card-actions">
                      <button className="btn btn-outline btn-sm btn-primary">
                        Update
                      </button>
                    </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyClass;
