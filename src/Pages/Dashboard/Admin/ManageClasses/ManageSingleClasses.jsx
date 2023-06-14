// import { useState } from "react";
import Swal from "sweetalert2";

const ManageSingleClasses = ({ SingleClass, refetch }) => {
  // const [disable, setDisable] = useState(false);
  const { image, className, price, sit, userName, email, status, _id } =
    SingleClass;
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
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {className}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="flex">
          <p>Price: ${price}</p>
          <p>Sit: {sit}</p>
        </div>
        <div className="">
          <p>Name: {userName}</p>
          <p>Email: {email}</p>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleClassStatus(_id, "approve")}
            disabled={
              SingleClass.status == "approve"
                ? true
                : status == "deny"
                ? true
                : false
            }
            className="btn-outline btn-info btn btn-xs"
          >
            Approve
          </button>
          <button
            onClick={() => handleClassStatus(_id, "deny")}
            disabled={
              status == "approve" ? true : status == "deny" ? true : false
            }
            className="btn-outline btn-info btn btn-xs"
          >
            Deny
          </button>
          {/* The button to open modal */}
          <label
            htmlFor="my_modal_7"
            className="btn btn-xs btn-outline btn-info"
          >
            Feedback
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="text-lg font-bold">{className}</h3>
              <p className="py-4">This modal works with a hidden checkbox!</p>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSingleClasses;
