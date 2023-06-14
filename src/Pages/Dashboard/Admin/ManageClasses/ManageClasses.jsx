import Swal from "sweetalert2";
import useClass from "../../../../Hooks/useClass";

// import ManageSingleClasses from "./manageSingleClasses";

const ManageClasses = () => {
  const [allClasses, refetch] = useClass();

  console.log(allClasses);
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
          {allClasses.map((singleClass) => {
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
                  <label htmlFor="my_modal_7" className="btn">
                    open modal
                  </label>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my_modal_7"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box">
                      <h3 className="text-lg font-bold">
                        {singleClass.className}!
                      </h3>
                      <p className="py-4">
                        This modal works with a hidden checkbox!
                      </p>
                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_7">
                      Close
                    </label>
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
