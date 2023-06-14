import useEnrollClass from "../../../../Hooks/useEnrollClass";
import SingleEnroll from "./SingleEnroll";

const EnrolledClass = () => {
  const [enrollClass] = useEnrollClass();
  console.log(enrollClass);
  return (
    <>
      <h1 className="text-3xl text-blue-500 text-center my-10">
        Your Enroll Class
      </h1>
      <div className=" grid md:grid-cols-3 grid-cols-1">
        {enrollClass.map((enroll) => (
          <SingleEnroll key={enroll._id} approveClass={enroll}></SingleEnroll>
        ))}
      </div>
    </>
  );
};

export default EnrolledClass;
