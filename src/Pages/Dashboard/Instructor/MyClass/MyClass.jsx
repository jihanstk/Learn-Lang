import useAuth from "../../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import SingleClass from "./SingleClass";

const MyClass = () => {
  const { user } = useAuth();
  const [myClasses, setMyClasses] = useState([]);
  console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5010/my-classes?email=${user?.email}`)
      .then((res) => res.json())
      .then((myClasses) => {
        setMyClasses(myClasses);
      });
  }, [user]);

  return (
    <div
      className="grid md:grid-cols-2 grid-cols-1 gap-4 w-10/12 mx-auto
    "
    >
      {myClasses.map((singleClass) => {
        return (
          <SingleClass
            key={singleClass._id}
            singleClass={singleClass}
          ></SingleClass>
        );
      })}
    </div>
  );
};

export default MyClass;
