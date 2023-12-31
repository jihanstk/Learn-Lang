// import { useState } from "react";
import { FaUserEdit, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

import useUser from "../../../../Hooks/useUser";

const ManageUser = () => {
  const [allUser, refetch] = useUser();

  const handleMakeAdmin = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do You Want to make admin",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        const userEmail = {
          email: email,
        };
        fetch(`http://localhost:5010/user/mkadmin/${email}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userEmail),
        })
          .then((res) => res.json())
          .then((updated) => {
            if (updated.modifiedCount) {
              refetch();
              //   setDisable(true);
              console.log("user is Updated", updated);
              Swal.fire("Updated!", "Your User has been Updated.", "success");
            }
          });
      }
    });
  };
  const handleMakeInstructor = (email) => {
    console.log(email);
    Swal.fire({
      title: "Are you sure?",
      text: "Do You Want to make Instructor",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Instructor!",
    }).then((result) => {
      if (result.isConfirmed) {
        const userEmail = {
          email: email,
        };
        fetch(`http://localhost:5010/user/${email}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userEmail),
        })
          .then((res) => res.json())
          .then((updated) => {
            if (updated.modifiedCount) {
              refetch();

              console.log("user is Updated", updated);
              Swal.fire("Updated!", "Your User has been Updated.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((singleUser) => {
            return (
              <tr key={singleUser._id}>
                <td></td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={singleUser.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-lg font-bold">{singleUser.name}</td>
                <td>{singleUser.email}</td>
                <th>{singleUser.role}</th>
                <td>
                  <button
                    onClick={() => handleMakeAdmin(singleUser.email)}
                    disabled={singleUser?.role == "admin" ? true : false}
                    className="btn btn-ghost btn-xs text-orange-800"
                  >
                    <FaUserShield></FaUserShield> Make Admin
                  </button>
                  <button
                    onClick={() => handleMakeInstructor(singleUser.email)}
                    disabled={singleUser?.role == "instructor" ? true : false}
                    className="btn btn-xs text-green-700"
                  >
                    {" "}
                    <FaUserEdit></FaUserEdit> Make Instructor
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
