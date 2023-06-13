import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const ApproveClass = ({ approveClass }) => {
  const { image, sit, className, price, userName, _id } = approveClass;
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleSelectClass = (id) => {
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
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
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
