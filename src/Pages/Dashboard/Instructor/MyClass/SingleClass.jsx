import {
  MdDone,
  MdOutlineCancel,
  MdOutlinePendingActions,
} from "react-icons/md";
const SingleClass = ({ singleClass }) => {
  const { image, sit, className, price, status } = singleClass;
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
        <p className="flex items-center gap-1">
          {status}
          {status == "pending" ? (
            <MdOutlinePendingActions></MdOutlinePendingActions>
          ) : status == "done" ? (
            <MdDone></MdDone>
          ) : (
            <MdOutlineCancel></MdOutlineCancel>
          )}
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Update</button>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
