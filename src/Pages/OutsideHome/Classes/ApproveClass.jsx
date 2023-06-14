import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const ApproveClass = ({ approveClass }) => {
  const { image, sit, className, price, userName, _id } = approveClass;
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleSelectClass = (id) => {
    const selectInfo = {
      id,
      image,
      userName,
      sit,
      className,
      price,
      email: user?.email,
    };
    console.log(id);
    user ||
      Swal.fire({
        title: " log in before selecting the course",
        text: "Must Be Log in before select!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    fetch("http://localhost:5010/selectClass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectInfo),
    })
      .then((res) => res.json())
      .then((inserted) => {
        console.log(inserted);
        if (inserted.insertedId) {
          Swal.fire("Selected!", "Your file has been Selected.", "success");
        }
      });
  };
  return (
    <div
      className={`card w-96 bg-base-100 shadow-xl border ${
        sit == 0 && "bg-red-600"
      }`}
    >
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{className}</h2>
        <div className="flex items-center gap-4">
          <p>
            Sit Num: <strong>{sit}</strong>
          </p>
          <p>
            Price: <strong>{price}</strong>
          </p>
        </div>
        <p>
          Instructor name : <strong>{userName}</strong>
        </p>
        <div className="card-actions">
          <button
            onClick={() => handleSelectClass(_id)}
            disabled={sit == 0 && true}
            className="btn btn-primary"
          >
            Select Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApproveClass;
