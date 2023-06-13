import useSelectClass from "../../../../Hooks/useSelectClass";
import SelectSingleClass from "./SelectSingleClass";

const MySelectedClasses = () => {
  const [selectClass] = useSelectClass();
  console.log(selectClass);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center my-5">
          Your Selected Class
        </h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 pt-10 w-11/12 mx-auto">
        {selectClass.map((selectClass) => (
          <SelectSingleClass
            key={selectClass._id}
            selectClass={selectClass}
          ></SelectSingleClass>
        ))}
      </div>
    </>
  );
};

export default MySelectedClasses;
