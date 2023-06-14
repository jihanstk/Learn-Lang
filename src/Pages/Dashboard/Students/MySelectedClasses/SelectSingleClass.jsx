import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SelectSingleClass = ({ selectClass, refetch }) => {
  //   const location = useLocation();
  const { image, sit, className, price, _id } = selectClass;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5010/selectClass/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((Deleted) => {
            if (Deleted.deletedCount) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  //   const handlePayment = () => {
  //     // console.log(payClass);
  //   };
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

        <div className="card-actions">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-outline btn-primary"
          >
            Delete
          </button>
          <Link
            // onClick={() => handlePayment(selectClass)}
            to={`/dashboard/payment`}
            {...{ state: selectClass }}
          >
            <button className="btn btn-sm btn-outline btn-primary">Pay</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectSingleClass;
