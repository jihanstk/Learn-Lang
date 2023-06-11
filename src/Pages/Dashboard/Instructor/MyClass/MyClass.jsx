import useAuth from "../../../../Hooks/useAuth";
// import { useEffect, useState } from "react";
import SingleClass from "./SingleClass";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Title from "../../../../Common/Title";

const MyClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  //   const [myClasses, setMyClasses] = useState([]);
  console.log(user);
  const { data: myClasses = [] } = useQuery({
    queryKey: ["my-classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/my-classes?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });
  return (
    <>
      <Title type="Instructor" name={user.displayName}></Title>
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
    </>
  );
};

export default MyClass;
