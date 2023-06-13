import RouteTitle from "../../../Common/RouteTitle";
import useClass from "../../../Hooks/useClass";

import ApproveClass from "./ApproveClass";

const Classes = () => {
  const [allClasses] = useClass();
  console.log(allClasses);

  return (
    <>
      <RouteTitle></RouteTitle>
      <div className="grid md:grid-cols-3 grid-cols-1 pt-10 w-11/12 mx-auto">
        {allClasses.map(
          (ClassSelect) =>
            ClassSelect.status === "approve" && (
              <ApproveClass
                key={ClassSelect._id}
                approveClass={ClassSelect}
              ></ApproveClass>
            )
        )}
      </div>
    </>
  );
};

export default Classes;
