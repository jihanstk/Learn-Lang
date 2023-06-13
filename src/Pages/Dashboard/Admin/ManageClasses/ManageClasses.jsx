import useClass from "../../../../Hooks/useClass";

import ManageSingleClasses from "./manageSingleClasses";

const ManageClasses = () => {
  const [allClasses, refetch] = useClass();
  console.log(allClasses);
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-10 ">
      {allClasses.map((SingleClass) => {
        return (
          <ManageSingleClasses
            key={SingleClass._id}
            SingleClass={SingleClass}
            refetch={refetch}
          ></ManageSingleClasses>
        );
      })}
    </div>
  );
};

export default ManageClasses;
