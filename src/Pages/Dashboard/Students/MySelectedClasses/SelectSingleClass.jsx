const SelectSingleClass = ({ selectClass }) => {
  const { image, sit, className, price } = selectClass;
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
          <button className="btn btn-sm btn-outline btn-primary">Delete</button>
          <button className="btn btn-sm btn-outline btn-primary">Pay</button>
        </div>
      </div>
    </div>
  );
};

export default SelectSingleClass;
