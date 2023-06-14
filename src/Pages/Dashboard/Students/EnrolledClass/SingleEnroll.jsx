const SingleEnroll = ({ approveClass }) => {
  const { image, sit, className, price, userName } = approveClass;

  return (
    <div
      className={`card w-96 bg-base-100 shadow-xl ${sit == 0 && "bg-red-600"}`}
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
        <button className="btn btn-primary">Courses</button>
      </div>
    </div>
  );
};

export default SingleEnroll;
