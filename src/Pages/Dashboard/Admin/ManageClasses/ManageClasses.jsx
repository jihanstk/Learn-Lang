import Swal from "sweetalert2";

import useAdminClass from "../../../../Hooks/useAdminClass";

// import ManageSingleClasses from "./manageSingleClasses";

const ManageClasses = () => {
  const [allAdminClass, refetch] = useAdminClass();

  const handleSubmit = (e, id) => {
    // console.log(e.target.feedback.value);
    e.preventDefault();
    const feedback = {
      reason: e.target.feedback.value,
      id: id,
    };

    fetch("http://localhost:5010/feedback-classes", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(feedback),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  console.log(allAdminClass);
  // const { image, className, price, sit, userName, email, status, _id } =
  // SingleClass;
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
          {allAdminClass.map((singleClass, i) => {
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
                <th>{singleClass.role}</th>
                <td>
                  <button
                    onClick={() =>
                      handleClassStatus(singleClass._id, "approve")
                    }
                    disabled={
                      singleClass.status == "approve"
                        ? true
                        : singleClass.status == "deny"
                        ? true
                        : false
                    }
                    className="btn-outline btn-info btn btn-xs"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleClassStatus(singleClass._id, "deny")}
                    disabled={
                      singleClass.status == "approve"
                        ? true
                        : singleClass.status == "deny"
                        ? true
                        : false
                    }
                    className="btn-outline btn-info btn btn-xs"
                  >
                    Deny
                  </button>
                  {/* The button to open modal */}
                  {/* The button to open modal */}
                  <label htmlFor={`my_modal_${i}`} className="btn">
                    open modal
                  </label>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id={`my_modal_${i}`}
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">
                        {singleClass.className}
                      </h3>
                      <p className="py-4">{singleClass._id}</p>
                      <form onSubmit={(e) => handleSubmit(e, singleClass._id)}>
                        <div className="form-control">
                          <label className="label"></label>
                          <textarea
                            className="textarea textarea-bordered h-24"
                            placeholder="FeedBack"
                            name="feedback"
                          ></textarea>
                        </div>
                        <input
                          className="btn btn-outline btn-primary mt-5"
                          type="submit"
                          value="Submit"
                        />
                      </form>
                      <div className="modal-action">
                        <label htmlFor={`my_modal_${i}`} className="btn">
                          Close!
                        </label>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
