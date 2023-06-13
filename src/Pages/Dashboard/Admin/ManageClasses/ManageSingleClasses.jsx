// import { useState } from "react";
import Swal from "sweetalert2";

const ManageSingleClasses = ({ SingleClass, refetch }) => {
  // const [disable, setDisable] = useState(false);
  const handleClassStatus = (id, status) => {
    const classDetail = {
      id,
      status,
    };
    Swal.fire({
      title: `Are you sure To ${status} It?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${status} it!`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:5010/add-classes", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(classDetail),
        })
          .then((res) => res.json())
          .then((updated) => {
            console.log(updated);
            if (updated.modifiedCount) {
              refetch();
              // setDisable(true);
              Swal.fire(`${status}! "Your file has been ${status}"success`);
            }
          });
      }
    });
  };
  return (
    <div className="card w-96 bg-base-100 shadow-2xl">
      <figure>
        <img src={SingleClass.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {SingleClass.className}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="flex">
          <p>Price: ${SingleClass.price}</p>
          <p>Sit: {SingleClass.sit}</p>
        </div>
        <div className="">
          <p>Name: {SingleClass.userName}</p>
          <p>Email: {SingleClass.email}</p>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleClassStatus(SingleClass._id, "approve")}
            disabled={
              SingleClass.status == "approve"
                ? true
                : SingleClass.status == "deny"
                ? true
                : false
            }
            className="btn-outline btn-info btn btn-xs"
          >
            Approve
          </button>
          <button
            onClick={() => handleClassStatus(SingleClass._id, "deny")}
            disabled={
              SingleClass.status == "approve"
                ? true
                : SingleClass.status == "deny"
                ? true
                : false
            }
            className="btn-outline btn-info btn btn-xs"
          >
            Deny
          </button>
          <button className="btn-outline btn-info btn btn-xs">FeedBack</button>
        </div>
      </div>
    </div>
  );
};

export default ManageSingleClasses;
